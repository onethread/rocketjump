import moment from "moment";

export const eventSeed = [{
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
  startDate: "2016-06-21T10:30:00.000Z",
  endDate: "2016-06-21T12:00:00.000Z",
}];

export const sortEvents = (a, b) => {
  if (a.startDate < b.startDate) {
    return -1;
  } else if (a.startDate > b.startDate) {
    return 1;
  }
  return 0;
};

export const mapEventsToCurrentWeek = events => {
  const now = moment();
  return events.map(event => Object.assign(event, {
    startDate: moment(event.startDate).week(now.week()).toISOString(),
    endDate: moment(event.endDate).week(now.week()).toISOString(),
  }));
};

export const getEvents = () => mapEventsToCurrentWeek(eventSeed);
