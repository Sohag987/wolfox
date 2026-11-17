import React from 'react';
import { motion } from 'motion/react';
import '../style/about.css';

// Array of members — user can easily add, edit, or remove members
const teamMembers = [
    {
        id: 1,
        name: 'Sohag Mondal',
        role: 'Founder & Tech Lead',
        badge: 'Core Team',
        bio: 'Spearheading custom enterprise software architecture, full-stack scalability, and modern UI engineering.',
        photo: '/about/Sohag.jpg',
        email: 'sohagmondal987@gmail.com',
        socials: {
            linkedin: 'https://www.linkedin.com/in/sohag-mondal-3b7042317',
            github: 'https://github.com/Sohag987',
            twitter: '@sohag987'
        },
        skills: ['Full-Stack', 'System Architecture', 'React']
    },

    {
        id: 3,
        name: 'S M Shahriar Hossain',
        role: 'AI & Automation Specialist',
        badge: 'AI Lead',
        bio: 'Engineering automated business pipelines, intelligent n8n agentic workflows, and tailored Python scripts.',
        photo: '/about/WhatsApp Image 2026-10-22 at 11.18.55 AM.jpeg',
        email: 'shariarhossain@gmail.com',
        socials: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
            twitter: 'https://twitter.com'
        },
        skills: ['n8n Workflows', 'Python', 'LLMs & Agents']
    },

];

const companyValues = [
    {
        id: 'val-1',
        title: 'Precision Engineering',
        desc: 'We write clean, bespoke, zero-bloat code tailored to your exact business specifications.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="22" y1="12" x2="18" y2="12" />
                <line x1="6" y1="12" x2="2" y2="12" />
                <line x1="12" y1="6" x2="12" y2="2" />
                <line x1="12" y1="22" x2="12" y2="18" />
            </svg>
        )
    },
    {
        id: 'val-2',
        title: 'Autonomous Velocity',
        desc: 'Leveraging AI agents, n8n integrations, and Python to automate the mundane and multiply output.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        )
    },
    {
        id: 'val-3',
        title: 'Audience Impact',
        desc: 'Transforming visitors into loyal advocates through cinematic reels, organic SEO, and viral reach.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    }
];

export const About = () => {
    return (
        <section className="about-section" id="about">
            {/* Ambient Background Glows */}
            <div className="about-ambient-glow about-glow-left" aria-hidden="true" />
            <div className="about-ambient-glow about-glow-right" aria-hidden="true" />

            <div className="about-container">
                {/* Section Header */}
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="about-eyebrow">Who We Are</span>
                    <h2 className="about-title">
                        Architects of Innovation.{' '}
                        <span className="about-title-accent">Driven by Results.</span>
                    </h2>
                    <p className="about-subtitle">
                        WolfoxLab is a modern technology and business solutions lab. We bridge deep technical execution with high-impact growth strategy — delivering bespoke software, autonomous AI systems, and viral digital media that push businesses ahead of the curve.
                    </p>
                </motion.div>

                {/* Company Highlights / Metric Strip */}
                <motion.div
                    className="about-stats-strip"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="about-stat-item">
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Custom Architecture</span>
                    </div>
                    <div className="about-stat-item">
                        <span className="stat-value">4+</span>
                        <span className="stat-label">Core Tech Disciplines</span>
                    </div>
                    <div className="about-stat-item">
                        <span className="stat-value">24/7</span>
                        <span className="stat-label">Automated Workflows</span>
                    </div>
                    <div className="about-stat-item">
                        <span className="stat-value">Global</span>
                        <span className="stat-label">Scale &amp; Execution</span>
                    </div>
                </motion.div>

                {/* Core Team Subsection */}
                <div className="about-team-block">
                    <motion.div
                        className="team-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className="team-pill-badge">The WolfoxLab Team</span>
                        <h3 className="team-title">
                            The Minds Behind the <span className="about-title-accent">Engineering</span>
                        </h3>
                        <p className="team-subtitle">
                            Meet our multidisciplinary collective of architects, AI engineers, product strategists, and growth leaders.
                        </p>
                    </motion.div>

                    {/* Team Members Flexbox (Responsive 4-slot initial flex container) */}
                    <div className="team-flex-container">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={member.id}
                                className="team-member-card"
                                id={`member-${member.id}`}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: idx * 0.12 }}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                            >
                                {/* Photo Container with glowing rim */}
                                <div className="member-photo-wrapper">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="member-photo"
                                        loading="lazy"
                                    />
                                    <div className="member-photo-glow" aria-hidden="true" />
                                    <span className="member-status-indicator" title="Active Core Member" />
                                </div>

                                {/* Member Meta */}
                                <div className="member-info">
                                    <div className="member-badge-row">
                                        <span className="member-badge">{member.badge}</span>
                                    </div>
                                    <h4 className="member-name">{member.name}</h4>
                                    <span className="member-role">{member.role}</span>
                                    <p className="member-bio">{member.bio}</p>

                                    {/* Skill Pills */}
                                    <div className="member-skills">
                                        {member.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="member-skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact / Social Links Footer */}
                                <div className="member-card-footer">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="member-email-btn"
                                        title={`Email ${member.name}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <span>{member.email}</span>
                                    </a>

                                    <div className="member-social-links">
                                        <motion.a whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }} href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="member-social-icon" aria-label="LinkedIn">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                        </motion.a>
                                        <motion.a whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }} href={member.socials.github} target="_blank" rel="noopener noreferrer" className="member-social-icon" aria-label="GitHub">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                        </motion.a>
                                        <motion.a whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }} href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="member-social-icon" aria-label="Twitter">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                            </svg>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Company Values / Principles */}
                <motion.div
                    className="about-values-block"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="values-header">
                        <span className="team-pill-badge">Our Core Principles</span>
                        <h3 className="values-title">How We Build &amp; Deliver</h3>
                    </div>

                    <div className="about-values-grid">
                        {companyValues.map((val, vIdx) => (
                            <motion.div
                                key={val.id}
                                className="about-value-card"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: vIdx * 0.15 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="value-icon-box">{val.icon}</div>
                                <h4 className="value-card-title">{val.title}</h4>
                                <p className="value-card-desc">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
