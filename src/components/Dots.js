import React from "react";

class Dots extends React.Component {
  render() {
    return (
      <div className="dots-wrapper">
        <div id="dot-1" className="browser-dot"></div>
        <div id="dot-2" className="browser-dot"></div>
        <div id="dot-3" className="browser-dot"></div>
      </div>
    );
  }
}

export default Dots;
