import React, { Component } from 'react';
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table
} from 'reactstrap';
// import Item from './items';
export default class TableWrapper extends Component {
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
                    this.state.activeTab.toString() === `${index + 1}`
                      ? 'active'
                      : ''
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
                  this.state.activeTab.toString() === `${index + 1}`
                    ? 'active'
                    : ''
                }
              >
                <Row>
                  <Col md="4">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        &#128269;
                      </InputGroupAddon>
                      <Input
                        placeholder="Search using Name/Mobile #"
                        autoComplete="none"
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="transparent">
                        More
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>None</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col className="float-right text-right">
                    <Pagination aria-label="Page navigation">
                      <PaginationItem>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Table>
                      <thead>
                        <tr>
                          {props.tableHeader.map((value, index) => {
                            return <th key={index}>{value}</th>;
                          })}
                        </tr>
                      </thead>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    );
  }
}
