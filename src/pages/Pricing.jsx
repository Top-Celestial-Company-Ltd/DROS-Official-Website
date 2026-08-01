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
            Specialized Compliance Modules
          </span>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', marginBottom: '0.8rem', color: '#fff'}}>
            三大高價值獨立產業合規加購套裝包 (Paid Add-On Solution Packages)
          </h2>
          <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto'}}>
            對接歐盟 ESPR 碳護照、金融防洗錢個資法與美國 HIPAA 醫療隱私法規之專用加購模組 ($4,990 USD / 年)
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          
          {/* Add-On 1: ESPR DPP */}
          <div className="glass-card" style={{padding: '2.5rem 2rem', border: '1px solid rgba(56, 189, 248, 0.3)', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <span style={{fontSize: '0.75rem', fontWeight: 'bold', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid #38bdf8', padding: '3px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem'}}>
                REGULATION: EU ESPR / CBAM
              </span>
              <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem'}}>🌿 DROS-ESPR-DPP Package</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#4ade80', margin: '0.5rem 0', fontFamily: 'monospace'}}>$4,990 <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>/ year</span></div>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                歐盟跨國供應鏈碳護照零知識過濾套裝包。解決歐盟 ESPR (DPP) 法規透明要求與企業核心 BOM 配方商業機密洩漏之零和衝突！零知識產出可信碳足跡證明。
              </p>
            </div>
            <a href="https://drosvajra.gumroad.com/l/espr-dpp" target="_blank" rel="noopener noreferrer" className="btn" style={{background: 'linear-gradient(135deg, #ff90e8, #ff63d8)', color: '#000', fontWeight: '800', textAlign: 'center', width: '100%', display: 'block', padding: '1rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(255, 144, 232, 0.3)'}}>
              🛒 前往 Gumroad 購買 ($4,990/年)
            </a>
          </div>

          {/* Add-On 2: FinRisk Privacy */}
          <div className="glass-card" style={{padding: '2.5rem 2rem', border: '1px solid rgba(192, 132, 252, 0.3)', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <span style={{fontSize: '0.75rem', fontWeight: 'bold', color: '#c084fc', background: 'rgba(192, 132, 252, 0.1)', border: '1px solid #c084fc', padding: '3px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem'}}>
                REGULATION: GDPR / AML / TRAVEL RULE
              </span>
              <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem'}}>💳 DROS-FinRisk-Privacy Package</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#4ade80', margin: '0.5rem 0', fontFamily: 'monospace'}}>$4,990 <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>/ year</span></div>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                金融跨機構隱私洗錢聯防套裝包。對接 GDPR 與洗錢防制法。風控 Agent 僅掃描去識別化特徵向量，26.1μs 帶內熔斷人頭洗錢特徵並支援 $O(1)$ Token 秒級凍結。
              </p>
            </div>
            <a href="https://drosvajra.gumroad.com/l/fin-risk" target="_blank" rel="noopener noreferrer" className="btn" style={{background: 'linear-gradient(135deg, #ff90e8, #ff63d8)', color: '#000', fontWeight: '800', textAlign: 'center', width: '100%', display: 'block', padding: '1rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(255, 144, 232, 0.3)'}}>
              🛒 前往 Gumroad 購買 ($4,990/年)
            </a>
          </div>

          {/* Add-On 3: Health HIPAA */}
          <div className="glass-card" style={{padding: '2.5rem 2rem', border: '1px solid rgba(74, 222, 128, 0.3)', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <span style={{fontSize: '0.75rem', fontWeight: 'bold', color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', border: '1px solid #4ade80', padding: '3px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem'}}>
                REGULATION: US HIPAA / EU EHDS
              </span>
              <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem'}}>🏥 DROS-Health-HIPAA Package</h3>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#4ade80', margin: '0.5rem 0', fontFamily: 'monospace'}}>$4,990 <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>/ year</span></div>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                醫療健康個資與跨院同意書治理套裝包。對接 US HIPAA 與醫療隱私法規。內建病歷 PHI 動態去識別過濾器與患者電子同意書動態 Token 驗證。
              </p>
            </div>
            <a href="https://drosvajra.gumroad.com/l/health-hipaa" target="_blank" rel="noopener noreferrer" className="btn" style={{background: 'linear-gradient(135deg, #ff90e8, #ff63d8)', color: '#000', fontWeight: '800', textAlign: 'center', width: '100%', display: 'block', padding: '1rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(255, 144, 232, 0.3)'}}>
              🛒 前往 Gumroad 購買 ($4,990/年)
            </a>
          </div>

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
