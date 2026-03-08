import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Navegação principal">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Ir para o início"
        >
          <img src="/assets/podtudo-logo.png" alt="PodTudo E.C." />
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="menubar">
          {[
            { label: 'Sobre',          id: 'about'    },
            { label: 'Apresentadores', id: 'hosts'    },
            { label: 'Episódios',      id: 'episodes' },
            { label: 'Patrocinadores', id: 'sponsors' },
          ].map(({ label, id }) => (
            <li key={id} role="none">
              <button role="menuitem" onClick={() => scrollTo(id)}>{label}</button>
            </li>
          ))}
          <li role="none">
            <button className="nav-cta" role="menuitem" onClick={() => scrollTo('listen')}>
              Ouvir Agora
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
