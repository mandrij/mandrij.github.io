import React from "react";

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
      <h1>Hello, my name is Martin. <span role="img" aria-label="waving">👋</span> </h1>
      </div>
    );
  }
}

export default Greeting;
