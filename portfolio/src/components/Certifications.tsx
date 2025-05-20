import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    title: 'Python Programming',
    issuedBy: 'Coursera',
    date: 'May 2023',
    url: '#'
  },
  {
    title: 'Java Development Fundamentals',
    issuedBy: 'Udemy',
    date: 'August 2023',
    url: '#'
  },
  {
    title: 'Data Structures & Algorithms',
    issuedBy: 'Coding Ninjas',
    date: 'November 2023',
    url: '#'
  },
  {
    title: 'Web Development Basics',
    issuedBy: 'FreeCodeCamp',
    date: 'January 2024',
    url: '#'
  },
];

export default function Certifications() {
  return (
    <section 
      id="certifications" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Certifications & Achievements</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 space-y-10">
            {certifications.map((cert, index) => (
              <CertificationItem key={index} certification={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CertificationItemProps {
  certification: Certification;
}

function CertificationItem({ certification }: CertificationItemProps) {
  return (
    <div className="relative">
      <div className="absolute -left-[41px] flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-600 text-white">
        <Award size={20} />
      </div>
      
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              Issued by: {certification.issuedBy}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Date: {certification.date}
            </p>
          </div>
          
          {certification.url && (
            <a 
              href={certification.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}