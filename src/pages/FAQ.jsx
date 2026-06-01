import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(`0-0`); // Open the first question by default
  const { t } = useTranslation('faq');

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const categories = t('categories', { returnObjects: true });

  return (
    <main className="container" style={{paddingTop: '4rem', paddingBottom: '6rem'}}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Header Section */}
      <section style={{textAlign: 'center', marginBottom: '5rem'}}>
        <span style={{background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(212, 175, 55, 0.3)', textTransform: 'uppercase', letterSpacing: '1px'}}>
          {t('badge')}
        </span>
        <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, var(--text-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} dangerouslySetInnerHTML={{ __html: t('title') }}>
        </h1>
        <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>
          {t('subtitle')}
        </p>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{maxWidth: '800px', margin: '0 auto'}}>
        {categories.map((category, catIndex) => (
          <div key={catIndex} style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '1.5rem', color: 'var(--accent-blue)', borderBottom: '1px solid rgba(0, 240, 255, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem'}}>
              {category.name}
            </h2>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              {category.questions.map((item, qIndex) => {
                const id = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === id;
                return (
                  <div 
                    key={qIndex} 
                    className="faq-item"
                    style={{
                      background: isOpen ? 'rgba(255,255,255,0.03)' : 'rgba(20,20,20,0.4)',
                      border: `1px solid ${isOpen ? 'rgba(212, 175, 55, 0.3)' : 'rgba(255,255,255,0.05)'}`,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button 
                      onClick={() => toggleFAQ(id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        padding: '1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: isOpen ? 'var(--accent-gold)' : 'var(--text-primary)',
                        fontSize: '1.1rem',
                        fontWeight: isOpen ? '600' : '400',
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}
                    >
                      <span style={{paddingRight: '2rem'}}>{item.q}</span>
                      <span style={{
                        fontSize: '1.5rem', 
                        lineHeight: '1', 
                        transform: isOpen ? 'rotate(45deg)' : 'none', 
                        transition: 'transform 0.3s ease',
                        color: isOpen ? 'var(--accent-gold)' : 'var(--text-secondary)'
                      }}>
                        +
                      </span>
                    </button>
                    
                    <div 
                      style={{
                        maxHeight: isOpen ? '2000px' : '0',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out',
                        padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.8',
                        fontSize: '0.95rem'
                      }}
                      dangerouslySetInnerHTML={{ __html: item.a
                        .replace(/\*\*「(.+?)」\*\*/g, '<strong style="color:var(--text-primary)">「$1」</strong>')
                        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>')
                        .replace(/\n/g, '<br/>')
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Banner */}
        <div style={{
          marginTop: '5rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(30,30,35,0.9))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>{t('contact_title')}</h3>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem'}}>
            {t('contact_desc')}
          </p>
          <a href="mailto:service@dr-os.io" className="btn btn-primary" style={{fontSize: '1.1rem'}}>
            {t('contact_btn')}
          </a>
        </div>
      </section>
    </main>
  );
}
