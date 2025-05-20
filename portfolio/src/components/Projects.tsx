import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Data Analysis Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with filtering and export capabilities.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Flask'],
    githubUrl: 'https://github.com/nitinmehra09/data-analysis-dashboard',
    image: 'https://images.pexels.com/photos/7947401/pexels-photo-7947401.jpeg'
  },
  {
    title: 'Inventory Management System',
    description: 'A complete inventory tracking solution with barcode scanning and inventory optimization features.',
    techStack: ['Java', 'MySQL', 'Spring Boot'],
    githubUrl: 'https://github.com/nitinmehra09/inventory-system',
    image: 'https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg'
  },
  {
    title: 'Personal Assistant CLI',
    description: 'Command-line tool that helps automate daily tasks including file organization and scheduling.',
    techStack: ['Python', 'Click', 'SQLite'],
    githubUrl: 'https://github.com/nitinmehra09/assistant-cli',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg'
  },
  {
    title: 'Algorithmic Problem Solver',
    description: 'Collection of DSA implementations solving common programming challenges and interview questions.',
    techStack: ['C++', 'Python'],
    githubUrl: 'https://github.com/nitinmehra09/algo-problem-solver',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg'
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Recent Projects</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg hover:translate-y-[-5px]">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={16} className="mr-1" /> View Code
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}