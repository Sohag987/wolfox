import React from 'react';
import { motion } from 'motion/react';
import '../style/services.css';

const servicesData = [
    {
        id: '01',
        title: 'Business Solutions & Custom Software',
        shortTitle: 'Business Solutions',
        badge: 'Enterprise',
        description:
            'Bespoke software architecture, internal management systems, and tailored ERP/CRM solutions engineered to optimize operations and scale enterprise efficiency.',
        tags: ['Custom Architecture', 'Internal Tools & ERP', 'API Integration', 'Cloud Scalability'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M7 8h10M7 12h4" />
            </svg>
        )
    },
    {
        id: '02',
        title: 'Business Portfolio & Web Showcases',
        shortTitle: 'Business Portfolio',
        badge: 'Branding',
        description:
            'High-conversion corporate websites and interactive digital portfolios designed to showcase your authority, highlight achievements, and turn visitors into premium clients.',
        tags: ['High-Conversion UX', 'Corporate Web', 'Brand Identity', 'Interactive Visuals'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
                <path d="M12 13v8" />
            </svg>
        )
    },
    {
        id: '03',
        title: 'Customized E-Commerce Platforms',
        shortTitle: 'E-Commerce',
        badge: 'High Impact',
        description:
            'End-to-end scalable e-commerce systems with streamlined checkout funnels, automated inventory synchronization, and secure multi-currency payment gateway integrations.',
        tags: ['Custom Cart Engine', 'Payment Gateways', 'Inventory Sync', 'Conversion Funnels'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                <path d="M12 10V6M10 8h4" />
            </svg>
        )
    },
    {
        id: '04',
        title: 'AI Automation (n8n & Python)',
        shortTitle: 'AI Automation',
        badge: 'Most Popular',
        description:
            'Autonomous workflows, intelligent bots, and multi-agent systems powered by n8n and Python scripts that eliminate manual tasks and 10x operational velocity.',
        tags: ['n8n Workflows', 'Python Bots & Scripts', 'LLM & AI Agents', 'Data Pipelines'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        )
    },
    {
        id: '05',
        title: 'SEO & Growth Acceleration',
        shortTitle: 'SEO & Growth',
        badge: 'Organic Scale',
        description:
            'Comprehensive technical SEO, data-backed keyword architecture, site performance optimization, and authority growth that dominate search results and drive continuous inbound leads.',
        tags: ['Technical Audit', 'Keyword Strategy', 'Speed Optimization', 'Inbound Traffic'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
                <circle cx="13.5" cy="15.5" r="1.5" />
            </svg>
        )
    },
    {
        id: '06',
        title: 'Social Media Management & Content Creation',
        shortTitle: 'Social Media & Content',
        badge: 'Brand Reach',
        description:
            'Strategic social presence, content calendars, and creative viral visual assets engineered to amplify brand voice, build active communities, and generate brand loyalty.',
        tags: ['Content Strategy', 'Multi-Platform Reach', 'Audience Growth', 'Creative Visuals'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                <circle cx="18" cy="4" r="2" />
            </svg>
        )
    },
    {
        id: '07',
        title: 'Video & Reels Editing',
        shortTitle: 'Video & Reels',
        badge: 'High Engagement',
        description:
            'High-retention short-form reels, dynamic motion graphics, sound design, and cinematic commercial video editing tailored for Instagram, YouTube Shorts, and TikTok virality.',
        tags: ['Viral Short-Form', 'Motion Graphics', 'Sound Design & SFX', 'Color Grading'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
            </svg>
        )
    }
];

const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
};

export const Services = () => {
    return (
        <section className="services-section" id="services">
            {/* Ambient Background Glow Accents */}
            <div className="services-ambient-glow services-glow-left" aria-hidden="true" />
            <div className="services-ambient-glow services-glow-right" aria-hidden="true" />

            <div className="services-container">
                {/* Section Header */}
                <motion.div
                    className="services-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionHeaderVariants}
                >
                    <span className="services-eyebrow">What We Do</span>
                    <h2 className="services-title">
                        Engineered for Impact.{' '}
                        <span className="services-title-accent">Built to Scale.</span>
                    </h2>
                    <p className="services-subtitle">
                        From bespoke enterprise software and autonomous AI workflows to viral video production and full-stack e-commerce, WolfoxLab provides end-to-end digital solutions that power modern businesses.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="services-grid"
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {servicesData.map((service, index) => {
                        const isWide = index === 6; // 7th card spans full width
                        return (
                            <motion.article
                                key={service.id}
                                className={`service-card ${isWide ? 'service-card-wide' : ''}`}
                                id={`service-${service.id}`}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                            >
                                <div className="service-card-main-content">
                                    {/* Card Top Row: Number & Badge */}
                                    <div className="service-card-top">
                                        <span className="service-number">{service.id}</span>
                                        {service.badge && (
                                            <span className="service-badge">{service.badge}</span>
                                        )}
                                    </div>

                                    {/* Icon */}
                                    <div className="service-icon-box">
                                        {service.icon}
                                    </div>

                                    {/* Card Title & Description */}
                                    <h3 className="service-card-title">{service.title}</h3>
                                    <p className="service-card-desc">{service.description}</p>
                                </div>

                                <div className="service-card-meta">
                                    {/* Tags list */}
                                    <div className="service-tags">
                                        {service.tags.map((tag, idx) => (
                                            <span key={idx} className="service-tag-pill">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Link */}
                                    <div className="service-card-footer">
                                        <a href="#contact" className="service-action-link">
                                            <span>Discuss This Solution</span>
                                            <svg className="service-action-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Subtle Card Border Highlight Effect */}
                                <div className="service-card-glow-overlay" aria-hidden="true" />
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Bottom Call-To-Action Banner */}
                <motion.div
                    className="services-cta-banner"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="services-cta-content">
                        <span className="services-cta-tag">Ready to transform your business?</span>
                        <h3 className="services-cta-headline">
                            Let&apos;s build something <span className="services-title-accent">extraordinary</span> together.
                        </h3>
                        <p className="services-cta-text">
                            Schedule a discovery call with our tech and growth specialists to map out your custom solution today.
                        </p>
                    </div>
                    <div className="services-cta-actions">
                        <motion.a
                            href="#contact"
                            className="services-btn-primary"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get a Free Consultation
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="services-btn-secondary"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Case Studies
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
