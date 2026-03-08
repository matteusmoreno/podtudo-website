import React from 'react';
import HOSTS from '../data/hosts';

function Hosts() {
  return (
    <section className="hosts section" id="hosts" aria-labelledby="hosts-title">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">A Equipe</span>
          <h2 className="section-title" id="hosts-title">
            Conheça os <span className="gradient-text">Apresentadores</span>
          </h2>
        </div>

        <div className="hosts-grid">
          {HOSTS.map(({ name, image, role, socials }, i) => (
            <article
              key={name}
              className="host-card"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="host-card-inner">
                {/* Top accent line */}
                <div className="host-card-accent" aria-hidden="true" />

                {/* Photo */}
                <div className="host-img-wrap">
                  <img src={image} alt={`Foto de ${name}`} loading="lazy" />
                  <div className="host-img-glow" aria-hidden="true" />
                </div>

                {/* Info */}
                <div className="host-info">
                  <h3 className="host-name">{name}</h3>
                  <span className="host-role">{role}</span>

                  {/* Social links — sempre visíveis, funciona em touch */}
                  {socials.length > 0 && (
                    <div className="host-social" role="list" aria-label={`Redes de ${name}`}>
                      {socials.map(({ icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          className="host-social-btn"
                          aria-label={label}
                          target="_blank"
                          rel="noopener noreferrer"
                          role="listitem"
                        >
                          <i className={icon} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hosts;
