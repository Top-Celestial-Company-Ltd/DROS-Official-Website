import React, { useState, useEffect, useRef } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState('');
  
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState('');
  const [sending, setSending] = useState(false);
  
  const messagesEndRef = useRef(null);
  
  // Read verified email from LocalStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('dros_verified_email');
    const savedSessionId = localStorage.getItem('dros_chat_session_id');
    const savedMessages = localStorage.getItem('dros_chat_messages');
    
    if (savedEmail) {
      setEmail(savedEmail);
      setIsVerified(true);
      if (savedSessionId) setSessionId(savedSessionId);
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      } else {
        // Default greeting message
        setMessages([
          {
            role: 'assistant',
            content: '您好！我是 Vajra-AI 線上技術客服。我已經成功讀取您的 DROS 授權驗證。請問今天有什麼我可以協助您的？',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    }
  }, []);
  
  // Save messages to LocalStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('dros_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);
  
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setVerifying(true);
    setVerifyError('');
    
    try {
      const response = await fetch('https://chat.dr-os.io/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsVerified(true);
        localStorage.setItem('dros_verified_email', email.trim());
        
        // Add initial greeting
        const initialMsg = [
          {
            role: 'assistant',
            content: '您好！我是 Vajra-AI 線上技術客服。我已經成功讀取您的 DROS 授權驗證。請問今天有什麼我可以協助您的？',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ];
        setMessages(initialMsg);
        localStorage.setItem('dros_chat_messages', JSON.stringify(initialMsg));
      } else {
        setVerifyError(data.message || '驗證失敗，請聯絡管理員。');
      }
    } catch (err) {
      setVerifyError('連線失敗，請確保已啟用 Tailscale 連線。');
    } finally {
      setVerifying(false);
    }
  };
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || sending) return;
    
    const userMsgText = inputMessage.trim();
    setInputMessage('');
    
    const userMsg = {
      role: 'user',
      content: userMsgText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setSending(true);
    
    try {
      const response = await fetch('https://chat.dr-os.io/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsgText,
          email: email.trim(),
          session_id: sessionId
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        if (data.sessionId) {
          setSessionId(data.sessionId);
          localStorage.setItem('dros_chat_session_id', data.sessionId);
        }
        
        const assistantMsg = {
          role: 'assistant',
          content: data.reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, assistantMsg]);
      } else {
        setMessages(prev => [
          ...prev, 
          {
            role: 'assistant',
            content: `Error: ${data.message || '無法取得回覆，請稍後再試。'}`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isError: true
          }
        ]);
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Error: 連線逾時或中斷。請檢查網路或 Tailscale VPN 連線是否正常。',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true
        }
      ]);
    } finally {
      setSending(false);
    }
  };
  
  const handleLogout = () => {
    if (window.confirm('確定要登出並清除對話記錄嗎？')) {
      localStorage.removeItem('dros_verified_email');
      localStorage.removeItem('dros_chat_session_id');
      localStorage.removeItem('dros_chat_messages');
      setEmail('');
      setIsVerified(false);
      setMessages([]);
      setSessionId('');
      setVerifyError('');
    }
  };

  return (
    <>
      <style>{`
        .dros-chat-bubble {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(175, 84%, 48%) 100%);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dros-chat-bubble:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 12px 40px rgba(6, 182, 212, 0.4);
        }
        .dros-chat-bubble svg {
          width: 28px;
          height: 28px;
          fill: white;
          transition: transform 0.3s ease;
        }
        .dros-chat-bubble.open svg {
          transform: rotate(90deg);
        }
        
        .dros-chat-window {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 400px;
          height: 600px;
          border-radius: 20px;
          background: rgba(13, 20, 38, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          z-index: 9998;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          transform: translateY(20px);
          opacity: 0;
          pointer-events: none;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .dros-chat-window.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        
        .dros-chat-header {
          padding: 16px 20px;
          background: linear-gradient(90deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .dros-chat-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dros-chat-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, hsl(175, 84%, 48%) 0%, hsl(217, 91%, 60%) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 14px;
        }
        .dros-chat-title {
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
        }
        .dros-chat-subtitle {
          font-size: 11px;
          color: rgba(6, 182, 212, 0.9);
          margin: 2px 0 0 0;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .dros-chat-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10b981;
          display: inline-block;
          box-shadow: 0 0 8px #10b981;
        }
        
        .dros-chat-logout-btn {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .dros-chat-logout-btn:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }
        
        .dros-chat-auth-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
          text-align: center;
        }
        .dros-chat-auth-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(6, 182, 212, 0.2);
        }
        .dros-chat-auth-icon svg {
          width: 28px;
          height: 28px;
          fill: #06b6d4;
        }
        .dros-chat-auth-title {
          font-size: 18px;
          color: white;
          margin-bottom: 12px;
        }
        .dros-chat-auth-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .dros-chat-auth-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dros-chat-input-field {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        .dros-chat-input-field:focus {
          border-color: #06b6d4;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
        }
        .dros-chat-btn-submit {
          padding: 12px;
          border-radius: 10px;
          background: linear-gradient(90deg, hsl(217, 91%, 60%) 0%, hsl(175, 84%, 48%) 100%);
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .dros-chat-btn-submit:hover:not(:disabled) {
          opacity: 0.9;
        }
        .dros-chat-btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .dros-chat-error-msg {
          color: #f87171;
          font-size: 12px;
          margin-top: 8px;
        }
        
        .dros-chat-messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .dros-chat-messages-container::-webkit-scrollbar {
          width: 6px;
        }
        .dros-chat-messages-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .dros-chat-messages-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .dros-message-wrapper {
          display: flex;
          flex-direction: column;
          max-width: 80%;
        }
        .dros-message-wrapper.user {
          align-self: flex-end;
          align-items: flex-end;
        }
        .dros-message-wrapper.assistant {
          align-self: flex-start;
          align-items: flex-start;
        }
        .dros-message-bubble {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
          word-break: break-word;
          white-space: pre-wrap;
        }
        .dros-message-wrapper.user .dros-message-bubble {
          background: #2563eb;
          color: white;
          border-bottom-right-radius: 4px;
        }
        .dros-message-wrapper.assistant .dros-message-bubble {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.9);
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .dros-message-wrapper.assistant .dros-message-bubble.error {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        .dros-message-time {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.3);
          margin-top: 4px;
        }
        
        .dros-chat-typing-indicator {
          display: flex;
          gap: 4px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          align-self: flex-start;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .dros-chat-typing-dot {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .dros-chat-typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .dros-chat-typing-dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
        
        .dros-chat-footer {
          padding: 16px;
          background: rgba(15, 23, 42, 0.4);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .dros-chat-input-form {
          display: flex;
          gap: 10px;
        }
        .dros-chat-btn-send {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(175, 84%, 48%) 100%);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .dros-chat-btn-send:hover:not(:disabled) {
          opacity: 0.9;
        }
        .dros-chat-btn-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .dros-chat-btn-send svg {
          width: 18px;
          height: 18px;
          fill: white;
        }
        
        @media (max-width: 480px) {
          .dros-chat-window {
            width: calc(100vw - 32px);
            height: calc(100vh - 120px);
            bottom: 90px;
            right: 16px;
          }
        }
      `}</style>

      {/* Floating Chat Bubble */}
      <div 
        className={`dros-chat-bubble ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="DROS 技術支援"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
          </svg>
        )}
      </div>

      {/* Chat Window */}
      <div className={`dros-chat-window ${isOpen ? 'open' : ''}`}>
        <div className="dros-chat-header">
          <div className="dros-chat-title-group">
            <div className="dros-chat-avatar">V</div>
            <div>
              <h3 className="dros-chat-title">Vajra-AI 技術支援</h3>
              <p className="dros-chat-subtitle">
                <span className="dros-chat-status-dot"></span>
                DROS 官方客服在線
              </p>
            </div>
          </div>
          {isVerified && (
            <button className="dros-chat-logout-btn" onClick={handleLogout}>
              登出
            </button>
          )}
        </div>

        {!isVerified ? (
          /* Email Verification View */
          <div className="dros-chat-auth-container">
            <div className="dros-chat-auth-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6z" />
              </svg>
            </div>
            <h4 className="dros-chat-auth-title">請輸入註冊信箱</h4>
            <p className="dros-chat-auth-desc">
              本技術支援專區僅提供給已註冊 DROS 免費試用版或正式版授權的客戶。請輸入您註冊的 Email 以啟用對話。
            </p>
            <form className="dros-chat-auth-form" onSubmit={handleVerifyEmail}>
              <input
                type="email"
                className="dros-chat-input-field"
                placeholder="例如: customer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={verifying}
                required
              />
              <button type="submit" className="dros-chat-btn-submit" disabled={verifying}>
                {verifying ? '驗證中...' : '進行授權驗證'}
              </button>
            </form>
            {verifyError && <div className="dros-chat-error-msg">{verifyError}</div>}
          </div>
        ) : (
          /* Chat Interface View */
          <>
            <div className="dros-chat-messages-container">
              {messages.map((msg, index) => (
                <div key={index} className={`dros-message-wrapper ${msg.role}`}>
                  <div className={`dros-message-bubble ${msg.isError ? 'error' : ''}`}>
                    {msg.content}
                  </div>
                  <span className="dros-message-time">{msg.time}</span>
                </div>
              ))}
              {sending && (
                <div className="dros-chat-typing-indicator">
                  <div className="dros-chat-typing-dot"></div>
                  <div className="dros-chat-typing-dot"></div>
                  <div className="dros-chat-typing-dot"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="dros-chat-footer">
              <form className="dros-chat-input-form" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  className="dros-chat-input-field"
                  placeholder="輸入技術問題..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={sending}
                  required
                />
                <button type="submit" className="dros-chat-btn-send" disabled={sending || !inputMessage.trim()}>
                  <svg viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
