import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17 0-1.56-.5-2.8-1.5-3.8.16-.4.65-1.8-.15-3.8 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.6 5 2 5 2c-.8 2-.3 3.4-.15 3.8-.1.1-.1.1-.1.1-1 1-1.5 2.24-1.5 3.8 0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const projects = [
  {
    title: 'Bela Venda — Sistema de Gestão',
    description: 'Sistema completo para revendedoras de cosméticos que centraliza vendas, estoque e financeiro. Inclui automação (como leitura de nota fiscal via PDF) e controle inteligente de pedidos, permitindo operação eficiente e baseada em dados.',
    tags: ['React', 'Supabase (Auth + RLS)', 'PostgreSQL', 'PDF Parsing'],
    image: '/belavenda.png',
    github: 'https://github.com/IsisVct/BelaVenda',
    demo: 'https://bela-venda.vercel.app/'
  },
  {
    title: 'Monitor Regulatório',
    description: 'Sistema de automação que coleta e organiza dados de portais financeiros (BACEN, CVM) via web scraping. Elimina verificação manual e mantém informações atualizadas continuamente para análise.',
    tags: ['.NET', 'Web Scraping', 'Automação', 'ETL'],
    image: '/monitor.png',
    github: 'https://github.com/IsisVct/monitor-regulatorio-front',
    demo: 'https://monitor-regulatorio-front.vercel.app/'
  },
  {
    title: 'Sentiment API',
    description: 'API de análise de sentimentos que utiliza técnicas de NLP e machine learning para classificar textos automaticamente. Permite análise escalável de dados textuais e suporte à tomada de decisão baseada em opinião.',
    tags: ['Python', 'Machine Learning', 'NLP', 'FastAPI'],
    image: '/sentiment.png',
    github: 'https://github.com/Douglascrc/SentimentAnalysisAPI'
  }
];

export default function Projects() {
  const observerRef = React.useRef(null);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.project-card-horizontal');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="projetos" className="projects-section container">
      <h2 className="section-title">Projetos em Destaque</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div key={idx} className={`project-card-horizontal glass-panel hidden-reveal ${idx % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image-large" />
            </div>
            <div className="project-info">
              <div className="project-header-horizontal">
                <h3 className="project-title-large">{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub Repository"><GithubIcon /></a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" aria-label="Live Demo"><ExternalLink size={20} /></a>
                  )}
                </div>
              </div>
              <p className="project-description-large">{project.description}</p>
              <div className="project-tags-large">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
