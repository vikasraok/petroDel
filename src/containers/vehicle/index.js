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
