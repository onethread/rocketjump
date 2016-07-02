import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import Cell from "./Cell";
import Hour from "./Hour";

describe("<Hour />", () => {
  it("renders 2 Cells", () => {
    const wrapper = shallow(<Hour />);
    expect(wrapper.find(Cell)).to.have.length(2);
  });
});
