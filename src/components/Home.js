import React, { useEffect, useRef } from 'react';

const Home = () => {
  const innerRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    let running = true;
    let x = 0; // current translateX in px
    let last = performance.now();
    let loopDistance = 0;

    const setup = async () => {
      // Respect reduced motion
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
      if (reduceMotion) return;

      // Wait for images to decode so widths are stable
      const imgs = Array.from(inner.querySelectorAll('img'));
      await Promise.all(
        imgs.map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve()))
      );

      // Remove any old clones if hot reloading
      Array.from(inner.querySelectorAll('[data-clone="true"]')).forEach((n) => n.remove());

      // Clone exactly one full set (we start with 1 set in JSX)
      const originals = Array.from(inner.children);
      originals.forEach((node) => {
        const clone = node.cloneNode(true);
        clone.setAttribute('data-clone', 'true');
        clone.setAttribute('aria-hidden', 'true');
        inner.appendChild(clone);
      });

      // Distance to wrap = width of ONE set (including its padding)
      // We measure by locating the first clone's left offset.
      const firstClone = inner.querySelector('[data-clone="true"]');
      loopDistance = firstClone ? firstClone.offsetLeft : inner.scrollWidth / 2;

      // Start from 0 cleanly
      x = 0;
      inner.style.transform = 'translate3d(0,0,0)';
      inner.classList.add('is-ready');

      const speedPxPerSec = 60; // tweak this: higher = faster

      const tick = (now) => {
        if (!running) return;

        const dt = (now - last) / 1000;
        last = now;

        x += speedPxPerSec * dt;

        // Wrap without a visible reset
        if (loopDistance > 0) x = x % loopDistance;

        inner.style.transform = `translate3d(${-x}px, 0, 0)`;
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    setup();

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="home flex-center" id="home">
      <div className="home-container">
        <div className="media-icons">
          <a
            href="https://github.com/joshwakelin"
            target="_blank"
            rel="noreferrer"
            data-aos="fade"
            data-aos-delay="550"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/joshwakelin" data-aos="fade" data-aos-delay="600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/joshhwakelin" data-aos="fade" data-aos-delay="650">
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

      {/* Seamless scroller: ONE set only; JS clones it and scrolls smoothly */}
      <div className="scroller">
        <div className="scroller__inner" ref={innerRef}>
          <div className="scroller__set">
            <img src="images/swipe/js.png" alt="JS" />
            <img src="images/swipe/py.png" alt="Python" />
            <img src="images/swipe/postgresql.png" alt="PostgreSQL" />
            <img src="images/swipe/2.png" alt="" />
            <img src="images/swipe/6.png" alt="" />
            <img src="images/swipe/7.png" alt="" />
            <img src="images/swipe/8.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
