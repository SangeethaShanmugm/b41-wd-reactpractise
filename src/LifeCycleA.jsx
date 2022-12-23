import React, { Component } from "react";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sangeetha",
    };
    console.log("LifeCycleA Constructor");
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  static getDerivedStateFromProps() {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifeCycleA render");
    return <div>LifeCycleA component lifecycle method</div>;
  }
}
