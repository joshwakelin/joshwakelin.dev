import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-lg-5 full-height bottom-padding">
      <div className="container">
        <div className="row justify-content-center text-center" data-aos="fade-down">
          <div className="col-lg-8 pb-4">
            <h6 className="text-brand">CONTACT</h6>
            <h1>Reach Out for Questions!</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center" data-aos="fade-down">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233147.28921526474!2d-81.2545921845083!3d42.984923179148585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef220d57a7e29%3A0xadc8dc4f3ed8e77d!2sLondon%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1597599787557!5m2!1sen!2sus" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
          <div className="col-lg-6">
            <form action="#" className="row g-lg-3" data-aos="fade-down">
              <div className="form-group col-md-6">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" placeholder="Contact Email" />
              </div>
              <div className="form-group col-12">
                <textarea rows="4" className="form-control" placeholder="Inquiry"></textarea>
              </div>
              <div className="col-12 d-grid bottom-padding">
                <button type="submit" className="btn btn-brand">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
