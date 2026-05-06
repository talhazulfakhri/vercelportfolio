import React, { useState, useEffect } from 'react';
import { Sun, Moon, Search, X } from 'lucide-react';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ projects: [], blogs: [] });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults({ projects: [], blogs: [] });
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    const filteredProjects = projects.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) || 
      p.desc.toLowerCase().includes(lowerQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );

    const filteredBlogs = blogPosts.filter(b => 
      b.title.toLowerCase().includes(lowerQuery) || 
      b.desc.toLowerCase().includes(lowerQuery) ||
      b.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );

    setSearchResults({ projects: filteredProjects, blogs: filteredBlogs });
  }, [searchQuery]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='layout'>
      <nav className='glass' style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <div className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Portfolio</div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#blog'>Blog</a>
            
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                aria-label='Search'
                style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center' }}
              >
                <Search size={20} />
              </button>
              
              {isSearchOpen && (
                <div className='glass' style={{ position: 'absolute', top: '100%', right: 0, width: '300px', padding: '1rem', marginTop: '1rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type='text' 
                      placeholder='Search post and tags' 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                      autoFocus
                    />
                    <button onClick={() => setIsSearchOpen(false)} style={{ color: 'var(--color-text)' }}><X size={20} /></button>
                  </div>
                  
                  {(searchResults.projects.length > 0 || searchResults.blogs.length > 0) && (
                    <div style={{ maxHeight: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {searchResults.projects.length > 0 && (
                        <div>
                          <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Projects</h4>
                          {searchResults.projects.map((p, i) => (
                            <a key={i} href={p.link} style={{ display: 'block', padding: '0.5rem', borderRadius: '8px', background: 'var(--color-bg)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                              {p.title}
                            </a>
                          ))}
                        </div>
                      )}
                      
                      {searchResults.blogs.length > 0 && (
                        <div>
                          <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Blog</h4>
                          {searchResults.blogs.map((b, i) => (
                            <a key={i} href={b.link} style={{ display: 'block', padding: '0.5rem', borderRadius: '8px', background: 'var(--color-bg)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                              {b.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button 
              onClick={toggleTheme} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0.5rem', 
                borderRadius: '50%', 
                background: theme === 'light' ? 'transparent' : 'var(--color-surface)', 
                border: theme === 'light' ? 'none' : '1px solid var(--color-border)',
                color: 'var(--color-text)'
              }} 
              aria-label='Toggle Dark Mode'
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        {children}
      </main>
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
