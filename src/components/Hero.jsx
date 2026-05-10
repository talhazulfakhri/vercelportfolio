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
            }}
        >
            <div className="container" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4rem', 
                flexWrap: 'wrap', 
                justifyContent: 'center' 
            }}>
                <motion.img 
                    src={profilePhoto} 
                    alt="Talha Zulfakhri Profile" 
                    className="profile-photo" 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ 
                        margin: 0, 
                        width: '200px', 
                        height: '200px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }} 
                />
                
                <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            marginBottom: '0.5rem',
                        }}
                    >
                        Talha Zulfakhri
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '600px',
                            marginBottom: '2rem',
                        }}
                    >
                        A little bit of the projects for those that want to know about me Including books (on going), coffee (on going), and my personal stories (on going).
                    </motion.p>
                    <motion.a
                        href="#projects"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="glass"
                        style={{
                            display: 'inline-block',
                            padding: '0.8rem 1.8rem',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '500',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        See my Portfolio
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

