import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import './Footer.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17 0-1.56-.5-2.8-1.5-3.8.16-.4.65-1.8-.15-3.8 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.6 5 2 5 2c-.8 2-.3 3.4-.15 3.8-.1.1-.1.1-.1.1-1 1-1.5 2.24-1.5 3.8 0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Isabelle<span className="dot">★</span></span>
          <p className="footer-tagline">Transformando ideias em código.</p>
        </div>
        
        <div className="footer-copyright">
          <div className="footer-social-links" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=isabelle.vct.souza@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" className="footer-social-link"><Mail size={20} /></a>
            <a href="https://www.linkedin.com/in/isabelle-victoria" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link"><LinkedinIcon /></a>
            <a href="https://github.com/IsisVct" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link"><GithubIcon /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Isabelle Victoria. Todos os direitos reservados.</p>
          <p className="footer-tech">Construído com React & Vanilla CSS.</p>
        </div>

        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Voltar ao topo">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
