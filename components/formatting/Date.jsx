import React, { PropTypes } from "react";
import moment from "moment";

const propTypes = {
  value: PropTypes.any,
  format: PropTypes.string,
};

const defaultProps = {
  format: "L",
};

const Date = ({ value, format }) => (
  <span className="date">{moment(value).format(format)}</span>
);

Date.propTypes = propTypes;
Date.defaultProps = defaultProps;

export default Date;
