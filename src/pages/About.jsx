import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation('about');
  
  const isZh = i18n.language === 'zh-TW';
  const whitepaperLink = isZh
    ? '/docs/DROS_Runtime_Attribution_Framework_ZH.pdf'
    : '/docs/DROS_Runtime_Attribution_Framework_EN.pdf';

  const logoAssets = [
    {
      id: 'square-black',
      badge: t('logos.badge_square'),
      name: t('logos.black_bg_white_txt'),
      src: '/logos/dros-logo-square-black.png',
      bgStyle: '#06080d'
    },
    {
      id: 'square-white',
      badge: t('logos.badge_square'),
      name: t('logos.white_bg_black_txt'),
      src: '/logos/dros-logo-square-white.png',
      bgStyle: '#ffffff'
    },
    {
      id: 'circle-black',
      badge: t('logos.badge_circle'),
      name: t('logos.black_bg_white_txt'),
      src: '/logos/dros-logo-circle-black.png',
      bgStyle: '#06080d'
    },
    {
      id: 'circle-white',
      badge: t('logos.badge_circle'),
      name: t('logos.white_bg_black_txt'),
      src: '/logos/dros-logo-circle-white.png',
      bgStyle: '#ffffff'
    },
    {
      id: 'trans-white',
      badge: t('logos.badge_transparent'),
      name: t('logos.trans_white_txt'),
      src: '/logos/dros-logo-transparent-white.png',
      bgStyle: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(6,8,13,0.9) 100%)'
    },
    {
      id: 'trans-black',
      badge: t('logos.badge_transparent'),
      name: t('logos.trans_black_txt'),
      src: '/logos/dros-logo-transparent-black.png',
      bgStyle: '#f3f4f6'
    },
    {
      id: 'spotlight',
      badge: t('logos.spotlight'),
      name: t('logos.spotlight'),
      src: '/logos/dros-logo-spotlight.png',
      bgStyle: '#0a0f1d'
    }
  ];

  return (
    <main className="container" style={{paddingTop: '4rem', paddingBottom: '6rem'}}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Hero Section */}
      <section style={{textAlign: 'center', marginBottom: '4rem', maxWidth: '850px', margin: '0 auto 4rem auto'}}>
        <div className="hero-badge" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 1rem',
          borderRadius: '9999px',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          color: 'var(--accent-gold)',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-code, monospace)',
          marginBottom: '1.5rem'
        }}>
          <span>☸️ OUR ORIGIN STORY & VISION</span>
        </div>
        <h1 style={{fontSize: 'clamp(2.3rem, 4.5vw, 4rem)', marginBottom: '1.25rem', background: 'linear-gradient(to right, #fff, var(--text-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>
        <h2 style={{fontSize: '1.35rem', color: 'var(--accent-gold)', marginBottom: '1.25rem', fontWeight: '500'}}>{t('hero.subtitle')}</h2>
        <p style={{fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('hero.desc') }}></p>
      </section>

      {/* Manifesto Block */}
      <section style={{maxWidth: '900px', margin: '0 auto 5rem auto'}}>
        <div className="glass-card" style={{
          padding: '2.5rem 3rem',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 0 30px rgba(245, 158, 11, 0.1)'
        }}>
          <p style={{fontSize: '1.15rem', color: '#f3f4f6', lineHeight: '1.95', fontWeight: '400', fontFamily: 'var(--font-serif, serif)'}} dangerouslySetInnerHTML={{ __html: t('manifesto.text') }}></p>
        </div>
      </section>

      {/* Core Narrative Sections */}
      <div className="grid-1" style={{ gap: '3.5rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Origin / Story Section */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem' }}>{t('story.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t('story.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-gold)' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>{t('story.card1_title')}</h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '0.8rem' }} dangerouslySetInnerHTML={{ __html: t('story.card1_p1') }}></p>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.75' }} dangerouslySetInnerHTML={{ __html: t('story.card1_p2') }}></p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid #06b6d4' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#06b6d4', marginBottom: '1rem' }}>{t('story.card2_title')}</h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '0.8rem' }} dangerouslySetInnerHTML={{ __html: t('story.card2_p1') }}></p>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.75' }} dangerouslySetInnerHTML={{ __html: t('story.card2_p2') }}></p>
            </div>
          </div>
        </div>

        {/* Metaphor: Sun Wukong & Golden Headband */}
        <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{t('metaphor.title')}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t('metaphor.subtitle')}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(10, 15, 26, 0.7)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #06b6d4' }}>
              <h4 style={{ color: '#06b6d4', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{t('metaphor.m1_title')}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.8' }}>
                <li>▹ {t('metaphor.m1_1')}</li>
                <li>▹ {t('metaphor.m1_2')}</li>
                <li>▹ {t('metaphor.m1_3')}</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(10, 15, 26, 0.7)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{t('metaphor.m2_title')}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.8' }}>
                <li>▹ {t('metaphor.m2_1')}</li>
                <li>▹ {t('metaphor.m2_2')}</li>
                <li>▹ {t('metaphor.m2_3')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Matrix Alignment Table */}
        <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{t('matrix.title')}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t('matrix.subtitle')}</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.04)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '1rem', color: 'var(--accent-gold)', width: '50%' }}>{t('matrix.th1')}</th>
                  <th style={{ padding: '1rem', color: '#06b6d4', width: '50%' }}>{t('matrix.th2')}</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '1rem' }} dangerouslySetInnerHTML={{ __html: t('matrix.t1_left') }}></td>
                  <td style={{ padding: '1rem' }} dangerouslySetInnerHTML={{ __html: t('matrix.t1_right') }}></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '1rem' }} dangerouslySetInnerHTML={{ __html: t('matrix.t2_left') }}></td>
                  <td style={{ padding: '1rem' }} dangerouslySetInnerHTML={{ __html: t('matrix.t2_right') }}></td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem' }} dangerouslySetInnerHTML={{ __html: t('matrix.t3_left') }}></td>
                  <td style={{ padding: '1rem' }} dangerouslySetInnerHTML={{ __html: t('matrix.t3_right') }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Official LOGO Brand Assets Section */}
        <div style={{ marginTop: '1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>{t('logos.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t('logos.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {logoAssets.map((logo) => (
              <div key={logo.id} className="glass-card" style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ width: '100%', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-code, monospace)'
                  }}>
                    {logo.badge}
                  </span>
                </div>

                <div style={{
                  width: '100%',
                  height: '140px',
                  background: logo.bgStyle,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem',
                  marginBottom: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2)'
                }}>
                  <img src={logo.src} alt={logo.name} style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
                </div>

                <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>{logo.name}</h4>

                <a
                  href={logo.src}
                  download
                  className="btn btn-secondary"
                  style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                >
                  📥 {t('logos.btn_download')}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Niche: Switzerland Neutrality */}
        <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid #e53935' }}>
          <h3 className="serif-font" style={{fontSize: '1.75rem', marginBottom: '1.25rem', color: '#e53935'}}>
            {t('niche.title')}
          </h3>
          <p style={{fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('niche.desc') }}></p>
        </div>

        {/* Vision */}
        <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-blue)' }}>
          <h3 className="serif-font" style={{fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--accent-blue)'}}>
            {t('vision.title')}
          </h3>
          <p style={{fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('vision.desc') }}></p>
        </div>

      </div>

      {/* Quote Banner */}
      <section style={{
        textAlign: 'center',
        padding: '3.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.06) 0%, rgba(6, 182, 212, 0.06) 100%)',
        borderRadius: '20px',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        margin: '5rem auto 0 auto',
        maxWidth: '900px'
      }}>
        <blockquote style={{
          fontFamily: 'var(--font-serif, serif)',
          fontSize: '1.35rem',
          lineHeight: '1.7',
          color: '#fff',
          marginBottom: '1.25rem',
          fontStyle: 'normal'
        }}>
          {t('quote.text')}
        </blockquote>
        <cite style={{ fontStyle: 'normal', color: 'var(--accent-gold)', fontSize: '0.95rem' }}>
          {t('quote.author')}
        </cite>
      </section>

      {/* CTA Section */}
      <section className="final-cta" style={{textAlign: 'center', padding: '5rem 5%', background: 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.05))', borderRadius: '16px', margin: '4rem auto 0 auto', maxWidth: '900px'}}>
          <h2 style={{fontSize: '2.3rem', marginBottom: '1rem', color: 'var(--accent-gold)'}} dangerouslySetInnerHTML={{ __html: t('cta.title') }}></h2>
          <p style={{fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem'}}>{t('cta.subtitle')}</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="mailto:founders@dr-os.io" className="btn btn-primary" style={{padding: '0.9rem 2.2rem', fontSize: '1.05rem'}}>{t('cta.btn_contact')}</a>
            <a href={whitepaperLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{padding: '0.9rem 2.2rem', fontSize: '1.05rem'}}>{t('cta.btn_docs')}</a>
          </div>
      </section>
    </main>
  );
}
