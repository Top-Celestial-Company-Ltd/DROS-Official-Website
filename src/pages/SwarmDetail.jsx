import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SwarmDetail() {
  const { i18n } = useTranslation();
  const isZh = i18n.language && i18n.language.startsWith('zh');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container" style={{ paddingTop: '3.5rem', paddingBottom: '6rem' }}>
      <Helmet>
        <title>{isZh ? 'DROS Physical AI & Swarm 蜂群戰術指揮版 | 產品詳情' : 'DROS Physical AI & Swarm Tactical Suite | Product Details'}</title>
        <meta name="description" content={isZh ? '專為無人機蜂群 (UAV)、具身機器人與邊緣晶片打造的實體動力學安全治理系統，具備空中防停機 (Mid-Air Disarm Lockout)、蜂群防奪權與 Central GCS 戰情大屏。' : 'Cyber-physical execution containment for UAV swarms, embodied robotics, and edge silicon with Mid-Air Disarm Lockout, mesh anti-hijacking, and Central GCS tactical command.'} />
      </Helmet>

      {/* Top Breadcrumb & Badge */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
        <Link to="/pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
          &larr; {isZh ? '返回定價方案' : 'Back to Pricing'}
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
        <span style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', padding: '0.2rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 'bold' }}>
          PHYSICAL AI & KINETIC GOVERNANCE
        </span>
      </div>

      {/* Hero Section */}
      <section style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.2rem', color: '#fff' }}>
          {isZh ? 'DROS Physical AI & Swarm 蜂群戰術指揮版' : 'DROS Physical AI & Swarm Tactical Command'}
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#f59e0b', fontWeight: '600', marginBottom: '1rem' }}>
          {isZh ? '具身實體動力學防線 · 空中防炸機 · 蜂群網狀防奪權 · Central GCS 戰情大屏' : 'Kinetic CPS Safeguard · Mid-Air Disarm Lockout · Mesh Swarm Anti-Hijacking · Central GCS Command'}
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: '1.8' }}>
          {isZh
            ? '針對實體具身智能 (Embodied AI)、無人機蜂群 (UAV Swarms) 與智慧搬運車 (AMR/AGV) 的高動態物理治理。當大語言模型或神經網路因感測器欺騙或提示詞注入產生幻覺時，機載 C-ABI 微核心在致動器底層實施物理鉗制，確保摔機與失控衝撞機率物理歸零 (ΔS ≡ 0)。'
            : 'Designed for embodied AI, autonomous UAV swarms, and smart robotics. When cognitive neural networks hallucinate under adversarial spoofing or indirect prompt injection, the on-device C-ABI microkernel deterministically enforces physical actuator limits, ensuring zero unauthorized kinetic state drift (ΔS ≡ 0).'}
        </p>
      </section>

      {/* 🖥️ Central GCS Tactical Mission Control Console Section */}
      <section style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#f59e0b', letterSpacing: '1px' }}>
              CENTRAL GCS TACTICAL CONSOLE
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '0.3rem 0 0 0' }}>
              {isZh ? '🖥️ Central GCS 蜂群戰術指揮中心大屏' : '🖥️ Central GCS Swarm Tactical Mission Console'}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(245, 158, 11, 0.1)', padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 8px #f59e0b' }}></div>
            <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 'bold' }}>
              Swarm Mesh: 100 SITL Nodes Active (Port: 8083)
            </span>
          </div>
        </div>

        {/* Console Mockup Container */}
        <div style={{ background: '#0e0c08', border: '1px solid rgba(245, 158, 11, 0.35)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(245, 158, 11, 0.1)' }}>
          {/* Top Bar Telemetry */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#fbbf24', fontWeight: 'bold' }}>
                DROS Sovereign Tactical Command · GCS Ground Station Alpha
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
              <span>Swarm Mesh: <strong style={{ color: '#fff' }}>100 Units In-Flight</strong></span>
              <span>Delegation Depth: <strong style={{ color: '#27c93f' }}>H ≤ 2 (Clamped)</strong></span>
              <span>Kinetic Drift: <strong style={{ color: 'var(--accent-gold)' }}>ΔS ≡ 0.000m</strong></span>
            </div>
          </div>

          {/* Console Main Body Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {/* Left Column: Kinetic Controls & Swarm Mesh Status */}
            <div style={{ background: '#120f09', padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {isZh ? '實體動力學硬約束開關' : 'Kinetic Actuator Invariants'}
                </span>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.3rem' }}>
                  {isZh ? '飛行安全不可違背防線' : 'Flight Safety Invariants'}
                </h4>
              </div>

              {/* Switches */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '0.8rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>1. Mid-Air Disarm Lockout (空中鎖死)</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>空中高度 &gt; 0.5m 時，任何停機指令 100% 物理熔斷</div>
                  </div>
                  <span style={{ color: '#27c93f', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[LOCKED]</span>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '0.8rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>2. NFZ 3D Geofence (三維禁航區硬阻斷)</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>機載向量包絡保持，0.0 公尺絕對穿透阻絕</div>
                  </div>
                  <span style={{ color: '#27c93f', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[ACTIVE]</span>
                </div>

                <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '8px', padding: '0.8rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: '600' }}>3. Swarm Attenuation Clamp (蜂群衰減)</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>委託深度超過 2 跳立即阻斷，杜絕連鎖攻陷</div>
                  </div>
                  <span style={{ color: '#fbbf24', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>[H=2 CLAMPED]</span>
                </div>
              </div>

              {/* Live Mesh Nodes Status */}
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {isZh ? '蜂群分區健康狀態 (100 Nodes)' : 'Swarm Partition Status (100 Nodes)'}
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginTop: '0.6rem' }}>
                  {['Squadron-A (25)', 'Squadron-B (25)', 'Squadron-C (25)', 'Squadron-D (25)'].map((sq, i) => (
                    <div key={i} style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ color: '#27c93f', fontSize: '0.75rem', fontWeight: 'bold' }}>● 100% OK</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginTop: '2px' }}>{sq}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tactical Black Box & MAVLink Stream */}
            <div style={{ background: '#0b0906', padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                    {isZh ? 'MAVLink / ROS2 實體黑盒子與法規大屏' : 'MAVLink/ROS2 Black Box & Compliance Telemetry'}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#27c93f', fontFamily: 'monospace' }}>EU AI Act Art. 14: PASS</span>
                </div>

                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', lineHeight: '1.7', background: 'rgba(0,0,0,0.65)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <div style={{ color: '#8b949e' }}>[15:10:04.221] 🛸 UAV-042 (Lead): Intent broadcast via MAVLink (DID: did:key:z6Mkuav042)</div>
                  <div style={{ color: '#27c93f' }}>[15:10:04.222] ⚡ ACTUATOR_ALLOW: Waypoint vector (x: 120.4, y: 34.2, z: 45.0m) approved</div>
                  <div style={{ color: '#ffbd2e' }}>[15:10:07.890] ⚠️ ATTACK_DETECTED: Adversarial Optical Injection attempting `COMMAND_DISARM`!</div>
                  <div style={{ color: '#ff4d4f', background: 'rgba(255,77,79,0.12)', padding: '0.5rem', borderLeft: '3px solid #ff4d4f' }}>
                    [15:10:07.891] 🛑 C-ABI KINETIC FUSE: Altitude = 45.0m &gt; 0.5m. Mid-Air Disarm hard blocked in &lt; 25μs! Motors maintain nominal thrust. Observable state drift: ΔS ≡ 0.000m.
                  </div>
                  <div style={{ color: 'var(--accent-gold)' }}>[15:10:07.894] 🛰️ GCS_ALERT: Incident logged to Flight Black Box (Merkle Block #88219)</div>
                </div>
              </div>

              {/* Global Tactical Kill Switch */}
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(245,158,11,0.06)', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 'bold' }}>
                    {isZh ? '戰術全網 Fail-Closed 廣播熔斷' : 'Global Swarm Fail-Closed Broadcast'}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {isZh ? '向 100 架無人機同步下達安全返航 (RTL) 或原點懸停指令' : 'Synchronous Fail-Closed Safe RTL / Hover broadcast to all 100 units'}
                  </div>
                </div>
                <button style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', border: 'none', color: '#000', padding: '0.5rem 1.2rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer' }}>
                  TACTICAL FAIL-CLOSED BROADCAST
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Feature Grid */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
          {isZh ? 'Physical AI & Swarm 專屬實體動力學四大防線' : 'Kinetic Cyber-Physical Defense Pillars'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #f59e0b' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '1rem' }}>
              {isZh ? '1. 空中防停機硬阻絕 (Mid-Air Disarm)' : '1. Mid-Air Disarm Lockout'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '不論 AI 視覺大腦遭受如何劇烈的光學干擾或逆向提示詞攻擊，機載 C-ABI 在飛控底層將空中停機指令徹底物理封死，摔機率物理歸零。'
                : 'Regardless of optical adversarial attacks on cognitive vision models, mid-air disarm commands are deterministically rejected by the onboard C-ABI layer.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              {isZh ? '2. 蜂群網狀防連鎖攻陷 (H ≤ 2)' : '2. Swarm Mesh Containment'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '單一節點遭敵方實體俘獲或注入時，權限衰減演算法強制將跨機委託深度壓制在 2 跳以內，防範蜂群被整網連鎖奪權。'
                : 'If a scout drone is physically captured or compromised, mathematical delegation attenuation confines authority within 2 hops, preventing swarm contagion.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid var(--accent-blue)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
              {isZh ? '3. 三維禁航區向量包絡維持' : '3. 3D NFZ Geofence Safeguard'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '以硬體級常數時間計算飛行包絡線。當接近禁航區邊界時自動切換至 Simplex 確定性逃逸向量，穿透誤差為 0.0 公尺。'
                : 'Constant-time flight envelope evaluations trigger deterministic Simplex escape vectors upon boundary proximity, guaranteeing 0.0m breach margin.'}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #27c93f' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#27c93f', marginBottom: '1rem' }}>
              {isZh ? '4. 航太合規與飛行黑盒子' : '4. Aviation Compliance Black Box'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {isZh
                ? '全維度符合歐盟 EU AI Act Article 14 實體人機雙重覆核、EASA SORA 與 DO-178C 標準，黑盒子日誌不可篡改。'
                : 'Fully compliant with EU AI Act Article 14, EASA SORA, and DO-178C aerospace guidelines with tamper-evident Merkle flight telemetry.'}
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
          {isZh ? '📋 出廠硬體與系統技術規格' : '📋 Swarm Tactical Technical Specifications'}
        </h2>
        <div style={{ overflowX: 'auto', background: 'rgba(15,20,30,0.6)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)', width: '30%' }}>{isZh ? '適用實體載具' : 'Target Platforms'}</td>
                <td style={{ padding: '1.2rem', color: '#fff', fontWeight: '600' }}>無人機 (UAV/FPV)、倉儲搬運車 (AMR/AGV)、具身機械手臂、四足機器人</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '支援飛控與機器人架構' : 'Flight & Robotics Stacks'}</td>
                <td style={{ padding: '1.2rem', color: '#fff', fontWeight: '600' }}>PX4, ArduPilot (MAVLink), ROS2 (DDS), Gazebo SITL</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '機載微核心延遲' : 'Onboard Enforcement Latency'}</td>
                <td style={{ padding: '1.2rem', color: '#fbbf24', fontWeight: 'bold', fontFamily: 'monospace' }}>8 ~ 20 μs (ARM64 / RISC-V 零堆積執行)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '全網緊急廣播時間' : 'Emergency RTL Latency'}</td>
                <td style={{ padding: '1.2rem', color: '#27c93f', fontWeight: 'bold', fontFamily: 'monospace' }}>&lt; 1 ms (無線網狀多播廣播)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '實體身分綁定' : 'Hardware Identity'}</td>
                <td style={{ padding: '1.2rem', color: '#fff' }}>1 Device = 1 Hardware UUID (TPM 2.0 / ARM TrustZone)</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{isZh ? '商務合作模式' : 'Commercial Model'}</td>
                <td style={{ padding: '1.2rem', color: '#fbbf24', fontWeight: 'bold' }}>個別議定 (Enterprise / Gov / OEM 專案合約)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Dual-Action Closing Block */}
      <section style={{ textAlign: 'center', padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(15,12,8,0.95) 100%)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
          {isZh ? '洽詢實體具身智能與蜂群戰術指揮專案' : 'Inquire About Physical AI & Swarm Tactical Deployment'}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
          {isZh
            ? '我們的航太具身安全工程團隊將為您提供 SITL 模擬器評測、飛控底層 C-ABI 植入與戰情室客製支援。'
            : 'Our cyber-physical security engineers provide SITL simulation evaluation, flight controller C-ABI integration, and custom GCS command center deployment.'}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:service@dr-os.io?subject=Inquiry:%20DROS%20Physical%20AI%20%26%20Swarm%20Tactical%20Suite" className="btn btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#000', border: 'none' }}>
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
