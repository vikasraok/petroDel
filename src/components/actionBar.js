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
        />
        <div className="separator" />
        <Select styles={customStyles} placeholder={'Actions'} />
        <div className="separator" />
        <Button color="primary">Add New Driver</Button>
      </Col>
    </Row>
  );
};
