import React from 'react';

const About = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#003f5c' }} id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
          <p className="text-gray-300 mb-6 text-xl text-justify">
            I am a passionate data analyst with a strong foundation in data analysis, visualization,
            and statistical modeling. My expertise spans across various tools including Python, SQL,
            Excel, Tableau, and Power BI. I have completed several certification programs and
            continuously work on real-world projects to enhance my skills.
          </p>
          <p className="text-gray-300 text-xl text-justify">
            My strength lies in transforming complex data into actionable insights and creating
            interactive dashboards that drive business decisions. I am particularly skilled in data
            cleaning, exploratory data analysis, and creating compelling data visualizations that
            tell a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;