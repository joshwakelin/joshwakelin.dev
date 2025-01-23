import React, { useEffect } from 'react';


// Dynamically import all images in the 'images/swipe' directory

const Home = () => {
  return (
    <section className="home flex-center" id="home">
      <div className="home-container">
        <div className="media-icons">
          <a href="https://www.github.com/joshwakelin" target="_blank" data-aos="fade" data-aos-delay="550" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="#" data-aos="fade" data-aos-delay="600"><i className="fab fa-linkedin"></i></a>
          <a href="#" data-aos="fade" data-aos-delay="650" ><i className="fab fa-instagram"></i></a>
        </div>
        <div className="info">
          <h2 data-aos="fade" data-aos-delay="250">Joshua Wakelin</h2>
          <p data-aos="fade" data-aos-delay="350">Canadian Software Developer</p>
          <a href="#projects" className="btn" data-aos="fade" data-aos-delay="450"> View My Projects <i className="fa-solid fa-code"></i> </a>
        </div>
        <div className="home-img">
          <img src="images/memoji.png" alt="Home" width="450px" data-aos-delay="450" 
  data-aos-duration="1000" data-aos-mirror="true" data-aos="fade-up"/>
        </div>
      </div>

      <div className='scrollerc' data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="850" data-aos="fade">
        <div className="scrollerc__inner">
          <img src="images/swipe/2.png" />
          <img src="images/swipe/6.png" />
          <img src="images/swipe/7.png" />
          <img src="images/swipe/8.png" />
          <img src="images/swipe/9.png" />
          <img src="images/swipe/10.png" />
          <img src="images/swipe/13.png" />
          <img src="images/swipe/14.png" />
          <img src="images/swipe/15.png" />
          <img src="images/swipe/js.png" />
          <img src="images/swipe/postgresql.png" />
          <img src="images/swipe/py.png" />

        </div>
      </div>
    </section>
  );
};

export default Home;
