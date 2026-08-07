import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("DROS UI Component Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          background: 'rgba(20,20,20,0.5)',
          borderRadius: '12px',
          margin: '2rem auto',
          maxWidth: '800px',
          border: '1px solid rgba(255,77,79,0.2)'
        }}>
          <h2 style={{ color: '#ff4d4f', marginBottom: '1rem' }}>⚠️ 頁面元件載入異常</h2>
          <p style={{ marginBottom: '1.5rem' }}>系統已自動隔離單一元件故障，您可以嘗試重載此頁面或切換至其他分頁。</p>
          <button 
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="btn btn-primary"
          >
            重新載入頁面
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
