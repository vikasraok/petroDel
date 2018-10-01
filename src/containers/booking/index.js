import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/booking';
import { Container } from 'reactstrap';
import Header from '../../components/actionBar';
import Meta from '../../components/meta/';
class App extends Component {
  render() {
    return (
      <Container>
        <Header action="Add New Booking" />
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
      </Container>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});
const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Actions, dispatch) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
