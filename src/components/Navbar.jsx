import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

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
          <Link to="/" style={{ color: currentPath === '/' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>Home</Link>
          <Link to="/docs" style={{ color: currentPath === '/docs' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>Docs</Link>
          <Link to="/pricing" style={{ color: currentPath === '/pricing' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>Pricing</Link>
          <Link to="/faq" style={{ color: currentPath === '/faq' ? 'var(--accent-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>FAQ</Link>
          <Link to="/pricing" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Get VajraClaw</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
