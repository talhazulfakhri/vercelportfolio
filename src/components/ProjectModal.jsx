import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Layout, Code } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

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
                            maxWidth: '900px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            zIndex: 1001,
                            borderRadius: '32px',
                            padding: 0,
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Header Image */}
                        <div style={{ position: 'relative', height: '300px', width: '100%', flexShrink: 0 }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(4px)',
                                    cursor: 'pointer',
                                    border: 'none',
                                    transition: 'background 0.2s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '2.5rem', flex: '1 1 auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                                <div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: '700' }}>{project.title}</h2>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', borderRadius: '20px', background: 'var(--color-border)', color: 'var(--color-text)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.link && project.link !== 'none' && project.link !== '#' && (
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            background: 'var(--color-accent)',
                                            color: 'white',
                                            padding: '0.8rem 1.5rem',
                                            borderRadius: '16px',
                                            fontWeight: '600',
                                            transition: 'opacity 0.2s ease',
                                            textDecoration: 'none'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                                        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                                    >
                                        View Project <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>

                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '2rem' }}>
                                {project.fullDesc || project.desc}
                            </p>

                            {project.details && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Layout size={20} color='var(--color-accent)' /> Key Methodology
                                    </h4>
                                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{project.details}</p>
                                </div>
                            )}

                            {project.technologies && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Cpu size={20} color='var(--color-accent)' /> Technologies Used
                                    </h4>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {project.technologies.map(tech => (
                                            <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-secondary)' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)' }} />
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.gallery && (
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Code size={20} color='var(--color-accent)' /> Project Screenshots
                                    </h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                        {project.gallery.map((img, i) => (
                                            <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                                                <img src={img} alt={`Gallery ${i}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
