import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function EnterpriseDetail() {
  const { i18n } = useTranslation();
  const isZh = i18n.language && i18n.language.startsWith('zh');
  const [activeTab, setActiveTab] = useState('cluster'); // 'cluster' | 'longtask'
  const [themeMode, setThemeMode] = useState('dark');
  const isLight = themeMode === 'light';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container" style={{ paddingTop: '3.5rem', paddingBottom: '6rem' }}>
      <Helmet>
        <title>{isZh ? 'VajraAgent Enterprise 企業旗艦版 | DROS 產品詳情' : 'VajraAgent Enterprise Edition | DROS Product Details'}</title>
        <meta name="description" content={isZh ? '專為高併發組織與金融醫療打造的零信任網格 (Zero-Trust Mesh)，配備 K8s 叢集 DaemonSet、階梯式處置開關、長效任務短效租約 (Long-Task Registry) 與 Merkle 審計大屏。' : 'Zero-Trust Mesh for high-concurrency enterprises with K8s DaemonSet, Eviction Engine controls, Long-Task Short-Lease Registry, and Merkle audit trails.'} />
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
          {isZh ? 'K8s 叢集網格 · 450 並發治理 · 長任務短效租約 · 法院級 Merkle 存證' : 'K8s Cluster Mesh · 450 Concurrent Governance · Long-Task Short-Lease Registry · Court-Admissible Merkle Audit'}
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: '1.8' }}>
          {isZh
            ? '針對上市企業、跨國金融與智慧醫療體系打造。當企業內有數十個部門與上百個 AI 員工同時調用生產資料庫與內部 ERP 時，您需要中央戰情室進行多租戶隔離、長任務短效租約動態換發、以及在 353 奈秒內熔斷異常威脅的硬體級防禦。'
            : 'Designed for Fortune 500 enterprises, multinational banking, and healthcare systems. When hundreds of autonomous AI employees concurrently access production databases and ERPs, enterprise security requires a centralized command center for multi-tenant isolation, long-task credential renewal, and 353 ns hardware-level execution containment.'}
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

        {/* Tab Navigation Buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('cluster')}
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: '10px',
              border: activeTab === 'cluster' ? '1px solid #ff4d4f' : '1px solid rgba(255,255,255,0.1)',
              background: activeTab === 'cluster' ? 'rgba(255, 77, 79, 0.15)' : 'rgba(20,20,25,0.6)',
              color: activeTab === 'cluster' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.92rem',
              transition: 'all 0.2s'
            }}
          >
            <span>🖥️</span>
            {isZh ? '分頁 1：叢集戰情室與階梯處置' : 'Tab 1: Cluster Telemetry & Eviction'}
          </button>

          <button
            onClick={() => setActiveTab('longtask')}
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: '10px',
              border: activeTab === 'longtask' ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.1)',
              background: activeTab === 'longtask' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(20,20,25,0.6)',
              color: activeTab === 'longtask' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.92rem',
              transition: 'all 0.2s'
            }}
          >
            <span>📜</span>
            {isZh ? '分頁 2：長任務短效租約與針對性撤銷 (Long-Task Registry)' : 'Tab 2: Long-Task Registry & Targeted Revocation'}
            <span style={{ background: 'rgba(212,175,55,0.3)', color: 'var(--accent-gold)', fontSize: '0.7rem', padding: '1px 6px', borderRadius: '8px' }}>
              HIGH PRIORITY
            </span>
          </button>
        </div>

        {/* Console Mockup Container */}
        <div style={{
          background: isLight ? '#ffffff' : '#0c0910',
          border: isLight ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid rgba(255, 77, 79, 0.3)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: isLight ? '0 20px 45px rgba(0,0,0,0.1), 0 0 15px rgba(0,0,0,0.05)' : '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(255, 77, 79, 0.08)',
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
                  color: isLight ? '#0f172a' : '#ff7875',
                  fontWeight: 'bold'
                }}>
                  VajraAgent v2.0 Enterprise Commercial <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>· LIC-ENT-2026-0888</span>
                </span>
              </div>
            </div>

            {/* Right Telemetry & Theme Switcher Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '0.82rem', fontFamily: 'monospace', color: isLight ? '#475569' : 'var(--text-secondary)' }}>
              <span>Nodes: <strong style={{ color: isLight ? '#0f172a' : '#fff' }}>15 / 15 Healthy</strong></span>
              <span>Capacity: <strong style={{ color: isLight ? '#b45309' : 'var(--accent-gold)' }}>450 Agents</strong></span>
              <span>Eviction: <strong style={{ color: '#dc2626' }}>ARMED</strong></span>

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

          {/* TAB 1: CLUSTER TELEMETRY & EVICTION */}
          {activeTab === 'cluster' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1px',
              background: isLight ? '#e2e8f0' : 'rgba(255,255,255,0.05)'
            }}>
              {/* Left Column: Eviction Policy & Department Roles */}
              <div style={{
                background: isLight ? '#f8fafc' : '#110b14',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: isLight ? '#dc2626' : '#ff7875', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                    {isZh ? '階梯式熔斷處置機制' : 'Eviction Engine & Containment Matrix'}
                  </span>
                  <h4 style={{ color: isLight ? '#0f172a' : '#fff', fontSize: '1.1rem', marginTop: '0.3rem' }}>
                    {isZh ? '三階動態防禦開關' : 'Three-Tier Dynamic Controls'}
                  </h4>
                </div>

                {/* Control Switches */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div style={{
                    background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
                  }}>
                    <div>
                      <div style={{ color: isLight ? '#0f172a' : '#fff', fontSize: '0.85rem', fontWeight: '600' }}>1. Soft Deny (容錯自愈)</div>
                      <div style={{ color: isLight ? '#64748b' : 'var(--text-secondary)', fontSize: '0.75rem' }}>單次越權阻斷，回傳錯誤代碼供 Agent 自動糾錯</div>
                    </div>
                    <span style={{ color: '#16a34a', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[ENABLED]</span>
                  </div>

                  <div style={{
                    background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
                  }}>
                    <div>
                      <div style={{ color: isLight ? '#0f172a' : '#fff', fontSize: '0.85rem', fontWeight: '600' }}>2. Sliding Window Quarantine (滑動隔離)</div>
                      <div style={{ color: isLight ? '#64748b' : 'var(--text-secondary)', fontSize: '0.75rem' }}>10 秒內違規達 3 次，自動剝奪執行權降為唯讀沙箱</div>
                    </div>
                    <span style={{ color: '#d97706', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[ARMED]</span>
                  </div>

                  <div style={{
                    background: isLight ? '#fef2f2' : 'rgba(255,77,79,0.05)',
                    border: isLight ? '1px solid #fecaca' : '1px solid rgba(255,77,79,0.2)',
                    borderRadius: '8px',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ color: '#dc2626', fontSize: '0.85rem', fontWeight: '600' }}>3. Physical Hard Kill (物理強殺)</div>
                      <div style={{ color: isLight ? '#7f1d1d' : 'var(--text-secondary)', fontSize: '0.75rem' }}>偵測到底層 Syscall 逃逸或日誌篡改，直發 SIGKILL</div>
                    </div>
                    <span style={{ color: '#dc2626', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[ACTIVE]</span>
                  </div>
                </div>

                {/* Active Department Swarm Roles */}
                <div>
                  <span style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {isZh ? '啟用中部門 AI 角色池 (10 Roles)' : 'Active Enterprise Role Pool (10 Roles)'}
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.6rem' }}>
                    {['support', 'accounting', 'devops', 'hr-admin', 'legal-audit', 'ciso-lead', 'risk-officer', 'treasury'].map((role, i) => (
                      <span key={i} style={{
                        background: isLight ? '#fef3c7' : 'rgba(212,175,55,0.1)',
                        color: isLight ? '#92400e' : 'var(--accent-gold)',
                        border: isLight ? '1px solid #fde68a' : '1px solid rgba(212,175,55,0.25)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        fontWeight: '600'
                      }}>
                        ☑️ {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Node Telemetry & Merkle Chain */}
              <div style={{
                background: isLight ? '#0f172a' : '#0a080d',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: isLight ? '#f87171' : '#ff7875', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                      {isZh ? '企業叢集即時遙測與 SIEM 串流' : 'Cluster Telemetry & SIEM Merkle Pipeline'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontFamily: 'monospace' }}>Splunk / Elastic: CONNECTED</span>
                  </div>

                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', lineHeight: '1.7', background: 'rgba(0,0,0,0.6)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    <div style={{ color: '#94a3b8' }}>[14:48:12.001] 🌐 K8s-Node-08: Ingress Request 0x4B21 validated via Ed25519 Root DID</div>
                    <div style={{ color: '#4ade80' }}>[14:48:12.002] ⚡ FAST_PATH: Tool `read_ledger_balance` approved (C-ABI Latency: 353 ns)</div>
                    <div style={{ color: '#facc15' }}>[14:48:14.219] ⚠️ POLICY_ALERT: Role `accounting-agent` requested `wire_transfer($120,000)`</div>
                    <div style={{ color: '#f87171', background: 'rgba(239,68,68,0.12)', padding: '0.5rem', borderRadius: '4px', borderLeft: '3px solid #ef4444' }}>
                      [14:48:14.220] 🛑 HARD_CONTAINMENT: CapBitmap bitwise AND failed (Op=0x08, Limit=$10,000). Action dropped in 353 ns. Window violation: 1/3 recorded. State drift: ΔS = 0.
                    </div>
                    <div style={{ color: 'var(--accent-gold)' }}>[14:48:14.222] ⚖️ MERKLE_LINEAGE: Cryptographic Evidence Block #40912 anchored to Splunk SIEM. Non-repudiation assured.</div>
                  </div>
                </div>

                {/* RCU Zero-Downtime Hot Reload Controls */}
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 'bold' }}>
                      {isZh ? 'RCU 零停機熱更新 (Zero-Downtime Hot Reload)' : 'RCU Zero-Downtime Hot Reload'}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {isZh ? '策略指針原子切換開銷: < 1 微秒 · 叢集無連線抖動' : 'Atomic pointer swap: < 1 μs · Zero connection stall across 15 nodes'}
                    </div>
                  </div>
                  <button style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', border: 'none', color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', transition: 'opacity 0.2s' }}>
                    PUSH POLICY OTA (ALL NODES)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LONG-TASK REGISTRY & TARGETED REVOCATION */}
          {activeTab === 'longtask' && (
            <div style={{ background: isLight ? '#f8fafc' : '#0e0b12', padding: '2rem' }}>
              {/* Constitution Banner */}
              <div style={{
                background: isLight ? '#fef3c7' : 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(255,77,79,0.08) 100%)',
                border: isLight ? '1px solid #fde68a' : '1px solid rgba(212,175,55,0.3)',
                borderRadius: '12px',
                padding: '1.2rem 1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: isLight ? '#b45309' : 'var(--accent-gold)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    LONG-TASK GOVERNANCE CONSTITUTION
                  </span>
                  <div style={{ fontSize: '1.05rem', color: isLight ? '#0f172a' : '#fff', fontWeight: 'bold', marginTop: '0.3rem' }}>
                    {isZh ? '「長任務不應擁有長權限；長任務只能擁有持續重新取得短期權限的資格。」' : 'Credential Lifetime << Maximum Agent Task Lifetime'}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: isLight ? '#475569' : 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {isZh ? '雙軸防衛：正常狀況以 10 分鐘短效租約自然換發；異常狀況由 < 2.5μs 針對性 Epoch 撤銷即時熔斷。' : 'Dual-Axis Model: Normal lifecycle via 10m short leases; Compromised lifecycle via < 2.5μs targeted Epoch revocation.'}
                  </div>
                </div>
                <div style={{
                  background: isLight ? '#ffffff' : 'rgba(0,0,0,0.5)',
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(212,175,55,0.2)',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: isLight ? '#b45309' : 'var(--accent-gold)',
                  fontWeight: 'bold'
                }}>
                  TTL (10m) &lt;&lt; Horizon (72h)
                </div>
              </div>

              {/* KPI Stat Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{
                  background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
                }}>
                  <div style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : 'var(--text-secondary)', textTransform: 'uppercase' }}>運行中長任務 (Active)</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#16a34a', fontFamily: 'monospace', marginTop: '0.3rem' }}>42 Tasks</div>
                  <div style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : 'var(--text-secondary)', marginTop: '0.3rem' }}>跨 15 組 K8s 節點</div>
                </div>

                <div style={{
                  background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
                }}>
                  <div style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : 'var(--text-secondary)', textTransform: 'uppercase' }}>租約換約率 (Renewals)</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-blue)', fontFamily: 'monospace', marginTop: '0.3rem' }}>14 / min</div>
                  <div style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : 'var(--text-secondary)', marginTop: '0.3rem' }}>100% 通過七重安全斷言</div>
                </div>

                <div style={{
                  background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
                }}>
                  <div style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : 'var(--text-secondary)', textTransform: 'uppercase' }}>預算告警 (Budget Alert)</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#d97706', fontFamily: 'monospace', marginTop: '0.3rem' }}>3 Tasks</div>
                  <div style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : 'var(--text-secondary)', marginTop: '0.3rem' }}>調用數接近 80% 上限</div>
                </div>

                <div style={{
                  background: isLight ? '#fef2f2' : 'rgba(255,77,79,0.05)',
                  border: isLight ? '1px solid #fecaca' : '1px solid rgba(255,77,79,0.25)',
                  borderRadius: '10px',
                  padding: '1.2rem'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#dc2626', textTransform: 'uppercase' }}>今日精準撤銷 (Revoked)</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#dc2626', fontFamily: 'monospace', marginTop: '0.3rem' }}>1 Task</div>
                  <div style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.3rem' }}>微秒級阻斷，其餘零波及</div>
                </div>
              </div>

              {/* Interactive Task DataGrid */}
              <div style={{
                overflowX: 'auto',
                background: isLight ? '#ffffff' : 'rgba(0,0,0,0.5)',
                borderRadius: '12px',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                marginBottom: '1.5rem',
                boxShadow: isLight ? '0 4px 12px rgba(0,0,0,0.04)' : 'none'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.03)', borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', color: isLight ? '#475569' : 'var(--text-secondary)' }}>Task ID / DID</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: isLight ? '#475569' : 'var(--text-secondary)' }}>所屬部門 / 角色</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#475569' : 'var(--text-secondary)' }}>任務最大時限</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#475569' : 'var(--text-secondary)' }}>當前 Epoch</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#475569' : 'var(--text-secondary)' }}>租約剩餘 (TTL)</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: isLight ? '#475569' : 'var(--text-secondary)' }}>能力預算消耗</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#b45309' : 'var(--accent-gold)' }}>即時針對性操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: isLight ? '1px solid #f1f5f9' : '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: isLight ? '#0f172a' : '#fff' }}>
                        <span style={{ color: '#16a34a' }}>●</span> T-081 (agent-etl-worker)
                      </td>
                      <td style={{ padding: '1rem', color: isLight ? '#334155' : 'var(--text-primary)' }}>Data Ops ｜ <code>etl-pipeline</code></td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>8 Hours</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: isLight ? '#b45309' : 'var(--accent-gold)', fontWeight: 'bold' }}>Epoch 14</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: '#16a34a', fontWeight: 'bold' }}>⏱️ 06m 42s</td>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>Calls: 142/500 ｜ 24/100MB</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button style={{ background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.15)', border: '1px solid #ef4444', color: '#dc2626', padding: '0.35rem 0.8rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 'bold', cursor: 'pointer' }}>
                          🚨 即時熔斷 (Revoke)
                        </button>
                      </td>
                    </tr>

                    <tr style={{ borderBottom: isLight ? '1px solid #f1f5f9' : '1px solid rgba(255,255,255,0.05)', background: isLight ? '#fffbeb' : 'rgba(255,189,46,0.02)' }}>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: isLight ? '#0f172a' : '#fff' }}>
                        <span style={{ color: '#d97706' }}>●</span> T-094 (agent-tax-audit)
                      </td>
                      <td style={{ padding: '1rem', color: isLight ? '#334155' : 'var(--text-primary)' }}>Finance ｜ <code>tax-analyzer</code></td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>72 Hours</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: isLight ? '#b45309' : 'var(--accent-gold)', fontWeight: 'bold' }}>Epoch 212</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: '#d97706', fontWeight: 'bold' }}>⏱️ 03m 15s</td>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#d97706' }}>Calls: 480/500 ⚠️ ｜ 89/100MB</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button style={{ background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.15)', border: '1px solid #ef4444', color: '#dc2626', padding: '0.35rem 0.8rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 'bold', cursor: 'pointer' }}>
                          🚨 即時熔斷 (Revoke)
                        </button>
                      </td>
                    </tr>

                    <tr style={{ borderBottom: isLight ? '1px solid #f1f5f9' : '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: isLight ? '#0f172a' : '#fff' }}>
                        <span style={{ color: '#16a34a' }}>●</span> T-102 (agent-refactor-bot)
                      </td>
                      <td style={{ padding: '1rem', color: isLight ? '#334155' : 'var(--text-primary)' }}>DevOps ｜ <code>code-modernizer</code></td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>24 Hours</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: isLight ? '#b45309' : 'var(--accent-gold)', fontWeight: 'bold' }}>Epoch 48</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: '#16a34a', fontWeight: 'bold' }}>⏱️ 08m 50s</td>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>Calls: 88/1000 ｜ 12/500MB</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button style={{ background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.15)', border: '1px solid #ef4444', color: '#dc2626', padding: '0.35rem 0.8rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 'bold', cursor: 'pointer' }}>
                          🚨 即時熔斷 (Revoke)
                        </button>
                      </td>
                    </tr>

                    <tr style={{ background: isLight ? '#fef2f2' : 'rgba(255,77,79,0.04)' }}>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#dc2626' }}>
                        <span>🛑</span> T-067 (agent-vendor-sync)
                      </td>
                      <td style={{ padding: '1rem', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>Procurement ｜ <code>api-crawler</code></td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: isLight ? '#64748b' : 'var(--text-secondary)' }}>12 Hours</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: '#dc2626', fontWeight: 'bold' }}>Epoch 19 (REVOKED)</td>
                      <td style={{ padding: '1rem', textAlign: 'center', fontFamily: 'monospace', color: '#dc2626', fontWeight: 'bold' }}>⏱️ 00m 00s</td>
                      <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#dc2626' }}>FUSED: Unauthorized Shell Exec</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <span style={{ background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.2)', color: '#dc2626', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          LOCKED OUT
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Under-the-Hood Epoch Mechanism Description */}
              <div style={{
                background: isLight ? '#ffffff' : 'rgba(255,255,255,0.02)',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px',
                padding: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                boxShadow: isLight ? '0 2px 6px rgba(0,0,0,0.03)' : 'none'
              }}>
                <div style={{ maxWidth: '750px' }}>
                  <div style={{ color: isLight ? '#0f172a' : '#fff', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
                    {isZh ? '⚡ 針對性撤銷底層原理：Epoch 推進原子廣播' : '⚡ How It Works: Atomic Epoch Increment Broadcast'}
                  </div>
                  <div style={{ color: isLight ? '#475569' : 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.6' }}>
                    {isZh
                      ? '當您點擊「即時熔斷」時，後端網關在 < 2.5 微秒內將該 Task 的 Epoch 遞增 (Epoch ← Epoch + 1)。持有舊憑證的 Agent 再次呼叫 Tool 時直接被 C-ABI 硬熔斷，而叢集內其餘數十個長任務 Agent 100% 零波及、零停機。'
                      : 'Triggering revocation broadcasts Epoch <- Epoch + 1 in under 2.5 microseconds. Subsequent tool calls by the compromised agent instantly hit C-ABI containment (Auth = 0), while all other cluster agents run with zero disruption.'}
                  </div>
                </div>
                <div style={{
                  background: isLight ? '#fee2e2' : 'rgba(255,77,79,0.1)',
                  border: isLight ? '1px solid #fecaca' : '1px solid rgba(255,77,79,0.3)',
                  color: '#dc2626',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>
                  T_rev &lt; 2.5 μs
                </div>
              </div>
            </div>
          )}
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
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '長效任務針對性撤銷' : 'Targeted Epoch Revocation'}</td>
                <td style={{ padding: '1.2rem', color: '#27c93f', fontWeight: 'bold', fontFamily: 'monospace' }}>&lt; 2.5 μs (Epoch 遞增原子切換，叢集其餘任務零波及)</td>
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
