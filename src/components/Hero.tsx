import React from 'react';
import { Database, PieChart, Award } from 'lucide-react';
import { colors } from '../utils/colors';
import sahil from '../assets/sahil.jpg';
import resume from '../assets/Sahil_Gupta_Resume.pdf';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br" style={{ backgroundColor: '#000f4a' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-9xl font-bold mb-4 text-white">Sahil Gupta</h1>
            <h2 className="text-4xl font-bold mb-6" style={{ color: colors.accent6 }}>Aspiring Data Analyst</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 h-60 rounded-lg transform transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: `${colors.accent1}40` }}>
                <Database className="w-8 h-8 mb-2" style={{ color: colors.accent6 }} />
                <div className="text-xl text-gray-300">Tools</div>
                <div className="text-2xl mt-5 text-center font-semibold text-white">Excel, SQL, Power BI, Python, Tableau</div>
              </div>
              <div className="p-4 rounded-lg transform transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: `${colors.accent2}40` }}>
                <PieChart className="w-8 h-8 mb-2" style={{ color: colors.accent6 }} />
                <div className="text-xl text-gray-300">Projects</div>
                <div className="ml-2 mt-5 text-7xl text-center font-semibold text-white">3</div>
              </div>
              <div className="p-4 rounded-lg transform transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: `${colors.accent3}40` }}>
                <Award className="w-8 h-8 mb-2" style={{ color: colors.accent6 }} />
                <div className="text-xl text-gray-300">Certifications</div>
                <div className="text-7xl mt-5 text-center font-semibold text-white">2</div>
              </div>
            </div>
            {/* Resume Download Button */}
            <div className="flex items-center gap-4">
              <button
                className="py-2 px-4 h-20 w-60 text-xl font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(to right, ${colors.accent5}, ${colors.accent6})` }}
              >
                <a
                  href={resume}
                  download="Sahil_Gupta_Resume.pdf"
                  className="block text-white"
                >
                  Download My Resume
                </a>
              </button>
            </div>
          </div>
          <div className="relative group">
            <img
              src={sahil}
              alt="Sahil Gupta"
              className="rounded-2xl shadow-2xl w-full max-w-screen-md mx-auto transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#ff7c43] to-[#ffa600] text-white px-6 py-2 rounded-full transform transition-all duration-500 group-hover:scale-110">
              Data Driven
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;