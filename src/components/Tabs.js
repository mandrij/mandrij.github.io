import React from "react";

class Tabs extends React.Component {
  render() {
    return (
      <div className="tabs-wrapper">
        <a id="home" className="tab" href="/">Home</a>
        <a id="resume" className="tab" href='./resume.pdf'>Resume</a>
        <a id="contact" className="tab" href="/">Contact</a>
      </div>
    );
  }
}

export default Tabs;
