import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-[0.03] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Computer Science Student
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Saransh Kumar</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                A BTech Computer Science and Engineering student passionate about building efficient software solutions and exploring new technologies.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-md text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 opacity-10 dark:opacity-20" />
              <div className="relative p-8 bg-white dark:bg-slate-800 shadow-xl rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Computer Science workspace"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="mt-6 space-y-4">
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full w-3/4" />
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full" />
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#projects"
          className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
        >
          <ArrowDown size={24} className="text-indigo-600 dark:text-indigo-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;