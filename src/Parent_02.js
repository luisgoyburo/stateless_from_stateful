import React from "react";
import ReactDOM from "react-dom";
import Child_02 from "./Child_02";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Frarthur" };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return <Child_02 name={this.state.name} onChange={this.changeName} />;
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
