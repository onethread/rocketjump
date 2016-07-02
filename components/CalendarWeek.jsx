import React, { Component, PropTypes } from "react";
import moment from "moment";
import { Row } from "react-bootstrap";
import CalendarCell from "./CalendarCell.jsx";

const propTypes = {
  weekNumber: PropTypes.number.isRequired,
};

class CalendarWeek extends Component {
  renderDaysOfWeek(weekNumber) {
    const week = moment().week(weekNumber);
    const cells = [];
    for (let index = 0; index < 7; index++) {
      cells.push(<CalendarCell value={week.day(index).toISOString()} />);
    }

    return cells;
  }

  render() {
    return (
      <Row>
        {this.renderDaysOfWeek(this.props.weekNumber)}
      </Row>
    );
  }
}

CalendarWeek.propTypes = propTypes;

export default CalendarWeek;
