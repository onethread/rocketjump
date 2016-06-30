import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import { Col } from "react-bootstrap";
import CalendarCell from "./CalendarCell.jsx";
import Date from "./formatting/Date.jsx";

describe("<CalendarCell />", () => {
  it("renders a Col", () => {
    const wrapper = shallow(<CalendarCell />);
    expect(wrapper.find(Col)).to.have.length(1);
  });

  it("renders a date", () => {
    const wrapper = shallow(<CalendarCell />);
    expect(wrapper.find(Date)).to.have.length(1);
  });
});
