import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]); // State to hold the combined skills data
  const [loading, setLoading] = useState(true); // State to indicate loading

  useEffect(() => {
    // Fetch both skills and categories data
    Promise.all([
      fetch('https://api.joshwakelin.dev/data/skills').then((response) => response.json()),
      fetch('https://api.joshwakelin.dev/data/skill_categories').then((response) => response.json())
    ])
      .then(([skills, categories]) => {
        // Merge skills data with category names
        const mergedData = categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category_id === category.id);
          return {
            name: category.name || 'Unknown', // Fallback for category name
            id: category.id,
            skills: categorySkills
          };
        });
        setSkillsData(mergedData); // Update state with merged data
        setLoading(false); // Data loaded
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <h1 className="section-title-01" data-aos-duration="1000" data-aos="fade-down">Skills</h1>
        <div className="content">
          <div className="skills-description"></div>
          <div className="skills-info skills-all">
            {/* Render skills data */}
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
