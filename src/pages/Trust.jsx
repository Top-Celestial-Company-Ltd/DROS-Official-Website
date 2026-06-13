import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

// DROS Visual Assets
import drosConcurrencyLatency from '../assets/DROS_Visual_Assets/dros_concurrency_latency.png';
import drosVsOpaBenchmark from '../assets/DROS_Visual_Assets/dros_vs_opa_benchmark.png';
import drosPkiAnimationZh from '../assets/DROS_Visual_Assets/dros_pki_animation_zh.webp';
import drosPkiAnimationEn from '../assets/DROS_Visual_Assets/dros_pki_animation_en.webp';
import drosPkiChainZh from '../assets/DROS_Visual_Assets/dros_pki_chain_zh.png';
import drosPkiChainEn from '../assets/DROS_Visual_Assets/dros_pki_chain_en.png';
import drosLifecycleFlowZh from '../assets/DROS_Visual_Assets/dros_lifecycle_flow_zh.png';
import drosLifecycleFlowEn from '../assets/DROS_Visual_Assets/dros_lifecycle_flow_en.png';
import drosRcuZh from '../assets/DROS_Visual_Assets/dros_rcu_zh.png';
import drosRcuEn from '../assets/DROS_Visual_Assets/dros_rcu_en.png';
import drosZeroCopyZh from '../assets/DROS_Visual_Assets/dros_zerocopy_zh.png';
import drosZeroCopyEn from '../assets/DROS_Visual_Assets/dros_zerocopy_en.png';

export default function Trust() {
  const { t, i18n } = useTranslation();
  const githubUser = "Top-Celestial-Company-Ltd";

  const isZh = i18n.language && i18n.language.startsWith('zh');
  const pkiAnimation = isZh ? drosPkiAnimationZh : drosPkiAnimationEn;
  const pkiChain = isZh ? drosPkiChainZh : drosPkiChainEn;
  const lifecycleFlow = isZh ? drosLifecycleFlowZh : drosLifecycleFlowEn;
  const rcuDiagram = isZh ? drosRcuZh : drosRcuEn;
  const zeroCopyDiagram = isZh ? drosZeroCopyZh : drosZeroCopyEn;


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

          <div className="grid-4" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
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

          {/* Benchmark Charts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Chart 1: Latency Curve */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <h4 style={{ marginBottom: '1.2rem', color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: '600' }}>
                {isZh ? '併發量與延遲扁平化曲線' : 'Concurrency vs Intercept Latency Scale Flatness'}
              </h4>
              <img src={drosConcurrencyLatency} alt="DROS Concurrency vs Latency" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1.2rem', lineHeight: '1.6', textAlign: 'center' }}>
                {isZh 
                  ? '測試顯示在達到 50,000 個策略與多執行緒併發負載下，DROS 攔截開銷仍穩定保持在 300ns–600ns 的常數時間，無快取阻礙與性能退化。'
                  : 'Benchmarks show that under 50,000 rules and active multi-threaded concurrent stress, DROS intercept latency remains stable in O(1) constant time without cache jitter.'}
              </p>
            </div>

            {/* Chart 2: DROS vs OPA */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <h4 style={{ marginBottom: '1.2rem', color: 'var(--accent-blue)', fontSize: '1.1rem', fontWeight: '600' }}>
                {isZh ? 'DROS 與 OPA 引擎效能對比' : 'DROS vs Open Policy Agent (OPA) Performance'}
              </h4>
              <img src={drosVsOpaBenchmark} alt="DROS vs OPA Benchmark" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1.2rem', lineHeight: '1.6', textAlign: 'center' }}>
                {isZh 
                  ? '相較於傳統 OPA 引擎基於字串解析與 AST 計算導致的毫秒級延遲，DROS 以 contiguous bitmap 記憶體直查快了 4,000 倍以上。'
                  : 'Compared to traditional OPA engines which suffer from millisecond-level parser latency, DROS contiguous bitmap lookup runs up to 4,000x faster.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cryptographic Execution Identity & PKI Section */}
      <section style={{ backgroundColor: 'rgba(10,10,15,0.4)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container animate-fade-up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              Execution Identity PKI
            </span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', fontFamily: 'Noto Serif TC, serif', fontWeight: 'bold' }}>
              {isZh ? '密碼學執行期身分與憑證鏈體系' : 'Cryptographic Execution Identity & PKI'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {isZh 
                ? 'DROS 採用解耦的雙層信任架構 (GATI)：Layer-1 憑證結算支援去中心化帳本 (DLT/DID) 錨定，免除單點失效與企業壟斷風險；Layer-2 執行歸屬由 GuardVM 於本地記憶體極速 (<0.8ms) 同步校驗「依執行期動態綁定 (By-Execution)」的數位憑證，兼顧全球公信力與極致防禦效能。'
                : 'DROS adopts a decoupled dual-layer trust network (GATI): Layer-1 trust settlement supports decentralized ledger (DLT/DID) anchoring to eliminate single points of failure and corporate monopolies, while Layer-2 execution attribution is verified by GuardVM locally in microseconds (<0.8ms) via dynamic By-Execution certificates, balancing global credibility with extreme performance.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: PKI Animation WebP */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <h4 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>
                {isZh ? '動態憑證簽發與校驗流程' : 'Dynamic Certificate Issuance & Validation Flow'}
              </h4>
              <img src={pkiAnimation} alt="DROS PKI Certificate Issuance Animation" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.8rem', fontFamily: 'monospace' }}>
                ℹ️ {isZh ? '圖-3：依執行期動態憑證 (By-Execution) 驗證流程' : 'fig-3: By-Execution Dynamic Certificate Verification Flow'}
              </span>
            </div>

            {/* Right Column: PKI Chain Diagram */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <h4 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>
                {isZh ? '執行期身分憑證信任鏈結構' : 'Execution Identity Trust Chain Hierarchy'}
              </h4>
              <img src={pkiChain} alt="DROS PKI Trust Chain Hierarchy" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.8rem', fontFamily: 'monospace' }}>
                ℹ️ {isZh ? '圖-4：DROS PKI 認證體系憑證樹' : 'fig-4: DROS PKI Certificate Trust Hierarchy'}
              </span>
            </div>
          </div>
          
          {/* Third Diagram: Lifecycle flow */}
          <div style={{ maxWidth: '900px', margin: '4rem auto 0 auto', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: '600' }}>
                {isZh ? '數位身分與憑證生命週期管理' : 'Identity Certificate Lifecycle Management'}
              </h4>
              <img src={lifecycleFlow} alt="DROS Certificate Lifecycle Flow" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.8rem', fontFamily: 'monospace' }}>
                ℹ️ {isZh ? '圖-5：身分憑證從開採、審核到簽發轉正生命週期' : 'fig-5: Lifecycle flow of identity certificate from mining to signing'}
              </span>
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

          {/* Systems Engineering Diagrams */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '4rem auto 0 auto' }}>
            {/* Zero Copy Diagram */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <h4 style={{ marginBottom: '1.2rem', color: 'var(--accent-blue)', fontSize: '1.1rem', fontWeight: '600' }}>
                {isZh ? 'Contiguous Bitmap 零拷貝對齊結構' : 'Contiguous Bitmap Zero-Copy Memory Alignment'}
              </h4>
              <img src={zeroCopyDiagram} alt="DROS Zero-Copy Memory" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.8rem', fontFamily: 'monospace' }}>
                ℹ️ {isZh ? '圖-6：C-ABI / FFI 邊界零分配記憶體映射' : 'fig-6: Zero-Allocation memory mapping at C-ABI / FFI boundary'}
              </span>
            </div>

            {/* RCU Diagram */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(20,20,30,0.4)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <h4 style={{ marginBottom: '1.2rem', color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: '600' }}>
                {isZh ? '鎖無關 RCU 動態策略熱插拔' : 'Lock-Free RCU Dynamic Policy OTA Hot-Swap'}
              </h4>
              <img src={rcuDiagram} alt="DROS Lock-Free RCU Updates" style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0d0d12' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.8rem', fontFamily: 'monospace' }}>
                ℹ️ {isZh ? '圖-7：高併發讀寫分離策略 OTA 更新' : 'fig-7: High-concurrency read-write separation policy OTA hot-swap'}
              </span>
            </div>
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
