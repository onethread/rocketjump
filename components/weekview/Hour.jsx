import React, { PropTypes } from "react";
import moment from "moment";
import Cell from "./Cell";

const propTypes = {
  value: PropTypes.string,
};

const hourStyle = {
  borderTop: "1px solid black",
};

const cellStyle = {
  borderBottom: "1px solid hsl(228, 3%, 67%)",
};

const Hour = ({ value }) => (
  <div style={hourStyle}>
    <Cell
      style={cellStyle}
      value={moment(value).minute(0).toISOString()}
    />
    <Cell value={moment(value).minute(30).toISOString()} />
  </div>
);

Hour.propTypes = propTypes;

export default Hour;
