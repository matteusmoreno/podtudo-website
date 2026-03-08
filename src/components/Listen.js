import React from 'react';
import PLATFORMS from '../data/platforms';

function Listen() {
  return (
    <section className="listen section" id="listen" aria-labelledby="listen-title">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Onde Ouvir</span>
          <h2 className="section-title" id="listen-title">
            Disponível em <span className="gradient-text">todas as plataformas</span>
          </h2>
        </div>

        <div className="platforms-grid">
          {PLATFORMS.map(({ name, icon, color, href }, i) => (
            <a
              key={name}
              href={href}
              className="platform-card"
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              style={{ '--platform-color': color }}
              aria-label={`Ouvir no ${name}`}
            >
              <i className={icon} style={{ color }} aria-hidden="true" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Listen;
