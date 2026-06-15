import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation('about');
  
  const isZh = i18n.language === 'zh-TW';
  const whitepaperLink = isZh
    ? '/docs/DROS_Runtime_Attribution_Framework_ZH.pdf'
    : '/docs/DROS_Runtime_Attribution_Framework_EN.pdf';

  return (
    <main className="container" style={{paddingTop: '4rem', paddingBottom: '6rem'}}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Hero Section */}
      <section style={{textAlign: 'center', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 5rem auto'}}>
        <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', background: 'linear-gradient(to right, #fff, var(--text-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>
        <h2 style={{fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: '500'}}>{t('hero.subtitle')}</h2>
        <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('hero.desc') }}></p>
      </section>

      {/* Core Narrative Sections */}
      <div className="grid-1" style={{ gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Philosophy */}
        <div className="glass-card" style={{ padding: '3rem', borderLeft: '4px solid #fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', opacity: '0.05', transform: 'rotate(15deg)' }}>{t('sections.philosophy.icon')}</div>
          <h3 className="serif-font" style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
            <span>{t('sections.philosophy.icon')}</span> {t('sections.philosophy.title')}
          </h3>
          <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('sections.philosophy.desc') }}></p>
        </div>

        {/* Origin / Dharma */}
        <div className="glass-card" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-gold)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', opacity: '0.05', transform: 'rotate(15deg)' }}>{t('sections.origin.icon')}</div>
          <h3 className="serif-font" style={{fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
            <span>{t('sections.origin.icon')}</span> {t('sections.origin.title')}
          </h3>
          <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('sections.origin.desc') }}></p>
        </div>

        {/* Niche: Switzerland */}
        <div className="glass-card" style={{ padding: '3rem', borderLeft: '4px solid #e53935', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', opacity: '0.05', transform: 'rotate(15deg)' }}>{t('sections.niche.icon')}</div>
          <h3 className="serif-font" style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#e53935', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
            <span>{t('sections.niche.icon')}</span> {t('sections.niche.title')}
          </h3>
          <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('sections.niche.desc') }}></p>
        </div>

        {/* Vision */}
        <div className="glass-card" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-blue)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', opacity: '0.05', transform: 'rotate(15deg)' }}>{t('sections.vision.icon')}</div>
          <h3 className="serif-font" style={{fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
            <span>{t('sections.vision.icon')}</span> {t('sections.vision.title')}
          </h3>
          <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('sections.vision.desc') }}></p>
        </div>

      </div>

      {/* CTA Section */}
      <section className="final-cta" style={{textAlign: 'center', padding: '6rem 5%', background: 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.05))', borderRadius: '16px', margin: '5rem auto 0 auto', maxWidth: '900px'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-gold)'}} dangerouslySetInnerHTML={{ __html: t('cta.title') }}></h2>
          <p style={{fontSize: '1.3rem', color: 'var(--text-light)', marginBottom: '2rem'}}>{t('cta.subtitle')}</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="mailto:founders@dr-os.io" className="btn btn-primary" style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>{t('cta.btn_contact')}</a>
            <a href={whitepaperLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>{t('cta.btn_docs')}</a>
          </div>
      </section>
    </main>
  );
}
