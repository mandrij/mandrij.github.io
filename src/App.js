import React, { Component } from 'react';
import Section from './components/Section'
import {slide as Menu} from 'react-burger-menu'
import './App.css'
;
class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu itemListElement="div" disableAutoFocus>
        <a id="home" className="menu-item" href="/"><span role="img" aria-label="home">🏠</span> Home</a>
        <a id="about" className="menu-item" href="/"><span role="img" aria-label="resume">🧾</span> Resume</a>
        <a id="contact" className="menu-item" href="/"><span role="img" aria-label="contact">✍️</span> Contact</a>
      </Menu>
      <Section></Section>
      </div>
    );
  }
}

export default App;
