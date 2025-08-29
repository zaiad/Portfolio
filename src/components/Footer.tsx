import React from "react";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Zaiad Es-sahel</h3>
              <p className="text-slate-400 leading-relaxed">
                Full Stack Developer and Mobile Developer, passionate about
                creating exceptional digital experiences that combine beautiful
                design with powerful functionality..
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() =>
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="block text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href="zaiadessahel3@gmail.com"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://github.com/zaiad?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zaiad-es-sahel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                Always open to interesting conversations and collaboration
                opportunities.
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-slate-400 mb-4 sm:mb-0">
              <span>© {currentYear} Zaiad Es-sahel. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              <span>Back to top</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
