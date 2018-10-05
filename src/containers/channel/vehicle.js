import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/channel/vehicle';
import { Container, Button } from 'reactstrap';
import Header from '../../components/actionBar';
import Meta from '../../components/meta';
import Table from '../../components/table';
import axios from 'axios';
import { URL } from '../../const';
import VehicleModel from '../../model/channel/vehicle';
const navHeader = ['Listed Vehicles', 'Vehicles Removed'];
const tableHeader = [
  'Vehicle #',
  'Vehicle Contact',
  'Vehicle Name',
  'Status',
  'Action'
];
class App extends Component {
  state = {
    showAddVehicles: false
  };
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.addVehicle = this.addVehicle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  addVehicle() {
    this.toggleModal();
  }
  handleChange(name) {
    this.setState({ update: Math.random() });
  }
  toggleModal() {
    this.setState(prevState => {
      return {
        showAddVehicles: !prevState.showAddVehicles
      };
    });
  }
  fetchData() {
    axios
      .get(URL + '/vehical?channel_partner=phoenix')
      .then(response => {
        this.props.actions.setVehicles(new VehicleModel(response.data.data));
      })
      .catch(e_response => {});
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { vehicles } = this.props;
    return (
      <Container>
        <Header action="Add New Vehicle" />
        <Meta
          dashBoard={[
            {
              value: '100',
              label: 'Order Bookings',
              class: 'primary'
            },
            {
              value: '50',
              label: 'Cancelled Orders',
              class: 'danger'
            },
            {
              value: '20',
              label: 'Tatal Kms Run',
              class: 'primary'
            },
            {
              value: '10',
              type: 'currency',
              label: 'Cash Collected',
              class: 'primary'
            }
          ]}
        />
        {vehicles && (
          <Table
            navHeader={navHeader}
            tableHeader={tableHeader}
            tableBody={vehicles.map((vehicle, index) => {
              return (
                <tr key={index}>
                  <td>{vehicle.reg_no}</td>
                  <td>{vehicle.mobile}</td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.status}</td>
                  <td
                    onClick={() => {
                      this.handleDelete(vehicle.status);
                    }}
                  >
                    <Button color="link">
                      {vehicle.status === 'active' ? 'Disable' : 'Enable'}
                    </Button>
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
    ...state.channel.vehicles,
    ...ownProps
  };
};
const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Actions, dispatch) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
