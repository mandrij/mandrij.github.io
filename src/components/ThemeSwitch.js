import React from "react";
import Slider from "./Slider";

class ThemeSwitch extends React.Component {
  render() {
    return (
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <Slider />
      </label>
    );
  }
}

export default ThemeSwitch;
