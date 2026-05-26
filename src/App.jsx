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

          <div style={{marginTop: '4rem', background: '#0d0d12', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1rem', textAlign: 'left', maxWidth: '600px', margin: '4rem auto 0', fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
            <div style={{display: 'flex', gap: '8px', marginBottom: '1rem'}}>
              <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56'}}></div>
              <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e'}}></div>
              <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f'}}></div>
            </div>
            <div style={{lineHeight: '1.6'}}>
              <div><span style={{color: 'var(--accent-gold)'}}>[ClawAdapter]</span> Mount Binary: vajra_claw.dll</div>
              <div><span style={{color: 'var(--accent-blue)'}}>[VajraClaw-Core]</span> ⚡ Static Vajra Matrix Locked.</div>
              <div><span style={{color: 'var(--accent-blue)'}}>[VajraClaw-Core]</span> 💉 Ephemeral Bounds Injected.</div>
              <div style={{color: 'var(--text-light)'}}>LLM Stream: The internal IP address is...</div>
              <div style={{color: '#ff4d4f'}}>🛑 PHYSICAL FUSE BLOWN: Token [IP] Blocked</div>
            </div>
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

        {/* Features & Benchmarks */}
        <section id="features" style={{marginTop: '4rem'}}>
          <h2 className="section-title">Military-Grade <span className="blue-text">Verification</span></h2>
          <div className="grid-3" style={{marginBottom: '2rem'}}>
            <div className="glass-card">
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>🛡️ Anti-Data Poisoning</h3>
              <p style={{color: 'var(--text-secondary)'}}>Execute Ingress & Egress filtering against Indirect Prompt Injections hidden in RAG or external Skills. The LLM may get brainwashed, but Vajra Claw cuts off its hands before it can act.</p>
            </div>
            <div className="glass-card">
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>⚡ True O(1) Interception</h3>
              <p style={{color: 'var(--text-secondary)'}}>Execution latency is <strong>~0.042ms</strong> with a memory footprint of just <strong>12 MB</strong>. Compared to an 8GB LLM-as-a-judge, VajraClaw consumes <strong>99.8% less RAM</strong> and runs 10,000x faster.</p>
            </div>
            <div className="glass-card">
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>🌪️ Thread Safety</h3>
              <p style={{color: 'var(--text-secondary)'}}>Zero race conditions. The C/Go microkernel maintains cold, calculated stability under massive Enterprise TPS spikes with 500+ concurrent agents.</p>
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

        {/* Integration & SDKs */}
        <section id="integration" style={{marginTop: '4rem'}}>
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <span style={{background: 'rgba(230, 185, 128, 0.1)', color: 'var(--accent-gold)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(230, 185, 128, 0.2)'}}>SDK Integration</span>
            <h2 className="section-title" style={{marginTop: '1.5rem'}}>Zero-Pollution <span className="gold-text">Ecosystem</span></h2>
            <p className="subtitle">Ready to plug into LangChain, AutoGPT, or custom nodes in under 5 lines of code.</p>
          </div>
          
          <div className="grid-3">
            <div className="glass-card">
              <h3 style={{color: 'var(--accent-blue)', marginBottom: '1rem'}}>🐍 Python (LangChain)</h3>
              <pre style={{background: '#111116', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.05)', color: '#a5d6ff', textAlign: 'left'}}>
<code style={{color: '#ff7b72'}}>import</code> ctypes<br/>
<code style={{color: '#ff7b72'}}>from</code> claw_adapter <code style={{color: '#ff7b72'}}>import</code> VajraClawAdapter<br/><br/>
<code style={{color: '#8b949e'}}># Mount binary & intercept</code><br/>
claw = VajraClawAdapter(<span style={{color: '#a5d6ff'}}>"vajra.dll"</span>)<br/>
<code style={{color: '#ff7b72'}}>for</code> chunk <code style={{color: '#ff7b72'}}>in</code> llm.stream(prompt):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;claw.stream_monitor(chunk) <code style={{color: '#8b949e'}}># Fuse</code>
              </pre>
            </div>
            
            <div className="glass-card">
              <h3 style={{color: 'var(--accent-gold)', marginBottom: '1rem'}}>📦 Node.js / TypeScript</h3>
              <pre style={{background: '#111116', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.05)', color: '#a5d6ff', textAlign: 'left'}}>
<code style={{color: '#ff7b72'}}>const</code> &#123; VajraClawAdapter &#125; = require(<span style={{color: '#a5d6ff'}}>'claw'</span>);<br/><br/>
<code style={{color: '#8b949e'}}>// Initialize FFI wrapper</code><br/>
<code style={{color: '#ff7b72'}}>const</code> claw = <code style={{color: '#ff7b72'}}>new</code> VajraClawAdapter();<br/><br/>
<code style={{color: '#ff7b72'}}>for await</code> (<code style={{color: '#ff7b72'}}>const</code> token <code style={{color: '#ff7b72'}}>of</code> stream) &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;claw.streamMonitor(token);<br/>
&#125;
              </pre>
            </div>

            <div className="glass-card">
              <h3 style={{color: '#d2a8ff', marginBottom: '1rem'}}>🤖 Prompt for your AI</h3>
              <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'left'}}>Paste this into ChatGPT / Claude to auto-write your integration:</p>
              <pre style={{background: '#111116', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem', overflowX: 'auto', border: '1px solid #d2a8ff', color: 'var(--text-dim)', whiteSpace: 'pre-wrap', textAlign: 'left', lineHeight: '1.4'}}>
"I want to integrate DROS VajraClaw into my AI Agent codebase. VajraClaw is a C-FFI based physical circuit breaker for LLMs... Write the integration code using the VajraClawAdapter to intercept my LLM stream."
              </pre>
            </div>
          </div>
        </section>

        {/* Commercial Licensing Section */}
        <section id="pricing" style={{textAlign: 'center', maxWidth: '1200px', margin: '4rem auto 0'}}>
          <h2 className="section-title">Vajra Claw <span className="gold-text">Commercial Licenses</span></h2>
          <p className="subtitle" style={{marginBottom: '3rem'}}>
            The ultimate O(1) circuit breaker and runtime guardian for AI systems.
          </p>
          <div className="grid-3">
            {/* Hacker Tier */}
            <div className="glass-card pricing-card">
              <h3 className="serif-font" style={{fontSize: '1.8rem', color: 'var(--text-primary)'}}>Hacker</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--accent-blue)'}}>$149<span style={{fontSize:'1rem', color:'var(--text-secondary)'}}>/yr</span></div>
              <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '-0.5rem', marginBottom: '1rem'}}>(or $19/month)</p>
              <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px'}}>The ultimate O(1) circuit breaker for individual developers.</p>
              <ul style={{textAlign: 'left', marginBottom: '2rem', listStyle: 'none', padding: 0, lineHeight: '2'}}>
                <li>✅ Bound to 1 Machine UUID</li>
                <li>✅ Max 5 Concurrent Agents</li>
                <li style={{color: '#ff4d4f', fontSize: '0.85rem', lineHeight: '1.4', marginTop: '1rem'}}>⚠️ <strong>EULA Warning:</strong> Exceeding 5 agents triggers a Fail-Closed exception. Offline &gt;24h lockdown. No refunds.</li>
              </ul>
              <a href="https://dros.lemonsqueezy.com/buy/hacker-yearly" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginBottom: '0.5rem'}}>
                Buy Yearly ($149)
              </a>
              <a href="https://dros.lemonsqueezy.com/buy/hacker-monthly" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', background: 'transparent', border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)'}}>
                Buy Monthly ($19)
              </a>
            </div>

            {/* Startup Tier */}
            <div className="glass-card pricing-card" style={{borderColor: 'var(--accent-gold-glow)', transform: 'scale(1.05)', zIndex: 10}}>
              <div style={{position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: '#000', padding: '0.2rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold'}}>MOST POPULAR</div>
              <h3 className="serif-font" style={{fontSize: '1.8rem', color: 'var(--accent-gold)'}}>Startup</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--accent-gold)'}}>$499<span style={{fontSize:'1rem', color:'var(--text-secondary)'}}>/yr</span></div>
              <p style={{fontSize: '0.9rem', color: 'transparent', marginTop: '-0.5rem', marginBottom: '1rem'}}>-</p>
              <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px'}}>Perfect for SME AI teams and internal deployments.</p>
              <ul style={{textAlign: 'left', marginBottom: '2rem', listStyle: 'none', padding: 0, lineHeight: '2'}}>
                <li>✅ Up to 3 Machine UUIDs</li>
                <li>✅ 10 Concurrent Agents per Machine</li>
                <li style={{color: '#ff4d4f', fontSize: '0.85rem', lineHeight: '1.4', marginTop: '1rem'}}>⚠️ <strong>EULA Warning:</strong> Exceeding limits triggers a Fail-Closed exception. Offline &gt;24h lockdown. No refunds.</li>
              </ul>
              <a href="https://dros.lemonsqueezy.com/buy/startup" target="_blank" rel="noreferrer" className="btn btn-primary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginTop: '2.8rem'}}>
                Buy via Lemon Squeezy
              </a>
            </div>

            {/* Unlimited Tier */}
            <div className="glass-card pricing-card">
              <h3 className="serif-font" style={{fontSize: '1.8rem', color: 'var(--text-primary)'}}>Enterprise Air-Gapped</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--text-primary)'}}>$4,990<span style={{fontSize:'1rem', color:'var(--text-secondary)'}}>/yr</span></div>
              <p style={{fontSize: '0.9rem', color: 'transparent', marginTop: '-0.5rem', marginBottom: '1rem'}}>-</p>
              <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px'}}>Absolute sovereignty. Zero telemetry. For Fortune 500 companies.</p>
              <ul style={{textAlign: 'left', marginBottom: '2rem', listStyle: 'none', padding: 0, lineHeight: '2'}}>
                <li>✅ 100% Air-Gapped</li>
                <li>✅ Up to 15 Machine UUIDs</li>
                <li>✅ 30 Concurrent Agents per Machine</li>
                <li style={{color: '#ff4d4f', fontSize: '0.85rem', lineHeight: '1.4', marginTop: '1rem'}}>⚠️ <strong>EULA Warning:</strong> Exceeding limits triggers a Fail-Closed exception. No refunds on tampering.</li>
              </ul>
              <a href="https://dros.lemonsqueezy.com/buy/enterprise" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginTop: '2.8rem'}}>
                Buy via Lemon Squeezy
              </a>
            </div>
          </div>

          {/* Pricing Legal Disclaimer */}
          <div style={{marginTop: '3rem', padding: '1.5rem', background: 'rgba(0, 0, 0, 0.2)', borderLeft: '4px solid var(--accent-gold)', borderRadius: '4px', fontSize: '0.9rem', color: 'var(--text-dim)', textAlign: 'left'}}>
            <strong style={{color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem'}}>⚠️ EULA & Deployment Warning:</strong>
            1. <strong>Fail-Closed Trigger:</strong> Exceeding your licensed Concurrent Agent limit per machine will trigger a hard C-FFI exception, blocking initialization. If your developers bypass VajraClaw due to this error, your system will be unprotected against Prompt Injections. We hold zero liability for data breaches resulting from license circumvention.<br/><br/>
            2. <strong>Heartbeat Protocol:</strong> Hacker & Startup tiers require connectivity to <code>api.dr-os.io</code>. Offline operations lasting &gt;24 hours will result in absolute LLM stream lockdown. For 100% offline environments, you MUST purchase the Air-Gapped Enterprise Tier.<br/><br/>
            3. <strong>No Refunds on Burned Keys:</strong> Any attempt to decompile or tamper with the <code>vajra_claw.dll/.so</code> binary to bypass UUID constraints will permanently burn your License Key without refund.
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta" style={{textAlign: 'center', padding: '6rem 5%', background: 'linear-gradient(to bottom, transparent, rgba(230, 185, 128, 0.05))', borderRadius: '16px', margin: '4rem 0'}}>
            <h2 style={{fontSize: '3rem', marginBottom: '1rem'}}>Save <span className="gold-text">EVERYTHING.</span></h2>
            <p style={{fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: '600', marginBottom: '2rem'}}>BUY the Vajra Claw.</p>
            <a href="#pricing" className="btn btn-primary" style={{fontSize: '1.2rem', padding: '1rem 3rem'}}>Secure Your Infrastructure Now</a>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{maxWidth: '1000px', margin: '6rem auto 0', padding: '0 20px'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <span style={{background: 'rgba(230, 185, 128, 0.1)', color: 'var(--accent-gold)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(230, 185, 128, 0.2)'}}>Enterprise Security</span>
            <h2 className="section-title" style={{marginTop: '1.5rem'}}>Chief Technology Officer <span className="gold-text">FAQ</span></h2>
            <p className="subtitle">
              Uncompromising answers to the most critical architecture, security, and licensing questions.
            </p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {/* FAQ 1 */}
            <div className="glass-card" style={{textAlign: 'left', padding: '2rem'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--accent-gold)', fontFamily: 'monospace', fontWeight: 'bold'}}>Q.</span> 
                Why buy VajraClaw when the DROS Digital Dharma Hall is open-source (Python)?
              </h3>
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2.5rem'}}>
                <p style={{marginBottom: '1rem'}}>The open-source DROS Python version is a "glass cannon"—perfect for personal use or non-profit Buddhist propagation, but vulnerable in an enterprise environment. It runs on the Python interpreter, which is easily inspected, modified, and struggles under high-concurrency (TPS) loads.</p>
                <p><strong>VajraClaw is the Enterprise Armor.</strong> It is compiled into a highly optimized, tamper-proof C/Go microkernel (<code>vajra_claw.dll</code> / <code>.so</code>). It operates at the C-FFI memory layer, executing physical interception 100x faster than Python, making it the only choice for banks, tech giants, and organizations handling millions of tokens per second.</p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="glass-card" style={{textAlign: 'left', padding: '2rem'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--accent-gold)', fontFamily: 'monospace', fontWeight: 'bold'}}>Q.</span> 
                Can this be installed as an antivirus on top of Claude Code, GitHub Copilot, or ChatGPT?
              </h3>
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2.5rem'}}>
                <p style={{marginBottom: '1rem'}}><strong>No.</strong> VajraClaw is an SDK/Middleware for developers building <em>their own</em> AI systems, not a consumer antivirus.</p>
                <p>Closed-source products like Claude Code run on proprietary infrastructure. VajraClaw must be integrated directly into your agent's orchestration loop (e.g., LangChain, AutoGPT, OpenClaw, or custom Node.js frameworks) via our C-FFI adapters. It intercepts the LLM string stream <em>before</em> your system executes any actions.</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="glass-card" style={{textAlign: 'left', padding: '2rem'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--accent-gold)', fontFamily: 'monospace', fontWeight: 'bold'}}>Q.</span> 
                How exactly does it solve AI Hallucinations?
              </h3>
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2.5rem'}}>
                <p style={{marginBottom: '1rem'}}>LLMs are probabilistic; they will eventually hallucinate. Traditional prompt engineering tries to "talk the LLM out of it"—a statistically doomed approach.</p>
                <p>VajraClaw accepts that hallucinations happen, but <strong>physically cuts off their consequences</strong>. By forcing the LLM's output through a deterministic Static Matrix (the "Vajra Bound"), any hallucinated command (e.g., <code>DROP TABLE</code>) that violates your predefined physical boundaries will instantly blow the C-FFI fuse. The hallucination is contained in memory and never reaches the real world.</p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="glass-card" style={{textAlign: 'left', padding: '2rem'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--accent-gold)', fontFamily: 'monospace', fontWeight: 'bold'}}>Q.</span> 
                How does VajraClaw prevent Prompt Injections (Data Poisoning)?
              </h3>
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2.5rem'}}>
                <p style={{marginBottom: '1rem'}}>Prompt injections often occur when an LLM reads external data (like an infected web page or RAG document) containing malicious hidden instructions, hijacking the LLM to execute unauthorized API calls or leak data.</p>
                <p>VajraClaw operates as an ingress/egress physical filter. Even if the LLM's "brain" is hijacked by a prompt injection, the LLM's "hands" are bound by the Vajra Claw. When the hijacked LLM attempts an unauthorized Egress action, the C-FFI physical circuit breaker triggers, stopping the injection dead in its tracks. It's a 100% deterministic block.</p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="glass-card" style={{textAlign: 'left', padding: '2rem'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--accent-gold)', fontFamily: 'monospace', fontWeight: 'bold'}}>Q.</span> 
                What is the Return on Investment (ROI) regarding LLM Token costs?
              </h3>
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2.5rem'}}>
                <p style={{marginBottom: '1rem'}}>Traditional AI security solutions rely on "LLM-as-a-judge" mechanisms. This means every time your Agent generates a response, you must send that response back to an LLM to evaluate if it's safe. This effectively <strong>doubles your LLM API token costs</strong> and cuts your profit margins in half.</p>
                <p>Because VajraClaw executes locally within your C-FFI memory layer, it evaluates security boundaries for <strong>$0.00 in token costs</strong>. For enterprise applications processing millions of tokens per day, the API token savings alone will pay for your Enterprise VajraClaw license within the first week.</p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="glass-card" style={{textAlign: 'left', padding: '2rem'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--accent-gold)', fontFamily: 'monospace', fontWeight: 'bold'}}>Q.</span> 
                What is the "Dharma Exemption" for Buddhist and Non-Profit Organizations?
              </h3>
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2.5rem'}}>
                <p style={{marginBottom: '1rem'}}>As part of our core philosophy, purely non-profit Buddhist propagation usage is 100% free.</p>
                <p>While the Python version is freely available to everyone, Buddhist institutions requiring the high-performance Go/C++ enterprise versions (for large-scale Dharma processing) can contact us directly at <a href="mailto:service@dr-os.io" style={{color: 'var(--accent-blue)', textDecoration: 'none'}}>service@dr-os.io</a>. After verifying your non-profit status, we will issue a specialized enterprise license completely free of charge.</p>
              </div>
            </div>

            {/* FAQ 7 */}
            <div className="glass-card" style={{textAlign: 'left', padding: '2rem'}}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--accent-gold)', fontFamily: 'monospace', fontWeight: 'bold'}}>Q.</span> 
                My enterprise requires strict Air-Gapping. Does VajraClaw phone home?
              </h3>
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2.5rem'}}>
                <p>The <strong>Enterprise Air-Gapped Tier</strong> is 100% Air-Gapped. It uses an RSA-Signed offline <code>.lic</code> timebomb validation mechanism. There is absolutely zero outbound telemetry, no heartbeat servers, and no API tax. Your data never leaves your internal Kubernetes clusters.</p>
              </div>
            </div>
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
