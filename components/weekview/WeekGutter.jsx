import React from "react";
import moment from "moment";
import Hour from "./Hour";

const WeekGutter = () => {
  const hours = [];

  for (let hourIndex = 0; hourIndex < 24; hourIndex++) {
    const dayMoment = moment();

    hours.push(
      <Hour
        key={hourIndex}
        value={dayMoment.hour(hourIndex).toISOString()}
      />
    );
  }

  return (
    <div className={"week-gutter"}>
      <div style={{ position: "relative" }}>
        {hours}
      </div>
    </div>
  );
};

export default WeekGutter;
