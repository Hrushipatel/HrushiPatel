import React from 'react';
import "./header.css";

export const Header = () => {
  return (
    <div className="header-style">
      <h1>Hrushi.</h1>
      <nav className="header-nav">
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};
