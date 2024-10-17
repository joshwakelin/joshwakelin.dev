import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Home = () => {
  useEffect(() => {
    // Dynamic text animation
    const textElement = document.getElementById('dynamicText');
    const texts = ["SOFTWARE DEVELOPER", "NETWORK ENGINEER", "WEB DEVELOPER", "PYTHON SCRIPTER"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function updateText() {
      const currentText = texts[currentTextIndex];
      textElement.textContent = currentText.slice(0, currentCharIndex);

      if (isDeleting) {
        if (currentCharIndex > 0) {
          currentCharIndex--;
          setTimeout(updateText, 70);
        } else {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          setTimeout(updateText, 1000);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          currentCharIndex++;
          setTimeout(updateText, 70);
        } else {
          setTimeout(() => {
            isDeleting = true;
            setTimeout(updateText, 100);
          }, 3000);  // Pause before deleting
        }
      }
    }

    updateText();

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      console.log('found')

      setTimeout(() => {
          
        preloader.classList.add('fade-out');
      }, 1500); 
      
        setTimeout(() => {
          
          preloader.remove();
        }, 2000); 

    }
  }, []);

  return (
    <>
      <section id="home" className="home-height px-lg-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7 pb-10">
              <h3 className="display-9 fw-bold" data-aos="fade-down">HELLO, I'M</h3>
              <h1 className="display-4 fw-bold" data-aos="fade-down">JOSH <span className="text-dec">WAKELIN</span></h1>
              <div className="d-flex align-items-center pt-4 pb-4" data-aos="fade-down">
                <h3 className="display-8 fw-bold mb-0 no-wrap">I'M A&nbsp;</h3>
                <h1 className="display-8 fw-bold mb-0 text-dec" id="dynamicText">hi</h1>
              </div>
              <br />
              <span data-aos="fade-down" data-aos-delay="900">
                <a href="#projects" className="btn btn-brand me-3">View My Projects</a>
              </span>
              <span data-aos="fade-down" data-aos-delay="900">
                <a href="#contact" className="link-custom">Contact Me Today!</a>
              </span>
            </div>
            <div className="col-lg-5 d-none d-lg-block mt-n3">
              <div className="col-9 mb-4 img-fluid animated" data-aos="fade-down" data-aos-delay="500">
                <div className="bg-base p-4 rounded-4 shadow-effect d-flex align-items-center">
                  <img src="image/plus.png" alt="Icon" className="me-3" style={{ marginLeft: '-15px', width: '35px', height: '35px' }} />
                  <h5>Software Development</h5>
                </div>
              </div>
              <div className="col-9 mb-4 img-fluid animated ms-3" data-aos="fade-down" data-aos-delay="500">
                <div className="bg-base p-4 rounded-4 shadow-effect d-flex align-items-center">
                  <img src="image/plus.png" alt="Icon" className="me-3" style={{ marginLeft: '-15px', width: '35px', height: '35px' }} />
                  <h5>Network Administration</h5>
                </div>
              </div>
              <div className="col-9 mb-4 img-fluid animated" data-aos="fade-down" data-aos-delay="500">
                <div className="bg-base p-4 rounded-4 shadow-effect d-flex align-items-center">
                  <img src="image/plus.png" alt="Icon" className="me-3" style={{ marginLeft: '-15px', width: '35px', height: '35px' }} />
                  <h5>Cybersecurity</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="swiper-holder" className=" p-5 pt-5 pb-5" style={{ backgroundColor: 'rgb(32, 31, 31)', width: '100%', overflow: 'hidden' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 30},
            480: { slidesPerView: 3, spaceBetween: 30},
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        
          style={{ width: '100%' }}
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <SwiperSlide key={index}>
              <img
                src={`image/slider/${index + 1}.png`}
                alt={`Slide ${index + 1}`}
                style={{ width: '12vh', height: '12vh' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div id="preloader"></div>
    </>
  );
};

export default Home;
