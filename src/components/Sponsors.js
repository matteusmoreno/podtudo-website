import React from 'react';
import SPONSORS from '../data/sponsors';

function Sponsors() {
  return (
    <section className="sponsors section" id="sponsors" aria-labelledby="sponsors-title">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Parceiros</span>
          <h2 className="section-title" id="sponsors-title">
            Nossos <span className="gradient-text">Patrocinadores</span>
          </h2>
          <p className="section-sub">Marcas que acreditam no poder da nossa voz</p>
        </div>

        <div className="sponsors-grid">
          {SPONSORS.map(({ name, image }, i) => (
            <div key={name} className="sponsor-card" data-aos="zoom-in" data-aos-delay={i * 150}>
              <img src={image} alt={`Logo ${name}`} loading="lazy" />
              <span>{name}</span>
            </div>
          ))}
        </div>

        <div className="sponsor-cta" data-aos="fade-up" data-aos-delay="300">
          <p>Quer patrocinar o PodTudo E.C.?</p>
          <a href="mailto:podtudoec@gmail.com" className="btn btn-outline">
            <i className="fas fa-envelope" aria-hidden="true" /> Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
