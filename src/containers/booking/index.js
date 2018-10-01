import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/booking';
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Select from 'react-select';
import Meta from '../../components/metaItem';
import Header from '../../components/actionBar';
import customStyles from '../../components/selectStyle';
class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    return (
      <Container>
        <Header />
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={this.state.activeTab === '1' ? 'active' : ''}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === '2' ? 'active' : ''}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Map
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === '3' ? 'active' : ''}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                Statistics
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col>
                  <Select styles={customStyles} placeholder={'Today'} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Meta value="1000" label="Order Bookings" />
                  <Meta value="100" label="Cancelled Orders" />
                  <Meta value="1007575" label="Total Kms Running" />
                  <Meta value="&#8377;10000" label="Cash Collected" />
                  <Meta value="10000" label="Total Online Payments" />
                  <Meta value="02" label="Emergency Requests" class="danger" />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  <h4>Tab 2 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col>
                  <h4>Tab 3 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
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
