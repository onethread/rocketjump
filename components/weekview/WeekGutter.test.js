import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import WeekGutter from "./WeekGutter";
import Hour from "./Hour";

describe("<WeekGutter />", () => {
  it("renders 24 Hours", () => {
    const wrapper = shallow(<WeekGutter />);
    expect(wrapper.find(Hour)).to.have.length(24);
  });
});
