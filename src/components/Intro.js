import React from "react";
import Nav from "./Nav";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

class Intro extends React.Component {
  render() {
    return (
      <div className="intro-wrapper">
        <Nav></Nav>
        <LeftColumn></LeftColumn>
        <RightColumn></RightColumn>
      </div>
    );
  }
}

export default Intro;
