import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh-TW' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/solutions', label: t('nav.solutions') },
    { path: '/trust', label: t('nav.trust') },
    { path: '/docs', label: t('nav.docs') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/about', label: t('nav.about') },
    { path: '/faq', label: t('nav.faq') },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(5, 5, 5, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '1rem 0'
    }} className="global-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        {/* Logo */}
        <Link to="/" onClick={closeMenu} style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logos/dros-logo-transparent-white.png" alt="DROS Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
          <span>DROS™</span>
        </Link>

        {/* Desktop Menu Links */}
        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              style={{ color: currentPath === item.path ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}
            >
              {item.label}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-primary)',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }}
          >
            <span style={{ color: i18n.language === 'en' ? 'var(--accent-gold)' : 'var(--text-secondary)' }}>EN</span>
            <span style={{ color: 'var(--text-dim)' }}>|</span>
            <span style={{ color: i18n.language !== 'en' ? 'var(--accent-gold)' : 'var(--text-secondary)' }}>TW</span>
          </button>

          <Link to="/pricing" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>{t('nav.get_started')}</Link>
        </div>

        {/* Hamburger Menu Button (Three Lines) */}
        <button 
          className="nav-hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 110
          }}
        >
          <span className={`hamburger-line ${isOpen ? 'open-1' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open-2' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open-3' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu Panel */}
      <div className={`nav-menu-mobile ${isOpen ? 'active' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              onClick={closeMenu}
              className="mobile-nav-link"
              style={{ 
                color: currentPath === item.path ? 'var(--accent-gold)' : 'var(--text-primary)', 
                textDecoration: 'none', 
                fontWeight: '600',
                fontSize: '1.2rem',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.02)'
              }}
            >
              {item.label}
            </Link>
          ))}
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>Language / 語言</span>
            <button 
              onClick={toggleLanguage}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-primary)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center'
              }}
            >
              <span style={{ color: i18n.language === 'en' ? 'var(--accent-gold)' : 'var(--text-secondary)' }}>EN</span>
              <span style={{ color: 'var(--text-dim)' }}>|</span>
              <span style={{ color: i18n.language !== 'en' ? 'var(--accent-gold)' : 'var(--text-secondary)' }}>TW</span>
            </button>
          </div>

          <Link 
            to="/pricing" 
            onClick={closeMenu}
            className="btn btn-primary" 
            style={{ padding: '1rem', fontSize: '1.1rem', textAlign: 'center', marginTop: '1.5rem', width: '100%' }}
          >
            {t('nav.get_started')}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
