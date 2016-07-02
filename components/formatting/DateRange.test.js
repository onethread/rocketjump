import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import DateRange from "./DateRange.jsx";
import Date from "./Date.jsx";

describe("<DateRange />", () => {
  it("renders a div", () => {
    const wrapper = shallow(<DateRange />);
    expect(wrapper.find("div")).to.have.length(1);
  });

  it("renders 2 Dates", () => {
    const wrapper = shallow(
      <DateRange
        startDate={"1993-03-03"}
        endDate={"1993-03-04"}
      />
    );
    expect(wrapper.find(Date)).to.have.length(2);
  });

  it("renders with a '&' separator", () => {
    const wrapper = shallow(
      <DateRange
        startDate={"1993-03-03"}
        endDate={"1993-03-04"}
        separator={"&"}
      />
    );
    expect(wrapper.text()).to.contain("&");
  });
});
