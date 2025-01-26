import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('https://api.joshwakelin.dev/data/skills').then((response) => response.json()),
      fetch('https://api.joshwakelin.dev/data/skill_categories').then((response) => response.json())
    ])
      .then(([skills, categories]) => {
        const mergedData = categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category_id === category.id);
          return {
            name: category.category_name || 'Unknown',
            id: category.id,
            skills: categorySkills
          };
        });
        setSkillsData(mergedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <h1 className="section-title-01" data-aos-duration="1000" data-aos="fade-down">Skills</h1>
        <div className="content">
          <div className="skills-description"></div>
          <div className="skills-info skills-all">
            {skillsData.map((category) => (
              <div 
                key={category.id} 
                className={category.name ? category.name.toLowerCase().replace(/\s+/g, '-') : 'unknown-category'}
              >
                <h4 data-aos-delay="200" data-aos="fade">
                  <label>{category.name}</label>
                </h4>
                <ul className="bars">
                  {category.skills.map((skill) => (
                    <li key={skill.id} className="bar" data-aos-delay="" data-aos="fade">
                      <div className="info">
                        <span>{skill.skill_name}</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div 
                        className="line" 
                        data-progress={skill.proficiency} 
                        aria-labelledby={`skill-${skill.skill_name}-progress`}
                      ></div>
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
