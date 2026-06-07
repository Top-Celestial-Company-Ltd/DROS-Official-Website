import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const githubUser = "Top-Celestial-Company-Ltd";
  const { t } = useTranslation();
  
  return (
    <footer style={{borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem', paddingTop: '4rem', paddingBottom: '3rem', background: 'rgba(5, 5, 5, 0.5)'}}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem'}}>
              🦞 DROS™
            </div>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6'}}>
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>{t('footer.resources')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <a href={`https://github.com/${githubUser}/Dharma-Reasoning-Operating-System`} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.github')}</a>
              </li>
              <li>
                <Link to="/docs" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.docs')}</Link>
              </li>
              <li>
                <Link to="/trust" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>{t('nav.trust')}</Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.faq')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>{t('footer.company')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <Link to="/pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.pricing')}</Link>
              </li>
              <li>
                <a href="mailto:service@dr-os.io" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.contact')} (service@dr-os.io)</a>
              </li>
              <li style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                {t('footer.tax_id')}<br/>
                {t('footer.company_name')}
              </li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
          <p>{t('footer.rights').replace('{{year}}', new Date().getFullYear())}</p>
          <p>{t('footer.dharma_exemption')}</p>
        </div>
      </div>
    </footer>
  );
}
