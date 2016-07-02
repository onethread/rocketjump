import React, { PropTypes } from "react";
import Date from "../formatting/Date";

const propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {
  onClick: () => {},
};

const Cell = ({ onClick, value, style }) => (
  <div
    className="cell"
    onClick={() => onClick(value)}
    style={Object.assign({}, style, { height: 30 })}
  >
    <Date
      value={value}
      format={"HH:mm"}
    />
  </div>
);

Cell.propTypes = propTypes;
Cell.propTypes = defaultProps;

export default Cell;
