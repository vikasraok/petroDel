import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Select from 'react-select';
import customStyles from './selectStyle';
import states from '../const/states';
export default props => {
  return (
    <Row>
      <Col className="text-right">
        <label>Region:</label>
        <div className="separator" />
        <Select
          styles={customStyles}
          options={states}
          placeholder={'Select Region'}
          value={props.region}
          onChange={props.regionSelected}
        />
        <div className="separator" />
        <Select
          styles={customStyles}
          placeholder={'Actions'}
          options={props.actionOptions}
          onChange={props.actionSelected}
        />
        <div className="separator" />
        <Button
          color="primary"
          onClick={props.actionCallBack}
          style={{ minWidth: '155px' }}
        >
          {props.action}
        </Button>
      </Col>
    </Row>
  );
};
