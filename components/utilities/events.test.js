import { describe, it } from "mocha";
import { expect } from "chai";
import * as eventUtilities from "./events";

const events = [{
  name: "engineering interview test prep",
  startDate: "2016-06-30T15:00:00.000Z",
  endDate: "2016-06-30T15:30:00.000Z",
}, {
  name: "smoothie run",
  startDate: "2016-07-01T11:30:00.000Z",
  endDate: "2016-07-01T14:00:00.000Z",
}, {
  name: "OOO for dentist",
  startDate: "2016-07-01T10:00:00.000Z",
  endDate: "2016-07-01T12:00:00.000Z",
}];

describe("events utilities", () => {
  it("sorts events", () => {
    const sortedEvents = events.sort(eventUtilities.sortEvents);
    console.log(sortedEvents);
    expect(sortedEvents).to.eql([{
      name: "engineering interview test prep",
      startDate: "2016-06-30T15:00:00.000Z",
      endDate: "2016-06-30T15:30:00.000Z",
    }, {
      name: "OOO for dentist",
      startDate: "2016-07-01T10:00:00.000Z",
      endDate: "2016-07-01T12:00:00.000Z",
    }, {
      name: "smoothie run",
      startDate: "2016-07-01T11:30:00.000Z",
      endDate: "2016-07-01T14:00:00.000Z",
    }]);
  });

  it("maps events to this week", () => {
    const mappedEvents = eventUtilities.mapEventsToCurrentWeek(eventUtilities.eventSeed);

    expect(mappedEvents).to.eql([{
      name: "engineering interview test prep",
      startDate: "2016-06-30T15:00:00.000Z",
      endDate: "2016-06-30T15:30:00.000Z",
    }, {
      name: "smoothie run",
      startDate: "2016-07-01T11:30:00.000Z",
      endDate: "2016-07-01T14:00:00.000Z",
    }, {
      name: "OOO for dentist",
      startDate: "2016-07-01T10:00:00.000Z",
      endDate: "2016-07-01T12:00:00.000Z",
    }, {
      name: "Oaa for dentist",
      startDate: "2016-06-28T10:30:00.000Z",
      endDate: "2016-06-28T12:00:00.000Z",
    }]);
  });
});
