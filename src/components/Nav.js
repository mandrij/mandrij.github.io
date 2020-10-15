import React from "react";
import Dots from "./Dots";
import ThemeSwitcher from "./ThemeSwitcher";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <Dots></Dots>
        <ul id="navigation">
        <li><ThemeSwitcher></ThemeSwitcher></li>
        </ul>
      </div>
    );
  }
}

export default Nav
