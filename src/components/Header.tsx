import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(true)}
        className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}
        aria-label="Abrir menu lateral"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="text-xl leading-none">≡</span>
        Menu
      </button>

      {isMobileMenuOpen && (
        <button
          type="button"
          className={styles.mobileMenuBackdrop}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fechar menu lateral"
        />
      )}

      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''}`}>
        <Link to="/" className={styles.sidebarBrand} onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/giro-b2b-logo-light.svg"
            alt="Giro B2B"
            className="w-12 h-12 rounded-lg bg-white object-contain p-0.5 shrink-0"
          />
          <div className="leading-tight">
            <div className="text-xl font-black tracking-tight text-white">Giro B2B</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">SaaS B2B Connector</div>
          </div>
        </Link>

        <nav className={styles.sidebarNav}>
          <a
            href="/#features"
            onClick={(e) => scrollToSection(e, 'features')}
            className={styles.sidebarNavLink}
          >
            Funcionalidades
          </a>
          <a
            href="/#pricing"
            onClick={(e) => scrollToSection(e, 'pricing')}
            className={styles.sidebarNavLink}
          >
            Investimento
          </a>
          <Link
            to="/about"
            className={`${styles.sidebarNavLink} ${pathname === '/about' ? styles.sidebarNavLinkActive : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </Link>
          <a
            href="/#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={styles.sidebarNavLink}
          >
            Contato
          </a>
        </nav>

        <div className={styles.sidebarCtaGroup}>
          <a
            href="/#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={styles.sidebarCta}
          >
            Seja um Parceiro
          </a>
          <a
            href="/#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={styles.sidebarCtaSecondary}
          >
            Entre em contato
          </a>
        </div>

        <div className={styles.sidebarFooter}>
          <p>Conecte compradores e fornecedores em um único ecossistema.</p>
        </div>
      </aside>
    </>
  );
};

export default Header;
