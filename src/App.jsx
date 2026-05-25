import React, { useEffect, useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const kernels = [
    { name: "Rust", repo: "dros-core-rs", icon: "⚙️", desc: "Memory-safe, high-performance core." },
    { name: "C++", repo: "dros-core-cpp", icon: "⚡", desc: "Ultra-low latency bare-metal engine." },
    { name: "Go", repo: "dros-core-go", icon: "🐹", desc: "Highly concurrent, scalable runtime." },
    { name: "Java", repo: "dros-core-java", icon: "☕", desc: "Enterprise-grade cross-platform node." },
    { name: "TypeScript", repo: "dros-core-ts", icon: "🌐", desc: "Isomorphic node & browser kernel." },
    { name: "Python", repo: "dros-core-py", icon: "🐍", desc: "AI-native rapid-prototyping core." }
  ];

  const githubUser = "Top-Celestial-Company-Ltd";

  return (
    <>
      <main className="container">
        {/* Hero Section */}
        <section className={`hero animate-fade-up ${isVisible ? '' : 'opacity-0'}`}>
          <h1>DROS</h1>
          <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)'}}>
            Dharma Reasoning Operating System
          </h2>
          <p className="subtitle">
            The world's thinnest kernel for the thickest truths. <br/>
            A deterministic, hallucination-free reasoning engine for Large Language Models.
          </p>
          <div className="hero-buttons">
            <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" className="btn btn-primary">
              View on GitHub
            </a>
            <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System/blob/main/specs/DROS-RFC-001.md`} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Read DROS-RFC-001
            </a>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture">
          <h2 className="section-title">The Absolute Truth <span className="blue-text">Pipeline</span></h2>
          <div className="grid-3">
            <div className="glass-card">
              <h3 className="serif-font gold-text" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>1. Weaver (攔截)</h3>
              <p>O(N) deterministic Trie-based scanner. Intercepts prompts to perform Longest-Match-First tokenization without statistical hallucination.</p>
            </div>
            <div className="glass-card">
              <h3 className="serif-font gold-text" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>2. Navigator (檢索)</h3>
              <p>Topological graph-traversal engine. Pulls exact contexts, canonical definitions, and logical boundaries through directed Synapses.</p>
            </div>
            <div className="glass-card">
              <h3 className="serif-font gold-text" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>3. Guard VM (守門)</h3>
              <p>The final validation sandbox. Evaluates LLM generated responses against the Golden Manifest to ensure 0% semantic drift.</p>
            </div>
          </div>
        </section>

        {/* The 6 Micro-Kernels */}
        <section id="kernels">
          <h2 className="section-title">The Six Meridian Sword <br/><span className="gold-text" style={{fontSize: '1.5rem'}}>(Official Micro-Kernels)</span></h2>
          <div className="grid-3">
            {kernels.map((kernel) => (
              <a 
                href={`https://github.com/${githubUser}/${kernel.repo}`} 
                target="_blank" 
                rel="noreferrer" 
                className="glass-card" 
                style={{textDecoration: 'none', color: 'inherit'}}
                key={kernel.name}
              >
                <div className="kernel-icon">{kernel.icon}</div>
                <h3 style={{marginBottom: '0.5rem'}}>{kernel.name}</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>{kernel.desc}</p>
                <div style={{marginTop: '1rem', fontSize: '0.8rem', color: 'var(--accent-blue)'}}>
                  View Source ↗
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Enterprise VajraClaw */}
        <section id="enterprise" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
          <div className="glass-card" style={{padding: '4rem 2rem', borderColor: 'var(--accent-gold-glow)'}}>
            <h2 className="serif-font gold-text" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>VajraClaw Enterprise</h2>
            <p style={{marginBottom: '2rem', fontSize: '1.1rem'}}>
              Ready to scale? VajraClaw is the proprietary orchestration layer featuring multi-tenant isolation, enterprise API rate limiting, and deep-graph analytics (Graphify).
            </p>
            <a href="mailto:contact@dros.dev?subject=Request%20VajraClaw%20Enterprise%20Access" className="btn btn-primary" style={{fontSize: '1.2rem', padding: '1rem 2.5rem'}}>
              Join the Waitlist
            </a>
            <p style={{marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
              * We will contact you when the VajraClaw commercial portal opens.
            </p>
          </div>
        </section>
        {/* About Us */}
        <section id="about" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingTop: '2rem'}}>
          <h2 className="section-title">About <span className="gold-text">Us</span></h2>
          <div className="glass-card" style={{textAlign: 'left', marginBottom: '2rem'}}>
            <h3 style={{marginBottom: '1rem', color: 'var(--accent-blue)'}}>English</h3>
            <p style={{color: 'var(--text-secondary)'}}>
              We are the Core Architecture Team behind the Dharma Reasoning Operating System (DROS). 
              Recognizing the severe limitations of probability-based AI in handling absolute canonical truths, 
              we pioneered the deterministic Weaver-Navigator-Guard pipeline. Our mission is to provide the world's 
              most rigorous, hallucination-free reasoning kernel for scholastic and philosophical computing.
            </p>
          </div>
          <div className="glass-card" style={{textAlign: 'left'}}>
            <h3 style={{marginBottom: '1rem', color: 'var(--accent-gold)'}}>中文</h3>
            <p style={{color: 'var(--text-secondary)'}}>
              我們是 Dharma Reasoning OS (DROS) 的核心架構團隊。有感於當前機率型 AI 在處理「絕對經典真理」時的嚴重缺陷（幻覺與語義飄移），
              我們開創了基於「攔截、檢索、守門」的決定論推論管線。我們的使命是為深度的哲學與法義運算，提供全球最嚴謹、零幻覺的底層微核心。
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Dharma Reasoning Operating System.</p>
          <p style={{marginTop: '0.5rem', fontSize: '0.8rem'}}>
            The DROS Kernel is open-source under the AGPL-3.0 License. Commercial licenses available via VajraClaw.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
