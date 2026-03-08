import React from 'react';

function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home" aria-label="Início">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
          <i className="fas fa-map-marker-alt" aria-hidden="true" />
          Saquarema — RJ
        </div>

        <div className="hero-logo-wrap" data-aos="zoom-in" data-aos-delay="400">
          <div className="hero-logo-glow" aria-hidden="true" />
          <img src="/assets/podtudo-logo.png" alt="Logo PodTudo E.C." className="hero-logo" />
        </div>

        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="600">
          PodTudo <span className="brand-highlight">E.C.</span>
        </h1>

        <p className="hero-slogan" data-aos="fade-up" data-aos-delay="750">
          O podcast mais democrático da internet
        </p>

        <div className="hero-actions" data-aos="fade-up" data-aos-delay="900">
          <button className="btn btn-primary" onClick={() => scrollTo('listen')}>
            <i className="fab fa-spotify" aria-hidden="true" /> Ouvir Agora
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('episodes')}>
            <i className="fas fa-play" aria-hidden="true" /> Ver Episódios
          </button>
        </div>

        <div className="hero-stats" data-aos="fade-up" data-aos-delay="1100">
          <div className="stat">
            <span className="stat-num">4</span>
            <span className="stat-label">Apresentadores</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Democrático</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Assuntos</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
