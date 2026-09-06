import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function EnterpriseDetail() {
  const { i18n } = useTranslation();
  const isZh = i18n.language && i18n.language.startsWith('zh');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container" style={{ paddingTop: '3.5rem', paddingBottom: '6rem' }}>
      <Helmet>
        <title>{isZh ? 'VajraAgent Enterprise 企業旗艦版 | DROS 產品詳情' : 'VajraAgent Enterprise Edition | DROS Product Details'}</title>
        <meta name="description" content={isZh ? '專為高併發組織與金融醫療打造的零信任網格 (Zero-Trust Mesh)，配備 K8s 叢集 DaemonSet、階梯式處置開關、多部門角色池與 Merkle 審計大屏。' : 'Zero-Trust Mesh for high-concurrency enterprises with K8s DaemonSet, Eviction Engine controls, Multi-Department Role Pool, and Merkle audit trails.'} />
      </Helmet>

      {/* Top Breadcrumb & Badge */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
        <Link to="/pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
          &larr; {isZh ? '返回定價方案' : 'Back to Pricing'}
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
        <span style={{ background: 'rgba(255, 77, 79, 0.1)', color: '#ff4d4f', padding: '0.2rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', border: '1px solid rgba(255, 77, 79, 0.25)', fontWeight: 'bold' }}>
          ENTERPRISE ZERO-TRUST MESH
        </span>
      </div>

      {/* Hero Section */}
      <section style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.2rem', color: '#fff' }}>
          {isZh ? 'VajraAgent Enterprise 企業旗艦版' : 'VajraAgent Enterprise Edition'}
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ff4d4f', fontWeight: '600', marginBottom: '1rem' }}>
          {isZh ? 'K8s 叢集網格 · 450 並發治理 · 階梯式處置 · 法院級 Merkle 存證' : 'K8s Cluster Mesh · 450 Concurrent Governance · Eviction Engine · Court-Admissible Merkle Audit'}
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: '1.8' }}>
          {isZh
            ? '針對上市企業、跨國金融與智慧醫療體系打造。當企業內有數十個部門與上百個 AI 員工同時調用生產資料庫與內部 ERP 時，您需要中央戰情室進行多租戶隔離、OTA 動態安全策略廣播、以及在 353 奈秒內熔斷異常威脅的硬體級防禦。'
            : 'Designed for Fortune 500 enterprises, multinational banking, and healthcare systems. When hundreds of autonomous AI employees concurrently access production databases and ERPs, enterprise security requires a centralized command center for multi-tenant isolation, OTA dynamic policy broadcast, and 353 ns hardware-level execution containment.'}
        </p>
      </section>

      {/* 🖥️ VajraAgent Enterprise Mission Control Console Section */}
      <section style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#ff4d4f', letterSpacing: '1px' }}>
              ENTERPRISE COMMAND CENTER
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '0.3rem 0 0 0' }}>
              {isZh ? '🖥️ VajraAgent Enterprise 企業級主控戰情室' : '🖥️ VajraAgent Enterprise Command Center Console'}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255, 77, 79, 0.1)', padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid rgba(255, 77, 79, 0.3)' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4d4f', boxShadow: '0 0 8px #ff4d4f' }}></div>
            <span style={{ fontSize: '0.85rem', color: '#ff4d4f', fontFamily: 'monospace', fontWeight: 'bold' }}>
              K8s DaemonSet: 15/15 Nodes Active (Port: 8082)
            </span>
          </div>
        </div>

        {/* Console Mockup Container */}
        <div style={{ background: '#0c0910', border: '1px solid rgba(255, 77, 79, 0.3)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(255, 77, 79, 0.08)' }}>
          {/* Top Bar Telemetry */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#ff7875', fontWeight: 'bold' }}>
                VajraAgent v2.0 Enterprise Commercial · License: LIC-ENT-2026-0888
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
              <span>Cluster Nodes: <strong style={{ color: '#fff' }}>15 / 15 Healthy</strong></span>
              <span>Concurrent Capacity: <strong style={{ color: 'var(--accent-gold)' }}>450 Agents</strong></span>
              <span>Eviction Engine: <strong style={{ color: '#ff4d4f' }}>ARMED</strong></span>
            </div>
          </div>

          {/* Console Main Body Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {/* Left Column: Eviction Policy & Department Roles */}
            <div style={{ background: '#110b14', padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#ff7875', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {isZh ? '階梯式熔斷處置機制' : 'Eviction Engine & Containment Matrix'}
                </span>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.3rem' }}>
                  {isZh ? '三階動態防禦開關' : 'Three-Tier Dynamic Controls'}
                </h4>
              </div>

              {/* Control Switches */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '0.8rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>1. Soft Deny (容錯自愈)</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>單次越權阻斷，回傳錯誤代碼供 Agent 自動糾錯</div>
                  </div>
                  <span style={{ color: '#27c93f', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[ENABLED]</span>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '0.8rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#ffbd2e', fontSize: '0.85rem', fontWeight: '600' }}>2. Sliding Window Quarantine (滑動隔離)</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>10 秒內違規達 3 次，自動剝奪執行權降為唯讀沙箱</div>
                  </div>
                  <span style={{ color: '#ffbd2e', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[ARMED]</span>
                </div>

                <div style={{ background: 'rgba(255,77,79,0.05)', border: '1px solid rgba(255,77,79,0.2)', borderRadius: '8px', padding: '0.8rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#ff4d4f', fontSize: '0.85rem', fontWeight: '600' }}>3. Physical Hard Kill (物理強殺)</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>偵測到底層 Syscall 逃逸或日誌篡改，直發 SIGKILL</div>
                  </div>
                  <span style={{ color: '#ff4d4f', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[ACTIVE]</span>
                </div>
              </div>

              {/* Active Department Swarm Roles */}
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {isZh ? '啟用中部門 AI 角色池 (10 Roles)' : 'Active Enterprise Role Pool (10 Roles)'}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.6rem' }}>
                  {['support', 'accounting', 'devops', 'hr-admin', 'legal-audit', 'ciso-lead', 'risk-officer', 'treasury'].map((role, i) => (
                    <span key={i} style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--accent-gold)', border: '1px solid rgba(212,175,55,0.25)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                      ☑️ {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Node Telemetry & Merkle Chain */}
            <div style={{ background: '#0a080d', padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#ff7875', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                    {isZh ? '企業叢集即時遙測與 SIEM 串流' : 'Cluster Telemetry & SIEM Merkle Pipeline'}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontFamily: 'monospace' }}>Splunk / Elastic: CONNECTED</span>
                </div>

                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', lineHeight: '1.7', background: 'rgba(0,0,0,0.6)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <div style={{ color: '#8b949e' }}>[14:48:12.001] 🌐 K8s-Node-08: Ingress Request 0x4B21 validated via Ed25519 Root DID</div>
                  <div style={{ color: '#27c93f' }}>[14:48:12.002] ⚡ FAST_PATH: Tool `read_ledger_balance` approved (C-ABI Latency: 353 ns)</div>
                  <div style={{ color: '#ffbd2e' }}>[14:48:14.219] ⚠️ POLICY_ALERT: Role `accounting-agent` requested `wire_transfer($120,000)`</div>
                  <div style={{ color: '#ff4d4f', background: 'rgba(255,77,79,0.1)', padding: '0.5rem', borderLeft: '3px solid #ff4d4f' }}>
                    [14:48:14.220] 🛑 HARD_CONTAINMENT: CapBitmap bitwise AND failed (Op=0x08, Limit=$10,000). Action dropped in 353 ns. Window violation: 1/3 recorded. State drift: ΔS = 0.
                  </div>
                  <div style={{ color: 'var(--accent-gold)' }}>[14:48:14.222] ⚖️ MERKLE_LINEAGE: Cryptographic Evidence Block #40912 anchored to Splunk SIEM. Non-repudiation assured.</div>
                </div>
              </div>

              {/* RCU Zero-Downtime Hot Reload Controls */}
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,77,79,0.05)', borderRadius: '8px', border: '1px solid rgba(255,77,79,0.25)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 'bold' }}>
                    {isZh ? 'RCU 零停機熱更新 (Zero-Downtime Hot Reload)' : 'RCU Zero-Downtime Hot Reload'}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {isZh ? '策略指針原子切換開銷: < 1 微秒 · 叢集無連線抖動' : 'Atomic pointer swap: < 1 μs · Zero connection stall across 15 nodes'}
                  </div>
                </div>
                <button style={{ background: 'linear-gradient(135deg, #ff4d4f, #d9363e)', border: 'none', color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer' }}>
                  PUSH POLICY OTA (ALL NODES)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Feature Grid */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
          {isZh ? 'Enterprise 企業旗艦版專屬架構防線' : 'Enterprise Flagship Architectural Pillars'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #ff4d4f' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#ff7875', marginBottom: '1rem' }}>
              {isZh ? '1. K8s 叢集 DaemonSet 治理' : '1. K8s DaemonSet Ingress'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '支援以 DaemonSet 或 Ingress Sidecar 原生嵌入 Kubernetes 叢集，跨多個工作負載 Pod 統一收斂執行權限，零單點故障。'
                : 'Native Kubernetes DaemonSet and Ingress Sidecar integration. Unifies execution boundaries across distributed worker pods with zero single point of failure.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              {isZh ? '2. 法院級 SHA-256 Merkle 溯源鏈' : '2. Court-Admissible Merkle Audit'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '每一次工具調用、參數哈希與策略版本均實時寫入單向密碼學 Merkle 鏈，支援日誌防篡改校驗與一鍵匯出供合規審計。'
                : 'Every tool invocation, argument hash, and policy version is cryptographically anchored to an append-only Merkle tree, exported directly to corporate SIEM.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid var(--accent-blue)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
              {isZh ? '3. 100% 離線斷網 / Air-Gapped 支援' : '3. 100% Air-Gapped Private Cloud'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '完全杜絕外部遙測與雲端依賴。策略二進位檔 (policy.bin) 離線簽章驗證，符合金融業、國防軍工與醫療體系的最高資安隔離要求。'
                : 'Zero external telemetry and zero cloud dependencies. Binary policies are validated entirely on-premise, satisfying strict financial and defense air-gap requirements.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #27c93f' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#27c93f', marginBottom: '1rem' }}>
              {isZh ? '4. 72 小時連續極限浸泡驗證' : '4. 72-Hour Soak Proven Resilience'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '通過 160,611 次連續調用之 72 小時抗壓測試，記憶體洩漏量為 0 Bytes，RSS 常駐記憶體零漂移，保障 24/7 生產環境長治久安。'
                : 'Validated through 72-hour continuous soak tests across 160,611 invocations. Zero memory leaks and zero RSS drift ensure uninterrupted 24/7 production.'}
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
          {isZh ? '📋 出廠硬體與系統技術規格' : '📋 Enterprise System Technical Specifications'}
        </h2>
        <div style={{ overflowX: 'auto', background: 'rgba(15,20,30,0.6)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)', width: '30%' }}>{isZh ? '授權配額 (Seats)' : 'Machine Seats'}</td>
                <td style={{ padding: '1.2rem', color: '#fff', fontWeight: '600' }}>最高 15 組 Machine UUIDs (支援大規模分佈式叢集)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '最大並發 Agent' : 'Max Concurrent Agents'}</td>
                <td style={{ padding: '1.2rem', color: '#ff4d4f', fontWeight: 'bold' }}>450 個 Concurrent Agents (每節點 30 Agents)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '微核心執行延遲' : 'Fast-Path Latency'}</td>
                <td style={{ padding: '1.2rem', color: 'var(--accent-gold)', fontWeight: 'bold', fontFamily: 'monospace' }}>353 ns (C-ABI 常數時間點陣查表)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '叢集熱更新開銷' : 'RCU Pointer Swap'}</td>
                <td style={{ padding: '1.2rem', color: '#27c93f', fontWeight: 'bold', fontFamily: 'monospace' }}>&lt; 1 μs (全網原子切換，零請求停頓)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '支援部署架構' : 'Target Environments'}</td>
                <td style={{ padding: '1.2rem', color: '#fff' }}>Kubernetes (Helm), Docker Swarm, VMware, OpenShift, On-Prem Bare Metal</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? 'SIEM 整合' : 'SIEM Integration'}</td>
                <td style={{ padding: '1.2rem', color: '#fff' }}>Splunk, ElasticSearch, Datadog, AWS CloudWatch, Kafka Event Stream</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '訂閱價格與 SLA' : 'Pricing & SLA'}</td>
                <td style={{ padding: '1.2rem', color: '#ff4d4f', fontWeight: 'bold' }}>$29,990 / 年 (專屬架構師諮詢與 24/7 SLA 支援)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Dual-Action Closing Block */}
      <section style={{ textAlign: 'center', padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(255,77,79,0.08) 0%, rgba(15,10,20,0.95) 100%)', border: '1px solid rgba(255,77,79,0.3)', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
          {isZh ? '開啟企業級 AI 執行安全防線與合規採購' : 'Deploy Enterprise-Grade AI Execution Governance'}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
          {isZh
            ? '我們的架構團隊將協助您完成 K8s PoC 驗證、內部法務審查與客製化策略編譯。'
            : 'Our enterprise solutions architects will assist you with K8s PoC deployment, legal compliance audit, and policy customization.'}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:service@dr-os.io?subject=Inquiry:%20DROS%20Enterprise%20Edition%20Contract" className="btn btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
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
