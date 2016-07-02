import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import Date from "./Date.jsx";

describe("<Date />", () => {
  it("renders a span", () => {
    const wrapper = shallow(<Date />);
    expect(wrapper.find("span")).to.have.length(1);
  });

  it("renders 03/03/1993", () => {
    const wrapper = shallow(<Date value={"1993-03-03"} />);
    expect(wrapper.text()).to.contain("03/03/1993");
  });

  it("renders 1993", () => {
    const wrapper = shallow(
      <Date
        value={"1993-03-03"}
        format={"Y"}
      />
    );
    expect(wrapper.text()).to.contain("1993");
  });

  it("renders iso date 2016-07-01T10:30:00.000Z as 06:30 EST", () => {
    const wrapper = shallow(
      <Date
        value={"2016-07-01T10:30:00.000Z"}
        format={"HH:mm"}
      />
    );
    expect(wrapper.text()).to.eql("06:30");
  });
});
