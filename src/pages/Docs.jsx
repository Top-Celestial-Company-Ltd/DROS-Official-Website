import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeScenario, setActiveScenario] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { t } = useTranslation('docs');
  const scenarios = t('sections.writing_rules.sandbox.scenarios', { returnObjects: true });

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Sidebar Navigation */}
      <aside style={{ 
        width: '280px', 
        position: 'sticky', 
        top: '80px', 
        height: 'calc(100vh - 80px)', 
        overflowY: 'auto',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }} className="docs-sidebar">
        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t('sidebar.title')}</h4>
        
        <button className={`doc-nav-btn ${activeSection === 'getting-started' ? 'active' : ''}`} onClick={() => scrollTo('getting-started')}>{t('sidebar.getting_started')}</button>
        <button className={`doc-nav-btn ${activeSection === 'architecture' ? 'active' : ''}`} onClick={() => scrollTo('architecture')}>{t('sidebar.architecture')}</button>
        <button className={`doc-nav-btn ${activeSection === 'writing-rules' ? 'active' : ''}`} onClick={() => scrollTo('writing-rules')}>{t('sidebar.writing_rules')}</button>
        <button className={`doc-nav-btn ${activeSection === 'deployment' ? 'active' : ''}`} onClick={() => scrollTo('deployment')}>{t('sidebar.deployment')}</button>
        <button className={`doc-nav-btn ${activeSection === 'comparison' ? 'active' : ''}`} onClick={() => scrollTo('comparison')}>{t('sidebar.comparison')}</button>
        <button className={`doc-nav-btn ${activeSection === 'license' ? 'active' : ''}`} onClick={() => scrollTo('license')}>{t('sidebar.license')}</button>
        
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <Link to="/pricing" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', padding: '0.6rem' }}>
            {t('sidebar.btn')}
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '3rem 4rem', maxWidth: '900px' }} className="docs-content">
        <div style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, var(--accent-gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t('header.title')}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
              {t('header.version')}
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {t('header.last_updated')}
            </span>
          </div>
        </div>

        {/* Commercial Protection Warning */}
        <div style={{background: 'rgba(255, 77, 79, 0.05)', border: '1px solid rgba(255, 77, 79, 0.3)', padding: '1.5rem', borderRadius: '12px', marginBottom: '4rem', display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
          <div style={{fontSize: '1.5rem', marginTop: '2px'}}>🔒</div>
          <div>
            <strong style={{color: '#ff4d4f', display: 'block', marginBottom: '0.5rem', fontSize: '1rem'}}>{t('warning.title')}</strong>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0}} dangerouslySetInnerHTML={{ __html: t('warning.desc') }}>
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section id="getting-started" className="doc-section">
          <h2>{t('sections.getting_started.title')}</h2>
          
          <h3 style={{ marginTop: '2rem' }}>{t('sections.getting_started.what_is_dros')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('sections.getting_started.dros_desc') }}></p>

          <h3>{t('sections.getting_started.core_philosophy')}</h3>
          <blockquote style={{ borderLeft: '4px solid var(--accent-gold)', paddingLeft: '1.5rem', margin: '1.5rem 0', color: 'var(--text-primary)', fontStyle: 'italic', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0 12px 12px 0' }}>
            {t('sections.getting_started.philosophy_quote')}
          </blockquote>

          <h3>{t('sections.getting_started.quick_start')}</h3>
          <ol className="doc-list">
            {t('sections.getting_started.steps', { returnObjects: true }).map((step, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: step }}></li>
            ))}
          </ol>
        </section>

        {/* Section 2 */}
        <section id="architecture" className="doc-section">
          <h2>{t('sections.architecture.title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('sections.architecture.desc') }}></p>
          
          <div className="glass-card" style={{ marginTop: '2rem', padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>{t('sections.architecture.key_components')}</h3>
            <ul className="doc-list" style={{ marginTop: '1rem' }}>
              {t('sections.architecture.components', { returnObjects: true }).map((comp, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: comp }}></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section id="writing-rules" className="doc-section">
          <h2>{t('sections.writing_rules.title')}</h2>
          
          <h3 style={{ color: 'var(--accent-gold)' }}>{t('sections.writing_rules.core_files')}</h3>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
            <div className="rule-card">
              <div className="rule-num">1</div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.3rem', color: '#fff' }}>{t('sections.writing_rules.files.agent.name')}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{t('sections.writing_rules.files.agent.desc')}</p>
              </div>
            </div>
            <div className="rule-card">
              <div className="rule-num">2</div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.3rem', color: '#fff' }}>{t('sections.writing_rules.files.vajra.name')}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{t('sections.writing_rules.files.vajra.desc')}</p>
              </div>
            </div>
            <div className="rule-card">
              <div className="rule-num">3</div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.3rem', color: '#fff' }}>{t('sections.writing_rules.files.domain.name')}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{t('sections.writing_rules.files.domain.desc')}</p>
              </div>
            </div>
          </div>

          <h3 style={{ marginTop: '3rem' }}>{t('sections.writing_rules.best_practices')}</h3>
          <ul className="doc-list check-list">
            {t('sections.writing_rules.practices', { returnObjects: true }).map((prac, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: prac }}></li>
            ))}
          </ul>

          <h3 style={{ marginTop: '2rem' }}>{t('sections.deployment.code_title').replace('Python', 'Vajra.md')}</h3>
          <div className="code-block-wrapper">
            <div className="code-header">
              <span>yaml</span>
              <span>Vajra.md</span>
            </div>
            <pre>
<code className="token-key">vajra_contract:</code>
  <code className="token-key">version:</code> <code className="token-string">"1.0"</code>
  <code className="token-key">priority:</code> <code className="token-string">"highest"</code>
  <code className="token-key">rules:</code>
    - <code className="token-key">action:</code> <code className="token-string">"deny"</code>
      <code className="token-key">condition:</code> <code className="token-string">"contains sensitive financial data without approval"</code>
      <code className="token-key">response:</code> <code className="token-string">"physical_melt"</code>
    - <code className="token-key">action:</code> <code className="token-string">"allow"</code>
      <code className="token-key">condition:</code> <code className="token-string">"query within approved FAQ"</code>
      <code className="token-key">require_tnumber:</code> <code className="token-boolean">true</code>
            </pre>
          </div>

          {/* Interactive Rule Generator Sandbox */}
          <div style={{ marginTop: '4rem', padding: '2rem', background: 'linear-gradient(180deg, rgba(20,20,20,0.8), #050505)', borderRadius: '16px', border: '1px solid rgba(0, 240, 255, 0.2)', boxShadow: '0 10px 30px rgba(0,240,255,0.05)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
              {t('sections.writing_rules.sandbox.title')}
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: t('sections.writing_rules.sandbox.desc') }}>
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.5rem' }}>
              {Array.isArray(scenarios) && scenarios.map((s, i) => (
                <button 
                  key={i} 
                  className={`btn ${activeScenario === i ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem', transition: 'all 0.3s ease' }} 
                  onClick={() => {
                    if (activeScenario === i) return;
                    setActiveScenario(i);
                    setIsGenerating(true);
                    setTimeout(() => setIsGenerating(false), 1200);
                  }}
                >
                  {s.name}
                </button>
              ))}
            </div>

            <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', minHeight: '300px' }}>
              {activeScenario === null ? (
                <div style={{ color: 'var(--text-dim)', textAlign: 'center', paddingTop: '5rem', fontSize: '1.1rem' }}>
                  {t('sections.writing_rules.sandbox.select_prompt')}
                </div>
              ) : isGenerating ? (
                <div style={{ color: 'var(--accent-blue)', textAlign: 'center', paddingTop: '5rem', fontSize: '1.1rem', animation: 'pulse 1s infinite' }}>
                  {t('sections.writing_rules.sandbox.generating')}
                </div>
              ) : (
                <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
                  <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontStyle: 'italic', paddingLeft: '1rem', borderLeft: '3px solid var(--accent-blue)', fontSize: '1.05rem', lineHeight: '1.5' }}>
                    "{scenarios[activeScenario].prompt}"
                  </div>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="code-block-wrapper" style={{ margin: 0 }}>
                      <div className="code-header">
                        <span>markdown</span>
                        <span>AGENT.MD</span>
                      </div>
                      <pre style={{ margin: 0, height: '240px', overflowY: 'auto', background: 'rgba(20,20,20,0.8)', padding: '1rem', borderRadius: '0 0 8px 8px', fontSize: '0.85rem' }}>
                        <code style={{ color: 'var(--text-primary)' }}>{scenarios[activeScenario].result_agent}</code>
                      </pre>
                    </div>
                    <div className="code-block-wrapper" style={{ margin: 0 }}>
                      <div className="code-header">
                        <span>yaml</span>
                        <span>Vajra.md</span>
                      </div>
                      <pre style={{ margin: 0, height: '240px', overflowY: 'auto', background: 'rgba(20,20,20,0.8)', padding: '1rem', borderRadius: '0 0 8px 8px', fontSize: '0.85rem' }}>
                        <code style={{ color: '#a5d6ff' }}>{scenarios[activeScenario].result_vajra}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div style={{ textAlign: 'right', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {t('sections.writing_rules.sandbox.footer')}
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="deployment" className="doc-section">
          <h2>{t('sections.deployment.title')}</h2>
          <div style={{ display: 'flex', gap: '1rem', margin: '2rem 0' }}>
            <span className="platform-tag">Windows</span>
            <span className="platform-tag">macOS</span>
            <span className="platform-tag">Linux</span>
          </div>

          <h3>{t('sections.deployment.methods_title')}</h3>
          <ul className="doc-list">
            {t('sections.deployment.methods', { returnObjects: true }).map((method, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: method }}></li>
            ))}
          </ul>

          <h3 style={{ marginTop: '2rem' }}>{t('sections.deployment.code_title')}</h3>
          <div className="code-block-wrapper">
            <div className="code-header">
              <span>python</span>
              <span>app.py</span>
            </div>
            <pre>
<code className="token-keyword">import</code> dros_core

<code className="token-comment"># init</code>
engine = dros_core.GuardVM()

<code className="token-comment"># load rules</code>
engine.load_contract(<code className="token-string">"AGENT.MD"</code>, <code className="token-string">"Vajra.md"</code>)

<code className="token-comment"># exec</code>
result = engine.execute(user_input)
<code className="token-comment"># result</code>
            </pre>
          </div>
        </section>

        {/* Section 5 */}
        <section id="comparison" className="doc-section">
          <h2>{t('sections.comparison.title')}</h2>
          {t('sections.comparison.desc', { defaultValue: '' }) && (
            <p dangerouslySetInnerHTML={{ __html: t('sections.comparison.desc') }} style={{ marginBottom: '2rem' }}></p>
          )}
          <div className="table-responsive">
            <table className="doc-table">
              <thead>
                <tr>
                  {t('sections.comparison.headers', { returnObjects: true }).map((header, i) => (
                    <th key={i} style={i === 2 ? { color: 'var(--accent-gold)' } : {}}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t('sections.comparison.rows', { returnObjects: true }).map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{row[1]}</td>
                    <td style={{ color: '#27c93f', fontWeight: '600' }}>{row[2]}</td>
                    <td><span className={i === 0 || i === 2 || i === 3 ? "tag-supreme" : "tag-good"}>{row[3]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 */}
        <section id="license" className="doc-section" style={{ borderBottom: 'none' }}>
          <h2>{t('sections.license.title')}</h2>
          <div className="grid-2" style={{ marginTop: '2rem' }}>
            <div className="license-card">
              <h3 style={{ color: '#a0a0a0' }}>{t('sections.license.agpl.title')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>{t('sections.license.agpl.desc')}</p>
            </div>
            <div className="license-card premium">
              <h3 style={{ color: 'var(--accent-gold)' }}>{t('sections.license.commercial.title')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>{t('sections.license.commercial.desc')}</p>
              <Link to="/pricing" style={{ color: 'var(--accent-gold)', display: 'inline-block', marginTop: '1.5rem', textDecoration: 'none', borderBottom: '1px solid var(--accent-gold)' }}>{t('sections.license.commercial.btn')}</Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
