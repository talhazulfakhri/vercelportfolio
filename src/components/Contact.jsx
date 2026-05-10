import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://www.github.com/talhazulfakhri',
            label: 'GitHub Profile'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/talhazulfakhri',
            label: 'LinkedIn Profile'
        },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}
                >
                    Get in touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        textAlign: 'center',
                        lineHeight: '1.6'
                    }}
                >
                    Always up for coffee, conversations, and building meaningful weak ties.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    minWidth: '120px',
                                }}
                            >
                                <Icon size={32} />
                                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{link.label}</span>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
