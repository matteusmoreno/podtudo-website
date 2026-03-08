import React from 'react';

const FEATURES = [
  { icon: 'fas fa-microphone', title: 'Conteúdo Rico',  desc: 'Episódios variados que falam sobre tudo que importa' },
  { icon: 'fas fa-users',      title: 'Comunidade',     desc: 'Uma família que cresce a cada episódio'              },
  { icon: 'fas fa-heart',      title: 'Feito com Amor', desc: 'Produzido com paixão em Saquarema — RJ'              },
];

function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Sobre o Podcast</span>
          <h2 className="section-title" id="about-title">
            O que é o <span className="gradient-text">PodTudo E.C.</span>?
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text" data-aos="fade-right" data-aos-delay="200">
            <p>
              O <strong>PodTudo E.C.</strong> é o podcast que fala de tudo — porque aqui, cada voz
              tem espaço. Humor, cultura, atualidades, esportes, entrevistas, e muito mais.
              Nascemos em <strong>Saquarema, RJ</strong>, mas a nossa missão é chegar em todo lugar.
            </p>
            <p>
              Com apresentadores apaixonados e um formato livre e descontraído, o PodTudo E.C.
              redefine o que é um podcast. Nada de pauta engessada — aqui a democracia rege
              o conteúdo.
            </p>

            <div className="about-features">
              {FEATURES.map(({ icon, title, desc }) => (
                <div className="feature-item" key={title}>
                  <div className="feature-icon" aria-hidden="true">
                    <i className={icon} />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card" data-aos="fade-left" data-aos-delay="400">
            <div className="about-card-inner">
              <div className="location-badge">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                <div>
                  <span className="loc-city">Saquarema</span>
                  <span className="loc-state">Rio de Janeiro, Brasil</span>
                </div>
              </div>

              <div className="about-quote">
                <i className="fas fa-quote-left" aria-hidden="true" />
                <blockquote>O podcast mais democrático da internet</blockquote>
              </div>

              <div className="about-wave" aria-hidden="true">
                {Array.from({ length: 22 }).map((_, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{
                      animationDelay: `${(i * 0.07).toFixed(2)}s`,
                      height: `${10 + ((i * 13 + 7) % 40)}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
