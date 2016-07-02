import React, { PropTypes } from "react";
import moment from "moment";
import DateRange from "./formatting/DateRange";
import Date from "./formatting/Date";

const propTypes = {
  name: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  format: PropTypes.string,
  width: PropTypes.any,
  left: PropTypes.any,
};

const defaultProps = {
  format: "HH:mm",
};

const calculatePosition = (start, end) => {
  const startMoment = moment(start);
  const endMoment = moment(end);
  const top = 1 + startMoment.hour() * 61 + startMoment.minute() * 1;
  const height = (endMoment.hour() * 61 + endMoment.minute() * 1) - top;

  return {
    top,
    height,
  };
};

const Event = ({ name, startDate, endDate, format, width, left }) => {
  const style = calculatePosition(startDate, endDate);

  style.position = "absolute";
  style.width = width;
  style.left = left;

  return (
    <div
      style={style}
      className="event"
    >
      {
        style.height > 30 &&
          <DateRange
            startDate={startDate}
            endDate={endDate}
            format={format}
          />
      }
      {
        style.height <= 30 &&
          <Date
            value={startDate}
            format={format}
          />
      }
      <h1 className="title">{name}</h1>
    </div>
  );
};

Event.propTypes = propTypes;
Event.defaultProps = defaultProps;

export default Event;
