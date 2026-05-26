export default function Docs() {
  return (
    <main className="container" style={{paddingTop: '2rem', paddingBottom: '4rem'}}>
      {/* Integration & SDKs */}
      <section id="integration" style={{marginTop: '2rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <span style={{background: 'rgba(230, 185, 128, 0.1)', color: 'var(--accent-gold)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(230, 185, 128, 0.2)'}}>SDK Integration</span>
          <h1 className="section-title" style={{marginTop: '1.5rem'}}>Zero-Pollution <span className="gold-text">Ecosystem</span></h1>
          <p className="subtitle" style={{margin: '0 auto', maxWidth: '800px'}}>Ready to plug into LangChain, AutoGPT, or custom nodes in under 5 lines of code.</p>
        </div>

        {/* Commercial Protection Warning */}
        <div style={{background: 'rgba(255, 77, 79, 0.1)', border: '1px solid #ff4d4f', padding: '1.5rem', borderRadius: '8px', maxWidth: '1000px', margin: '0 auto 3rem auto', display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
          <div style={{fontSize: '1.5rem'}}>🔒</div>
          <div>
            <strong style={{color: '#ff4d4f', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Proprietary Code Protection & Commercial Licensing Required</strong>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5'}}>
              The VajraClaw SDK, plugins, and the <code>vajra_claw.dll/.so</code> C-FFI binaries are strictly protected by international copyright laws. These integration tools are <strong>not open-source</strong>. To legally mount, compile, or execute the VajraClaw adapters within your production or staging environments, your organization must possess an active, valid Commercial License (Hacker, Startup, or Enterprise) or an approved Dharma Exemption. Unauthorized reverse engineering or usage will result in immediate API blacklisting and potential legal action.
            </p>
          </div>
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
    </main>
  );
}
