import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/channel/booking';
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
import { AvForm, AvField } from 'availity-reactstrap-validation';
import BookingModel from '../../model/channel/booking';
const navHeader = ['Active Bookings'];
const tableHeader = [
  'Order #',
  'Customer Name',
  'Contact Number',
  'Fuel Type',
  'Quantity',
  'Status',
  'Action'
];

const getAction = status => {
  if (status === 'ODR_PL') return 'Accept';
  else if (status === 'ARR_PP') return 'Assign Driver';
  else if (status === 'DISPATCHED') return 'Track';
  else return 'Delivered';
};
class App extends Component {
  state = {
    showAddBooking: false
  };
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.addBooking = this.addBooking.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
  }
  addBooking() {
    console.log(this.form.name.value);
    console.log(this.form.number.value);
    console.log(this.form.fuel.value);
    this.toggleModal();
  }
  handleBooking(status) {
    console.log(status);
  }
  toggleModal() {
    this.setState(prevState => {
      return {
        showAddBooking: !prevState.showAddBooking
      };
    });
  }
  componentDidMount() {
    axios
      .get(URL + '/partner/order?channel_partner=phoenix')
      .then(response => {
        this.props.actions.setBookings(new BookingModel(response.data.orders));
      })
      .catch(e_response => {});
  }
  render() {
    const { showAddBooking } = this.state;
    const { toggleModal: cancel } = this;
    const { bookings } = this.props;
    return (
      <Container>
        <Header
          action="Add New Booking"
          actionCallBack={this.toggleModal.bind(this)}
        />
        <Meta
          dashBoard={[
            {
              value: '1000',
              label: 'Order Bookings',
              class: 'primary'
            },
            {
              value: '100',
              label: 'Cancelled Orders',
              class: 'warning'
            },
            {
              value: '1007575',
              label: 'Tatal Kms Run',
              class: 'primary'
            },
            {
              value: '10000',
              type: 'currency',
              label: 'Cash Collected',
              class: 'primary'
            },
            {
              value: '10000',
              label: 'Total Online Payments',
              class: 'primary'
            },
            {
              value: '02',
              label: 'Emergency Requests',
              class: 'danger'
            }
          ]}
        />
        {bookings && (
          <Table
            navHeader={navHeader}
            tableHeader={tableHeader}
            tableBody={bookings.map((booking, index) => {
              const { status } = booking;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.username}</td>
                  <td>{booking.mobile}</td>
                  <td>{booking.p_type}</td>
                  <td>{booking.quantity}</td>
                  <td>{booking.status}</td>
                  <td
                    onClick={() => {
                      this.handleBooking(booking.order_id);
                    }}
                  >
                    <Button color="link">{getAction(status)}</Button>
                  </td>
                </tr>
              );
            })}
          />
        )}
        <Modal isOpen={showAddBooking} toggle={cancel}>
          <ModalHeader>Add a new booking</ModalHeader>
          <AvForm
            onValidSubmit={this.addBooking}
            innerRef={c => {
              this.form = c;
            }}
          >
            <ModalBody>
              <AvField
                name="name"
                label="Customer Name"
                type="text"
                errorMessage="Invalid name"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter a name'
                  },
                  minLength: {
                    value: 3,
                    errorMessage: 'The name should be at least 3 characters'
                  }
                }}
              />
              <AvField
                name="number"
                label="Contact Number"
                type="tel"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter a phone number'
                  },
                  pattern: {
                    value: '[0-9]{10}',
                    errorMessage: 'Phone number should have 10 digits'
                  }
                }}
              />
              <AvField
                type="select"
                name="fuel"
                label="Fuel Type"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please select a fuel type'
                  }
                }}
              >
                <option>Petrol</option>
                <option>Diesel</option>
              </AvField>
              <AvField
                name="quantity"
                label="Quantity"
                type="number"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Please enter fuel quantity'
                  }
                }}
                min="1"
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
    ...state.channel.bookings,
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
