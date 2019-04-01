import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = Product => {
    console.log(Product);
    this.setState({ count: this.state.count + 1 });
  };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.doHandleIncrement(this.props.Product)}
          className="btn btn-secondary btn-sm"
        >
          press me
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "press button to add value" : count;
  }
}
