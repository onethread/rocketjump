import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import { Row } from "react-bootstrap";
import CalendarWeek from "./CalendarWeek";
import CalendarCell from "./CalendarCell";

describe("<CalendarWeek />", () => {
  it("renders a Row", () => {
    const wrapper = shallow(<CalendarWeek weekNumber={25} />);
    expect(wrapper.find(Row)).to.have.length(1);
  });

  it("renders 7 cells", () => {
    const wrapper = shallow(<CalendarWeek weekNumber={25} />);
    expect(wrapper.find(CalendarCell)).to.have.length(7);
  });
});
