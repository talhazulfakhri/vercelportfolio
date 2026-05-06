import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import BlogModal from './BlogModal';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    return (
        <section id='blog' className='section'>
            <div className='container'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Latest from Blog
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            className='glass'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column' }}
                        >
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                {post.date}
                            </span>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{post.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                {post.desc}
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {post.tags.map(tag => (
                                    <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '12px', background: 'var(--color-border)', color: 'var(--color-text)' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button 
                                onClick={() => handleOpenModal(post)}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', color: 'var(--color-accent)' }}
                            >
                                Read Article <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <BlogModal 
                post={selectedPost} 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
};

export default Blog;
