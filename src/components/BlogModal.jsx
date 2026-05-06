import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const BlogModal = ({ post, isOpen, onClose }) => {
    if (!post) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className='glass'
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            width: 'calc(100% - 2rem)',
                            maxWidth: '800px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            zIndex: 1001,
                            borderRadius: '32px',
                            padding: '3rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'var(--color-border)',
                                color: 'var(--color-text)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                border: 'none',
                                transition: 'background 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(150, 150, 150, 0.5)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'var(--color-border)'}
                        >
                            <X size={24} />
                        </button>

                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', display: 'block' }}>
                            {post.date}
                        </span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800', lineHeight: 1.2 }}>{post.title}</h2>
                        
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            {post.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', borderRadius: '20px', background: 'var(--color-border)', color: 'var(--color-text)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', whiteSpace: 'pre-wrap' }}>
                            {post.content || post.desc}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BlogModal;
