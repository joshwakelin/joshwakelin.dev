import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    const wave = async () => {
      try {
        await fetch(`https://api.joshwakelin.dev/wave`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        console.error('Wave error:', err.message);
      }
    };

    AOS.init({ duration: 1000, once: true });
    wave();

    // Sticky header
    const headerEl = document.querySelector('header');
    const onScroll = () => headerEl?.classList.toggle('sticky', window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile nav
    const menuButton = document.querySelector('.nav-menu-btn');
    const closeButton = document.querySelector('.nav-close-btn');
    const navigation = document.querySelector('.navigation');
    const navItems = Array.from(document.querySelectorAll('.nav-items a'));

    const openNav = () => navigation?.classList.add('active');
    const closeNav = () => navigation?.classList.remove('active');

    menuButton?.addEventListener('click', openNav);
    closeButton?.addEventListener('click', closeNav);
    navItems.forEach(link => link.addEventListener('click', closeNav));

    // PERFECTLY SEAMLESS SCROLLER - The issue is GAP not being included!
    const scrollerInner = document.querySelector('.scrollerc__inner');
    if (scrollerInner) {
      // Clone the entire content for double set
      const originalContent = scrollerInner.innerHTML;
      scrollerInner.innerHTML = originalContent + originalContent;

      // Wait for images to load and get exact measurements
      const images = scrollerInner.querySelectorAll('img');
      Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })).then(() => {
        // Get actual rendered widths including gaps
        const allItems = Array.from(scrollerInner.children);
        const halfCount = allItems.length / 2;
        
        // Calculate width by measuring actual positions
        const firstItem = allItems[0].getBoundingClientRect();
        const firstItemOfSecondSet = allItems[halfCount].getBoundingClientRect();
        
        // The exact width is the distance from start of first to start of second set
        const singleSetWidth = firstItemOfSecondSet.left - firstItem.left;
        
        let scrollPosition = 0;
        const scrollSpeed = 1; // pixels per frame
        
        function scroll() {
          scrollPosition += scrollSpeed;
          
          // Use modulo for perfect mathematical loop
          const displayPosition = scrollPosition % singleSetWidth;
          
          scrollerInner.style.transform = `translate3d(-${displayPosition}px, 0, 0)`;
          requestAnimationFrame(scroll);
        }
        
        requestAnimationFrame(scroll);
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      menuButton?.removeEventListener('click', openNav);
      closeButton?.removeEventListener('click', closeNav);
      navItems.forEach(link => link.removeEventListener('click', closeNav));
    };
  }, []);

  return (
    <div>
      <Nav />
      <div id="content-wrapper">
        <Home />
        <About />
        <Portfolio />
        <Skills />
      </div>
    </div>
  );
}

export default App;