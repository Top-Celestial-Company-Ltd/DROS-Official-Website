import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Solutions() {
  const { t } = useTranslation();

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

      {/* The Three Planes of Defense */}
      <section style={{ backgroundColor: 'rgba(20,20,20,0.3)', padding: '6rem 0' }}>
        <div className="container animate-fade-up delay-2">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('solutions.planes.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              {t('solutions.architecture.desc')}
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Layer 1 */}
            <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderLeft: '4px solid var(--accent-blue)' }}>
              <div className="kernel-icon" style={{ fontSize: '3rem', margin: 0, color: 'var(--accent-blue)' }}>🧠</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>{t('solutions.planes.layer1.title')}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{t('solutions.planes.layer1.desc')}</p>
              </div>
            </div>

            {/* Down Arrow */}
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.5rem', margin: '-1rem 0' }}>↓</div>

            {/* Layer 2 */}
            <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderLeft: '4px solid #a0a0a0' }}>
              <div className="kernel-icon" style={{ fontSize: '3rem', margin: 0, color: '#a0a0a0' }}>🕸️</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#f0f0f0' }}>{t('solutions.planes.layer2.title')}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{t('solutions.planes.layer2.desc')}</p>
              </div>
            </div>

            {/* Down Arrow */}
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.5rem', margin: '-1rem 0' }}>↓</div>

            {/* Layer 3 */}
            <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderLeft: '4px solid var(--accent-gold)' }}>
              <div className="kernel-icon" style={{ fontSize: '3rem', margin: 0, color: 'var(--accent-gold)' }}>⚡</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>{t('solutions.planes.layer3.title')}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{t('solutions.planes.layer3.desc')}</p>
              </div>
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
