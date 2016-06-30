import React, { Component, PropTypes } from "react";
import moment from "moment";
import { Grid } from "react-bootstrap";
import CalendarWeek from "./CalendarWeek";

class Calendar extends Component {
  renderDaysForMonth() {
    const weeks = [];
    for (let index = 1; index < 6; index++) {
      weeks.push(<CalendarWeek weekNumber={index} />);
    }

    return weeks;
  }

  render() {
    return (
      <Grid>
        <h1 className="text-center">{moment().month(this.props.currentMonth).format("MMMM YYYY")}</h1>
        {this.renderDaysForMonth()}
      </Grid>
    );
  }
}

Calendar.propTypes = {
  currentMonth: PropTypes.number.isRequired,
};

export default Calendar;
