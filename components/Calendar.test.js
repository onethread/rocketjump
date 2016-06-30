import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import { Grid } from "react-bootstrap";
import Calendar from "./Calendar";
import CalendarWeek from "./CalendarWeek";

describe("<Calendar />", () => {
  it("renders a Grid", () => {
    const wrapper = shallow(<Calendar currentMonth={0} />);
    expect(wrapper.find(Grid)).to.have.length(1);
  });

  it("renders 5 CalendarWeeks", () => {
    const wrapper = shallow(<Calendar currentMonth={5} />);
    expect(wrapper.find(CalendarWeek)).to.have.length(5);
  });
});
