import React from 'react';

const languages = [
  {
    title: "Lua",
    description: "9+ years of working with Lua and Lua systems, as well as the derived Luau. Multiple systems and games built on luau based engines. My work has been used in games with a combined total of 1.3B+ plays.",
    percent: "100"
  },
  {
    title: "Javascript / Node.js",
    description: "9+ years of working with Lua and Lua systems, as well as the derived Luau. Multiple systems and games built on luau based engines. My work has been used in games with a combined total of 1.3B+ plays.",
    percent: "95"
  },

  {
    title: "Python",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "95"
  },

  {
    title: "C++",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "90"
  },

  {
    title: "SQL",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "90"
  },
  {
    title: "Ruby",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "40"
  },
  // Add other projects similarly
];

const tools = [
  {
    title: "Git",
    description: "9+ years of working with Lua and Lua systems, as well as the derived Luau. Multiple systems and games built on luau based engines. My work has been used in games with a combined total of 1.3B+ plays.",
    percent: "100"
  },
  {
    title: "React",
    description: "9+ years of working with Lua and Lua systems, as well as the derived Luau. Multiple systems and games built on luau based engines. My work has been used in games with a combined total of 1.3B+ plays.",
    percent: "95"
  },

  {
    title: "Firebase",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "95"
  },

  {
    title: "NestJS",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "90"
  },

  {
    title: "Nginx",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "90"
  },
  {
    title: "jQuery",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "40"
  },
  {
    title: "AWS",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "40"
  },

  {
    title: "Selenium",
    description: "3+ years of python expierence mainly on personal projects. I'm constantly improving my python skills and it is currently my main area of study.",
    percent: "40"
  },
  // Add other projects similarly
];

const Skills = () => {
  return (
    
    <section id="skills" className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4" data-aos="fade-down">
          <div className="col-lg-8">
            <h6 className="text-brand">SKILLS</h6>
            <h1>My Skills and Tools</h1>
          </div>
        </div>

        <h4 class="pt-6">Languages</h4>
        <div className="row gy-4">
          {languages.map((cell, index) => (
            <div className="col-lg-6 gy-4" data-aos="fade-down" data-aos-delay="300" key={index}>
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-content p-4">
                  <div className="title-container">
                    <h5>{cell.title}</h5>
                  </div>
                  <p class="text-brand mb-2">{cell.description}</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: `${cell.percent}%`, backgroundColor: '#24bff8' }} aria-valuenow={cell.percent} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 class="pt-4">Tools</h4>
        <div className="row">
        {tools.map((cell, index) => (
            <div className="col-lg-6 gy-4" data-aos="fade-down" data-aos-delay="300" key={index}>
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-content p-4">
                  <div className="title-container">
                    <h5>{cell.title}</h5>
                  </div>
                  <p class="text-brand mb-2">{cell.description}</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: `${cell.percent}%`, backgroundColor: '#24bff8' }} aria-valuenow={cell.percent} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
