import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import '../style/projects.css';

const categories = ['All', 'Web & Platforms', 'E-Commerce', 'AI & Automation', 'SEO & Marketing'];

const projectsData = [
    {
        id: 'boibondhu',
        title: 'Boibondhu',
        domain: 'boibondhu.xyz',
        url: 'https://boibondhu.xyz',
        category: 'Web & Platforms',
        badge: 'Decentralized Library',
        metric: '12K+ Active Readers',
        tagline: 'Virtual Book Sharing & Community Library',
        description:
            'A boundary-pushing platform for sharing, selling, borrowing, and donating books. Built as a full virtual library with zero physical overhead, offering a free membership system that connects book lovers everywhere.',
        tags: ['React', 'Node.js', 'Virtual Library', 'Community Engine', 'Cloud Sync'],
        accentColor: '#f5ff67'
    },
    {
        id: 'goodchoice',
        title: 'GoodChoice Shop',
        domain: 'good-choice.shop',
        url: 'https://good-choice.shop',
        category: 'E-Commerce',
        badge: 'High Performance',
        metric: '+185% Conversion Rate',
        tagline: 'Customized High-Speed E-Commerce Engine',
        description:
            'A bespoke online store built for extreme performance, intuitive checkout UX, and real-time inventory management. Delivers sub-second load times and seamless payment gateway integrations.',
        tags: ['Custom Cart', 'Payment Gateway', 'Inventory Sync', 'Conversion UX', 'Mobile PWA'],
        accentColor: '#f5ff67'
    },
    {
        id: 'omnirank-seo',
        title: 'OmniRank Growth & SEO',
        domain: 'Multi-Brand Case Study',
        url: '#contact',
        category: 'SEO & Marketing',
        badge: 'Organic Search',
        metric: '+350% Inbound Leads',
        tagline: 'Multi-Client SEO & Authority Domination',
        description:
            'Strategic search engine optimization for organizations and fast-growing businesses. Combines technical site audits, semantic keyword mapping, and page-speed tuning to capture top Google rankings.',
        tags: ['Technical SEO', 'Keyword Architecture', 'Core Web Vitals', 'Schema Markup'],
        accentColor: '#f5ff67'
    },
    {
        id: 'sports-social-media',
        title: 'Apex Sports & Retail Social Campaign',
        domain: 'Viral Social Media & Reels',
        url: '#contact',
        category: 'SEO & Marketing',
        badge: 'Content & Viral',
        metric: '4.2M+ Reel Views',
        tagline: 'Viral Content Strategy & High-Retention Reels',
        description:
            'High-voltage social media management, brand storytelling, and dynamic short-form video editing for premier sports clubs and lifestyle retail shops to skyrocket engagement and customer footfall.',
        tags: ['Viral Reels', 'Motion Design', 'Sound SFX', 'Multi-Platform Growth'],
        accentColor: '#f5ff67'
    },
    {
        id: 'neuroflow-automation',
        title: 'NeuroFlow AI Workflows',
        domain: 'Internal & Client Systems',
        url: '#contact',
        category: 'AI & Automation',
        badge: 'AI Automation',
        metric: '80+ Hrs Saved / Week',
        tagline: 'Autonomous n8n & Python Process Automation',
        description:
            'End-to-end intelligent automation pipelines connecting CRM systems, lead routing, and dynamic data ingestion. Eliminates repetitive manual data entry using self-healing Python scripts and n8n webhooks.',
        tags: ['n8n Workflows', 'Python Automations', 'AI Agents', 'Webhook Pipelines'],
        accentColor: '#f5ff67'
    },
    {
        id: 'apexmatrix-showcase',
        title: 'ApexMatrix Corporate Portfolio',
        domain: 'Global Tech Consultancy',
        url: '#contact',
        category: 'Web & Platforms',
        badge: 'Corporate Portfolio',
        metric: '99/100 Lighthouse Score',
        tagline: 'Interactive Executive Brand Showcase',
        description:
            'A high-end corporate digital portfolio engineered with glassmorphic aesthetics, fluid micro-interactions, interactive case study tabs, and instant lead capture for enterprise consulting.',
        tags: ['Modern React', 'Dark Glassmorphism', 'Speed Optimization', 'Executive UX'],
        accentColor: '#f5ff67'
    }
];

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter((p) => p.category === activeFilter);

    return (
        <section className="projects-section" id="projects">
            {/* Ambient Background Glows */}
            <div className="projects-ambient-glow projects-glow-left" aria-hidden="true" />
            <div className="projects-ambient-glow projects-glow-right" aria-hidden="true" />

            <div className="projects-container">
                {/* Section Header */}
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="projects-eyebrow">Featured Work</span>
                    <h2 className="projects-title">
                        Proven Solutions.{' '}
                        <span className="projects-title-accent">Real-World Impact.</span>
                    </h2>
                    <p className="projects-subtitle">
                        Explore our flagship platforms, custom software deployments, high-yield e-commerce systems, and viral growth campaigns engineered for measurable scale.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    className="projects-filter-bar"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            type="button"
                            className={`projects-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid with AnimatePresence */}
                <div className="projects-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.article
                                layout
                                key={project.id}
                                className="project-card"
                                id={`project-${project.id}`}
                                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                            >
                                {/* Browser Mockup Header */}
                                <div className="project-card-window">
                                    <div className="window-dots">
                                        <span className="window-dot dot-red" />
                                        <span className="window-dot dot-yellow" />
                                        <span className="window-dot dot-green" />
                                    </div>
                                    <div className="window-address-bar">
                                        <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <span className="window-url">{project.domain}</span>
                                    </div>
                                    <span className="project-window-badge">{project.badge}</span>
                                </div>

                                {/* Card Body */}
                                <div className="project-card-body">
                                    <div className="project-meta-row">
                                        <span className="project-category-tag">{project.category}</span>
                                        <span className="project-metric-pill">
                                            <svg className="metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                                <polyline points="17 6 23 6 23 12" />
                                            </svg>
                                            {project.metric}
                                        </span>
                                    </div>

                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-tagline">{project.tagline}</p>
                                    <p className="project-description">{project.description}</p>

                                    {/* Tech Tags */}
                                    <div className="project-tags">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="project-card-footer">
                                    <a
                                        href={project.url}
                                        target={project.url.startsWith('http') ? '_blank' : '_self'}
                                        rel={project.url.startsWith('http') ? 'noopener noreferrer' : ''}
                                        className="project-link"
                                    >
                                        <span>{project.url.startsWith('http') ? 'Visit Live Platform' : 'View Case Study'}</span>
                                        <svg className="project-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Card Glow Highlight Layer */}
                                <div className="project-card-glow" aria-hidden="true" />
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom Callout Banner */}
                <motion.div
                    className="projects-cta-box"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="projects-cta-details">
                        <span className="projects-cta-eyebrow">Have a vision in mind?</span>
                        <h3 className="projects-cta-title">
                            Want to build the next <span className="projects-title-accent">Boibondhu</span> or <span className="projects-title-accent">Custom Platform</span>?
                        </h3>
                        <p className="projects-cta-desc">
                            From concept architecture to deployment and user acquisition, we build end-to-end solutions that win.
                        </p>
                    </div>
                    <div className="projects-cta-btn-wrap">
                        <motion.a
                            href="#contact"
                            className="projects-btn-cta"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Your Project
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
