import React from "react";
import headshot from "../images/light.jpg"

class LeftColumn extends React.Component {
  render() {
    return (
      <div className="left-column">
        <img id="profile-pic" src={headshot} alt="me" />
      </div>
    );
  }
}

export default LeftColumn;
