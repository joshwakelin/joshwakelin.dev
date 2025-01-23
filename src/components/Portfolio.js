import React from "react";

const Cards = () => {
  const projects = [
    {
      title: "ChainGuarder",
      description:
        "ChainGuarder utilizes Artificial Intelligence to detect fraud on the blockchain. ChainGuarder also fingerprints transactions once proven fraudulent, adding more data to its model constantly.",
      image: "/images/projects/chainguarder.png",
      link: "https://api.chainguarder.com/apidocs",
      text: "Test Projects API",
      skills: ["WIP", ".py", "AI", "API", "Crypto"],
    },
    {
      title: "MyMifare",
      description:
        "This is an open source project which uses byte manipulation to read and write sectors in near field communication (NFC) Mifare cards. The program uses standard vendor keys to decrypt AES-128 encrypted sectors.",
      image: "/images/projects/mifare.png",
      link: "#",
      text: "View Project Video",
      skills: [".py", "pyscard", "NFC", "AES128"],
    },
    {
      title: "Nestfire",
      description:
        "This is an open source project which uses NestJS to create seamless interactions with Firestore databases. It provides simple API endpoints for retrieving and updating data.",
      image: "/images/projects/nestfire.png",
      link: "https://github.com/joshwakelin/nestfire",
      text: "View Project",
      skills: [".ts", "NestJS", "Firebase", "REST"],
    },

    {
      title: "joshwakelin.dev",
      description:
        "Created a portfolio website based off inspiration and turned it into a fully functioning webpage.",
      image: "/images/projects/hero.png",
      link: "https://github.com/joshwakelin/nestfire",
      text: "View Project",
      skills: ["React", "postgreSQL", ".html", ".js"],
    },


    {
      title: "Glace",
      description:
        "Served as the Lead Programmer and Lua Scripter. Garnered over 300+ concurrent players on average with 100K+ monthly active users. Created ranking Discord Bots and the main gameplay programming.",
      image: "/images/projects/glace.png",
      link: "https://github.com/joshwakelin/nestfire",
      text: "View Project",
      skills: [".luau", ".js", "Node.js"],
    },
  ];

  return (
    <section className="cards section" id="projects">
      <div className="container flex-center">
        <h1 className="section-title-01" data-aos-duration="1000" data-aos="fade-down">
          Projects
        </h1>
        <h2 className="section-title-02"></h2>
        <div className="cards-grid">
          {projects.map((project, index) => (
            <div className="card" 
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay={200 + index * 50} // Adding incrementing delay (200ms, 250ms, 300ms, ...)key={index} 
            >
              <div
               
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
              </div>
              <div
                className="card-content"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay={200 + index * 50} // Adding incrementing delay (200ms, 250ms, 300ms, ...)
              >
                <h3 className="card-title">{project.title}</h3>
                <div className="project-badges">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`badge ${skill === "WIP" ? "badge-red" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="card-description">{project.description}</p>
                <a href={project.link} target="_blank" className="btn-bare" rel="noopener noreferrer">
                  {project.text} <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;


