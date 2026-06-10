import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, BookOpen, Sparkles } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    title: 'Ensino Médio Técnico em Informática',
    institution: 'Ensino Médio Integrado',
    period: '2022 - 2024',
    description: 'Formação técnica integrada voltada à análise de sistemas e desenvolvimento de software. Aprendizado focado em algoritmos, modelagem de requisitos funcionais e não funcionais, bancos de dados e design de interfaces com Bootstrap. Desenvolvimento prático de aplicações desktop e mobile com C# (Windows Forms e .NET MAUI), além de sistemas web com PHP e JavaScript.',
    skills: ['C# (Forms / MAUI)', 'PHP', 'JavaScript', 'Banco de Dados', 'Algoritmos', 'Análise de Sistemas', 'Requisitos (Funcionais/Não Funcionais)', 'Bootstrap'],
    side: 'left'
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário UniAmérica (Atual)',
    period: '2024 - Presente',
    description: 'Curso superior focado no desenvolvimento de sistemas utilizando metodologias ativas e projetos reais de mercado. Ênfase no desenvolvimento Full Stack (front-end e back-end), engenharia de software ágil, modelagem e integração de bancos de dados corporativos.',
    skills: ['React', 'Node.js', 'Java', 'SQL Server / MySQL', 'Git & GitHub', 'Scrum'],
    side: 'right'
  },
  {
    title: 'Tecnologia em Inteligência Artificial',
    institution: 'UNIVESP — Universidade Virtual do Estado de São Paulo (Atual)',
    period: '2026 - Presente',
    description: 'Graduação focada em modelos inteligentes de tomada de decisão e processamento de dados em larga escala. Abrange conceitos de Aprendizado de Máquina (Machine Learning), Processamento de Linguagem Natural (NLP), engenharia de dados, estatística aplicada e ética em IA.',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Processamento de Linguagem Natural (NLP)', 'Ciência de Dados', 'Pandas & NumPy', 'Scikit-Learn'],
    side: 'left'
  }
];

export default function Education() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden-reveal');
          entry.target.classList.add('reveal');
        } else {
          entry.target.classList.add('hidden-reveal');
          entry.target.classList.remove('reveal');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="educacao" className="education-section container">
      <h2 className="section-title text-center">Formação Acadêmica</h2>
      
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className={`timeline-item ${item.side} hidden-reveal`}
          >
            <div className="timeline-dot"></div>
            
            <div className="timeline-content glass-panel">
              <div className="education-header">
                <span className="education-period">
                  <Calendar size={14} />
                  {item.period}
                </span>
              </div>
              
              <h3 className="education-title">{item.title}</h3>
              
              <div className="education-institution">
                {index === 2 ? <Sparkles size={16} className="text-gradient" /> : <BookOpen size={16} />}
                <span>{item.institution}</span>
              </div>
              
              <p className="education-description">{item.description}</p>
              
              <div className="education-skills">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="education-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
