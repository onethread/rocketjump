import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import WeekDay from "./WeekDay";
import Hour from "./Hour";
import Event from "../Event";

const events = [{
  name: "engineering interview test prep",
  startDate: "2016-06-30T15:00:00.000Z",
  endDate: "2016-06-30T15:30:00.000Z",
}, {
  name: "smoothie run",
  startDate: "2016-07-01T11:30:00.000Z",
  endDate: "2016-07-01T14:00:00.000Z",
}, {
  name: "OOO for dentist",
  startDate: "2016-07-01T10:00:00.000Z",
  endDate: "2016-07-01T12:00:00.000Z",
}, {
  name: "Oaa for dentist",
  startDate: "2016-07-01T10:30:00.000Z",
  endDate: "2016-07-01T12:00:00.000Z",
}];

describe("<WeekDay />", () => {
  it("renders 24 Hours", () => {
    const wrapper = shallow(<WeekDay />);
    expect(wrapper.find(Hour)).to.have.length(24);
  });

  it("renders 4 events", () => {
    const wrapper = shallow(<WeekDay events={events} />);
    expect(wrapper.find(Event)).to.have.length(4);
  });
});
