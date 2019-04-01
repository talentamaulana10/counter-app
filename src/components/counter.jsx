import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>di sini tidak ada tags!!!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "please crate new tags"}
        {this.renderTags()}
      </div>
    );
  }
}
