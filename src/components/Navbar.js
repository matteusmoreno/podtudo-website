import React, { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Sobre',          id: 'about',    icon: 'fa-circle-info'  },
  { label: 'Apresentadores', id: 'hosts',    icon: 'fa-users'        },
  { label: 'Episódios',      id: 'episodes', icon: 'fa-play-circle'  },
  { label: 'Patrocinadores', id: 'sponsors', icon: 'fa-handshake'    },
];

function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [active,     setActive]     = useState('');
  const [progress,   setProgress]   = useState(0);
  const progressRef = useRef(null);

  /* scroll progress + scrolled state */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const ids = [...NAV_ITEMS.map((n) => n.id), 'listen'];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* close menu on ESC key */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  /* close menu on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger'))
        setMenuOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}
      aria-label="Navegação principal"
    >
      {/* scroll progress bar */}
      <div className="nav-progress" ref={progressRef}>
        <div className="nav-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Ir para o início"
          onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/assets/podtudo-logo.png" alt="" aria-hidden="true" />
          <span className="navbar-wordmark">
            PodTudo <span className="navbar-wordmark-sub">Podcast</span>
          </span>
        </div>

        {/* Nav links — desktop only */}
        <ul className="nav-links" role="menubar" aria-label="Menu de navegação">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id} role="none">
              <button
                role="menuitem"
                className={active === id ? 'active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
                <span className="nav-link-bar" aria-hidden="true" />
              </button>
            </li>
          ))}
          <li role="none">
            <button
              className={`nav-cta${active === 'listen' ? ' active' : ''}`}
              role="menuitem"
              onClick={() => scrollTo('listen')}
            >
              <i className="fas fa-headphones" aria-hidden="true" />
              Assistir Agora
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>

    {/* ── Full-screen mobile overlay ── */}
    {menuOpen && (
      <div
        className="mobile-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* decorative orbs */}
        <div className="mobile-overlay-orb orb-a" aria-hidden="true" />
        <div className="mobile-overlay-orb orb-b" aria-hidden="true" />

        <div className="mobile-overlay-inner">

          {/* header row */}
          <div className="mobile-overlay-header">
            <div
              className="mobile-overlay-logo"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && (window.scrollTo({ top: 0, behavior: 'smooth' }), setMenuOpen(false))}
              aria-label="Ir para o início"
            >
              <img src="/assets/podtudo-logo.png" alt="" aria-hidden="true" />
              <span className="navbar-wordmark">
                PodTudo <span className="navbar-wordmark-sub">Podcast</span>
              </span>
            </div>
            <button
              className="mobile-overlay-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <i className="fas fa-times" aria-hidden="true" />
            </button>
          </div>

          {/* big nav items */}
          <nav className="mobile-overlay-nav" aria-label="Seções do site">
            {NAV_ITEMS.map(({ label, id, icon }, i) => (
              <button
                key={id}
                className={`mobile-nav-item${active === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
                style={{ '--i': i }}
                aria-current={active === id ? 'page' : undefined}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                <span className="mobile-nav-label">{label}</span>
                <i className={`fas ${icon}`} aria-hidden="true" />
              </button>
            ))}
          </nav>

          {/* footer: CTA + tagline */}
          <div className="mobile-overlay-footer">
            <button
              className={`mobile-overlay-cta${active === 'listen' ? ' active' : ''}`}
              onClick={() => scrollTo('listen')}
            >
              <i className="fas fa-headphones" aria-hidden="true" />
              Assistir Agora
            </button>
            <p className="mobile-overlay-tag">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              De Saquarema, RJ para o mundo
            </p>
          </div>

        </div>
      </div>
    )}
  </>
  );
}

export default Navbar;
