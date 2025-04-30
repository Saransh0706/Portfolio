import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-5">
              <a href="#home" className="text-2xl font-bold">Saransh Kumar</a>
            </div>
            <p className="text-slate-300 max-w-md mb-4">
              Computer Science student passionate about programming and problem-solving. Always eager to learn and take on new challenges.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">
                Visakhapatnam, Andhra Pradesh
              </li>
              <li>
                <a href="mailto:kumarsaransh2004@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  kumarsaransh2004@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Saransh Kumar. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;