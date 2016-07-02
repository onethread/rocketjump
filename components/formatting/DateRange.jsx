import React, { PropTypes } from "react";
import Date from "./Date";

const propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  format: PropTypes.string,
  separator: PropTypes.node,
};
const defaultProps = {
  format: "L",
  separator: " - ",
};

const DateRange = ({ startDate, endDate, format, separator }) => (
  <div>
    <Date
      value={startDate}
      format={format}
    />
      {separator}
    <Date
      value={endDate}
      format={format}
    />
  </div>
);

DateRange.propTypes = propTypes;
DateRange.defaultProps = defaultProps;

export default DateRange;
