import React from 'react';
import { GraduationCap, Code, Music, Gamepad2 } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">About Me</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I am a dedicated student at Indore Institute of Science and Technology, pursuing a B.Tech in Computer Science (2023-2027). 
              As a quick learner, I excel at adapting to new challenges and continuously expanding my knowledge in the ever-evolving field of technology.
            </p>
            
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              I specialize in Python, Java, and C/C++, crafting intelligent solutions with AI. 
              With a keen eye for problem-solving and a talent for writing effective prompts, I push the boundaries of what's possible. 
              Beyond coding, I thrive on music, gaming, and creative challenges. Let's build something extraordinary!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                B.Tech in Computer Science (2023-2027)<br />
                Indore Institute of Science and Technology
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400">
                  <Code size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Focus Areas</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Programming Languages, Data Structures and Algorithms, AI Integration, and future exploration into DevOps.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                  <Gamepad2 size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Hobbies</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                PC gaming, volleyball, chess, and other activities that fuel my creativity and problem-solving abilities.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400">
                  <Music size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Interests</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Music, exploring AI technologies, building practical software solutions, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}