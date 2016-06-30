import React from "react";
import { shallow } from "enzyme";
import { describe, it } from "mocha";
import { expect } from "chai";
import App from "./App.jsx";

describe("<App />", () => {
  it("renders a div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div")).to.have.length(1);
  });
});
