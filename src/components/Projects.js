import React from 'react';

const projects = [
  {
    title: "Shipio",
    date: "Jan 2024 - Now",
    description: "Courier comparison SaaS product and company created by me, uses different webscraping techniques and algorithms to extract shipping/location data.",
    link: "https://whichcostsmore.com",
    imgSrc: "image/shipio.png",
    linkText: ""
  },
  {
    title: "Nestfire",
    date: "Jan - Aug, 2024",
    description: "Lightweight library built on NestJS which allows for easy interpretation and extraction of data from Fireclouds NoSQL Firestore databases via endpoints.",
    link: "https://whichcostsmore.com",
    imgSrc: "image/nestfire.png",
    linkText: "Github Repo"
  },
  {
    title: "Which Costs More",
    date: "Jun - Jul, 2024",
    description: "Interactive and fun game which showcases two retail items and the client is prompted to guess which item costs more. Uses Cloudflare CDN, AWS, Nginx and NoSQL Firestore.",
    link: "https://whichcostsmore.com",
    imgSrc: "image/whichcostsmore.png",
    linkText: "Live Demo"
  },

  {
    title: "Glace",
    date: "Jun 2022 - Oct 2023",
    description: "Comissioned as the lead programmer for Glace, operating with the company WorkInProgress. 14.5 Million play sessions with 100,000 Monthly Active Users at peak.",
    link: "https://whichcostsmore.com",
    imgSrc: "image/glace.png",
    linkText: "Live Demo"
  },


  
  // Add other projects similarly
];

const Projects = () => {
  return (
    <section id="projects" className="full-height px-lg-5" style={{ backgroundColor: 'rgb(32, 31, 31)' }}>
      <div className="container">
        <div className="row pb-4" data-aos="fade-down">
          <div className="col-lg-8">
            <h6 className="text-brand">PROJECTS</h6>
            <h1>Previous Projects</h1>
          </div>
        </div>
        <div className="row">
        

          {projects.map((project, index) => (
            <div class="col-lg-6 gy-4" data-aos="fade-down" data-aos-delay="300" >
            <div class="card-custom rounded-4 bg-base shadow-effect">
              <div class="card-custom-image rounded-4">
                <img class="rounded-4"alt="project image" src={project.imgSrc} />
              </div>
              <div class="card-custom-content p-4">
                <div class="title-container">
                  <h4>{project.title}</h4>
                  <span class="project-year">{project.date}</span>
                </div>
                <p> {project.description} </p>
                <a href={project.link} class="link-custom"> {project.linkText} </a>


              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
