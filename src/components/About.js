import React from 'react';

const About = () => {
  return (
    <section id="about" className="px-lg-5 about-height">
      <div className="container">
        <div className="row pb-4" data-aos="fade-down">
          <div className="col-lg-8">
            <h6 className="text-brand">ABOUT ME</h6>
            <h1>About Me</h1>
            <h3 className="fw-bold pt-4" data-aos="fade-down">WHO IS <span className="text-dec">JOSH?</span></h3>
            <p data-aos="fade-down">
              I was raised in the suburbs of Vancouver, Canada and relocated to the Greater Toronto Area. I've always had a fascination with technology and creating things. When I'm not creating innovative side projects, I'm practicing guitar and expanding my knowledge on other topics such as chemistry or computer hardware.
            </p>
            <h3 className="fw-bold pt-4" data-aos="fade-down" data-aos-delay="150">MY <span className="text-dec">PROGRAMMING</span> JOURNEY</h3>
            <p data-aos="fade-down" data-aos-delay="150">
              My love of programming originally comes from being surrounded with technology at a young age. I started programming around the age of 10, where I played with basic lua scripts and looked at other scripts to piggyback my knowledge off of that. I've always been passionate about creating something with meaning, just for the enjoyment of creating.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
