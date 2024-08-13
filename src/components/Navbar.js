import React, { useEffect } from 'react';
import $ from 'jquery';

const Navbar = () => {
  useEffect(() => {
    const sections = $('section');
    const navLinks = $('nav a');

    const handleScroll = () => {
      let currentSection;
      sections.each(function() {
        const sectionTop = $(this).offset().top - $(window).height() / 2;
        if ($(window).scrollTop() >= sectionTop) {
          currentSection = $(this).attr('id');
        }
      });

      navLinks.removeClass('active');
      navLinks.each(function() {
        if ($(this).attr('href').substring(1) === currentSection) {
          $(this).addClass('active');
          console.log(`Current section: ${currentSection}`);
        }
      });
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="bg-image">
      <div className="container flex-lg-column">
        <a className="navbar-brand mx-lg-auto mb-lg-4" href="#">
          <span className="h3 fw-bold d-block d-lg-none">joshwakelin.dev</span>
          <img src="/image/circle-photo.png" className="d-none d-lg-block" alt="Profile" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#journey">Journey</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item icons-grid">
              <a className="nav-link" href="https://www.linkedin.com/in/joshua-wakelin-4701062b4/" target="_blank" rel="noopener noreferrer">
                <div className="small-icon-container">
                  <div className="small-icon linked-in-nav-image"></div>
                </div>
              </a>
              <a className="nav-link" href="https://github.com/joshwakelin" target="_blank" rel="noopener noreferrer">
                <div className="small-icon-container">
                  <div className="small-icon github-nav-image"></div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
