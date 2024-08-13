import React from 'react';

const keynotes = [
  {
    title: "Best Buy",
    date: "Aug. 2023",
    description: "Appliances Advisor - Permanent Full Time",
    imgSrc: "image/best-buy.png",
    linkText: ""
  },
  {
    title: "Mohawk College",
    date: "Jul. 2023 - Jun. 2026",
    location: "Hamilton, ON",
    description: "Advanced Diploma in Network Engineering and Cybersecurity",
    imgSrc: "image/mohawk.png",
    linkText: ""
  },
  {
    title: "Kwantlen Polytechnic University",
    date: "Jul. 2021 - Jun. 2023",
    location: "Surrey, BC",
    description: "Associates Degree in Computer Information Systems",
    imgSrc: "image/kpu.png",
    achievement: ""
  },
];

const Journey = () => {
  return (
    <section id="journey" className="full-height container px-lg-5">
      <div className="row pb-4" data-aos="fade-down" data-aos-delay={100}>
        <div className="col-lg-8">
          <h6 className="text-brand">JOURNEY</h6>
          <h1>Experience & Education</h1>
        </div>
      </div>
      <ul className="timeline">
        {keynotes.map((keynote, index) => (
          <li 
            key={index}
            className={index % 2 !== 0 ? 'timeline-inverted' : ''}
          >
            <img
              src={keynote.imgSrc}
              data-aos="fade-down" data-aos-delay={index * 300}
              className={`timeline-badge ${index % 2 !== 0 ? '' : ''}`}
              alt="Timeline Badge"
            />

           

            <div className={`timeline-panel rounded-4 bg-base ${index % 2 !== 0 ? 'shadow-effect-inverted' : 'shadow-effect'}`} >
              <div className="timeline-heading">
                <h4 className="timeline-title">{keynote.title}</h4>
                <h6 className="journey-year">{keynote.date}</h6>
              </div>
              <div className="timeline-body">
                <p>{keynote.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Journey;
