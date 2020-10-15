import React from "react";
import Greeting from "./Greeting";
import Intro from "./Intro";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Greeting></Greeting>
        <Intro></Intro>
      </div>
    );
  }
}

export default Container;
