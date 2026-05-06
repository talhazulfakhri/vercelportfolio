import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, BarChart, Workflow } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={24} />, title: 'Languages', desc: 'Python, SQL, little bit go and alteryx' },
    { icon: <Workflow size={24} />, title: 'Pipeline & Infra', desc: 'Apache Airflow, dbt, Luigi, MinIO, SingleStore' },
    { icon: <BarChart size={24} />, title: 'Analytics', desc: 'Tableau, PowerBI, Prescriptive Analysis (e.g. TensorFlow)' },
    { icon: <Cpu size={24} />, title: 'AI Things and Automation', desc: 'LLM, RAG, Langflow, n8n' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
        >
          About Me
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div
            className="glass"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: '2rem', borderRadius: '24px', gridColumn: 'span 1' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Who I am</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Currently learning to tackling complex infrastructure and data challenges and translating them into simple, actionable narratives for stakeholders.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ padding: '1.5rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{skill.icon}</div>
                <h4 style={{ fontWeight: '600' }}>{skill.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
