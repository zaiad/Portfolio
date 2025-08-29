import React, { useState, useEffect } from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skills[index].name]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const SkillBar = ({ skill }: { skill: any }) => {
    const isAnimated = animatedSkills.includes(skill.name);
    
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-slate-700">{skill.name}</span>
          {/* <span className="text-sm text-slate-500">{skill.level}%</span> */}
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{
              // width: isAnimated ? `${skill.level}%` : '0%',
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">F</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Frontend</h3>
                <p className="text-slate-600 text-sm">User Interface & Experience</p>
              </div>
              <div>
                {categories.frontend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">B</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Backend</h3>
                <p className="text-slate-600 text-sm">Server & Database</p>
              </div>
              <div>
                {categories.backend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">T</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Tools</h3>
                <p className="text-slate-600 text-sm">Development & Design</p>
              </div>
              <div>
                {categories.tools.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
              What I Bring to the Team
            </h3>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                // { title: "Problem Solving", description: "Breaking down complex challenges into manageable solutions" },
                { title: "Team Collaboration", description: "Working effectively with cross-functional teams" },
                { title: "Communication", description: "Translating technical concepts into clear, actionable insights" },
                { title: "Continuous Learning", description: "Staying current with industry trends and best practices" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-semibold text-slate-800 mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;