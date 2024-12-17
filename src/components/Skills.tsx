import React, { useEffect, useRef } from 'react';
import { colors } from '../utils/colors';
import Chart from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Skills = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'Excel', level: 80 },
    { name: 'Power BI', level: 75 },
    { name: 'Tableau', level: 70 }
  ].sort((a, b) => b.level - a.level);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const config: ChartConfiguration = {
          type: 'bar',
          data: {
            labels: skills.map(skill => skill.name),
            datasets: [{
              data: skills.map(skill => skill.level),
              backgroundColor: [
                colors.accent6,
                colors.accent5,
                colors.accent4,
                colors.accent3,
                colors.accent2
              ],
              borderRadius: 8,
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: (context) => `Proficiency: ${context.raw}%`
                }
              }
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Skills',
                  color: 'rgba(255, 255, 255, 0.7)',
                  font: {
                    size: 14
                  }
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: 'rgba(255, 255, 255, 0.7)'
                }
              },
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: 'Proficiency Level (%)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  font: {
                    size: 14
                  }
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: 'rgba(255, 255, 255, 0.7)'
                }
              }
            }
          }
        };

        chartInstance.current = new Chart(ctx, config);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: colors.primary }} id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">Technical Proficiency</h2>
        <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-lg backdrop-blur-sm">
          <canvas ref={chartRef} height="300"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Skills;
