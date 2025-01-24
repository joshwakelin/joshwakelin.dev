import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css'; // Import AOS styles globally


import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {


 
 useEffect(() => {

  AOS.init({
    duration: 1000, 
    once: true, 
  });
  wave();


  const wave = async () => {
    try {
      const response = await fetch(`api.joshwakelin.dev/wave`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        console.error('Failed to log visit:', response.statusText);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.error('Error', err.message);
    }
  };
      
   const innerScroll = document.querySelector(".scrollerc").querySelector(".scrollerc__inner")
   const innerScrollContent = Array.from(innerScroll.children)

   innerScrollContent.forEach(image => {
      const dupe = image.cloneNode(true)
      dupe.setAttribute("aria-hidden", true)
      innerScroll.appendChild(dupe)
   })


      window.addEventListener("scroll", function(){
        const nav = document.querySelector("header")
        nav.classList.toggle("sticky", window.scrollY > 0);
      })

      const menuButton = document.querySelector(".nav-menu-btn")
      const closeButton = document.querySelector(".nav-close-btn")
      const navigation = document.querySelector(".navigation")
      const navItems = document.querySelectorAll(".nav-items a")

      menuButton.addEventListener("click", () => {
        navigation.classList.add("active")
        console.log("now act")
      })

      closeButton.addEventListener("click", () => {
        navigation.classList.remove("active")
      })

      navItems.forEach((navItem => {
        navItem.addEventListener("click", () => {
          navigation.classList.remove("active")

        })
      }))

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
