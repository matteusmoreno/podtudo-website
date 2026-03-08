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
            <article key={name} className="host-card" data-aos="fade-up" data-aos-delay={i * 120}>
              <div className="host-card-inner">
                <div className="host-img-wrap">
                  <img src={image} alt={name} loading="lazy" />
                  <div className="host-overlay">
                    <div className="host-social">
                      {socials.map(({ icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={icon} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="host-info">
                  <h3>{name}</h3>
                  <span className="host-role">{role}</span>
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
