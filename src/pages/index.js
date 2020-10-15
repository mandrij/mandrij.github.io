import React, { Component } from 'react';
import Section from '../components/Section'
import {slide as Menu} from 'react-burger-menu'
import '../styles/global.css'
;
export default function Index() {
    return (
      <div className="Index">
      <Menu itemListElement="div" disableAutoFocus>
        <a id="home" className="menu-item" href="/"><span role="img" aria-label="home">🏠</span> Home</a>
        <a id="about" className="menu-item" href="/"><span role="img" aria-label="resume">🧾</span> Resume</a>
        <a id="contact" className="menu-item" href="/"><span role="img" aria-label="contact">✍️</span> Contact </a>
      </Menu>
      <Section></Section>
      </div>
    );
}
