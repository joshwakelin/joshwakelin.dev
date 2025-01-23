import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]); // State to hold skills data

  useEffect(() => {
    // Fetch the skills data from the API when the component mounts
    fetch('http://api.joshwakelin.dev/data/skills')  // Adjust the URL to your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setSkillsData(data);  // Store the fetched data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Update progress bars after data is loaded
    document.querySelectorAll('.line').forEach((line) => {
      const progress = line.getAttribute('data-progress');
      line.style.setProperty('--progress', `${progress}%`);
    });
  }, []);

  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <h1 className="section-title-01" data-aos-duration="1000" data-aos="fade-down">Skills</h1>
        <div className="content">
          <div className="skills-description"></div>
          <div className="skills-info skills-all">
            {/* Loop over skills data dynamically */}
            {skillsData.map((category) => (
              <div key={category.id} className={category.name.toLowerCase()}>
                <h4 data-aos-delay="200" data-aos="fade"><label>{category.name}</label></h4>
                <ul className="bars">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="bar" data-aos-delay="" data-aos="fade">
                      <div className="info">
                        <span>{skill.name}</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <div className="line" data-progress={skill.progress}></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
