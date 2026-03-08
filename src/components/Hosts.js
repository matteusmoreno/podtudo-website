import React, { useEffect, useRef, useState } from 'react';
import HOSTS from '../data/hosts';

function Hosts() {
  const swiperRef   = useRef(null);
  const swiperInst  = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  /* track breakpoint */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /* init / destroy swiper based on breakpoint */
  useEffect(() => {
    if (isMobile) {
      if (!window.Swiper || !swiperRef.current || swiperInst.current) return;
      swiperInst.current = new window.Swiper(swiperRef.current, {
        slidesPerView: 2,
        spaceBetween: 16,
        grabCursor: true,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
        pagination: { el: '.hosts-swiper-pagination', clickable: true },
        breakpoints: {
          360: { slidesPerView: 1.6, spaceBetween: 14 },
          480: { slidesPerView: 2,   spaceBetween: 16 },
          640: { slidesPerView: 2.4, spaceBetween: 18 },
        },
      });
    } else {
      if (swiperInst.current) {
        swiperInst.current.destroy(true, true);
        swiperInst.current = null;
      }
    }
    return () => {
      if (swiperInst.current) {
        swiperInst.current.destroy(true, true);
        swiperInst.current = null;
      }
    };
  }, [isMobile]);

  const cards = HOSTS.map(({ name, image, role, socials }, i) => (
    <article
      key={name}
      className={isMobile ? 'swiper-slide host-card' : 'host-card'}
      {...(!isMobile && { 'data-aos': 'fade-up', 'data-aos-delay': i * 120 })}
    >
      <div className="host-card-inner">
        <div className="host-card-accent" aria-hidden="true" />
        <div className="host-img-wrap">
          <img src={image} alt={`Foto de ${name}`} loading="lazy" />
          <div className="host-img-glow" aria-hidden="true" />
        </div>
        <div className="host-info">
          <h3 className="host-name">{name}</h3>
          <span className="host-role">{role}</span>
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
  ));

  return (
    <section className="hosts section" id="hosts" aria-labelledby="hosts-title">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">A Equipe</span>
          <h2 className="section-title" id="hosts-title">
            Conheça os <span className="gradient-text">Apresentadores</span>
          </h2>
        </div>

        {isMobile ? (
          <div className="hosts-swiper-wrap" data-aos="fade-up">
            <div className="swiper hosts-swiper" ref={swiperRef}>
              <div className="swiper-wrapper">{cards}</div>
            </div>
            <div className="hosts-swiper-pagination swiper-pagination" />
          </div>
        ) : (
          <div className="hosts-grid">{cards}</div>
        )}
      </div>
    </section>
  );
}

export default Hosts;
