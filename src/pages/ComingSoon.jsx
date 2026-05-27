import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ComingSoon() {
  const { t } = useTranslation('comingsoon');

  return (
    <main className="container" style={{paddingTop: '8rem', paddingBottom: '8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      <div className="glass-card" style={{ maxWidth: '600px', textAlign: 'center', padding: '4rem 3rem', background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.05), rgba(20,20,20,0.8))', border: '1px solid rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(212, 175, 55, 0.1)' }}>
        
        {/* Animated Lock/Store Icon Placeholder */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', border: '2px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)', animation: 'pulse 2s infinite' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        </div>

        <span style={{background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold)', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(212, 175, 55, 0.4)', textTransform: 'uppercase', letterSpacing: '1px'}}>
          {t('badge')}
        </span>
        
        <h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '2rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, #fff, var(--accent-gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} dangerouslySetInnerHTML={{ __html: t('title') }}>
        </h1>
        
        <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8'}}>
          {t('subtitle')}
        </p>

        <Link to="/pricing" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
          {t('btn_return')}
        </Link>
      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
      `}</style>
    </main>
  );
}
