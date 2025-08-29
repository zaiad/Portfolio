import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Zaiad Es-sahel
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-6 text-slate-200 font-light">
              Full Stack Developer & Mobile
            </p>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              I create exceptional digital experiences that combine beautiful design with powerful functionality. 
              Passionate about clean code, user experience, and bringing ideas to life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/zaiad?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/zaiad-es-sahel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="zaiadessahel3@gmail.com.com"
              className="text-slate-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;