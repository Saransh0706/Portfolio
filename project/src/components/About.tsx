import React from 'react';
import { Code, Database, Terminal, Brain } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { 
      category: 'Programming Languages', 
      items: ['C++', 'Python', 'JavaScript', 'HTML/CSS']
    },
    { 
      category: 'Technologies', 
      items: ['Git', 'VS Code', 'Linux', 'MySQL'] 
    },
    { 
      category: 'Core CS', 
      items: ['Data Structures', 'Algorithms', 'OOP', 'Database Management'] 
    },
    { 
      category: 'Soft Skills', 
      items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'] 
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-3xl transform rotate-3" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Computer Science Student" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-700 rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <Terminal className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">BTech Student</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Computer Science & Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I'm a Computer Science and Engineering student with a passion for problem-solving and software development. Currently pursuing my BTech degree, I'm focused on building a strong foundation in computer science fundamentals and practical programming skills.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I enjoy working on challenging projects that allow me to apply my knowledge of data structures, algorithms, and various programming languages to create efficient solutions.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-3">
                      <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="font-medium text-slate-900 dark:text-white text-center">Programming</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-3">
                      <Terminal className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="font-medium text-slate-900 dark:text-white text-center">DSA</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-3">
                      <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="font-medium text-slate-900 dark:text-white text-center">Databases</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-3">
                      <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="font-medium text-slate-900 dark:text-white text-center">Problem Solving</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="font-medium text-slate-900 dark:text-white">{skillGroup.category}</h4>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;