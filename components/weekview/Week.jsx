import React, { PropTypes } from "react";
import moment from "moment";
import WeekDay from "./WeekDay";
import WeekGutter from "./WeekGutter";
import eventShape from "../../shapes/event";

const propTypes = {
  weekNumber: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape(eventShape)),
};

const defaultProps = {
  events: [],
};

const Week = ({ weekNumber, events }) => {
  const weekMoment = moment().week(weekNumber);
  const days = [];

  for (let weekday = 0; weekday < 7; weekday++) {
    const dayEvents = events.filter(event => moment(event.startDate).day() === weekday);

    days.push(
      <WeekDay
        key={weekday}
        date={weekMoment.day(weekday).toISOString()}
        events={dayEvents}
      />
    );
  }

  return (
    <div className="week clearfix">
      <WeekGutter />
      <section className="week-wrapper">
        {days}
      </section>
    </div>
  );
};

Week.propTypes = propTypes;
Week.defaultProps = defaultProps;

export default Week;
