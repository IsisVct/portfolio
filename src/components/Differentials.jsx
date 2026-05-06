import React from 'react';
import { Zap, Palette, Target, Layers, MessagesSquare, RefreshCcw } from 'lucide-react';
import './Differentials.css';

const differentials = [
  { title: 'Aprendizado Rápido', icon: <Zap size={28} /> },
  { title: 'Criatividade', icon: <Palette size={28} /> },
  { title: 'Visão de Produto', icon: <Target size={28} /> },
  { title: 'Organização', icon: <Layers size={28} /> },
  { title: 'Boa Comunicação', icon: <MessagesSquare size={28} /> },
  { title: 'Adaptabilidade', icon: <RefreshCcw size={28} /> }
];

export default function Differentials() {
  return (
    <section className="differentials-section container">
      <h2 className="section-title text-center">Diferenciais</h2>
      <div className="diff-grid">
        {differentials.map((diff, index) => (
          <div key={index} className="diff-card glass-panel delay-200">
            <div className="diff-icon">
              {diff.icon}
            </div>
            <h4 className="diff-title">{diff.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
