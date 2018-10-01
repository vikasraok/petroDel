import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/booking';
import { Container, Row, Col } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col />
        </Row>
      </Container>
    );
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
