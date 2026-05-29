import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh-TW' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🦞</span> DROS™
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: currentPath === '/' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>{t('nav.home')}</Link>
          <Link to="/about" style={{ color: currentPath === '/about' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>{t('nav.about')}</Link>
          <Link to="/docs" style={{ color: currentPath === '/docs' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>{t('nav.docs')}</Link>
          <Link to="/solutions" style={{ color: currentPath === '/solutions' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>{t('nav.solutions')}</Link>
          <Link to="/pricing" style={{ color: currentPath === '/pricing' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>{t('nav.pricing')}</Link>
          <Link to="/faq" style={{ color: currentPath === '/faq' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>{t('nav.faq')}</Link>
          
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
      </div>
    </nav>
  );
}

export default Navbar;
