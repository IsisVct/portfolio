import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="sobre" className="about-section container">
      <div className="glass-panel about-panel">
        <div className="about-content">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="about-text">
            Sou uma <strong>Desenvolvedora Full Stack</strong> com foco em criar aplicações web, APIs e processamento de dados eficientes e elegantes. Tenho paixão por tecnologia e uma enorme vontade de evoluir.
          </p>
          <p className="about-text">
            Meu perfil é marcado pela <strong>ambição e criatividade</strong>. Com facilidade para aprendizado rápido, procuro transformar ideias e desafios complexos em produtos digitais funcionais, sempre focando em boas práticas, arquitetura escalável e em uma experiência de usuário excepcional.
          </p>
          <p className="about-text">
            Busco oportunidades onde possa não apenas entregar soluções reais, mas também crescer profissionalmente e colaborar em projetos que façam a diferença.
          </p>
        </div>
        <div className="about-visual">
          <img src="/foto--.png" alt="Isabelle Victoria" className="profile-image" />
        </div>
      </div>
    </section>
  );
}
