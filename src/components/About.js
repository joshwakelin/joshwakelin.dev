import React, { useState, useEffect } from 'react';

const About = () => {
  const [inViewport, setInViewport] = useState(true);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      setInViewport(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!inViewport) {
      // Reset to center when out of view, but no panning
    }
  }, [inViewport]);

  return (
    <section
      className="about section"
      id="about"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <div className="container flex-center">
        <h1 className="section-title-01" data-aos-duration="1000" data-aos="fade-down">
          About Me
        </h1>
        <h2 className="section-title-02"></h2>
        <div className="content flex-center">
          <div
            className="about-img"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos="fade-up"
          >
            <img
              src="images/josh.jpg"
              alt=""
              style={{
                transition: inViewport ? 'transform 0.1s ease-out' : 'transform 0.5s ease-in',
              }}
            />
          </div>
          <div className="about-info">
            <div className="description">
              <h3 data-aos="fade" data-aos-delay="200">
                👋 Hi! I'm Josh Wakelin
              </h3>
              <p data-aos="fade" data-aos-delay="250">
                I am a 23-year-old software developer with a particular interest in artificial intelligence and cybersecurity. This portfolio contains a list of my most recent projects and experience, with a link to also view or download my CV.
              </p>
              <a href="" className="btn" data-aos="fade" data-aos-delay="300">
                Download CV <i className="fa-solid fa-download"></i>
              </a>
              <h3 className="description-section-02" data-aos="fade" data-aos-delay="200">
                🖥 Off the Web
              </h3>
              <p data-aos="fade" data-aos-delay="250">
                I was raised in Surrey, BC, and have relocated to London, Ontario. As a kid, I was fascinated by technology and more specifically the idea of automation in everyday life. When I'm not coding, I spend my time exercising and spending quality time with my loved ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
