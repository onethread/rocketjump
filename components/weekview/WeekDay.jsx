import React, { PropTypes } from "react";
import moment from "moment";
import classnames from "classnames";
import Hour from "./Hour";
import Event from "../Event";
import eventShape from "../../shapes/event";

const propTypes = {
  date: PropTypes.string,
  format: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape(eventShape)),
};

const defaultProps = {
  format: "ddd MM/DD",
  events: [],
};

const createEvents = events => {
  let count = 1;
  let total = 1;

  const createEvent = (eventsList, index) => {
    const event = eventsList[index];
    let followingEvent = [];

    if (eventsList.length > index + 1) {
      const nextEvent = eventsList[index + 1];

      if (moment(nextEvent.startDate).isBetween(event.startDate, event.endDate, null, "[]")) {
        count++;
        total++;
        followingEvent = followingEvent.concat(createEvent(eventsList, index + 1));
      }
    }

    total--;

    const returnList = [
      <Event
        {...event}
        key={index}
        width={`${100 / count}%`}
        left={`${total * (100 / count)}%`}
        zIndex={count}
      />,
    ];

    return returnList.concat(followingEvent);
  };

  let index = 0;
  let components = [];

  while (index < events.length) {
    components = components.concat(createEvent(events, index));
    index += count;
    count = 1;
  }

  return components;
};

const WeekDay = ({ date, format, events = [] }) => {
  const dayMoment = moment(date);
  const hours = [];

  for (let hourIndex = 0; hourIndex < 24; hourIndex++) {
    hours.push(
      <Hour
        key={hourIndex}
        value={dayMoment.hour(hourIndex).toISOString()}
      />
    );
  }

  const className = classnames("day",
    "column", {
      today: dayMoment.dayOfYear() === moment().dayOfYear(),
    });
  const eventList = createEvents(events);

  return (
    <div className={className}>
      <h1
        style={{
          fontSize: 14,
          textAlign: "center",
        }}
      >
        {moment(date).format(format)}
      </h1>
      <div style={{ position: "relative" }}>
        {hours}
        {eventList}
      </div>
    </div>
  );
};

WeekDay.propTypes = propTypes;
WeekDay.defaultProps = defaultProps;

export default WeekDay;
