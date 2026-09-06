import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function StartupDetail() {
  const { i18n } = useTranslation();
  const isZh = i18n.language && i18n.language.startsWith('zh');

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
        <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', fontWeight: '600', marginBottom: '1rem' }}>
          {isZh ? '集中式 PEP 網關 · 動態 PII 脫敏 · 短效租約治理 · 多工作站統一防線' : 'Centralized PEP Daemon · Dynamic PII Redaction · Short-Lease Governance · Unified Multi-Workstation Defense'}
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: '1.8' }}>
          {isZh
            ? '專為 10~50 人成長型 AI 團隊打造。單台工程師工作站的 Cursor 或 Claude Code 無法防範惡意提示詞越權與機密外洩；Startup 版提供服務端集中式 PEP 守護進程與專屬視覺主控台，最高守護 3 組伺服器實例與 30 個並發 Agent。'
            : 'Engineered for growing 10-50 member AI engineering teams. Individual developer workstations running Cursor or Claude Code cannot prevent prompt injection or data leakage. Startup Edition provides a centralized server-side PEP daemon and a dedicated visual console, securing up to 3 machine instances and 30 concurrent agents.'}
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
        <div style={{ background: '#0a0d14', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 30px rgba(212, 175, 55, 0.08)' }}>
          {/* Top Bar Telemetry */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>
                VajraAgent v1.2 (Startup Edition)
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
              <span>Seats: <strong style={{ color: '#fff' }}>3 / 3 Active</strong></span>
              <span>Concurrent Limit: <strong style={{ color: 'var(--accent-blue)' }}>30 Agents</strong></span>
              <span>Memory Sandbox: <strong style={{ color: '#27c93f' }}>0-Leak Protected</strong></span>
            </div>
          </div>

          {/* Console Main Body Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {/* Left Column: Control Panel & Leases */}
            <div style={{ background: '#0d111a', padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {isZh ? '短效租約與實例監控' : 'Instance Leases & Micro-Control'}
                </span>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.3rem' }}>
                  {isZh ? '3 節點租約生命週期' : '3-Node Active Lease Lifecycle'}
                </h4>
              </div>

              {/* Node 1 */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#27c93f', fontWeight: 'bold', fontSize: '0.85rem' }}>🟢 Node-1: dev-cluster-alpha</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>TTL: 10m</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  Role: <code>support-agent</code> ｜ Epoch 14 (剩餘 6m 22s)
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>Pass: 1,420</span>
                  <span style={{ background: 'rgba(255,77,79,0.15)', color: '#ff4d4f', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>Fused: 2</span>
                </div>
              </div>

              {/* Node 2 */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#27c93f', fontWeight: 'bold', fontSize: '0.85rem' }}>🟢 Node-2: staging-crm-bot</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>TTL: 10m</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  Role: <code>ciso-auditor</code> ｜ Epoch 8 (剩餘 3m 45s)
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>Pass: 890</span>
                  <span style={{ background: 'rgba(255,77,79,0.15)', color: '#ff4d4f', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>Fused: 0</span>
                </div>
              </div>

              {/* Node 3 */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#ffbd2e', fontWeight: 'bold', fontSize: '0.85rem' }}>🟡 Node-3: worker-qa-eval</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>TTL: 10m</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  Role: <code>developer-test</code> ｜ Epoch 2 (剩餘 1m 10s)
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>Pass: 2,130</span>
                  <span style={{ background: 'rgba(255,77,79,0.15)', color: '#ff4d4f', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>Fused: 12</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interception & PII Masking Stream */}
            <div style={{ background: '#0a0e17', padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {isZh ? '即時攻防對抗與 PII 遮蔽日誌' : 'Real-Time Interception & PII Redaction Stream'}
                </span>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.3rem', marginBottom: '1.2rem' }}>
                  {isZh ? '帶內執行期事件流 (In-Band Events)' : 'In-Band Runtime Event Log'}
                </h4>

                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', lineHeight: '1.7', background: 'rgba(0,0,0,0.5)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <div style={{ color: '#8b949e' }}>[14:22:01.104] 📥 INGRESS: Input scrubbed. PII tokenized: [NAME: A*** Chen, ID: A123***789]</div>
                  <div style={{ color: '#27c93f' }}>[14:22:01.105] ✅ POLICY_PASS: Tool `query_crm_summary` permitted (Latency: 26.1μs)</div>
                  <div style={{ color: '#ffbd2e' }}>[14:22:03.412] ⚠️ HITL_SUSPEND: High-risk export triggered. Waiting for operator soft confirmation...</div>
                  <div style={{ color: '#ff4d4f', background: 'rgba(255,77,79,0.08)', padding: '0.4rem', borderLeft: '3px solid #ff4d4f' }}>
                    [14:22:04.918] 🛑 HARD_FUSE: Indirect Prompt Injection detected in webhook payload! Attempted `rm -rf /` or dump DB credentials. C-ABI Gate DROP (State drift: ΔS = 0).
                  </div>
                  <div style={{ color: 'var(--accent-gold)' }}>[14:22:04.920] 🔗 MERKLE_SEAL: Block #1089 sealed with SHA-256 (Hash: 9f83...b2c1)</div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(212,175,55,0.05)', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {isZh ? '中央緊急阻斷開關 (Emergency Kill Switch)' : 'Central Emergency Kill Switch'}
                </span>
                <button style={{ background: '#ff4d4f', border: 'none', color: '#fff', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer' }}>
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
              {isZh ? '1. 集中式 PEP 網關 (Daemon)' : '1. Centralized PEP Daemon'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '所有開發者與測試機器人的 Tool Call 統一導向本地或私有雲 Daemon，消解單機腳本各行其是的孤島漏洞，集中收斂執行咽喉。'
                : 'All agent tool calls from developer workstations and testing bots route through a centralized server daemon, eliminating fragmented local script vulnerabilities.'}
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
              {isZh ? '4. 跨語言 SDK 與無縫接入' : '4. Multi-Language SDK Ready'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '提供 Python、Node.js 與 Go 原生客戶端，只要三行代碼即可封裝 LangChain、AutoGen 或 AutoGPT，完全無須更動業務邏輯。'
                : 'Zero-friction integration for Python, Node.js, and Go. Wrap existing LangChain or AutoGen pipelines with just three lines of code.'}
            </p>
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
                <td style={{ padding: '1.2rem', color: '#fff' }}>Docker, Docker Compose, Linux VM (Ubuntu/Debian), Windows WSL2</td>
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
