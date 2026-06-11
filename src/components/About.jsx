import React from 'react';
import { Star } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="sobre" className="about-section container">
      <div className="glass-panel about-panel">
        <div className="about-content">
          <h2 className="section-title">Sobre Mim</h2>

          <h3 className="about-greeting">
            Muito prazer, Isabelle aqui!
            <span className="about-star-badge">
              <Star size={16} fill="#fff" stroke="#fff" />
            </span>
          </h3>

          <p className="about-text">
            Sou <strong>desenvolvedora</strong> e gosto de transformar ideias em <strong>produtos digitais</strong> que funcionam de verdade. No dia a dia, eu faço a ponte entre a <strong>estrutura dos dados</strong> e o que o usuário final enxerga na tela, sempre tentando deixar tudo o mais <strong>fluido e inteligente</strong> possível.
          </p>
          <p className="about-text">
            Detesto ficar estagnada, então estou sempre correndo atrás de <strong>aprender algo novo</strong>. Se você tem um projeto desafiador e procura alguém que <strong>aprende rápido</strong> e <strong>joga junto com o time</strong>, vamos conversar!
          </p>
        </div>
        <div className="about-visual">
          <img src="/foto-.webp" alt="Isabelle Victoria" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

