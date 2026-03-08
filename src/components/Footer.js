import React from 'react';

const NAV_LINKS  = ['Sobre', 'Apresentadores', 'Episódios', 'Patrocinadores'];
const NAV_IDS    = ['about', 'hosts', 'episodes', 'sponsors'];
const PLATFORMS  = ['Spotify', 'YouTube', 'Apple Podcasts', 'Amazon Music'];
const SOCIALS    = [
  { href: 'https://www.youtube.com/@PodTudoE.C', icon: 'fab fa-youtube', label: 'YouTube' },
  { href: 'https://www.tiktok.com/@podtudoec',   icon: 'fab fa-tiktok',  label: 'TikTok'  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img src="/assets/podtudo-logo.png" alt="PodTudo E.C." className="footer-logo" />
            <p>O podcast mais democrático da internet.</p>
            <nav className="footer-social" aria-label="Redes sociais">
              {SOCIALS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                >
                  <i className={icon} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          <nav className="footer-nav" aria-label="Links do site">
            <h4>Navegação</h4>
            <ul>
              {NAV_LINKS.map((item, i) => (
                <li key={item}>
                  <a href={`#${NAV_IDS[i]}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Plataformas de escuta">
            <h4>Ouvir em</h4>
            <ul>
              {PLATFORMS.map((p) => (
                <li key={p}><a href="/">{p}</a></li>
              ))}
            </ul>
          </nav>

          <address className="footer-contact">
            <h4>Contato</h4>
            <p><i className="fas fa-map-marker-alt" aria-hidden="true" /> Saquarema — RJ, Brasil</p>
            <p><i className="fas fa-envelope" aria-hidden="true" /> <a href="mailto:podtudoec@gmail.com">podtudoec@gmail.com</a></p>
          </address>

        </div>

        <div className="footer-bottom">
          <p>© {currentYear} PodTudo E.C. — Todos os direitos reservados.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/matteusmoreno/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-dev-link"
            >
              Matteus Moreno
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
