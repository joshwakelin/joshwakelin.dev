import React, { useEffect } from 'react';

// Dynamically import all images in the 'images/swipe' directory

const Home = () => {
  return (
    <section className="home flex-center" id="home">
      <div className="home-container">
        <div className="media-icons">
          <a 
            href="https://www.github.com/joshwakelin" 
            target="_blank" 
            data-aos="fade" 
            data-aos-delay="550" 
            rel="noreferrer" 
            aria-label="Visit my GitHub profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/joshwakelin" 
            data-aos="fade" 
            data-aos-delay="600"
            aria-label="Visit my LinkedIn profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://www.instagram.com/joshwakelin" 
            data-aos="fade" 
            data-aos-delay="650"
            aria-label="Visit my Instagram profile"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="info">
          <h2 data-aos="fade" data-aos-delay="250">Joshua Wakelin</h2>
          <p data-aos="fade" data-aos-delay="350">Canadian Software Developer</p>
          <a href="#projects" className="btn" data-aos="fade" data-aos-delay="450">
            View My Projects <i className="fa-solid fa-code"></i>
          </a>
        </div>
        <div className="home-img">
          <img 
            src="images/memoji.png" 
            alt="Joshua Wakelin's Memoji" 
            width="450px" 
            data-aos-delay="450" 
            data-aos-duration="1000" 
            data-aos-mirror="true" 
            data-aos="fade-up" 
          />
        </div>
      </div>

      <div 
        className='scrollerc' 
        data-aos-duration="1000" 
        data-aos-mirror="true" 
        data-aos-delay="850" 
        data-aos="fade"
      >
        <div className="scrollerc__inner">
          <img src="images/swipe/2.png" alt="Swipe image 2" />
          <img src="images/swipe/6.png" alt="Swipe image 6" />
          <img src="images/swipe/7.png" alt="Swipe image 7" />
          <img src="images/swipe/8.png" alt="Swipe image 8" />
          <img src="images/swipe/9.png" alt="Swipe image 9" />
          <img src="images/swipe/10.png" alt="Swipe image 10" />
          <img src="images/swipe/13.png" alt="Swipe image 13" />
          <img src="images/swipe/14.png" alt="Swipe image 14" />
          <img src="images/swipe/15.png" alt="Swipe image 15" />
          <img src="images/swipe/js.png" alt="Swipe image" />
          <img src="images/swipe/postgresql.png" alt="Swipe image Undefined" />
          <img src="images/swipe/py.png" alt="Swipe Image 16" />
        </div>
      </div>
    </section>
  );
};

export default Home;
