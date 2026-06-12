import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

// DROS Visual Assets
import drosDefenseLayersZh from '../assets/DROS_Visual_Assets/dros_defense_layers_zh.png';
import drosDefenseLayersEn from '../assets/DROS_Visual_Assets/dros_defense_layers_en.png';
import drosVajraClawVideo from '../assets/DROS_Visual_Assets/DROS-VajraClaw.mp4';

export default function Solutions() {
  const { t, i18n } = useTranslation();
  
  const isZh = i18n.language && i18n.language.startsWith('zh');
  const defenseLayers = isZh ? drosDefenseLayersZh : drosDefenseLayersEn;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Helmet>
        <title>{t('solutions.hero.title_highlight')} | DROS</title>
        <meta name="description" content="DROS Enterprise Solutions: VajraClaw, VajraClaw+, and VajraAgent." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', padding: '8rem 2rem 4rem' }}>
        <div className="container animate-fade-up">
          <h1>
            {t('solutions.hero.title_prefix')}
            <span className="gold-text">{t('solutions.hero.title_highlight')}</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto 3rem auto', maxWidth: '800px' }} 
             dangerouslySetInnerHTML={{ __html: t('solutions.hero.subtitle') }} />
        </div>
      </section>

      {/* Product Ecosystem Section */}
      <section style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            {/* Free Trial */}
            <div className="glass-card animate-fade-up delay-1">
              <div className="kernel-icon">🎁</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{t('solutions.products.free_trial.title')}</h3>
              <div className="platform-tag" style={{ display: 'inline-block', marginBottom: '1rem', color: '#a0a0a0' }}>
                {t('solutions.products.free_trial.tag')}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t('solutions.products.free_trial.desc')}
              </p>
            </div>

            {/* DROS Engine */}
            <div className="glass-card animate-fade-up delay-2" style={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}>
              <div className="kernel-icon" style={{ color: 'var(--accent-blue)' }}>⚡</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{t('solutions.products.dros_engine.title')}</h3>
              <div className="platform-tag" style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--accent-blue)', borderColor: 'rgba(0, 240, 255, 0.3)' }}>
                {t('solutions.products.dros_engine.tag')}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t('solutions.products.dros_engine.desc')}
              </p>
            </div>

            {/* DROS Engine+ */}
            <div className="glass-card animate-fade-up delay-3" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <div className="kernel-icon" style={{ color: 'var(--accent-gold)' }}>🛡️</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{t('solutions.products.dros_engine_plus.title')}</h3>
              <div className="platform-tag" style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--accent-gold)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                {t('solutions.products.dros_engine_plus.tag')}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t('solutions.products.dros_engine_plus.desc')}
              </p>
            </div>

            {/* VajraAgent */}
            <div className="glass-card animate-fade-up delay-1" style={{ borderColor: 'rgba(210, 168, 255, 0.3)' }}>
              <div className="kernel-icon" style={{ color: '#d2a8ff' }}>🧠</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{t('solutions.products.vajra_agent.title')}</h3>
              <div className="platform-tag" style={{ display: 'inline-block', marginBottom: '1rem', color: '#d2a8ff', borderColor: 'rgba(210, 168, 255, 0.3)' }}>
                {t('solutions.products.vajra_agent.tag')}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t('solutions.products.vajra_agent.desc')}
              </p>
            </div>

            {/* DROS Mobile SDK */}
            <div className="glass-card animate-fade-up delay-2" style={{ borderColor: 'rgba(39, 201, 63, 0.3)' }}>
              <div className="kernel-icon" style={{ color: '#27c93f' }}>📱</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{t('solutions.products.dros_mobile.title')}</h3>
              <div className="platform-tag" style={{ display: 'inline-block', marginBottom: '1rem', color: '#27c93f', borderColor: 'rgba(39, 201, 63, 0.3)' }}>
                {t('solutions.products.dros_mobile.tag')}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t('solutions.products.dros_mobile.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Demo Showcase */}
      <section className="container animate-fade-up delay-2" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.8rem', fontFamily: 'Noto Serif TC, serif' }}>
            {isZh ? 'VajraClaw 核心防禦運行演示' : 'VajraClaw Execution Governance Video Demo'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
            {isZh 
              ? '觀看實體運作中的 VajraClaw 引擎如何在作業系統的 C-ABI / FFI 邊界阻斷惡意 System Call、執行安全熔斷並記錄不可否認的審計日誌。' 
              : 'Watch how the VajraClaw engine intercepts malicious system calls at the OS FFI boundary, triggers safe execution panics, and logs cryptographic audit trails.'}
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#0d0d12', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <video src={drosVajraClawVideo} controls style={{ width: '100%', display: 'block', backgroundColor: '#000' }} />
        </div>
      </section>

      {/* The Three Planes of Defense */}
      <section style={{ backgroundColor: 'rgba(20,20,20,0.3)', padding: '6rem 0' }}>
        <div className="container animate-fade-up delay-2">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('solutions.planes.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              {t('solutions.architecture.desc')}
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Planes list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Layer 1 */}
              <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderLeft: '4px solid var(--accent-blue)', padding: '1.5rem' }}>
                <div className="kernel-icon" style={{ fontSize: '2.5rem', margin: 0, color: 'var(--accent-blue)' }}>🧠</div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>{t('solutions.planes.layer1.title')}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('solutions.planes.layer1.desc')}</p>
                </div>
              </div>

              {/* Layer 2 */}
              <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderLeft: '4px solid #a0a0a0', padding: '1.5rem' }}>
                <div className="kernel-icon" style={{ fontSize: '2.5rem', margin: 0, color: '#a0a0a0' }}>🕸️</div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#f0f0f0' }}>{t('solutions.planes.layer2.title')}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('solutions.planes.layer2.desc')}</p>
                </div>
              </div>

              {/* Layer 3 */}
              <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderLeft: '4px solid var(--accent-gold)', padding: '1.5rem' }}>
                <div className="kernel-icon" style={{ fontSize: '2.5rem', margin: 0, color: 'var(--accent-gold)' }}>⚡</div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>{t('solutions.planes.layer3.title')}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t('solutions.planes.layer3.desc')}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Diagram */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <img src={defenseLayers} alt="DROS Defense Layers Architecture" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                ℹ️ {isZh ? '圖-2：DROS 多層確信防護架構' : 'fig-2: DROS Multi-Layer Assurance Defense Architecture'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Implemented Features (Dimensional Strike) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container animate-fade-up delay-3">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('solutions.features.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              {t('solutions.features.subtitle')}
            </p>
          </div>
          
          <div className="grid-3">
            <div className="glass-card" style={{ background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#27c93f' }}>✓</span> {t('solutions.features.items.mmap.title')}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t('solutions.features.items.mmap.desc')}</p>
            </div>
            
            <div className="glass-card" style={{ background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#27c93f' }}>✓</span> {t('solutions.features.items.ephemeral.title')}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t('solutions.features.items.ephemeral.desc')}</p>
            </div>

            <div className="glass-card" style={{ background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#27c93f' }}>✓</span> {t('solutions.features.items.airgap.title')}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t('solutions.features.items.airgap.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div className="container animate-fade-up delay-3">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t('solutions.cta.title')}</h2>
          <div className="hero-buttons">
            <a href="mailto:sales@top-celestial.com" className="btn btn-primary">{t('solutions.cta.btn_contact')}</a>
            <a href="mailto:demo@top-celestial.com" className="btn btn-secondary">{t('solutions.cta.btn_demo')}</a>
          </div>
        </div>
      </section>
    </>
  );
}
