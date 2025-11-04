import React from 'react';

const Home = () => {
  return (
    <section className="home flex-center" id="home">
      <div className="home-container">
        <div className="media-icons">
          <a href="https://github.com/joshwakelin" target="_blank" rel="noreferrer" data-aos="fade" data-aos-delay="550">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/joshwakelin" data-aos="fade" data-aos-delay="600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/joshwakelin" data-aos="fade" data-aos-delay="650">
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
            alt="Joshua Wakelin"
            width="450"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            loading="eager"
          />
        </div>
      </div>
      {/* TRULY SEAMLESS SCROLLER - Only need ONE set now, JS handles cloning */}
      <div
        className="scrollerc"
        data-aos="fade"
        data-aos-delay="850"
        data-aos-duration="1000"
        data-aos-mirror="true"
      >
        <div className="scrollerc__inner">
          <img src="images/swipe/2.png" alt="" loading="eager" />
          <img src="images/swipe/6.png" alt="" loading="eager" />
          <img src="images/swipe/7.png" alt="" loading="eager" />
          <img src="images/swipe/8.png" alt="" loading="eager" />
          <img src="images/swipe/9.png" alt="" loading="eager" />
          <img src="images/swipe/10.png" alt="" loading="eager" />
          <img src="images/swipe/13.png" alt="" loading="eager" />
          <img src="images/swipe/14.png" alt="" loading="eager" />
          <img src="images/swipe/15.png" alt="" loading="eager" />
          <img src="images/swipe/js.png" alt="JavaScript" loading="eager" />
          <img src="images/swipe/postgresql.png" alt="PostgreSQL" loading="eager" />
          <img src="images/swipe/py.png" alt="Python" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default Home;