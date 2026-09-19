import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function StartupDetail() {
  const { i18n } = useTranslation();
  const isZh = i18n.language && i18n.language.startsWith('zh');
  const [themeMode, setThemeMode] = useState('dark');
  const isLight = themeMode === 'light';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container" style={{ paddingTop: '3.5rem', paddingBottom: '6rem' }}>
      <Helmet>
        <title>{isZh ? 'VajraClaw+ Startup 新創團隊版 | DROS 產品詳情' : 'VajraClaw+ Startup Edition | DROS Product Details'}</title>
        <meta name="description" content={isZh ? '專為 10~50 人新創團隊設計的 AI 代理執行期安全防衛系統，配備集中式 PEP 網關、動態 PII 脫敏與 VajraAgent 視覺化主控台。' : 'Enterprise runtime governance for 10-50 seat startups with Central PEP Daemon, Dynamic PII Masking, and VajraAgent Visual Mission Console.'} />
      </Helmet>

      {/* Top Breadcrumb & Badge */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
        <Link to="/pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
          &larr; {isZh ? '返回定價方案' : 'Back to Pricing'}
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
        <span style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', padding: '0.2rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', border: '1px solid rgba(212, 175, 55, 0.25)', fontWeight: 'bold' }}>
          STARTUP CORE ENGINE
        </span>
      </div>

      {/* Hero Section */}
      <section style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.2rem', color: '#fff' }}>
          {isZh ? 'VajraClaw+ Startup 新創團隊版' : 'VajraClaw+ Startup Edition'}
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '1rem' }}>
          {isZh ? '為既有 AI 技術棧增添確定性執行治理，無需推倒重來' : 'Add deterministic execution governance without rebuilding your AI stack.'}
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: '1.8' }}>
          {isZh
            ? '專為 10~50 人成長型 AI 團隊打造。您現有的 Agent 框架（LangGraph、CrewAI、Claude Code、Cursor）、自定義工具與 API 均可原樣保留。DROS 專注於在其下游建立剛性的執行治理邊界（Execution Boundary），無需額外導入龐雜的 IAM、SIEM 或編排平台，讓小團隊也能以極低負擔取得 Post-Compromise 執行封鎖能力。'
            : 'Engineered for growing 10-50 member AI engineering teams. Keep your existing agent frameworks (LangGraph, CrewAI, Claude Code, Cursor), custom tools, and APIs intact. DROS adds a bounded, deterministic execution governance gate right where actions occur—without forcing you to adopt heavy IAM, SIEM, or orchestration suites.'}
        </p>
      </section>

      {/* 🖥️ VajraAgent Mission Control Console Section */}
      <section style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--accent-gold)', letterSpacing: '1px' }}>
              LIVE TELEMETRY INTERFACE
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '0.3rem 0 0 0' }}>
              {isZh ? '🖥️ VajraAgent Startup 視覺主控儀表板' : '🖥️ VajraAgent Startup Mission Control Console'}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(39, 201, 63, 0.1)', padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid rgba(39, 201, 63, 0.3)' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 8px #27c93f' }}></div>
            <span style={{ fontSize: '0.85rem', color: '#27c93f', fontFamily: 'monospace', fontWeight: 'bold' }}>
              Daemon Active: http://localhost:8081
            </span>
          </div>
        </div>

        {/* Console Mockup Container */}
        <div style={{
          background: isLight ? '#ffffff' : '#0a0d14',
          border: isLight ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: isLight ? '0 20px 45px rgba(0,0,0,0.1), 0 0 15px rgba(0,0,0,0.05)' : '0 25px 60px rgba(0,0,0,0.7), 0 0 30px rgba(212, 175, 55, 0.08)',
          transition: 'all 0.25s ease'
        }}>
          {/* Top Bar Telemetry with Logo & Theme Switcher */}
          <div style={{
            background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.03)',
            borderBottom: isLight ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)',
            padding: '0.8rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Traffic Lights */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>

              {/* DROS Official Logo Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                borderLeft: isLight ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(255,255,255,0.1)',
                paddingLeft: '0.9rem'
              }}>
                <img
                  src={isLight ? '/logos/dros-logo-transparent-black.png' : '/logos/dros-logo-transparent-white.png'}
                  alt="DROS Logo"
                  style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: '0.88rem',
                  color: isLight ? '#0f172a' : 'var(--accent-gold)',
                  fontWeight: 'bold'
                }}>
                  VajraAgent v1.2 <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>(Startup Edition)</span>
                </span>
              </div>
            </div>

            {/* Right Telemetry & Theme Switcher Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '0.82rem', fontFamily: 'monospace', color: isLight ? '#475569' : 'var(--text-secondary)' }}>
              <span>Seats: <strong style={{ color: isLight ? '#0f172a' : '#fff' }}>3 / 3 Active</strong></span>
              <span>Limit: <strong style={{ color: 'var(--accent-blue)' }}>30 Agents</strong></span>
              <span>Memory Sandbox: <strong style={{ color: '#16a34a' }}>0-Leak Protected</strong></span>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setThemeMode(isLight ? 'dark' : 'light')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: isLight ? '#e2e8f0' : 'rgba(255,255,255,0.08)',
                  border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255,255,255,0.15)',
                  color: isLight ? '#0f172a' : '#f1f5f9',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                title={isLight ? '切換為深色模式 (Dark Ops)' : '切換為淺色模式 (Light Enterprise)'}
              >
                <span>{isLight ? '☀️ Light' : '🌙 Dark'}</span>
              </button>
            </div>
          </div>

          {/* Console Main Body Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1px',
            background: isLight ? '#e2e8f0' : 'rgba(255,255,255,0.05)'
          }}>
            {/* Left Column: Control Panel & Leases */}
            <div style={{
              background: isLight ? '#f8fafc' : '#0d111a',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: isLight ? '#b45309' : 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {isZh ? '短效租約與實例監控' : 'Instance Leases & Micro-Control'}
                </span>
                <h4 style={{ color: isLight ? '#0f172a' : '#fff', fontSize: '1.1rem', marginTop: '0.3rem' }}>
                  {isZh ? '3 節點租約生命週期' : '3-Node Active Lease Lifecycle'}
                </h4>
              </div>

              {/* Node 1 */}
              <div style={{
                background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '1rem',
                boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.85rem' }}>🟢 Node-1: dev-cluster-alpha</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>TTL: 10m</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: isLight ? '#475569' : 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  Role: <code style={{ color: isLight ? '#0f172a' : '#fff', background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>support-agent</code> ｜ Epoch 14 (剩餘 6m 22s)
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ background: isLight ? '#fef3c7' : 'rgba(212,175,55,0.15)', color: isLight ? '#92400e' : 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '600' }}>Pass: 1,420</span>
                  <span style={{ background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.15)', color: '#dc2626', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '600' }}>Fused: 2</span>
                </div>
              </div>

              {/* Node 2 */}
              <div style={{
                background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '1rem',
                boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.85rem' }}>🟢 Node-2: staging-crm-bot</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>TTL: 10m</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: isLight ? '#475569' : 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  Role: <code style={{ color: isLight ? '#0f172a' : '#fff', background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>ciso-auditor</code> ｜ Epoch 8 (剩餘 3m 45s)
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ background: isLight ? '#fef3c7' : 'rgba(212,175,55,0.15)', color: isLight ? '#92400e' : 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '600' }}>Pass: 890</span>
                  <span style={{ background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.15)', color: '#dc2626', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '600' }}>Fused: 0</span>
                </div>
              </div>

              {/* Node 3 */}
              <div style={{
                background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '1rem',
                boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#d97706', fontWeight: 'bold', fontSize: '0.85rem' }}>🟡 Node-3: worker-qa-eval</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>TTL: 10m</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: isLight ? '#475569' : 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  Role: <code style={{ color: isLight ? '#0f172a' : '#fff', background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>developer-test</code> ｜ Epoch 2 (剩餘 1m 10s)
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ background: isLight ? '#fef3c7' : 'rgba(212,175,55,0.15)', color: isLight ? '#92400e' : 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '600' }}>Pass: 2,130</span>
                  <span style={{ background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.15)', color: '#dc2626', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '600' }}>Fused: 12</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interception & PII Masking Stream */}
            <div style={{
              background: isLight ? '#0f172a' : '#0a0e17',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {isZh ? '即時攻防對抗與 PII 遮蔽日誌' : 'Real-Time Interception & PII Redaction Stream'}
                </span>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.3rem', marginBottom: '1.2rem' }}>
                  {isZh ? '帶內執行期事件流 (In-Band Events)' : 'In-Band Runtime Event Log'}
                </h4>

                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', lineHeight: '1.7', background: 'rgba(0,0,0,0.6)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <div style={{ color: '#94a3b8' }}>[14:22:01.104] 📥 INGRESS: Input scrubbed. PII tokenized: [NAME: A*** Chen, ID: A123***789]</div>
                  <div style={{ color: '#4ade80' }}>[14:22:01.105] ✅ POLICY_PASS: Tool `query_crm_summary` permitted (Latency: 26.1μs)</div>
                  <div style={{ color: '#facc15' }}>[14:22:03.412] ⚠️ HITL_SUSPEND: High-risk export triggered. Waiting for operator soft confirmation...</div>
                  <div style={{ color: '#f87171', background: 'rgba(239,68,68,0.12)', padding: '0.5rem', borderRadius: '4px', borderLeft: '3px solid #ef4444' }}>
                    [14:22:04.918] 🛑 HARD_FUSE: Indirect Prompt Injection detected in webhook payload! Attempted `rm -rf /` or dump DB credentials. C-ABI Gate DROP (State drift: ΔS = 0).
                  </div>
                  <div style={{ color: 'var(--accent-gold)' }}>[14:22:04.920] 🔗 MERKLE_SEAL: Block #1089 sealed with SHA-256 (Hash: 9f83...b2c1)</div>
                </div>
              </div>

              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  {isZh ? '中央緊急阻斷開關 (Emergency Kill Switch)' : 'Central Emergency Kill Switch'}
                </span>
                <button style={{ background: '#ef4444', border: 'none', color: '#fff', padding: '0.45rem 1rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
                  REVOKE ALL LEASES (HTTP 403)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Feature Grid */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
          {isZh ? 'Startup 新創團隊版核心四大防禦支柱' : 'Startup Core Defense Pillars'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              {isZh ? '1. Level 1 集中式 PEP 守護 (Daemon / SDK)' : '1. Level 1 Agent Server PEP (Daemon / SDK)'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '所有開發者工作站與測試機器人的 Tool Call 統一由本地極簡 PEP 守護進程或 In-Process SDK 攔截，確定性執行 C-ABI 門閘檢驗，收斂單機執行咽喉。'
                : 'All agent tool calls from developer workstations and testing bots route through a lightweight deterministic PEP daemon or SDK, enforcing instant C-ABI containment.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid var(--accent-blue)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
              {isZh ? '2. Level 2 動態 PII 脫敏與 IFC' : '2. Dynamic PII Masking & IFC'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '在讀入路徑自動遮蔽個資、身分證與通訊密碼；透過資訊流控制 (IFC) 嚴禁機密資料透過 Telegram/Email 等未授權管道外洩。'
                : 'Automatic tokenization of PII, IDs, and secrets on ingress. Information Flow Control (IFC) ensures confidential data cannot exfiltrate via external webhooks.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #27c93f' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#27c93f', marginBottom: '1rem' }}>
              {isZh ? '3. 短效租約與防重放 (TTL 10m)' : '3. Short-Lease Governance (TTL 10m)'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '嚴格遵守「憑證時效遠小於任務週期」原則。Agent 僅持 10 分鐘短效權限，杜絕長效 Token 被竊取後造成的長期越權風險。'
                : 'Enforces Credential Lifetime << Task Horizon. Agents hold only 10-minute short-lived leases, nullifying token theft and replay windows.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #d2a8ff' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#d2a8ff', marginBottom: '1rem' }}>
              {isZh ? '4. 三級部署適配器全標配 (Level 1~3)' : '4. All 3 Deployment Tiers Included'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '不因初創版本而閹割安全深度！完整附帶 In-Process SDK、API Gateway PEP 與派生憑證鏈模組，初創高危險業務（如量化交易、無人機、金鑰管理）亦可自選深度執行治理。'
                : 'Zero security compromises for startups. Includes In-Process SDKs, API Gateway PEPs, and derived capability modules—enabling high-risk startups (e.g. trading, robotics) to opt into Level 3 deep governance.'}
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 Architectural Deployment Matrix (All Tiers Included) */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem', textAlign: 'center' }}>
          {isZh ? '🛠️ 自由選配：三大部署情境與配套模組 (全版本標配)' : '🛠️ 3 Deployment Tiers & Adapters (Fully Included)'}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
          {isZh
            ? '一個治理核心，多層執行深度。DROS 不強制您改變既有架構，依您的資產價值與風險胃納，自由決定 PEP 邊界掛載點：'
            : 'One governance core. Multiple enforcement depths. Choose where to attach PEP boundaries based on your asset values and risk appetite:'}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Tier 1 Card */}
          <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--accent-gold)', fontWeight: 'bold' }}>TIER 1 · BORDER</span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(39, 201, 63, 0.15)', color: '#27c93f', padding: '2px 8px', borderRadius: '4px' }}>幾分鐘即時上手</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.6rem' }}>
              {isZh ? '🟢 Level 1：Agent Server 邊界' : '🟢 Level 1: Agent Server PEP'}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              {isZh
                ? '以 In-Process SDK（Python / Go）或 Local Daemon 攔截 Agent 的 Tool Call 直接發起點。零修改既有網路，防範本機檔案越權與 Key 外洩。'
                : 'Intercepts tool calls at the agent runtime via SDK or local daemon. Zero network re-configuration required.'}
            </p>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.8rem' }}>
              <strong>配套軟體：</strong> `dros-python-sdk`, `vajra-local-daemon`, C-ABI binaries
            </div>
          </div>

          {/* Tier 2 Card */}
          <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--accent-blue)', fontWeight: 'bold' }}>TIER 2 · GATEWAY</span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-blue)', padding: '2px 8px', borderRadius: '4px' }}>免動業務邏輯</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.6rem' }}>
              {isZh ? '🔵 Level 2：API Gateway 邊界' : '🔵 Level 2: API Gateway PEP'}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              {isZh
                ? '在既有 API Gateway（Envoy / Nginx / 反向代理）前置 PEP Filter。Agent 必須在 HTTP Header 帶有合法簽章之 Capability Token 方可存取 ERP/CRM。'
                : 'Embeds a PEP filter into existing API Gateways (Envoy/Nginx/Reverse Proxy). Agents must present signed tokens to access internal APIs.'}
            </p>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.8rem' }}>
              <strong>配套軟體：</strong> `dros-envoy-filter`, `dros-proxy-sidecar`, Docker Gateway
            </div>
          </div>

          {/* Tier 3 Card */}
          <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#c084fc', fontWeight: 'bold' }}>TIER 3 · DEEP</span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '2px 8px', borderRadius: '4px' }}>防混淆代理人</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.6rem' }}>
              {isZh ? '🟣 Level 3：Worker / 派生執行邊界' : '🟣 Level 3: Deep Execution & Delegation'}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              {isZh
                ? '針對核心 DB、非同步 Worker 與 Physical AI 實施派生憑證單調縮減（Scope 只能限縮不能放大），徹底杜絕混淆代理人 (Confused Deputy)。'
                : 'Enforces monotonic scope shrinkage on derived tokens across background workers and database proxies, terminating Confused Deputy escalation.'}
            </p>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.8rem' }}>
              <strong>配套軟體：</strong> `dros-worker-adapter`, `dros-db-guard`, Capability Delegate Mint
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
          {isZh ? '📋 出廠硬體與系統技術規格' : '📋 System Technical Specifications'}
        </h2>
        <div style={{ overflowX: 'auto', background: 'rgba(15,20,30,0.6)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)', width: '30%' }}>{isZh ? '授權配額 (Seats)' : 'Machine Seats'}</td>
                <td style={{ padding: '1.2rem', color: '#fff', fontWeight: '600' }}>3 組 Machine UUIDs (Dev / Staging / Prod)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '最大並發 Agent' : 'Max Concurrent Agents'}</td>
                <td style={{ padding: '1.2rem', color: '#fff', fontWeight: '600' }}>30 個 (每實例 10 Agents)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '阻斷延遲性能' : 'Policy Decision Latency'}</td>
                <td style={{ padding: '1.2rem', color: 'var(--accent-gold)', fontWeight: 'bold', fontFamily: 'monospace' }}>26.1 μs (帶內快速路徑) / P99 &lt; 29.8 μs</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '支援部署架構' : 'Deployment Targets'}</td>
                <td style={{ padding: '1.2rem', color: '#fff' }}>Level 1~3 全系支援 (In-Process SDK, Envoy/Reverse Proxy Gateway, Worker Adapter, Docker, Linux VM, WSL2)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '審計溯源模式' : 'Audit Trail'}</td>
                <td style={{ padding: '1.2rem', color: '#fff' }}>Local Tamper-Proof Hash Log & Ed25519 Signed DIT Tokens</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '訂閱價格與授權' : 'Pricing & Terms'}</td>
                <td style={{ padding: '1.2rem', color: '#27c93f', fontWeight: 'bold' }}>$2,990 / 年 (含優先 Email 與更新支援)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Dual-Action Closing Block */}
      <section style={{ textAlign: 'center', padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,15,25,0.95) 100%)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
          {isZh ? '準備好為您的新創團隊裝上確定性安全護欄了嗎？' : 'Ready to secure your startup AI workloads?'}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
          {isZh
            ? '15 分鐘即可完成 Docker 部署。若您需要採購合約、技術諮詢或報帳發票，歡迎隨時與我們聯繫。'
            : 'Deploy in under 15 minutes via Docker. Contact our team for customized deployment consultation or commercial invoicing.'}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:service@dr-os.io?subject=Inquiry:%20DROS%20Startup%20Edition" className="btn btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
            ✉️ Contact Us (service@dr-os.io)
          </a>
          <Link to="/pricing" className="btn btn-secondary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
            &larr; {isZh ? '返回商品定價頁面' : 'Back to Pricing'}
          </Link>
        </div>
      </section>
    </main>
  );
}
