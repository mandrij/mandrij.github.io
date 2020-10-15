import React from "react";
import Dots from "./Dots";
import ThemeSwitcher from "./ThemeSwitcher";
import Tabs from "./Tabs";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <Dots></Dots>
        <Tabs></Tabs>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    );
  }
}

export default Nav;
