import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/channel/vehicle';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import Header from '../../components/actionBar';
import Meta from '../../components/meta';
import Table from '../../components/table';
import axios from 'axios';
import { URL } from '../../const';
import VehicleModel from '../../model/channel/vehicle';
import { AvForm, AvField } from 'availity-reactstrap-validation';
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
    const { showAddVehicles } = this.state;
    const { toggleModal: cancel } = this;
    return (
      <Container>
        <Header
          action="Add New Vehicle"
          actionCallBack={this.toggleModal.bind(this)}
        />
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
        <Modal isOpen={showAddVehicles} toggle={cancel}>
          <ModalHeader>Add a new vehicle</ModalHeader>
          <AvForm
            onValidSubmit={this.addVehicle}
            innerRef={c => (this.form = c)}
          >
            <ModalBody>
              <AvField
                name="reg_no"
                label="Registration Number"
                type="text"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter a registration number'
                  }
                }}
              />
              <AvField
                name="name"
                label="Make"
                type="text"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter vehicle make'
                  },
                  minLength: {
                    value: 3,
                    errorMessage: 'The make should be at least 3 characters'
                  }
                }}
              />{' '}
              <AvField
                name="capacity"
                label="Capacity"
                type="number"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter vehicle capacity'
                  }
                }}
                min="1"
              />
              <AvField
                name="partner"
                label="Channel Partner"
                type="text"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter channel partner name'
                  }
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="light" onClick={cancel}>
                Cancel
              </Button>{' '}
              <Button color="primary" type="submit">
                Add
              </Button>
            </ModalFooter>
          </AvForm>
        </Modal>
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
