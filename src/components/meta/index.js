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
import Item from './item';
import DatePicker from '../datePicker';

let dateValue = '';
export default class Meta extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  setDate(value) {
    dateValue = value;
  }
  render() {
    const metaData = this.props.dashBoard;
    return (
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
                {/* <Select styles={customStyles} placeholder={'Today'} /> */}
                <DatePicker onChange={this.setDate} />
              </Col>
            </Row>
            <Row>
              <Col>
                {metaData.map((item, index) => {
                  return (
                    <Item
                      key={index}
                      value={item.value}
                      type={item.type}
                      label={item.label}
                      class={item.class}
                    />
                  );
                })}
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
    );
  }
}
