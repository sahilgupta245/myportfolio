import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import excel from '../assets/Excel.png';  // Make sure this is correct
import powerbi from '../assets/PowerBI.png';  // Make sure this is correct

const ProjectCard = ({
  title,
  description,
  tools,
  image,
  github,
  live
}: {
  title: string;
  description: string;
  tools: string[];
  image: string;
  github: string;
  live: string;
}) => (
  <div
    className="rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    style={{
      backgroundColor: '#003f5c',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
      border: '10px solid #003f5c',
      borderRadius: '1rem'
    }}
  >
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#ffa600] mb-2">{title}</h3>
      <p className="text-[#ffffff] mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm"
            style={{
              backgroundColor: getColor(index),
              color: 'white'
            }}
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          className="flex items-center gap-2 text-[#ff7c43] hover:text-[#ffa600] transition-colors"
        >
          <Github className="w-5 h-5" />
          Code
        </a>
        <a
          href={live}
          className="flex items-center gap-2 text-[#ff7c43] hover:text-[#ffa600] transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

const getColor = (index: number) => {
  const colors = [
    '#2f4b7c',
    '#665191',
    '#a05195',
    '#d45087',
    '#f95d6a',
    '#ff7c43',
    '#ffa600'
  ];
  return colors[index % colors.length];
};

const Projects = () => {
  const projects = [
    {
      title: 'Excel Dashboard',
      description: 'Sales analytics dashboard with dynamic filtering and advanced Excel formulas.',
      tools: ['Excel', 'Power Query', 'Pivot Tables'],
      image: excel,
      github: 'https://github.com/sahilgupta245/Coffee-Shop-Sales-Dashboard',
      live: 'https://github.com/sahilgupta245/Coffee-Shop-Sales-Dashboard/blob/main/Coffee_shop_Sales_Dashboard.xlsx'
    },
    {
      title: 'Power BI Dashboard',
      description: 'Interactive customer insights dashboard with real-time data integration.',
      tools: ['Power BI', 'DAX', 'SQL'],
      image: powerbi,
      github: 'https://github.com/sahilgupta245/RBC-Bank-Churn-Analysis',
      live: 'https://app.powerbi.com/groups/me/apps/bb9f03a0-7466-43fe-ba5a-3ea751199aec/reports/4f0e5f8b-64ed-4bae-80bd-a2eccaa73d0c/a1e42d725c015c4628c2?ctid=dce8bb35-165c-4983-8608-dec340151756&experience=power-bi'
    },
    {
      title: 'SQL & Python Analysis',
      description: 'Data cleaning and visualization project using Python and SQL.',
      tools: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',  // URL for image
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#000f4a' }} id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-[#ffffff] mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
