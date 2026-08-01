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

          <a href="https://drosvajra.gumroad.com/l/nebkzs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginBottom: '0.8rem', textAlign: 'center'}}>{t('tiers.free_trial.btn')}</a>
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

          <a href="https://drosvajra.gumroad.com/l/vajraclaw-hacker" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginBottom: '0.8rem', textAlign: 'center'}}>{t('tiers.hacker.btn_yearly')}</a>
          <a href="https://drosvajra.gumroad.com/l/vajraclaw-hacker" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', background: 'transparent', border: '1px solid rgba(0, 240, 255, 0.3)', color: 'var(--accent-blue)', textAlign: 'center'}}>{t('tiers.hacker.btn_monthly')}</a>
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

          <a href="https://drosvajra.gumroad.com/l/vajraclaw-startup" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginTop: '2.8rem', padding: '1.2rem', textAlign: 'center'}}>
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
          
          <details style={{marginBottom: '2rem', textAlign: 'left', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <summary style={{cursor: 'pointer', fontWeight: 'bold', outline: 'none', color: 'var(--text-primary)'}}>{t('tiers.enterprise.details_title')}</summary>
            <div style={{marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.6'}} dangerouslySetInnerHTML={{ __html: t('tiers.enterprise.details_content') }}></div>
          </details>

          <a href="https://drosvajra.gumroad.com/l/vajraclaw-enterprise" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginTop: '1rem', padding: '1.2rem', textAlign: 'center'}}>
            {t('tiers.enterprise.btn')}
          </a>
        </div>
      </div>

      {/* ── Paid Add-On Solution Packages Section ── */}
      <section style={{marginTop: '5rem', marginBottom: '3rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
          <span style={{background: 'rgba(192, 132, 252, 0.1)', color: '#c084fc', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(192, 132, 252, 0.3)', textTransform: 'uppercase', letterSpacing: '1px'}}>
            {t('addons.badge')}
          </span>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', marginBottom: '0.8rem', color: '#fff'}}>
            {t('addons.title')}
          </h2>
          <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', marginBottom: '1rem'}}>
            {t('addons.subtitle')}
          </p>
          {/* 新品上市優惠標語 */}
          <div style={{display: 'inline-block', background: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1))', border: '1px solid rgba(251,191,36,0.5)', borderRadius: '12px', padding: '0.7rem 1.6rem', margin: '0 auto 1rem', fontSize: '1rem', fontWeight: 'bold', color: '#fbbf24', letterSpacing: '0.5px'}}>
            🎉 {t('addons.promo')}
          </div>
          <div style={{background: 'rgba(192, 132, 252, 0.08)', border: '1px solid rgba(192, 132, 252, 0.25)', borderRadius: '10px', padding: '0.8rem 1.2rem', maxWidth: '780px', margin: '0 auto', fontSize: '0.9rem', color: '#e2e8f0', textAlign: 'center'}}>
            {t('addons.note')}
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          
          {/* Add-On 1: ESPR DPP */}
          <div className="glass-card" style={{padding: '2.5rem 2rem', border: '1px solid rgba(56, 189, 248, 0.3)', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <span style={{fontSize: '0.75rem', fontWeight: 'bold', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid #38bdf8', padding: '3px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem'}}>
                {t('addons.espr.tag')}
              </span>
              <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem'}}>{t('addons.espr.name')}</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#4ade80', margin: '0.5rem 0', fontFamily: 'monospace'}}>
                {t('addons.espr.price')} <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>{t('addons.espr.unit')}</span>
                <span style={{fontSize: '0.8rem', color: '#9ca3af', textDecoration: 'line-through', marginLeft: '0.6rem', fontFamily: 'inherit'}}>{t('addons.original_price')}</span>
              </div>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                {t('addons.espr.desc')}
              </p>
              <details style={{marginBottom: '1.5rem', background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '8px', padding: '0.8rem 1rem'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', color: '#38bdf8', fontSize: '0.9rem', outline: 'none', userSelect: 'none'}}>{t('addons.details_title')}</summary>
                <div style={{marginTop: '0.8rem', fontSize: '0.87rem', lineHeight: '1.7', color: '#cbd5e1'}} dangerouslySetInnerHTML={{ __html: t('addons.espr.details') }}></div>
              </details>
            </div>
            <a href="https://drosvajra.gumroad.com/l/espr-dpp" target="_blank" rel="noopener noreferrer" className="btn" style={{background: 'linear-gradient(135deg, #ff90e8, #ff63d8)', color: '#000', fontWeight: '800', textAlign: 'center', width: '100%', display: 'block', padding: '1rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(255, 144, 232, 0.3)'}}>
              {t('addons.espr.btn')}
            </a>
          </div>

          {/* Add-On 2: FinRisk Privacy */}
          <div className="glass-card" style={{padding: '2.5rem 2rem', border: '1px solid rgba(192, 132, 252, 0.3)', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <span style={{fontSize: '0.75rem', fontWeight: 'bold', color: '#c084fc', background: 'rgba(192, 132, 252, 0.1)', border: '1px solid #c084fc', padding: '3px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem'}}>
                {t('addons.fintech.tag')}
              </span>
              <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem'}}>{t('addons.fintech.name')}</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#4ade80', margin: '0.5rem 0', fontFamily: 'monospace'}}>
                {t('addons.fintech.price')} <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>{t('addons.fintech.unit')}</span>
                <span style={{fontSize: '0.8rem', color: '#9ca3af', textDecoration: 'line-through', marginLeft: '0.6rem', fontFamily: 'inherit'}}>{t('addons.original_price')}</span>
              </div>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                {t('addons.fintech.desc')}
              </p>
              <details style={{marginBottom: '1.5rem', background: 'rgba(192,132,252,0.05)', border: '1px solid rgba(192,132,252,0.2)', borderRadius: '8px', padding: '0.8rem 1rem'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', color: '#c084fc', fontSize: '0.9rem', outline: 'none', userSelect: 'none'}}>{t('addons.details_title')}</summary>
                <div style={{marginTop: '0.8rem', fontSize: '0.87rem', lineHeight: '1.7', color: '#cbd5e1'}} dangerouslySetInnerHTML={{ __html: t('addons.fintech.details') }}></div>
              </details>
            </div>
            <a href="https://drosvajra.gumroad.com/l/fin-risk" target="_blank" rel="noopener noreferrer" className="btn" style={{background: 'linear-gradient(135deg, #ff90e8, #ff63d8)', color: '#000', fontWeight: '800', textAlign: 'center', width: '100%', display: 'block', padding: '1rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(255, 144, 232, 0.3)'}}>
              {t('addons.fintech.btn')}
            </a>
          </div>

          {/* Add-On 3: Health HIPAA */}
          <div className="glass-card" style={{padding: '2.5rem 2rem', border: '1px solid rgba(74, 222, 128, 0.3)', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <span style={{fontSize: '0.75rem', fontWeight: 'bold', color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', border: '1px solid #4ade80', padding: '3px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem'}}>
                {t('addons.health.tag')}
              </span>
              <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem'}}>{t('addons.health.name')}</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#4ade80', margin: '0.5rem 0', fontFamily: 'monospace'}}>
                {t('addons.health.price')} <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>{t('addons.health.unit')}</span>
                <span style={{fontSize: '0.8rem', color: '#9ca3af', textDecoration: 'line-through', marginLeft: '0.6rem', fontFamily: 'inherit'}}>{t('addons.original_price')}</span>
              </div>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                {t('addons.health.desc')}
              </p>
              <details style={{marginBottom: '1.5rem', background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '8px', padding: '0.8rem 1rem'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', color: '#4ade80', fontSize: '0.9rem', outline: 'none', userSelect: 'none'}}>{t('addons.details_title')}</summary>
                <div style={{marginTop: '0.8rem', fontSize: '0.87rem', lineHeight: '1.7', color: '#cbd5e1'}} dangerouslySetInnerHTML={{ __html: t('addons.health.details') }}></div>
              </details>
            </div>
            <a href="https://drosvajra.gumroad.com/l/health-hipaa" target="_blank" rel="noopener noreferrer" className="btn" style={{background: 'linear-gradient(135deg, #ff90e8, #ff63d8)', color: '#000', fontWeight: '800', textAlign: 'center', width: '100%', display: 'block', padding: '1rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(255, 144, 232, 0.3)'}}>
              {t('addons.health.btn')}
            </a>
          </div>

        </div>
      </section>

      {/* ── Competitive Positioning Section ── */}
      <section style={{marginTop: '5rem', marginBottom: '3rem', padding: '2.5rem 2rem', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(96, 165, 250, 0.25)', borderRadius: '20px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'}}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <span style={{background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', padding: '0.35rem 1.1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(96, 165, 250, 0.3)', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '0.8rem'}}>
            Architecture & Defense Layers
          </span>
          <h2 style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.5rem', background: 'linear-gradient(to right, #fff, var(--text-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            {t('positioning.title')}
          </h2>
          <p style={{color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6'}}>
            {t('positioning.subtitle')}
          </p>
        </div>
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '700px'}}>
            <thead>
              <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)'}}>
                <th style={{padding: '1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '600', width: '28%'}}>{t('positioning.col_dimension')}</th>
                <th style={{padding: '1rem 0.8rem', textAlign: 'center', color: '#60a5fa'}}>{t('positioning.col_conf_vm')}</th>
                <th style={{padding: '1rem 0.8rem', textAlign: 'center', color: '#a78bfa'}}>{t('positioning.col_clean_room')}</th>
                <th style={{padding: '1rem 0.8rem', textAlign: 'center', color: '#94a3b8'}}>{t('positioning.col_api_gw')}</th>
                <th style={{padding: '1rem 0.8rem', textAlign: 'center', color: '#4ade80', fontWeight: '700', background: 'rgba(74,222,128,0.1)', borderRadius: '6px 6px 0 0'}}>{t('positioning.col_dros')}</th>
              </tr>
            </thead>
            <tbody>
              {t('positioning.rows', { returnObjects: true }).map((row, i) => (
                <tr key={i} style={{borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'}}>
                  <td style={{padding: '0.85rem 1rem', color: '#e2e8f0', fontWeight: '500'}}>{row[0]}</td>
                  <td style={{padding: '0.85rem 0.8rem', textAlign: 'center', color: '#94a3b8'}} dangerouslySetInnerHTML={{__html: row[1]}}></td>
                  <td style={{padding: '0.85rem 0.8rem', textAlign: 'center', color: '#94a3b8'}} dangerouslySetInnerHTML={{__html: row[2]}}></td>
                  <td style={{padding: '0.85rem 0.8rem', textAlign: 'center', color: '#94a3b8'}} dangerouslySetInnerHTML={{__html: row[3]}}></td>
                  <td style={{padding: '0.85rem 0.8rem', textAlign: 'center', color: '#4ade80', fontWeight: '600', background: 'rgba(74,222,128,0.05)'}} dangerouslySetInnerHTML={{__html: row[4]}}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop: '1.5rem', background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.25)', borderRadius: '12px', padding: '1.1rem 1.5rem', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.7'}}>
          {t('positioning.footnote')}
        </div>
      </section>

      {/* ── Feature Comparison Matrix ── */}
      <section style={{marginTop: '6rem', marginBottom: '2rem'}}>
        <h2 style={{textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.5rem', background: 'linear-gradient(to right, #fff, var(--text-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          {t('matrix.title')}
        </h2>
        <p style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1rem'}}>{t('matrix.subtitle')}</p>

        <div style={{overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', minWidth: '700px'}}>
            <thead>
              <tr style={{background: 'rgba(255,255,255,0.04)'}}>
                {['matrix.col_feature','matrix.col_free','matrix.col_hacker','matrix.col_startup','matrix.col_enterprise','matrix.col_sovereign'].map((key, i) => (
                  <th key={i} style={{padding: '1rem 0.8rem', textAlign: i === 0 ? 'left' : 'center', fontWeight: 'bold', color: i === 3 ? 'var(--accent-gold)' : 'var(--text-primary)', borderBottom: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap'}}>
                    {t(key)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t('matrix.rows', { returnObjects: true }).map((row, ri) => (
                <tr key={ri} style={{background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{padding: '0.85rem 0.8rem', textAlign: ci === 0 ? 'left' : 'center', color: ci === 0 ? 'var(--text-primary)' : cell === '✅' ? '#4ade80' : cell === '❌' ? 'rgba(255,255,255,0.25)' : cell === '⭐' ? 'var(--accent-gold)' : 'var(--text-secondary)', fontWeight: ci === 0 ? '600' : 'normal'}}
                      dangerouslySetInnerHTML={{ __html: cell }}>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

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
