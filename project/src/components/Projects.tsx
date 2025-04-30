import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types/project';

const projects: Project[] = [
  {
    id: 1,
    title: 'Land Explorer Game',
    description: 'An open-world roguelike exploration game built with Unity, currently in development. Players traverse through diverse landscapes, discover hidden secrets, and face procedurally generated challenges in a vast terrain.',
    image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Unity', 'C#', 'Game Development', '3D Modeling', 'Work in Progress'],
    link: 'https://github.com',
  },
  {
    id: 2,
    title: 'Library Management System',
    description: 'A comprehensive C++ application for managing library operations including book tracking, member management, and borrowing system. Implements data structures for efficient book searching and sorting.',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['C++', 'Data Structures', 'File Handling', 'OOP'],
    link: 'https://github.com',
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in game development and software engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;