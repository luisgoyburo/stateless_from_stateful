import React from "react";
import ReactDOM from "react-dom";
import Child from "./Child";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Frarthur" };
  }

  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
