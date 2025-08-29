import React from "react";
import { Calendar, MapPin, Code, Heart } from "lucide-react";
import { timeline } from "../data/portfolio";
import zaiad from "../public/img/zaiad.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Personal Info */}
            <div>
              <div className="mb-8">
                <img
                  src={zaiad}
                  alt="zaiad"
                  className="w-64 h-64 rounded-2xl object-fill mx-auto lg:mx-0 shadow-lg"
                  // style={}
                />
              </div>

              <div className="space-y-4 text-slate-600">
                <div className="flex items-center">
                  <MapPin className="mr-3 text-blue-600" size={20} />
                  <span>Casablanca, MAR</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-3 text-blue-600" size={20} />
                  <span>2+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-3 text-blue-600" size={20} />
                  <span>5+ projects completed</span>
                </div>
                <div className="flex items-center">
                  <Heart className="mr-3 text-blue-600" size={20} />
                  <span>Passionate about clean code</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hi there! I'm Zaiad, a passionate Full-Stack and Mobile
                  Developer with hands-on experience in building dynamic and
                  scalable web applications. My journey into tech began with a
                  curiosity about how the web works, which quickly grew into a
                  deep love for creating digital solutions that truly make an
                  impact.
                </p>
                <p>
                  I specialize in modern technologies like React, React Native,
                  Node.js, and Next.js. My development approach combines
                  technical expertise, clean architecture, and a focus on user
                  experience, ensuring every project I deliver is both powerful
                  and enjoyable to use.
                </p>
                <p>
                  Over the past two years, I’ve contributed to real-world
                  projects including e-commerce platforms, mobile stock
                  management apps, and custom web solutions for businesses. My
                  experience spans both frontend and backend development, API
                  integration, and working in Agile teams using tools like Git,
                  Jira, and Docker.
                </p>
                <p>
                  When I’m not coding, I love exploring new technologies,
                  learning continuously, and sometimes contributing to
                  open-source projects. For me, every challenge is an
                  opportunity to grow and push the boundaries of what’s possible
                  on the web and mobile.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
              Career Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 transform sm:-translate-x-px"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 sm:-translate-x-1.5 border-4 border-white shadow-lg"></div>

                    {/* Content */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${
                        index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-blue-600 font-semibold text-sm mb-2">
                          {item.year}
                        </div>
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 font-medium mb-2">
                          {item.company}
                        </p>
                        <p className="text-slate-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
