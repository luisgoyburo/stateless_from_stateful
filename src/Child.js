import React from "react";

export default class Child extends React.Component {
  render() {
    return <h1>Hey, mi nombre es {this.props.name}!</h1>;
  }
}
