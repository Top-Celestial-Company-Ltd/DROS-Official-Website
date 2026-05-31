import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation('pricing');

  return (
    <main className="container" style={{paddingTop: '4rem', paddingBottom: '6rem'}}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Header Section */}
      <section style={{textAlign: 'center', marginBottom: '4rem'}}>
        <span style={{background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(212, 175, 55, 0.3)', textTransform: 'uppercase', letterSpacing: '1px'}}>
          {t('badge')}
        </span>
        <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, var(--text-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} dangerouslySetInnerHTML={{ __html: t('title') }}>
        </h1>
        <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>
          {t('subtitle')}
        </p>
      </section>

      {/* Early Adopter Banner */}
      <div style={{background: 'linear-gradient(90deg, rgba(230, 185, 128, 0.05), rgba(230, 185, 128, 0.15), rgba(230, 185, 128, 0.05))', border: '1px solid var(--accent-gold)', padding: '1rem', borderRadius: '12px', textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'}} dangerouslySetInnerHTML={{ __html: t('early_adopter') }}>
      </div>

      <div className="grid-4" style={{ alignItems: 'flex-start' }}>
        {/* Free-Trial Tier */}
        <div className="glass-card pricing-card" style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.6)' }}>
          <h3 className="serif-font" style={{fontSize: '1.8rem', color: 'var(--text-primary)'}} dangerouslySetInnerHTML={{ __html: t('tiers.free_trial.name') }}></h3>
          <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--accent-blue)'}}>{t('tiers.free_trial.price_yearly')}<span style={{fontSize:'1rem', color:'var(--text-secondary)'}}>/yr</span></div>
          <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>{t('tiers.free_trial.price_monthly')}</p>
          <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px', lineHeight: '1.6'}}>{t('tiers.free_trial.desc')}</p>
          <ul className="check-list" style={{textAlign: 'left', marginBottom: '2.5rem', lineHeight: '2.5', color: 'var(--text-primary)'}}>
            {t('tiers.free_trial.features', { returnObjects: true }).map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          
          <details style={{marginBottom: '2rem', textAlign: 'left', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <summary style={{cursor: 'pointer', fontWeight: 'bold', outline: 'none', color: 'var(--accent-blue)'}}>{t('tiers.free_trial.details_title')}</summary>
            <div style={{marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.6'}} dangerouslySetInnerHTML={{ __html: t('tiers.free_trial.details_content') }}></div>
          </details>

          <Link to="/docs" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginBottom: '0.8rem', textAlign: 'center'}}>{t('tiers.free_trial.btn')}</Link>
        </div>

        {/* Hacker Tier */}
        <div className="glass-card pricing-card" style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.6)' }}>
          <h3 className="serif-font" style={{fontSize: '1.8rem', color: 'var(--text-primary)'}} dangerouslySetInnerHTML={{ __html: t('tiers.hacker.name') }}></h3>
          <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--accent-blue)'}}>{t('tiers.hacker.price_yearly')}<span style={{fontSize:'1rem', color:'var(--text-secondary)'}}>/yr</span></div>
          <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>{t('tiers.hacker.price_monthly')}</p>
          <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px', lineHeight: '1.6'}}>{t('tiers.hacker.desc')}</p>
          <ul className="check-list" style={{textAlign: 'left', marginBottom: '2.5rem', lineHeight: '2.5', color: 'var(--text-primary)'}}>
            {t('tiers.hacker.features', { returnObjects: true }).map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          
          <details style={{marginBottom: '2rem', textAlign: 'left', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <summary style={{cursor: 'pointer', fontWeight: 'bold', outline: 'none', color: 'var(--accent-blue)'}}>{t('tiers.hacker.details_title')}</summary>
            <div style={{marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.6'}} dangerouslySetInnerHTML={{ __html: t('tiers.hacker.details_content') }}></div>
          </details>

          <a href="https://drosvajra.gumroad.com/l/vajraclaw_hacker" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginBottom: '0.8rem', textAlign: 'center'}}>{t('tiers.hacker.btn_yearly')}</a>
          <a href="https://drosvajra.gumroad.com/l/vajraclaw_hacker" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', background: 'transparent', border: '1px solid rgba(0, 240, 255, 0.3)', color: 'var(--accent-blue)', textAlign: 'center'}}>{t('tiers.hacker.btn_monthly')}</a>
        </div>

        {/* Startup Tier (Recommended) */}
        <div className="glass-card pricing-card" style={{ padding: '3rem 2rem', borderColor: 'var(--accent-gold)', background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.05), rgba(20,20,20,0.8))', transform: 'scale(1.05)', zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212, 175, 55, 0.15)' }}>
          <div style={{position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: '#000', padding: '0.3rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px'}}>{t('tiers.startup.badge')}</div>
          <h3 className="serif-font" style={{fontSize: '2rem', color: 'var(--accent-gold)'}} dangerouslySetInnerHTML={{ __html: t('tiers.startup.name') }}></h3>
          <div style={{fontSize: '3rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--text-primary)'}}>{t('tiers.startup.price_yearly')}<span style={{fontSize:'1.2rem', color:'var(--text-secondary)'}}>/yr</span></div>
          <p style={{fontSize: '0.9rem', color: 'transparent', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>-</p>
          <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px', lineHeight: '1.6'}}>{t('tiers.startup.desc')}</p>
          <ul className="check-list" style={{textAlign: 'left', marginBottom: '2.5rem', lineHeight: '2.5', color: 'var(--text-primary)'}}>
            {t('tiers.startup.features', { returnObjects: true }).map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <details style={{marginBottom: '2rem', textAlign: 'left', color: 'var(--text-secondary)', background: 'rgba(212, 175, 55, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
            <summary style={{cursor: 'pointer', fontWeight: 'bold', outline: 'none', color: 'var(--accent-gold)'}}>{t('tiers.startup.details_title')}</summary>
            <div style={{marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.6'}} dangerouslySetInnerHTML={{ __html: t('tiers.startup.details_content') }}></div>
          </details>

          <a href="https://drosvajra.gumroad.com/l/vajraclaw_startup" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginTop: '2.8rem', padding: '1.2rem', textAlign: 'center'}}>
            {t('tiers.startup.btn')}
          </a>
        </div>

        {/* Enterprise Tier */}
        <div className="glass-card pricing-card" style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.6)' }}>
          <h3 className="serif-font" style={{fontSize: '1.8rem', color: 'var(--text-primary)'}} dangerouslySetInnerHTML={{ __html: t('tiers.enterprise.name') }}></h3>
          <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--text-primary)'}}>{t('tiers.enterprise.price_yearly')}</div>
          <p style={{fontSize: '0.9rem', color: 'transparent', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>-</p>
          <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px', lineHeight: '1.6'}}>{t('tiers.enterprise.desc')}</p>
          <ul className="check-list" style={{textAlign: 'left', marginBottom: '2.5rem', lineHeight: '2.5', color: 'var(--text-primary)'}}>
            {t('tiers.enterprise.features', { returnObjects: true }).map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <a href="mailto:service@dr-os.io" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginTop: '2.8rem', padding: '1.2rem', textAlign: 'center'}}>
            {t('tiers.enterprise.btn')}
          </a>
        </div>
      </div>

      {/* Pricing Legal Disclaimer */}
      <div style={{marginTop: '5rem', padding: '2rem', background: 'rgba(0, 0, 0, 0.4)', borderLeft: '4px solid var(--accent-gold)', borderRadius: '12px', fontSize: '0.95rem', color: 'var(--text-secondary)', textAlign: 'left', lineHeight: '1.8'}}>
        <strong style={{color: '#ff4d4f', display: 'block', marginBottom: '1rem', fontSize: '1.1rem'}}>{t('disclaimer.title')}</strong>
        <p style={{marginBottom: '0.8rem'}} dangerouslySetInnerHTML={{ __html: t('disclaimer.p1') }}></p>
        <p style={{marginBottom: '0.8rem'}} dangerouslySetInnerHTML={{ __html: t('disclaimer.p2') }}></p>
        <p dangerouslySetInnerHTML={{ __html: t('disclaimer.p3') }}></p>
      </div>

      {/* Final CTA Section */}
      <section className="final-cta" style={{textAlign: 'center', padding: '6rem 5%', background: 'linear-gradient(to bottom, transparent, rgba(230, 185, 128, 0.05))', borderRadius: '16px', margin: '4rem 0'}}>
          <h2 style={{fontSize: '3rem', marginBottom: '1rem'}} dangerouslySetInnerHTML={{ __html: t('cta.title') }}></h2>
          <p style={{fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: '600', marginBottom: '2rem'}}>{t('cta.subtitle')}</p>
          <Link to="/coming-soon" className="btn btn-primary" style={{fontSize: '1.2rem', padding: '1rem 3rem'}}>{t('cta.btn')}</Link>
      </section>
    </main>
  );
}
