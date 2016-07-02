import React, { Component } from "react";
import moment from "moment";
import Week from "./weekview/Week";
import DateRange from "./formatting/DateRange";
import "../styles/site.scss";
import { sortEvents, getEvents } from "./utilities/events";

const propTypes = {

};

const fetchEvents = () => {
  const aPromise = new Promise(resolve => {
    setTimeout(() => resolve(getEvents()), 1000);
  });

  return aPromise;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    fetchEvents().then(e => this.setState({
      events: e.sort(sortEvents),
    }));
  }

  render() {
    const aMoment = moment();
    const weekNumber = aMoment.week();

    return (
      <section>
        <h1 className="text-center">
          <DateRange
            startDate={aMoment.day(0).toISOString()}
            endDate={aMoment.day(6).toISOString()}
            format={"MMM DD"}
          />
        </h1>
        <Week
          weekNumber={weekNumber}
          events={this.state.events}
        />
      </section>
    );
  }
}

App.propTypes = propTypes;

export default App;
