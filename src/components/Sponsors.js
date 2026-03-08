import React from 'react';
import SPONSORS from '../data/sponsors';

function Sponsors() {
  return (
    <section className="sponsors section" id="sponsors" aria-labelledby="sponsors-title">
      <div className="container">

        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Parceiros</span>
          <h2 className="section-title" id="sponsors-title">
            Quem acredita no <span className="gradient-text">PodTudo E.C.</span>
          </h2>
          <p className="section-sub">
            Marcas que apostam no poder da nossa voz e fazem parte dessa história
          </p>
        </div>

        {/* Sponsor cards */}
        <div className="sponsors-grid">
          {SPONSORS.map(({ name, image }, i) => (
            <div
              key={name}
              className="sponsor-card"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="sponsor-card-accent" aria-hidden="true" />
              <div className="sponsor-badge">
                <i className="fas fa-handshake" aria-hidden="true" /> Parceiro Oficial
              </div>
              <div className="sponsor-logo-wrap">
                <div className="sponsor-logo-glow" aria-hidden="true" />
                <img src={image} alt={`Logo ${name}`} loading="lazy" />
              </div>
              <h3 className="sponsor-name">{name}</h3>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="sponsor-cta-banner" data-aos="fade-up" data-aos-delay="200">
          <div className="sponsor-cta-banner-glow" aria-hidden="true" />
          <div className="sponsor-cta-text">
            <h3>Quer ser parceiro do PodTudo?</h3>
            <p>
              Sua marca na voz de quem fala com Saquarema — e com o mundo.
              Entre em contato e vamos construir algo juntos.
            </p>
          </div>
          <a
            href="mailto:podtudoec@gmail.com"
            className="btn btn-primary sponsor-cta-btn"
            aria-label="Enviar e-mail para parceria"
          >
            <i className="fas fa-envelope" aria-hidden="true" /> Quero ser parceiro
          </a>
        </div>

      </div>
    </section>
  );
}

export default Sponsors;

