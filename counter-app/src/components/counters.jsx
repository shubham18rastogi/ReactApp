import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters Contructor");
  }

  componentDidMount() {
    console.log("Counters Mounted");
  }
  render() {
    console.log("Counters Rendered");
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
