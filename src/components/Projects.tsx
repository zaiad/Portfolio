import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projects } from '../data/portfolio';


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've used to build them
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                        >
                          <Eye size={16} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>View Project</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;