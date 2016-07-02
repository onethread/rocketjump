import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import Week from "./Week";
import WeekDay from "./WeekDay";

describe("<Week />", () => {
  it("renders 7 WeekDays", () => {
    const wrapper = shallow(<Week weekNumber={10} />);
    expect(wrapper.find(WeekDay)).to.have.length(7);
  });
});
