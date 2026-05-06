import React from 'react';
import profilePhoto from '../assets/profile_photo_1764160071907.png';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="intro"
            className="section"
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <div className="container">
                <img src={profilePhoto} alt="Talha Zulfakhri Profile" className="profile-photo" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        marginBottom: '1rem',
                    }}
                >
                    Talha Zulfakhri
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto 2rem',
                    }}
                >
                    Long life learner in Data, Market Research, AI, and Finance.
                </motion.p>
                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="glass"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    See my Portfolio
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
