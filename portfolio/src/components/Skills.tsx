import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Python', level: 5, category: 'language' },
  { name: 'Java', level: 4, category: 'language' },
  { name: 'C', level: 4, category: 'language' },
  { name: 'C++', level: 4, category: 'language' },
  { name: 'HTML/CSS', level: 3, category: 'language' },
  { name: 'JavaScript', level: 3, category: 'language' },
  { name: 'GitHub', level: 4, category: 'tool' },
  { name: 'VS Code', level: 4, category: 'tool' },
  { name: 'Git Bash', level: 3, category: 'tool' },
  { name: 'PyCharm', level: 4, category: 'tool' },
  { name: 'JetBrains IDEs', level: 3, category: 'tool' },
  { name: 'MySQL', level: 3, category: 'tool' },
  { name: 'Linux Basics', level: 3, category: 'tool' },
  { name: 'DSA', level: 4, category: 'interest' },
  { name: 'AI Integration', level: 3, category: 'interest' },
  { name: 'DevOps (Future)', level: 1, category: 'interest' },
];

export default function Skills() {
  const languages = skills.filter(skill => skill.category === 'language');
  const tools = skills.filter(skill => skill.category === 'tool');
  const interests = skills.filter(skill => skill.category === 'interest');

  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">My Skills</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SkillCategory title="Languages" skills={languages} />
          <SkillCategory title="Tools" skills={tools} />
          <SkillCategory title="Interests & Others" skills={interests} />
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
        <div className="space-y-6">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SkillBarProps {
  skill: Skill;
}

function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level * 20}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
          style={{ width: `${skill.level * 20}%` }}
        ></div>
      </div>
    </div>
  );
}