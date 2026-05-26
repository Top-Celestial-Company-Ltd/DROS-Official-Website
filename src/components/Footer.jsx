export default function Footer() {
  return (
    <footer style={{borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem', paddingTop: '3rem', paddingBottom: '3rem'}}>
      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'center'}}>
        <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.5rem'}}>🦞 DROS™ Vajra Claw™</div>
        <p style={{color: 'var(--text-secondary)'}}>© {new Date().getFullYear()} Top-Celestial Company Ltd. (康宸園有限公司) | Tax ID (統編): 43908974</p>
        <p style={{color: 'var(--text-secondary)'}}>Contact Us: <a href="mailto:service@dr-os.io" style={{color: 'var(--accent-blue)', textDecoration: 'none'}}>service@dr-os.io</a></p>
        <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '1rem'}}>
          Dharma Exemption: Purely non-profit Buddhist propagation usage is 100% free.
        </p>
      </div>
    </footer>
  );
}
