import React, { useState, useEffect, useRef } from 'react';
import EPISODES, { YOUTUBE_CHANNEL } from '../data/episodes';

const TAG_COLORS = {
  Estreia:    '#8b5cf6',
  Entrevista: '#06b6d4',
  Esportes:   '#ec4899',
  Variedades: '#f59e0b',
  Local:      '#10b981',
  Especial:   '#f43f5e',
};

function EpisodeCard({ num, title, youtubeId, href, tag }) {
  const [imgSrc, setImgSrc] = useState(
    `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  );
  const color = TAG_COLORS[tag] || '#8b5cf6';

  return (
    <a
      href={href}
      className="ep-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Assistir episódio ${num}: ${title}`}
    >
      <div className="ep-card-thumb">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          onError={() => setImgSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`)}
        />
        <div className="ep-card-play-badge" aria-hidden="true">
          <i className="fab fa-youtube" />
        </div>
        <div className="ep-card-overlay" aria-hidden="true">
          <div className="ep-card-play-circle">
            <i className="fas fa-play" />
          </div>
        </div>
        <span className="ep-card-num">#{num}</span>
      </div>
      <div className="ep-card-body">
        <span className="ep-card-tag" style={{ color }}>{tag}</span>
        <h3 className="ep-card-title">{title}</h3>
        <span className="ep-card-watch">
          Assistir no YouTube <i className="fas fa-arrow-right" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

function Episodes() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!window.Swiper || !swiperRef.current) return;
    const swiper = new window.Swiper(swiperRef.current, {
      slidesPerView: 1.2,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: '.ep-swiper-next',
        prevEl: '.ep-swiper-prev',
      },
      pagination: {
        el: '.ep-swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      breakpoints: {
        480:  { slidesPerView: 1.5, spaceBetween: 20 },
        640:  { slidesPerView: 2,   spaceBetween: 22 },
        1024: { slidesPerView: 3,   spaceBetween: 24 },
      },
    });
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className="episodes section" id="episodes" aria-labelledby="episodes-title">
      <div className="container">

        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Conteúdo</span>
          <h2 className="section-title" id="episodes-title">
            Nossos <span className="gradient-text">Episódios</span>
          </h2>
        </div>

        {/* ── NEXT EPISODE FEATURE ── */}
        <div className="next-ep-wrap" data-aos="fade-up" data-aos-delay="100">
          <div className="next-ep-content">
            <span className="next-ep-pill">
              <i className="fas fa-circle" aria-hidden="true" /> Em breve
            </span>
            <h3 className="next-ep-heading">Próximo Episódio</h3>
            <p className="next-ep-hint">
              Fique ligado nas nossas redes sociais para não perder a data de lançamento do próximo episódio!
            </p>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary next-ep-btn"
            >
              <i className="fab fa-youtube" aria-hidden="true" /> Inscreva-se no Canal
            </a>
          </div>
          <div className="next-ep-img-col">
            <div className="next-ep-img-glow" aria-hidden="true" />
            <img src="/assets/next-podcast.png" alt="Próximo convidado" />
          </div>
        </div>

        {/* ── EPISODES CAROUSEL ── */}
        <div className="ep-swiper-wrap" data-aos="fade-up">
          <div className="ep-swiper-header">
            <h3 className="ep-swiper-title">
              <i className="fab fa-youtube" aria-hidden="true" /> Episódios Anteriores
            </h3>
            <div className="ep-swiper-nav">
              <button className="ep-swiper-prev" aria-label="Episódio anterior">
                <i className="fas fa-chevron-left" />
              </button>
              <button className="ep-swiper-next" aria-label="Próximo episódio">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="swiper ep-swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {EPISODES.map(({ num, title, youtubeId, href, tag }) => (
                <div className="swiper-slide" key={num}>
                  <EpisodeCard
                    num={num}
                    title={title}
                    youtubeId={youtubeId}
                    href={href}
                    tag={tag}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="ep-swiper-pagination" />
        </div>

        {/* ── ACTIONS ── */}
        <div className="ep-actions" data-aos="fade-up">
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <i className="fab fa-youtube" aria-hidden="true" /> Ver todos no YouTube
          </a>
        </div>

      </div>
    </section>
  );
}

export default Episodes;


