import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-12 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Nitin Mehra</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Turning ideas into code and creativity into solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="https://github.com/nitinmehra09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-medium transition-colors"
              >
                <Github className="mr-2" size={20} />
                View GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/nitinmehra09/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="w-2/3 md:w-1/3 lg:w-2/5 relative animate-float">
            <div className="w-full aspect-square rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 absolute top-0 left-0 blur-3xl opacity-10 dark:opacity-20"></div>
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
              alt="Profile"
              className="w-full rounded-full object-cover relative z-10 border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}