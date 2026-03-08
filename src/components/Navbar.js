import React, { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Sobre',          id: 'about'    },
  { label: 'Apresentadores', id: 'hosts'    },
  { label: 'Episódios',      id: 'episodes' },
  { label: 'Patrocinadores', id: 'sponsors' },
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

        {/* Desktop links */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="menubar">
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

      {/* Mobile backdrop */}
      {menuOpen && (
        <div className="nav-backdrop" aria-hidden="true" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}

export default Navbar;
