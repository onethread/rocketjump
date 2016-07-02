import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import Cell from "./Cell";
import Date from "../formatting/Date";

describe("<Cell />", () => {
  it("renders a Date", () => {
    const wrapper = shallow(<Cell />);
    expect(wrapper.find(Date)).to.have.length(1);
  });
});
