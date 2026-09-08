import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LinuxDeployModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language && i18n.language.startsWith('zh');
  const [activeTab, setActiveTab] = useState('docker');
  const [copiedKey, setCopiedKey] = useState('');

  if (!isOpen) return null;

  const commands = {
    docker: `docker run -d \\
  --name vajraclaw-hacker \\
  -p 8080:8080 \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v ~/.dros/audit:/root/.dros/audit \\
  ghcr.io/top-celestial-company-ltd/vajraclaw:latest`,
    script: `curl -fsSL https://dr-os.io/install.sh | bash`,
    pip: `# 1. 安裝 Python SDK & CLI
pip install vajraclaw

# 2. 初始化本地身分憑證 (W3C did:key)
vajra init

# 3. 啟動帶內守護常駐程序 (26.1μs 帶內熔斷)
vajra start --daemon`
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'linear-gradient(180deg, #111116 0%, #0a0a0d 100%)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '16px',
          maxWidth: '680px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 240, 255, 0.1)',
          overflow: 'hidden',
          animation: 'fadeUp 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🐧</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f0f0f0', fontWeight: '700' }}>
                {isZh ? 'Linux / Server 終端快速部署' : 'Linux / Server Fast Deployment'}
              </h3>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {isZh ? '適用於 Ubuntu / Debian / RHEL / Arch 與 Headless 雲端伺服器' : 'For Ubuntu, Debian, RHEL, Arch, and Headless Cloud Servers'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.25rem 0.5rem',
              lineHeight: 1
            }}
          >
            &times;
          </button>
        </div>

        {/* Tab Selector */}
        <div style={{
          display: 'flex',
          padding: '0.75rem 1.5rem 0',
          gap: '0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <button
            onClick={() => setActiveTab('docker')}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'docker' ? '2px solid var(--accent-gold)' : '2px solid transparent',
              color: activeTab === 'docker' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            🐳 Docker (推薦)
          </button>
          <button
            onClick={() => setActiveTab('script')}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'script' ? '2px solid var(--accent-gold)' : '2px solid transparent',
              color: activeTab === 'script' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            ⚡ 一鍵安裝腳本 (curl)
          </button>
          <button
            onClick={() => setActiveTab('pip')}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'pip' ? '2px solid var(--accent-gold)' : '2px solid transparent',
              color: activeTab === 'pip' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            🐍 Python SDK / CLI
          </button>
        </div>

        {/* Modal Body / Command Area */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{
            background: '#070709',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Terminal bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                bash / zsh
              </span>
            </div>

            {/* Code Content */}
            <pre style={{
              padding: '1.2rem',
              margin: 0,
              fontFamily: 'JetBrains Mono, Menlo, monospace',
              fontSize: '0.85rem',
              lineHeight: '1.6',
              color: '#38bdf8',
              overflowX: 'auto'
            }}>
              <code>{commands[activeTab]}</code>
            </pre>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(commands[activeTab], activeTab)}
              style={{
                position: 'absolute',
                top: '2.5rem',
                right: '0.75rem',
                background: copiedKey === activeTab ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {copiedKey === activeTab ? (
                <>✓ {isZh ? '已複製' : 'Copied!'}</>
              ) : (
                <>{isZh ? '複製指令' : 'Copy'}</>
              )}
            </button>
          </div>

          {/* Feature Notes */}
          <div style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {activeTab === 'docker' && (
              <p style={{ margin: 0 }}>
                💡 <strong>Docker 容器亮點</strong>：開箱即用支援 DSH、OpenClaw、Claude Code 與 Cursor 代理通訊；掛載 audit 目錄自動保留 SHA-256 Merkle 稽核鏈。
              </p>
            )}
            {activeTab === 'script' && (
              <p style={{ margin: 0 }}>
                💡 <strong>一鍵原生腳本</strong>：自動偵測 Linux 發行版架構（x86_64 / aarch64），配置 systemd service 自動重啟與本機 C-ABI 微核心。
              </p>
            )}
            {activeTab === 'pip' && (
              <p style={{ margin: 0 }}>
                💡 <strong>Python / Agent 原生</strong>：直接融入 LangChain、LlamaIndex、CrewAI 與自建 Agent 循環，提供 26.1μs 帶內硬熔斷裝飾器 <code>@vajra_guard</code>。
              </p>
            )}
          </div>
        </div>

        {/* Footer / Links */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(255, 255, 255, 0.02)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem'
        }}>
          <a 
            href="https://github.com/Top-Celestial-Company-Ltd/DROS-VajraClaw-Hacker"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}
          >
            {isZh ? '檢視 GitHub 開源原始碼與手冊 →' : 'View GitHub Repo & Docs →'}
          </a>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}
          >
            {isZh ? '關閉' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
