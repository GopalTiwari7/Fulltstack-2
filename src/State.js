import React, { Component } from "react";
export default class State extends React.Component {
  constructor() {
    super();

    // Define your state object here
    this.state = {
      id: 1,
      name: "Gopal",
    };
  }

  //Event Handler
  upDate = () => {
    // setState() that update state of component
    this.setState({
      id: 10,
      name: "Sachin",
    });
  };

  // Define your render method here
  render() {
    return (
      <div>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
        <button onClick={this.upDate}>Click me</button>
      </div>
    );
  }
}