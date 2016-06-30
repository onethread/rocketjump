import React, { PropTypes } from "react";
import { Col } from "react-bootstrap";
import Date from "./formatting/Date.jsx";

const CalendarCell = ({ value, dateFormat }) => (
  <Col md={2}>
    <Date
      value={value}
      format={dateFormat}
    />
  </Col>
);

const {
  string,
  func,
} = PropTypes;

CalendarCell.propTypes = {
  value: string,
  dateFormat: string,
  onClick: func,
};

CalendarCell.defaultProps = {
  dateFormat: "D",
};

export default CalendarCell;
