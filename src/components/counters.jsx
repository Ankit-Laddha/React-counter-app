import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => {
          return (
            <React.Fragment>
              <Counter
                onIncrement={onIncrement}
                onDelete={onDelete}
                key={counter.id}
                counter={counter}
              ></Counter>
              <br></br>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Counters;
