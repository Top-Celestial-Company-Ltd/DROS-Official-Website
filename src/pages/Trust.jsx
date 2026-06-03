import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Trust() {
  const { t } = useTranslation();
  const githubUser = "Top-Celestial-Company-Ltd";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Helmet>
        <title>{t('trust.meta_title')} | DROS</title>
        <meta name="description" content={t('trust.meta_desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', padding: '8rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: -1, filter: 'blur(50px)' }}></div>
        <div className="container animate-fade-up" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', letterSpacing: '1.5px' }}>
            {t('trust.hero.title_prefix')}
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            <span style={{ background: 'linear-gradient(135deg, #d4af37, #fff, #d4af37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('trust.hero.title_highlight')}
            </span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: '0 auto 2rem auto', maxWidth: '700px' }}>
            {t('trust.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Existential Threat Alert Section */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(180deg, rgba(255, 77, 79, 0.02) 0%, transparent 100%)', borderBottom: '1px solid rgba(255,77,79,0.05)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255, 77, 79, 0.05)', border: '1px solid rgba(255, 77, 79, 0.15)', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 30px rgba(255, 77, 79, 0.02)' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>🚨</span>
            <h2 style={{ fontSize: '1.8rem', color: '#ff4d4f', marginBottom: '1rem', fontFamily: 'Noto Serif TC, serif', fontWeight: 'bold' }}>
              {t('trust.threat.title')}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'left' }}>
              {t('trust.threat.desc1')}
            </p>
            <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: '500', textAlign: 'left' }}>
              {t('trust.threat.desc2')}
            </p>
          </div>
        </div>
      </section>

      {/* Verification Harness Block */}
      <section style={{ backgroundColor: 'rgba(20,20,20,0.3)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', textAlign: 'left', fontFamily: 'Noto Serif TC, serif' }}>
                {t('trust.harness.title')}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2rem' }}>
                {t('trust.harness.desc')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderLeft: '3px solid var(--accent-gold)', borderRadius: '0 8px 8px 0' }}>
                  <strong>{t('trust.harness.test1')}</strong>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderLeft: '3px solid var(--accent-blue)', borderRadius: '0 8px 8px 0' }}>
                  <strong>{t('trust.harness.test2')}</strong>
                </li>
              </ul>
            </div>

            <div style={{ background: '#0d0d12', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', gap: '8px', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                <div style={{ marginLeft: '1rem', fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>certification-harness.log</div>
              </div>
              <div style={{ padding: '1.2rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', lineHeight: '1.7', color: '#c9d1d9', textAlign: 'left', maxHeight: '350px', overflowY: 'auto' }}>
                <div><span style={{ color: '#8b949e' }}>$</span> <span style={{ color: 'var(--accent-gold)' }}>pytest</span> tests/test_agent_framework_sim.py</div>
                <div style={{ color: '#58a6ff' }}>=== test session starts ===</div>
                <div style={{ color: '#8b949e' }}>platform win32 -- Python 3.12.3, pytest-8.2.1</div>
                <div style={{ color: '#8b949e' }}>rootdir: E:\vscode\AI知識庫\dros-home-lab</div>
                <div style={{ color: '#8b949e' }}>plugins: anyio-4.4.0</div>
                <div style={{ color: '#58a6ff', marginTop: '0.5rem' }}>collected 2 items</div>
                <div style={{ color: '#3fb950', marginTop: '0.2rem' }}>tests/test_agent_framework_sim.py . . [100%]</div>
                <div style={{ color: '#8b949e', marginTop: '0.5rem' }}>LOG - [FAILURE_ISOLATION] State node successfully created.</div>
                <div style={{ color: '#8b949e' }}>LOG - [EXECUTION_POLICY_TERMINATED] policy enforcement decision: rejected.</div>
                <div style={{ color: '#3fb950', fontWeight: 'bold', marginTop: '0.5rem' }}>=== 2 passed in 0.12s ===</div>
                
                <div style={{ marginTop: '1rem' }}><span style={{ color: '#8b949e' }}>$</span> <span style={{ color: 'var(--accent-gold)' }}>pytest</span> tests/test_policy_ota_concurrent_agent.py</div>
                <div style={{ color: '#58a6ff' }}>=== test session starts ===</div>
                <div style={{ color: '#8b949e' }}>collected 1 item</div>
                <div style={{ color: '#3fb950', marginTop: '0.2rem' }}>tests/test_policy_ota_concurrent_agent.py . [100%]</div>
                <div style={{ color: '#8b949e', marginTop: '0.5rem' }}>BENCHMARK - RCU swaps completed: 187 checks.</div>
                <div style={{ color: '#8b949e' }}>BENCHMARK - Total requests: 61,919 queries.</div>
                <div style={{ color: '#8b949e' }}>BENCHMARK - Bounded Latency: 484.8 ns (average).</div>
                <div style={{ color: '#3fb950', fontWeight: 'bold', marginTop: '0.5rem' }}>=== 1 passed in 1.48s ===</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Stress test counters */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('trust.benchmarks.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem' }}>
              {t('trust.benchmarks.desc')}
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            <div className="glass-card" style={{ textAlign: 'center', borderTop: '3px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-gold)', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                {t('trust.benchmarks.latency_val')}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>
                {t('trust.benchmarks.latency_lbl')}
              </p>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', borderTop: '3px solid var(--accent-blue)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-blue)', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                {t('trust.benchmarks.queries_val')}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>
                {t('trust.benchmarks.queries_lbl')}
              </p>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', borderTop: '3px solid #d2a8ff' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#d2a8ff', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                {t('trust.benchmarks.swaps_val')}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>
                {t('trust.benchmarks.swaps_lbl')}
              </p>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', borderTop: '3px solid #27c93f' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#27c93f', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                {t('trust.benchmarks.races_val')}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>
                {t('trust.benchmarks.races_lbl')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Engineering Disclosures (Reality Layer) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('trust.reality.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem' }}>
              {t('trust.reality.desc')}
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {t('trust.reality.points', { returnObjects: true }).map((pt, idx) => (
              <div className="glass-card" key={idx} style={{ background: 'rgba(255,255,255,0.015)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                  {pt.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Strategy Grid */}
      <section style={{ backgroundColor: 'rgba(20,20,20,0.3)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '1px' }}>
              PLG & Open Source
            </span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('trust.open_source.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem' }}>
              {t('trust.open_source.desc')}
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {/* Vajra Lint */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.8rem' }}>{t('trust.open_source.lint_title')}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                {t('trust.open_source.lint_desc')}
              </p>
              <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%', textAlign: 'center', fontSize: '0.9rem' }}>
                vajra lint &rarr;
              </a>
            </div>

            {/* Vajra Doctor */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', borderColor: 'rgba(0,240,255,0.2)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🩺</div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-blue)', marginBottom: '0.8rem' }}>{t('trust.open_source.doctor_title')}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                {t('trust.open_source.doctor_desc')}
              </p>
              <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%', textAlign: 'center', fontSize: '0.9rem', borderColor: 'rgba(0,240,255,0.3)' }}>
                vajra doctor &rarr;
              </a>
            </div>

            {/* Vajra Policy Hub */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', borderColor: 'rgba(212,175,55,0.2)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-gold)', marginBottom: '0.8rem' }}>{t('trust.open_source.hub_title')}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                {t('trust.open_source.hub_desc')}
              </p>
              <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', textAlign: 'center', fontSize: '0.9rem' }}>
                Join Policy Hub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(15,15,20,0.9))', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '3.5rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>DROS is Built for Zero-Trust Execution</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Stop wrapping uncertain logic with dynamic firewalls. Bring system-level deterministic assurance into your agent production stack.
          </p>
          <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
            Get Started with DROS
          </a>
        </div>
      </section>
    </main>
  );
}
