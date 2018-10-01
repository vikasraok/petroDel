import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/customer';
class App extends Component {
  render() {
    return <div />;
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});
const mapDispatchToProps = dispatch => {
  actions: bindActionCreators(Actions, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
