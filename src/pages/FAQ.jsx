import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
    <main className="container" style={{paddingTop: '2rem', paddingBottom: '4rem'}}>
      {/* FAQ Section */}
      <section id="faq" style={{maxWidth: '1000px', margin: '2rem auto 0', padding: '0 20px'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <span style={{background: 'rgba(230, 185, 128, 0.1)', color: 'var(--accent-gold)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(230, 185, 128, 0.2)'}}>Enterprise Security</span>
          <h1 className="section-title" style={{marginTop: '1.5rem'}}>Chief Technology Officer <span className="gold-text">FAQ</span></h1>
          <p className="subtitle" style={{margin: '0 auto', maxWidth: '800px'}}>
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

      {/* CTA */}
      <div style={{textAlign: 'center', marginTop: '4rem'}}>
        <Link to="/pricing" className="btn btn-primary" style={{fontSize: '1.2rem', padding: '1rem 3rem'}}>View Pricing Options</Link>
      </div>
    </main>
  );
}
