import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Desenvolvedora Back-end | Data Science";

  useEffect(() => {
    let timeout;
    if (isTyping && text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 70); // typing speed
    } else if (text.length === fullText.length) {
      setIsTyping(false);
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping, fullText]);

  return (
    <section className="hero-section container">
      <div className="hero-grid">
        <div className="hero-content animate-fade-in-up">
          <span className="hero-badge delay-100">
            {text}
            <span className="cursor-blink">|</span>
          </span>
          <h1 className="hero-title delay-200">
            Olá, eu sou a <br />
            <span className="text-gradient">Isabelle Victoria</span>
          </h1>
          <p className="hero-subtitle delay-300">
            Transformando ideias ambiciosas em soluções digitais excepcionais.
            Criatividade, técnica e muito potencial.
          </p>
          <div className="hero-actions delay-300">
            <a href="#projetos" className="btn btn-primary">
              Ver Projetos <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Baixar Currículo <svg style={{ marginLeft: '8px' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in-up delay-200">
          <div className="hero-avatar-container">
            <img src="/avatar.gif" alt="Avatar Animado" className="hero-avatar floating" />

            {/* Glowing background shapes for the avatar */}
            <div className="avatar-glow glow-1"></div>
            <div className="avatar-glow glow-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
