import React from 'react';
import { Database, Code2, Layout, Server, FileJson, Globe } from 'lucide-react';
import './Skills.css';

const skillsData = [
  { name: 'JavaScript', icon: <Code2 size={24} /> },
  { name: 'React', icon: <Layout size={24} /> },
  { name: 'C#', icon: <Server size={24} /> },
  { name: 'Python', icon: <FileJson size={24} /> },
  { name: 'PHP', icon: <Globe size={24} /> },
  { name: 'Java', icon: <Server size={24} /> },
  { name: 'SQL', icon: <Database size={24} /> },
  { name: 'MySQL', icon: <Database size={24} /> }
];

export default function Skills() {
  return (
    <section className="skills-section container">
      <h2 className="section-title text-center">Tecnologias</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card glass-panel delay-100">
            <div className="skill-icon">
              {skill.icon}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
