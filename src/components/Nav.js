import React from 'react';

const Nav = () => {
  return (
    <header>
      <div className="nav-bar">
      <a href="#home" className="logo" aria-label="Go to homepage">
          joshwakelin.dev
        </a>
        <div className="navigation">
          <div className="nav-items">
            <div className="nav-close-btn" aria-label="Close navigation menu"></div>
            <a href="#home" aria-label="Go to home section">Home</a>
            <a href="#about" aria-label="Go to about section">About</a>
            <a href="#projects" aria-label="Go to projects section">Projects</a>
            <a href="#skills" aria-label="Go to skills section">Skills</a>
          </div>
        </div>
        <div className="nav-menu-btn" aria-label="Open navigation menu"></div>
      </div>
    </header>
  );
};

export default Nav;
