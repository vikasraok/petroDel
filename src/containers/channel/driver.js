import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/channel/driver';
import { Container, Button } from 'reactstrap';
import Header from '../../components/actionBar';
import Meta from '../../components/meta';
import Table from '../../components/table';
import axios from 'axios';
import { URL } from '../../const';
import DriverModel from '../../model/channel/driver';
const navHeader = ['Active Drivers', 'Idle Drivers', 'Offline Drivers'];
const tableHeader = [
  'Driver Name',
  'Contact Number',
  'Vehicle #',
  'Status',
  'Action'
];
class App extends Component {
  state = {
    showAddDrivers: false
  };
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.addDriver = this.addDriver.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  addDriver() {
    this.toggleModal();
  }
  handleDelete(name) {
    this.setState({ update: Math.random() });
  }
  toggleModal() {
    this.setState(prevState => {
      return {
        showAddDrivers: !prevState.showAddDrivers
      };
    });
  }
  fetchData() {
    axios
      .get(URL + '/driver')
      .then(response => {
        this.props.actions.setDrivers(new DriverModel(response.data.data));
      })
      .catch(e_response => {});
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { drivers } = this.props;
    return (
      <Container>
        <Header action="Add New Driver" />
        <Meta
          dashBoard={[
            {
              value: '100',
              label: 'Drivers Online',
              class: 'success'
            },
            {
              value: '50',
              label: 'Idle Drivers',
              class: 'warning'
            },
            {
              value: '120',
              label: 'Offline Drivers',
              class: 'muted'
            },
            {
              value: '10000',
              type: 'currency',
              label: 'Driver Income',
              class: 'primary'
            },
            {
              value: '50',
              label: 'Unassigned Order',
              class: 'danger'
            }
          ]}
        />
        {drivers && (
          <Table
            navHeader={navHeader}
            tableHeader={tableHeader}
            tableBody={drivers.map((driver, index) => {
              return (
                <tr key={index}>
                  <td>{driver.name}</td>
                  <td>{driver.mobile}</td>
                  <td>{driver.reg_no}</td>
                  <td>{driver.status}</td>
                  <td
                    onClick={() => {
                      this.handleDelete(driver.name);
                    }}
                  >
                    <Button color="link">Remove</Button>
                  </td>
                </tr>
              );
            })}
          />
        )}
      </Container>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...state.channel.drivers,
    ...ownProps
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
