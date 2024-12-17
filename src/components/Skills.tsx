import React from 'react';
import { FaPython, FaDatabase, FaTable, FaChartBar, FaRegFileExcel } from 'react-icons/fa'; // Importing icons
import { colors } from '../utils/colors';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 90, icon: <FaPython size={50} />, description: 'Proficient in data manipulation, automation, and machine learning.' },
    { name: 'SQL', level: 85, icon: <FaDatabase size={50} />, description: 'Expert in writing optimized queries, managing databases, and extracting data efficiently.' },
    { name: 'Excel', level: 80, icon: <FaRegFileExcel size={50} />, description: 'Advanced knowledge in pivot tables, functions, and data analysis with VBA automation.' },
    { name: 'Power BI', level: 75, icon: <FaChartBar size={50} />, description: 'Skilled in creating interactive dashboards, data modeling with DAX, and insightful reporting.' },
    { name: 'Tableau', level: 70, icon: <FaTable size={50} />, description: 'Proficient in building interactive dashboards and visualizing complex data for storytelling.' }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: colors.primary }} id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">Technical Proficiency</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Skill Cards */}
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="text-center border-2 border-gray-900 p-6 flex flex-col justify-between rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: getSkillColor(skill.name), height: '450px' }}
            >
              {/* Icon */}
              <div className="text-4xl text-black">
                {skill.icon}
              </div>
              {/* Skill Name */}
              <h3 className="text-3xl font-bold text-black mb-4">{skill.name}</h3>
              {/* Skill Description */}
              <p className="text-xl font-bold text-center text-black mb-4">{skill.description}</p>
              {/* Proficiency Level */}
              <p className="text-xl font-bold text-black mb-4">Proficiency: {skill.level}%</p>
              {/* Progress Bar */}
              <div className="w-full h-2 border-2 border-gray-900 bg-gray-900 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: getProgressBarColor(skill.level),
                    transition: 'width 0.5s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to return the skill color based on the skill
const getSkillColor = (skillName: string) => {
  switch (skillName) {
    case 'Python':
      return '#306998'; // Python color
    case 'SQL':
      return '#0078D4'; // SQL color
    case 'Excel':
      return '#217346'; // Excel color
    case 'Power BI':
      return '#F2C811'; // Power BI color
    case 'Tableau':
      return '#E24C7A'; // Tableau color
    default:
      return colors.accent6;
  }
};

// Helper function to return the progress bar color based on the proficiency level
const getProgressBarColor = (level: number) => {
  if (level > 80) {
    return '#a6d75b';
  } else if (level > 60) {
    return '#ffb400';
  } else {
    return '#c80064';
  }
};

export default Skills;
