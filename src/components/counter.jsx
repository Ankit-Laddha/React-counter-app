import React, { Component } from "react";
class Counter extends Component {
  styles = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  render() {
    console.log(this.props);

    const { onIncrement, onDelete } = this.props;
    return (
      <React.Fragment>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onIncrement(this.props.counter)}
          style={{ fontWeight: "bold", fontSize: "18px" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
