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

      <div className="hero-inner">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="hero-pills" data-aos="fade-down" data-aos-delay="150">
            <span className="hero-pill">
              <i className="fas fa-map-marker-alt" aria-hidden="true" /> Saquarema — RJ
            </span>
            <span className="hero-pill hero-pill--live">
              <span className="hero-dot" aria-hidden="true" /> Novo episódio em breve
            </span>
          </div>

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="300">
            Pod<span className="hero-title-grad">Tudo</span>
            <span className="hero-title-ec"> E.C.</span>
          </h1>

          <p className="hero-slogan" data-aos="fade-up" data-aos-delay="450">
            O podcast mais{' '}
            <span className="hero-slogan-em">democrático</span>
            {' '}da internet — direto de Saquarema para o mundo.
          </p>

          <div className="hero-actions" data-aos="fade-up" data-aos-delay="600">
            <button className="btn btn-primary" onClick={() => scrollTo('episodes')}>
              <i className="fas fa-headphones" aria-hidden="true" /> Assistir Agora
            </button>
          </div>

          <div className="hero-stats" data-aos="fade-up" data-aos-delay="750">
            <div className="stat">
              <span className="stat-num">49+</span>
              <span className="stat-label">Episódios</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Apresentadores</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Assuntos</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual" data-aos="fade-left" data-aos-delay="250">
          <div className="hero-ring ring-1" aria-hidden="true" />
          <div className="hero-ring ring-2" aria-hidden="true" />
          <div className="hero-ring ring-3" aria-hidden="true" />
          <div className="hero-logo-glow" aria-hidden="true" />
          <img
            src="/assets/podtudo-logo.png"
            alt="Logo PodTudo E.C."
            className="hero-logo"
          />
        </div>
      </div>

      {/* Scroll line indicator */}
      <div className="hero-scroll-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default Hero;
