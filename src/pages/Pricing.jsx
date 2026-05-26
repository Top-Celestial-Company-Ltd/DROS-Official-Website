export default function Pricing() {
  return (
    <main className="container" style={{paddingTop: '2rem', paddingBottom: '4rem'}}>
      {/* Commercial Licensing Section */}
      <section id="pricing" style={{textAlign: 'center', maxWidth: '1200px', margin: '2rem auto 0'}}>
        <h1 className="section-title">Vajra Claw <span className="gold-text">Commercial Licenses</span></h1>
        <p className="subtitle" style={{marginBottom: '2rem'}}>
          The ultimate O(1) circuit breaker and runtime guardian for AI systems.
        </p>

        {/* Early Adopter Banner */}
        <div style={{background: 'rgba(230, 185, 128, 0.1)', border: '1px solid var(--accent-gold)', padding: '1rem', borderRadius: '8px', textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
          <strong style={{color: 'var(--accent-gold)'}}>Early Adopter Pricing:</strong> We are currently in our V1 release phase. Enterprise licensing will increase to <strong>$15,000/yr</strong> in Q4 2026. Secure your license today before the next price increase!
        </div>

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
              <li>✅ Online Heartbeat Validation</li>
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
              <li>✅ Online Heartbeat Validation</li>
              <li style={{color: '#ff4d4f', fontSize: '0.85rem', lineHeight: '1.4', marginTop: '1rem'}}>⚠️ <strong>EULA Warning:</strong> Exceeding limits triggers a Fail-Closed exception. Offline &gt;24h lockdown. No refunds.</li>
            </ul>
            <a href="https://dros.lemonsqueezy.com/buy/startup" target="_blank" rel="noreferrer" className="btn btn-primary" style={{width: '100%', display: 'block', boxSizing: 'border-box', marginTop: '2.8rem'}}>
              Buy via Lemon Squeezy
            </a>
          </div>

          {/* Enterprise Tier */}
          <div className="glass-card pricing-card">
            <h3 className="serif-font" style={{fontSize: '1.8rem', color: 'var(--text-primary)'}}>Enterprise Air-Gapped</h3>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--text-primary)'}}>$4,990<span style={{fontSize:'1rem', color:'var(--text-secondary)'}}>/yr</span></div>
            <p style={{fontSize: '0.9rem', color: 'transparent', marginTop: '-0.5rem', marginBottom: '1rem'}}>-</p>
            <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px'}}>Absolute sovereignty. Zero telemetry. For Fortune 500 companies.</p>
            <ul style={{textAlign: 'left', marginBottom: '2rem', listStyle: 'none', padding: 0, lineHeight: '2'}}>
              <li>✅ 100% Air-Gapped (No Heartbeat)</li>
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
          <a href="https://dros.lemonsqueezy.com/buy/startup" target="_blank" rel="noreferrer" className="btn btn-primary" style={{fontSize: '1.2rem', padding: '1rem 3rem'}}>Secure Your Infrastructure Now</a>
      </section>
    </main>
  );
}
