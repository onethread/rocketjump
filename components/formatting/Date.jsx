import React, { PropTypes } from "react";
import moment from "moment";

const Date = ({ value, format }) => (
  <span>{moment(value).format(format)}</span>
);

Date.propTypes = {
  value: PropTypes.any,
  format: PropTypes.string,
};

Date.defaultProps = {
  format: "L",
};

export default Date;
