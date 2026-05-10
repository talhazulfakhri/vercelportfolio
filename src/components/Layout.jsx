import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='layout'>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', top: '1.5rem', width: '100%', zIndex: 100 }}>
        <nav className='glass nav-container' style={{ 
          width: 'calc(100% - 2rem)', 
          maxWidth: '800px', 
          borderRadius: '50px',
          padding: '0.5rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          border: '1px solid var(--color-border)'
        }}>
          {/* Left: Logo */}
          <div className='nav-logo' style={{ 
            fontWeight: '600', 
            color: 'var(--color-text-secondary)', 
            letterSpacing: '0.5px',
            paddingLeft: '0.5rem',
            fontSize: '1.1rem'
          }}>TZ</div>
          
          {/* Center: Links */}
          <div className='nav-links' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a href='#about' 
               style={{ 
                 padding: '0.5rem 1.2rem', 
                 borderRadius: '25px', 
                 color: 'var(--color-text-secondary)', 
                 fontSize: '0.9rem', 
                 fontWeight: '500',
                 transition: 'all 0.2s ease',
                 textDecoration: 'none'
               }} 
               onMouseOver={(e) => e.target.style.color = 'var(--color-text)'} 
               onMouseOut={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              About
            </a>
            <a href='#projects' 
               style={{ 
                 padding: '0.5rem 1.2rem', 
                 borderRadius: '25px', 
                 color: 'var(--color-text-secondary)', 
                 fontSize: '0.9rem', 
                 fontWeight: '500',
                 transition: 'all 0.2s ease',
                 textDecoration: 'none'
               }} 
               onMouseOver={(e) => e.target.style.color = 'var(--color-text)'} 
               onMouseOut={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Projects
            </a>
            <a href='#contact' 
               style={{ 
                 padding: '0.5rem 1.2rem', 
                 borderRadius: '25px', 
                 color: 'var(--color-text-secondary)', 
                 fontSize: '0.9rem', 
                 fontWeight: '500',
                 transition: 'all 0.2s ease',
                 textDecoration: 'none'
               }} 
               onMouseOver={(e) => e.target.style.color = 'var(--color-text)'} 
               onMouseOut={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Connect
            </a>
          </div>
          
          {/* Right: Theme Toggle */}
          <button 
            className='theme-toggle'
            onClick={toggleTheme} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%', 
              background: 'var(--color-surface)', 
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginRight: '0.2rem'
            }} 
            aria-label='Toggle Dark Mode'
            onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-surface-hover)'} 
            onMouseOut={(e) => e.currentTarget.style.background = 'var(--color-surface)'}
          >
            {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {children}
      </main>
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} TZ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
