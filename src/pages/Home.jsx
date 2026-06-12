import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// DROS Visual Assets
import drosFlowAnimationZh from '../assets/DROS_Visual_Assets/dros_flow_animation_zh.webp';
import drosFlowAnimationEn from '../assets/DROS_Visual_Assets/dros_flow_animation_en.webp';

export default function Home() {
  const { t, i18n } = useTranslation();
  const githubUser = "Top-Celestial-Company-Ltd";
  const [isCopied, setIsCopied] = useState(false);

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

        <div style={{ textAlign: 'center', maxWidth: '900px', zIndex: 1, animation: 'fadeUp 1s ease forwards' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem', letterSpacing: '1px' }}>
            {t('home.hero.version')}
          </span>
          
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            {t('home.hero.title_prefix')}<br/>
            <span style={{ background: 'linear-gradient(135deg, #d4af37, #fff, #d4af37)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shine 5s linear infinite' }}>{t('home.hero.title_highlight')}</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '700px', margin: '0 auto 1.5rem' }} dangerouslySetInnerHTML={{ __html: t('home.hero.subtitle') }}></p>

          <p style={{ fontSize: '1.1rem', color: 'var(--accent-blue)', marginBottom: '3rem', fontWeight: '600' }}>
            {t('home.hero.value_prop')}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              {t('home.hero.btn_github')}
            </a>
            <a href="https://drosvajra.gumroad.com/l/nebkzs" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              {t('home.hero.btn_poc')} &rarr;
            </a>
          </div>
        </div>

        {/* Terminal & Flow Visualization */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', width: '100%', maxWidth: '1200px', marginTop: '5rem', zIndex: 1, animation: 'fadeUp 1.2s ease forwards', opacity: 0 }}>
          {/* Terminal Code Mockup */}
          <div style={{ background: '#0d0d12', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212, 175, 55, 0.05)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '8px', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
              <div style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>vajra-terminal (v1.0.0)</div>
            </div>
            <div style={{ padding: '1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', lineHeight: '1.7', textAlign: 'left', flex: 1 }}>
              <div><span style={{ color: '#8b949e' }}>$</span> <span style={{ color: 'var(--accent-gold)' }}>dros-cli</span> <span style={{ color: '#a5d6ff' }}>mount</span> vajra_claw.dll</div>
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
            <img src={flowAnimation} alt="DROS Zero-Trust Flow Animation" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
              ℹ️ {isZh ? '圖-1：DROS 零信任執行期攔截流程' : 'fig-1: DROS Zero-Trust Runtime Interception Flow'}
            </span>
          </div>
        </div>
      </section>

      {/* The Ultimate Bottleneck (Hourglass Theory) */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('home.hourglass.title_prefix')}<span className="gold-text">{t('home.hourglass.title_highlight')}</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{t('home.hourglass.subtitle')}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Connecting Line */}
          <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, rgba(212,175,55,0.1), rgba(0,240,255,0.5), rgba(255,77,79,0.3))', transform: 'translateX(-50%)', zIndex: 0 }}></div>
          
          <div className="glass-card" style={{ zIndex: 1, borderTop: '2px solid rgba(212,175,55,0.5)', background: 'rgba(212,175,55,0.03)', textAlign: 'center', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>{t('home.hourglass.layer1_title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('home.hourglass.layer1_desc')}</p>
          </div>
          
          <div className="glass-card" style={{ zIndex: 1, borderTop: '2px solid rgba(0,240,255,0.5)', background: 'rgba(0,240,255,0.03)', textAlign: 'center', padding: '2rem', width: '80%', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>{t('home.hourglass.layer2_title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('home.hourglass.layer2_desc')}</p>
          </div>
          
          <div className="glass-card" style={{ zIndex: 1, borderTop: '2px solid #ff4d4f', background: 'rgba(255,77,79,0.03)', textAlign: 'center', padding: '2rem', width: '60%', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ff4d4f' }}>{t('home.hourglass.layer3_title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('home.hourglass.layer3_desc')}</p>
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
              <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>
                {i18n.language === 'en' ? 'View on GitHub' : '在 GitHub 參與共建'}
              </a>
            </div>
          </div>
          
          <div className="glass-card" style={{ zIndex: 1, background: 'rgba(10, 10, 12, 0.8)', border: '1px solid rgba(212,175,55,0.15)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', padding: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-gold)', fontFamily: 'monospace' }}>484.8 ns</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'Intercept Latency' : '核心攔截延遲'}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-blue)', fontFamily: 'monospace' }}>61,919</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'Stress Queries' : '混沌壓測呼叫'}
              </div>
            </div>
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d2a8ff', fontFamily: 'monospace' }}>187</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'RCU Swaps' : 'RCU 無鎖交換'}
              </div>
            </div>
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#27c93f', fontFamily: 'monospace' }}>0</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {i18n.language === 'en' ? 'Race Conditions' : '競爭危害越權'}
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
            { name: "DROS Main", repo: "Dharma-Reasoning-Operating-System", icon: "🌐", desc_tw: "主專案與核心規格總覽", desc_en: "Main Project & Specs Overview" },
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
            <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              {t('home.cta.btn_github')}
            </a>
            <a href="https://drosvajra.gumroad.com/l/nebkzs" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              {t('home.cta.btn_poc')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
