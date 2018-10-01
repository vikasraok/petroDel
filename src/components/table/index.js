import React, { Component } from 'react';
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Item from './items';
export default class Table extends Component {
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
    const props = this.props;
    return (
      <div>
        <Nav tabs>
          {props.navHeader.map((nav, index) => {
            return (
              <NavItem key={index}>
                <NavLink
                  className={
                    this.state.activeTab == `${index + 1}` ? 'active' : ''
                  }
                  onClick={() => {
                    this.toggle(index + 1);
                  }}
                >
                  {nav}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent>
          {props.navHeader.map((tab, index) => {
            return (
              <TabPane
                tabId={`index+1`}
                key={index}
                className={
                  this.state.activeTab == `${index + 1}` ? 'active' : ''
                }
              >
                <Row>
                  <Col>{index}</Col>
                </Row>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    );
  }
}
