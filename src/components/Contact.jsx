import React from 'react';
import { Mail } from 'lucide-react';
import './Contact.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17 0-1.56-.5-2.8-1.5-3.8.16-.4.65-1.8-.15-3.8 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.6 5 2 5 2c-.8 2-.3 3.4-.15 3.8-.1.1-.1.1-.1.1-1 1-1.5 2.24-1.5 3.8 0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section id="contato" className="contact-section container">
      <div className="contact-cta-panel">
        <div className="contact-cta-bg-pattern">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
          </svg>
        </div>

        <div className="contact-cta-content">
          <h2 className="contact-cta-title">Buscando um novo talento para o seu time?</h2>
          <p className="contact-cta-text">
            Estou em busca de uma oportunidade de estágio em Desenvolvimento, Engenharia de Software ou Dados. Vamos conversar!
          </p>

          <div className="contact-cta-actions">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=isabelle.vct.souza@gmail.com" target="_blank" rel="noreferrer" className="btn btn-cta-primary">
              <Mail size={20} style={{ marginRight: '8px' }} />
              E-mail
            </a>
            <a href="https://www.linkedin.com/in/isabelle-victoria" target="_blank" rel="noreferrer" className="btn btn-cta-secondary">
              <LinkedinIcon />
              <span style={{ marginLeft: '8px' }}>LinkedIn</span>
            </a>
            <a href="https://github.com/IsisVct" target="_blank" rel="noreferrer" className="btn btn-cta-secondary">
              <GithubIcon />
              <span style={{ marginLeft: '8px' }}>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
