import React, { useEffect, useRef } from 'react';
import SPONSORS from '../data/sponsors';

function Sponsors() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!window.Swiper || !swiperRef.current) return;
    const swiper = new window.Swiper(swiperRef.current, {
      slidesPerView: 2,
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: '.sponsors-swiper-pagination', clickable: true },
      breakpoints: {
        480:  { slidesPerView: 2,   spaceBetween: 20 },
        768:  { slidesPerView: 3,   spaceBetween: 24 },
        1024: { slidesPerView: 4,   spaceBetween: 28 },
      },
    });
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className="sponsors section" id="sponsors" aria-labelledby="sponsors-title">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Parceiros</span>
          <h2 className="section-title" id="sponsors-title">
            Quem acredita no <span className="gradient-text">PodTudo E.C.</span>
          </h2>
          <p className="section-sub">
            Marcas que apostam no poder da nossa voz e fazem parte dessa história
          </p>
        </div>

        <div className="sponsors-swiper-wrap" data-aos="fade-up">
          <div className="swiper sponsors-swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {SPONSORS.map(({ name, image }) => (
                <div key={name} className="swiper-slide sponsor-card">
                  <div className="sponsor-card-accent" aria-hidden="true" />
                  <div className="sponsor-logo-wrap">
                    <div className="sponsor-logo-glow" aria-hidden="true" />
                    <img src={image} alt={`Logo ${name}`} loading="lazy" />
                  </div>
                  <h3 className="sponsor-name">{name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="sponsors-swiper-pagination swiper-pagination" />
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

