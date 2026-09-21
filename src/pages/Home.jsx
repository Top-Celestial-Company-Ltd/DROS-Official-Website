import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LinuxDeployModal from '../components/LinuxDeployModal';

// DROS Visual Assets
import drosFlowAnimationZh from '../assets/DROS_Visual_Assets/dros_flow_animation_zh.webp';
import drosFlowAnimationEn from '../assets/DROS_Visual_Assets/dros_flow_animation_en.webp';

export default function Home() {
  const { t, i18n } = useTranslation();
  const githubUser = "Top-Celestial-Company-Ltd";
  const [isCopied, setIsCopied] = useState(false);
  const [isLinuxModalOpen, setIsLinuxModalOpen] = useState(false);

  const isZh = i18n.language && i18n.language.startsWith('zh');
  const flowAnimation = isZh ? drosFlowAnimationZh : drosFlowAnimationEn;

  const handleCopy = () => {
    navigator.clipboard.writeText(t('home.easter_egg.prompt'));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <main>
      <Helmet>
        <title>{t('home.meta_title')}</title>
        <meta name="description" content={t('home.meta_desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-circle-1" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: -1, filter: 'blur(40px)' }}></div>
        <div className="hero-bg-circle-2" style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: -1, filter: 'blur(40px)' }}></div>

        <div style={{ textAlign: 'center', maxWidth: '960px', zIndex: 1, animation: 'fadeUp 1s ease forwards' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '30px', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '1px', fontWeight: '600' }}>
            {t('home.hero.version')}
          </span>
          
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: '800', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            {t('home.hero.title_prefix')}<br/>
            <span style={{ background: 'linear-gradient(135deg, #d4af37, #fff, #00f2fe)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shine 5s linear infinite' }}>
              {t('home.hero.title_highlight')}
            </span>
          </h1>

          {/* Positioning Doctrine Quote */}
          <div style={{ padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            <p style={{ fontSize: '1.15rem', color: '#fff', fontWeight: '700', marginBottom: '0.4rem' }}>
              {t('home.hero.doctrine_title')}
            </p>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
              {t('home.hero.doctrine_subtitle')}
            </p>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--accent-blue)', marginBottom: '2.5rem', fontWeight: '600', maxWidth: '780px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
            {t('home.hero.value_prop')}
          </p>

          {/* Dual-Track Action Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '750px' }}>
              {/* Windows Direct Download Button */}
              <a 
                href="https://github.com/Top-Celestial-Company-Ltd/DROS-VajraClaw-Hacker/releases/latest/download/VajraClaw-Setup.exe" 
                className="btn btn-primary" 
                style={{ 
                  padding: '1.1rem 2.2rem', 
                  fontSize: '1.1rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  minWidth: '280px',
                  boxShadow: '0 10px 25px rgba(212, 175, 55, 0.25)',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801"/></svg>
                  <span>{t('home.hero.btn_win')}</span>
                </div>
                <span style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: '400', marginTop: '0.2rem' }}>
                  {t('home.hero.btn_win_note')}
                </span>
              </a>

              {/* Linux / Docker Deployment Button */}
              <button 
                onClick={() => setIsLinuxModalOpen(true)}
                className="btn btn-secondary" 
                style={{ 
                  padding: '1.1rem 2.2rem', 
                  fontSize: '1.1rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  minWidth: '240px',
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  background: 'rgba(0, 240, 255, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', color: '#38bdf8' }}>
                  <span>🐧</span>
                  <span>{t('home.hero.btn_linux')}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '400', marginTop: '0.2rem' }}>
                  Docker / curl / pip
                </span>
              </button>
            </div>

            {/* Subtle Spec Link */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              <Link to="/docs" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}>
                <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                {t('home.hero.btn_spec')} &rarr;
              </Link>
              <span>•</span>
              <a href="https://drosvajra.gumroad.com/l/nebkzs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>
                {t('home.hero.btn_poc')} &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Terminal & Flow Visualization */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', width: '100%', maxWidth: '1200px', marginTop: '4rem', zIndex: 1, animation: 'fadeUp 1.2s ease forwards', opacity: 0 }}>
          {/* Terminal Code Mockup */}
          <div style={{ background: '#0d0d12', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212, 175, 55, 0.05)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '8px', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
              <div style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>vajra-guard (v1.0.0)</div>
            </div>
            <div style={{ padding: '1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', lineHeight: '1.7', textAlign: 'left', flex: 1 }}>
              <div><span style={{ color: '#8b949e' }}>$</span> <span style={{ color: 'var(--accent-gold)' }}>dros-cli</span> <span style={{ color: '#a5d6ff' }}>mount</span> policy.bin</div>
              <div style={{ color: 'var(--accent-blue)', marginTop: '0.5rem' }}>{t('home.terminal.locked')}</div>
              <div style={{ color: 'var(--accent-blue)' }}>{t('home.terminal.injected')}</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>{t('home.terminal.llm_stream')}</div>
              <div style={{ color: '#ff4d4f', fontWeight: 'bold', marginTop: '0.5rem', padding: '0.5rem', background: 'rgba(255,77,79,0.1)', borderLeft: '3px solid #ff4d4f' }}>
                {t('home.terminal.fuse_blown')}
              </div>
            </div>
          </div>

          {/* Visual Flow Animation */}
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <img src={flowAnimation} alt="DROS Execution Boundary Flow Animation" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
              ℹ️ {isZh ? '圖-1：DROS 執行邊界確定性治理流程' : 'fig-1: DROS Execution Boundary Governance Flow'}
            </span>
          </div>
        </div>
      </section>

      {/* 🏛️ Section 1: Why DROS Deliberately Does Less */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '30px', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '1.2rem', letterSpacing: '2px', fontFamily: 'monospace', fontWeight: '600' }}>
            {t('home.deliberate_less.badge')}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: '1.25', marginBottom: '1.2rem' }}>
            {t('home.deliberate_less.title')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '850px', margin: '0 auto 1.5rem auto', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: t('home.deliberate_less.subtitle') }}></p>
          <div style={{ display: 'inline-block', padding: '0.6rem 1.4rem', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px', color: 'var(--accent-blue)', fontStyle: 'italic', fontWeight: '600', fontSize: '1.05rem' }}>
            {t('home.deliberate_less.principle_quote')}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {t('home.deliberate_less.cards', { returnObjects: true }).map((card, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', borderTop: idx === 0 ? '3px solid var(--accent-gold)' : idx === 1 ? '3px solid var(--accent-blue)' : '3px solid #27c93f' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.8rem', fontWeight: '700' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏛️ Section 2: The Three-Domain Model (Horizontal Semantic Domains) */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.25)', borderRadius: '30px', fontSize: '0.85rem', color: 'var(--accent-blue)', marginBottom: '1.2rem', letterSpacing: '2px', fontFamily: 'monospace', fontWeight: '600' }}>
            {t('home.three_domains.badge')}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: '1.25', marginBottom: '1.2rem' }}>
            {t('home.three_domains.title_prefix')} <span className="gold-text">{t('home.three_domains.title_highlight')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
            {t('home.three_domains.subtitle')}
          </p>
        </div>

        {/* 3 Parallel Domain Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {t('home.three_domains.cards', { returnObjects: true }).map((c, i) => {
            const cardTheme = i === 0 
              ? { border: 'rgba(212,175,55,0.3)', tagBg: 'rgba(212,175,55,0.1)', tagColor: 'var(--accent-gold)' }
              : i === 1 
                ? { border: 'rgba(0,240,255,0.3)', tagBg: 'rgba(0,240,255,0.1)', tagColor: 'var(--accent-blue)' }
                : { border: 'rgba(39,201,63,0.3)', tagBg: 'rgba(39,201,63,0.1)', tagColor: '#27c93f' };

            return (
              <div key={i} className="glass-card" style={{ padding: '2.2rem', border: `1px solid ${cardTheme.border}`, display: 'flex', flexDirection: 'column', position: 'relative', borderRadius: '16px' }}>
                <span style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '0.3rem 0.8rem', background: cardTheme.tagBg, color: cardTheme.tagColor, borderRadius: '6px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '1px', marginBottom: '1rem' }}>
                  {c.tag}
                </span>
                <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.8rem', fontWeight: '700' }}>{c.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '48px' }}>{c.desc}</p>
                
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                  {c.items.map((it, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <span style={{ color: cardTheme.tagColor, fontSize: '0.9rem', marginTop: '0.1rem' }}>•</span>
                      <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{it}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.8rem', color: cardTheme.tagColor, fontFamily: 'monospace', fontWeight: '600' }}>
                  ℹ️ {c.clarification}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 🎯 Section 3: Post-Compromise Containment */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(255,77,79,0.08)', border: '1px solid rgba(255,77,79,0.25)', borderRadius: '30px', fontSize: '0.85rem', color: '#ff4d4f', marginBottom: '1.2rem', letterSpacing: '2px', fontFamily: 'monospace', fontWeight: '600' }}>
            {t('home.post_compromise.badge')}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: '1.25', marginBottom: '1.2rem' }}>
            {t('home.post_compromise.title_prefix')} <span style={{ color: '#ff4d4f' }}>{t('home.post_compromise.title_highlight')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
            {t('home.post_compromise.subtitle')}
          </p>
        </div>

        <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem', border: '1px solid rgba(255,77,79,0.2)', background: 'linear-gradient(180deg, rgba(255,77,79,0.03) 0%, rgba(10,12,18,0.7) 100%)', borderRadius: '18px' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>
            {t('home.post_compromise.card_title')}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            {t('home.post_compromise.card_desc')}
          </p>

          {/* Visual Sequence Pipeline */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.8rem', flexWrap: 'wrap', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ textAlign: 'center', padding: '0.8rem 1rem', background: 'rgba(255,77,79,0.1)', border: '1px solid rgba(255,77,79,0.3)', borderRadius: '8px', minWidth: '150px' }}>
              <div style={{ fontSize: '0.75rem', color: '#ff4d4f', fontFamily: 'monospace' }}>STAGE 1</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#fff' }}>{t('home.post_compromise.flow_agent')}</div>
            </div>
            <div style={{ color: '#8b949e', fontSize: '1.2rem', fontWeight: 'bold' }}>&rarr;</div>
            <div style={{ textAlign: 'center', padding: '0.8rem 1rem', background: 'rgba(255,189,46,0.1)', border: '1px solid rgba(255,189,46,0.3)', borderRadius: '8px', minWidth: '150px' }}>
              <div style={{ fontSize: '0.75rem', color: '#ffbd2e', fontFamily: 'monospace' }}>STAGE 2</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#fff' }}>{t('home.post_compromise.flow_attempt')}</div>
            </div>
            <div style={{ color: '#8b949e', fontSize: '1.2rem', fontWeight: 'bold' }}>&rarr;</div>
            <div style={{ textAlign: 'center', padding: '0.8rem 1rem', background: 'rgba(0,240,255,0.1)', border: '2px solid var(--accent-blue)', borderRadius: '8px', minWidth: '180px', boxShadow: '0 0 15px rgba(0,240,255,0.2)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontFamily: 'monospace', fontWeight: 'bold' }}>ENFORCEMENT GATE</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#fff' }}>{t('home.post_compromise.flow_boundary')}</div>
            </div>
            <div style={{ color: '#ff4d4f', fontSize: '1.2rem', fontWeight: 'bold' }}>&times;</div>
            <div style={{ textAlign: 'center', padding: '0.8rem 1rem', background: 'rgba(255,77,79,0.15)', border: '1px dashed #ff4d4f', borderRadius: '8px', minWidth: '150px' }}>
              <div style={{ fontSize: '0.75rem', color: '#ff4d4f', fontFamily: 'monospace' }}>CONTAINED</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#ff4d4f' }}>{t('home.post_compromise.flow_decision')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('home.pain_points.title_prefix')}<span style={{ color: '#ff4d4f' }}>{t('home.pain_points.title_highlight')}</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{t('home.pain_points.subtitle')}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ borderTop: '3px solid #ff4d4f' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{t('home.pain_points.items.0.title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('home.pain_points.items.0.desc')}</p>
          </div>
          <div className="glass-card" style={{ borderTop: '3px solid #ffbd2e' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{t('home.pain_points.items.1.title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('home.pain_points.items.1.desc')}</p>
          </div>
          <div className="glass-card" style={{ borderTop: '3px solid var(--accent-blue)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{t('home.pain_points.items.2.title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('home.pain_points.items.2.desc')}</p>
          </div>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', background: 'linear-gradient(135deg, rgba(212,175,55,0.1), transparent)', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('home.pain_points.conclusion_title')}</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }} dangerouslySetInnerHTML={{ __html: t('home.pain_points.conclusion_desc') }}></p>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>{t('home.advantages.title_prefix')} <span className="gold-text">{t('home.advantages.title_highlight')}</span>？</h2>
        
        <div className="advantages-grid">
          {t('home.advantages.items', { returnObjects: true }).map((item, index) => {
            let spanClass = 'card-span-4';
            if (index === 0) spanClass = 'card-span-8';
            if (index === 5) spanClass = 'card-span-12';

            const colors = [
              'var(--accent-gold)',
              'var(--accent-blue)',
              '#d2a8ff',
              '#27c93f',
              '#ffbd2e',
              '#ff4d4f'
            ];
            const cardColor = colors[index % colors.length];

            return (
              <div 
                key={index} 
                className={`glass-card ${spanClass}`} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  background: index === 1 ? 'rgba(0, 240, 255, 0.03)' : undefined
                }}
              >
                <h3 style={{ fontSize: index === 0 ? '1.5rem' : '1.3rem', color: cardColor, marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: index === 0 ? '1.1rem' : '1.0rem' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>{t('home.comparison.title_prefix')}<span className="blue-text">{t('home.comparison.title_highlight')}</span></h2>
        {t('home.comparison.desc', { defaultValue: '' }) && (
          <p dangerouslySetInnerHTML={{ __html: t('home.comparison.desc') }} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}></p>
        )}
        <div style={{ overflowX: 'auto', background: 'rgba(20,20,20,0.5)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '1.5rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '600' }}>{t('home.comparison.headers.item')}</th>
                <th style={{ padding: '1.5rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '600' }}>{t('home.comparison.headers.traditional')}</th>
                <th style={{ padding: '1.5rem', textAlign: 'left', color: 'var(--accent-gold)', fontWeight: '600', fontSize: '1.1rem', background: 'rgba(212,175,55,0.05)' }}>{t('home.comparison.headers.dros')}</th>
                <th style={{ padding: '1.5rem', textAlign: 'left', color: '#27c93f', fontWeight: '600' }}>{t('home.comparison.headers.advantage')}</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4].map((i) => (
                <tr key={i} style={{ borderBottom: i !== 4 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <td style={{ padding: '1.5rem', fontWeight: '600' }}>{t(`home.comparison.rows.${i}.item`)}</td>
                  <td style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>{t(`home.comparison.rows.${i}.traditional`)}</td>
                  <td style={{ padding: '1.5rem', background: 'rgba(212,175,55,0.02)' }}>{t(`home.comparison.rows.${i}.dros`)}</td>
                  <td style={{ padding: '1.5rem' }}><span style={{ background: 'rgba(39, 201, 63, 0.15)', color: '#27c93f', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>{t(`home.comparison.rows.${i}.adv`)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Minimal Interface Abstraction (Ingress & Egress) */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.25)', borderRadius: '30px', fontSize: '0.85rem', color: 'var(--accent-blue)', marginBottom: '1.2rem', letterSpacing: '2px', fontFamily: 'monospace', fontWeight: '600' }}>
            {t('home.minimal_interface.badge')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '800', lineHeight: '1.3', marginBottom: '1.2rem' }}>
            {t('home.minimal_interface.title')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: t('home.minimal_interface.subtitle') }}></p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Ingress Card */}
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(0, 240, 255, 0.25)', background: 'linear-gradient(145deg, rgba(0, 240, 255, 0.04) 0%, rgba(10, 15, 25, 0.7) 100%)', borderRadius: '18px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 45px rgba(0,0,0,0.5), 0 0 25px rgba(0,240,255,0.04)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent-blue), transparent)' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.12)', border: '1px solid rgba(0, 240, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                📥
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--accent-blue)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  {t('home.minimal_interface.ingress.badge')}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#fff', margin: 0, fontWeight: '700' }}>
                  {t('home.minimal_interface.ingress.title')}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '1.8rem', flexShrink: 0 }}>
              {t('home.minimal_interface.ingress.desc')}
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              {t('home.minimal_interface.ingress.points', { returnObjects: true }).map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)', marginTop: '0.55rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Egress Card */}
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.25)', background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.04) 0%, rgba(20, 15, 10, 0.7) 100%)', borderRadius: '18px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 45px rgba(0,0,0,0.5), 0 0 25px rgba(212,175,55,0.04)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent-gold), transparent)' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                📤
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--accent-gold)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  {t('home.minimal_interface.egress.badge')}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#fff', margin: 0, fontWeight: '700' }}>
                  {t('home.minimal_interface.egress.title')}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '1.8rem', flexShrink: 0 }}>
              {t('home.minimal_interface.egress.desc')}
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              {t('home.minimal_interface.egress.points', { returnObjects: true }).map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '0.55rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>{t('home.industries.title_prefix')}<span className="gold-text">{t('home.industries.title_highlight')}</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }} dangerouslySetInnerHTML={{ __html: t('home.industries.desc') }}></p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: '30px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              {t(`home.industries.items.${i}`)}
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Open Source Initiative Gateway Section */}
      <section className="container">
        <div style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(0,240,255,0.03) 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '3.5rem 2rem', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0, filter: 'blur(30px)' }}></div>
          <div style={{ zIndex: 1 }}>
            <span style={{ display: 'inline-block', padding: '0.3rem 1rem', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '1rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              PROVEN ASSURANCE / 確信安全
            </span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', textAlign: 'left', lineHeight: '1.3' }}>
              {i18n.language === 'en' ? 'Open Source Core & v1.0 Chaos Benchmarks' : '開源策略引擎與 v1.0 混沌壓測基準'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {i18n.language === 'en' 
                ? 'DROS is built on systems engineering transparency. Explore our frozen v1.0 Certification Harness, concurrent RCU stress test reports (484.8 ns latency, 0 race conditions), and the open-source compiler frontend.'
                : 'DROS 建立在系統級工程的透明度之上。在此公開披露我們 frozen 的 v1.0 驗證合約、實測 RCU 混亂壓力測試報告（核心延遲低至 484.8 奈秒、0 Race Condition）以及開源的語法檢查引擎。'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/trust" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                {i18n.language === 'en' ? 'Explore Trust Page' : '進入確信驗證頁面'} &rarr;
              </Link>
              <Link to="/docs" className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>
                {i18n.language === 'en' ? 'View Documentation' : '查看架構與技術規範'}
              </Link>
            </div>
          </div>
          
          <div className="glass-card" style={{ zIndex: 1, background: 'rgba(10, 10, 12, 0.8)', border: '1px solid rgba(212,175,55,0.15)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', padding: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-gold)', fontFamily: 'monospace' }}>26.1 μs</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'In-Band Latency' : '帶內核心攔截延遲'}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-blue)', fontFamily: 'monospace' }}>100,000</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'Benchmark Queries' : '基準壓測調用'}
              </div>
            </div>
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d2a8ff', fontFamily: 'monospace' }}>&lt; 1 μs</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'RCU Atomic Swap' : 'RCU 無鎖撤銷 (HTTP 403)'}
              </div>
            </div>
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#27c93f', fontFamily: 'monospace' }}>{i18n.language === 'en' ? 'Bounded' : '受控'}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'Hard Block Rate' : '紅隊對抗物理阻斷率'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Ecosystem */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '1px' }}>
            {t('home.ecosystem.badge')}
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('home.ecosystem.title_prefix')}<span className="gold-text">{t('home.ecosystem.title_highlight')}</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            {t('home.ecosystem.desc')}
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {[
            { name: "DROS Main", repo: "DROS-Official-Website", icon: "🌐", desc_tw: "主專案與核心規格總覽", desc_en: "Main Project & Specs Overview" },
            { name: "Rust Core", repo: "dros-core-rs", icon: "⚙️", desc_tw: "記憶體安全的超高性能核心", desc_en: "Memory-safe high-performance core" },
            { name: "Go Core", repo: "dros-core-go", icon: "🐹", desc_tw: "高併發、易部署的雲端運行時", desc_en: "High-concurrency cloud runtime" },
            { name: "C++ Core", repo: "dros-core-cpp", icon: "⚡", desc_tw: "超低延遲的裸機/嵌入式引擎", desc_en: "Ultra-low latency bare-metal engine" },
            { name: "Python Core", repo: "dros-core-py", icon: "🐍", desc_tw: "AI 原生環境的快速原型核心", desc_en: "AI-native fast prototyping core" },
            { name: "Java Core", repo: "dros-core-java", icon: "☕", desc_tw: "企業級跨平台節點實作", desc_en: "Enterprise cross-platform node" },
            { name: "TypeScript Core", repo: "dros-core-ts", icon: "🟦", desc_tw: "同構 Node & Browser 運行時", desc_en: "Isomorphic Node & Browser runtime" }
          ].map((kernel) => (
            <a 
              href={`https://github.com/${githubUser}/${kernel.repo}`} 
              target="_blank" 
              rel="noreferrer" 
              className="glass-card" 
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}
              key={kernel.name}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{kernel.icon}</div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>{kernel.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flex: 1 }}>{i18n.language === 'en' ? kernel.desc_en : kernel.desc_tw}</p>
              <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: '600' }}>
                {t('home.ecosystem.view_github')} &rarr;
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Easter Egg / Ask AI */}
      <section className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(20,20,25,0.8), rgba(10,10,10,0.9))', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {t('home.easter_egg.title')}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            {t('home.easter_egg.desc')}
          </p>
          <div style={{ position: 'relative' }}>
            <pre style={{ background: 'rgba(0,0,0,0.5)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', color: '#a5d6ff', fontSize: '0.95rem', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)' }}>
              {t('home.easter_egg.prompt')}
            </pre>
            <button 
              onClick={handleCopy}
              className={`btn ${isCopied ? 'btn-primary' : 'btn-secondary'}`}
              style={{ position: 'absolute', bottom: '1rem', right: '1rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              {isCopied ? t('home.easter_egg.copied') : t('home.easter_egg.btn_copy')}
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.9), rgba(30,30,35,0.95))', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', padding: '4rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }}></div>
          
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{t('home.cta.title')}</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: t('home.cta.desc') }}></p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/docs" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              {t('home.cta.btn_github')}
            </Link>
            <a href="https://drosvajra.gumroad.com/l/nebkzs" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              {t('home.cta.btn_poc')}
            </a>
          </div>
        </div>
      </section>

      {/* Linux / Server Deployment Modal */}
      <LinuxDeployModal 
        isOpen={isLinuxModalOpen} 
        onClose={() => setIsLinuxModalOpen(false)} 
      />
    </main>
  );
}
