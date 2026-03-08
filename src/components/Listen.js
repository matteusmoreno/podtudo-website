import React from 'react';
import PLATFORMS from '../data/platforms';

function Listen() {
  return (
    <section className="listen section" id="listen" aria-labelledby="listen-title">
      <div className="container">
        <div className="listen-inner">

          {/* ── Left: CTA block ── */}
          <div className="listen-cta" data-aos="fade-right" data-aos-delay="100">
            <span className="section-tag">Onde Ouvir</span>
            <h2 className="listen-title" id="listen-title">
              Disponível em{' '}
              <span className="gradient-text">todas as plataformas</span>
            </h2>
            <p className="listen-desc">
              Ouça o PodTudo E.C. onde e quando quiser — no caminho, na academia,
              em casa. Escolha sua plataforma favorita e aperte o play.
            </p>

            <div className="listen-stats">
              <div className="listen-stat">
                <span className="listen-stat-num">49+</span>
                <span className="listen-stat-label">Episódios</span>
              </div>
              <div className="listen-stat-div" aria-hidden="true" />
              <div className="listen-stat">
                <span className="listen-stat-num">6</span>
                <span className="listen-stat-label">Plataformas</span>
              </div>
              <div className="listen-stat-div" aria-hidden="true" />
              <div className="listen-stat">
                <span className="listen-stat-num">∞</span>
                <span className="listen-stat-label">Assuntos</span>
              </div>
            </div>

            {/* Decorative waveform */}
            <div className="listen-wave" aria-hidden="true">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="listen-wave-bar"
                  style={{
                    animationDelay: `${(i * 0.055).toFixed(2)}s`,
                    height: `${14 + ((i * 9 + 3) % 32)}px`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Right: platform grid ── */}
          <div className="platforms-grid" data-aos="fade-left" data-aos-delay="200">
            {PLATFORMS.map(({ name, icon, color, href }, i) => (
              <a
                key={name}
                href={href}
                className="platform-card"
                style={{ '--platform-color': color }}
                aria-label={`Ouvir no ${name}`}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                data-aos-delay={100 + i * 70}
              >
                <div className="platform-card-icon" aria-hidden="true">
                  <i className={icon} />
                </div>
                <span className="platform-card-name">{name}</span>
                <span className="platform-card-cta">
                  Ouvir agora <i className="fas fa-arrow-right" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listen;
