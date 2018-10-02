import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/channel/booking';
import { Container } from 'reactstrap';
import Header from '../../components/actionBar';
import Meta from '../../components/meta';
import Table from '../../components/table';
const navHeader = ['Active Drivers', 'Idle Drivers', 'Offline Drivers'];
const tableHeader = [
  'Driver Name',
  'Contact Number',
  'Vehicle #',
  'Status',
  'Action'
];
class App extends Component {
  render() {
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
        <Table navHeader={navHeader} tableHeader={tableHeader} />
      </Container>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
