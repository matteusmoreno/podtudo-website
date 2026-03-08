import React from 'react';

const FEATURES = [
  {
    icon: 'fas fa-microphone-alt',
    label: 'Conteúdo Livre',
    desc: 'Sem pauta engessada. Do humor ao esporte, cada episódio é uma surpresa.',
    color: 'purple',
  },
  {
    icon: 'fas fa-users',
    label: 'Comunidade Real',
    desc: 'Uma galera que cresce junto — com histórias, risadas e debates de verdade.',
    color: 'pink',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Raiz Saquaremense',
    desc: 'Nascemos em Saquarema — RJ com orgulho, mas o papo chega em todo lugar.',
    color: 'cyan',
  },
];

const TAGS = ['#Humor', '#Cultura', '#Esportes', '#Política', '#Atualidades', '#Entrevistas'];

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
          {/* ── Left: text + features ── */}
          <div className="about-text" data-aos="fade-right" data-aos-delay="150">
            <p>
              O <strong>PodTudo E.C.</strong> é o podcast que fala de tudo — porque aqui,
              cada voz tem espaço. Humor, cultura, atualidades, esportes, entrevistas e muito mais.
              Nascemos em <strong>Saquarema, RJ</strong>, mas a nossa missão é chegar em todo lugar.
            </p>
            <p>
              Com apresentadores apaixonados e um formato livre e descontraído, o PodTudo E.C.
              redefine o que é um podcast. Nada de pauta engessada —{' '}
              <span className="about-em">aqui a democracia rege o conteúdo.</span>
            </p>

            <div className="about-features">
              {FEATURES.map(({ icon, label, desc, color }) => (
                <div className={`feature-card feature-card--${color}`} key={label}>
                  <div className="feature-card-icon" aria-hidden="true">
                    <i className={icon} />
                  </div>
                  <div className="feature-card-body">
                    <h4>{label}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual card ── */}
          <div className="about-visual" data-aos="fade-left" data-aos-delay="300">
            <div className="about-card-glow" aria-hidden="true" />
            <div className="about-card">
              <div className="about-wave" aria-hidden="true">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{
                      animationDelay: `${(i * 0.06).toFixed(2)}s`,
                      height: `${12 + ((i * 11 + 5) % 38)}px`,
                    }}
                  />
                ))}
              </div>

              <div className="about-quote">
                <i className="fas fa-quote-left" aria-hidden="true" />
                <blockquote>O podcast mais democrático da internet</blockquote>
              </div>

              <div className="about-location">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                <span>Saquarema — Rio de Janeiro, Brasil</span>
              </div>

              <div className="about-tags">
                {TAGS.map(tag => (
                  <span className="about-tag" key={tag}>{tag}</span>
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
