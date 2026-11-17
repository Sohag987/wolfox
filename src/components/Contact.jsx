import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import '../style/contact.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        service: 'Business Solutions & Custom Software',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy submit handler — user can easily integrate with backend or email API
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                whatsapp: '',
                service: 'Business Solutions & Custom Software',
                message: ''
            });
        }, 4500);
    };

    return (
        <section className="contact-section" id="contact">
            {/* Ambient Lighting Spheres */}
            <div className="contact-ambient-glow contact-glow-left" aria-hidden="true" />
            <div className="contact-ambient-glow contact-glow-right" aria-hidden="true" />

            <div className="contact-container">
                {/* Section Header */}
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="contact-eyebrow">Get in Touch</span>
                    <h2 className="contact-title">
                        Let&apos;s Build Something{' '}
                        <span className="contact-title-accent">Extraordinary.</span>
                    </h2>
                    <p className="contact-subtitle">
                        Have a project in mind, need custom enterprise software, an AI automation workflow, or a high-converting e-commerce platform? Connect with the WolfoxLab engineering team today.
                    </p>
                </motion.div>

                {/* Two-Column Grid: Info Cards + Contact Form */}
                <div className="contact-grid">
                    {/* Left Column: Direct Communication Channels */}
                    <motion.div
                        className="contact-info-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="company-info-card">
                            <div className="company-brand-header">
                                <span className="company-badge">WolfoxLab Solutions</span>
                                <h3 className="company-name">WolfoxLab</h3>
                                <p className="company-tagline">Engineering Tomorrow &bull; Simple Solutions for Big Ideas</p>
                            </div>

                            <div className="company-status-badge">
                                <span className="status-dot-pulse" />
                                <span>Currently accepting new high-impact projects</span>
                            </div>
                        </div>

                        {/* Direct Channels List */}
                        <div className="contact-channels-list">
                            {/* Email Channel */}
                            <motion.a
                                href="mailto:contact@wolfoxlab.com"
                                className="contact-channel-card"
                                id="channel-email"
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            >
                                <div className="channel-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className="channel-details">
                                    <span className="channel-label">Official Email</span>
                                    <span className="channel-value">contact@wolfoxlab.com</span>
                                    <span className="channel-sub">Typical response within 2 hours</span>
                                </div>
                                <div className="channel-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </motion.a>

                            {/* WhatsApp Channel */}
                            <motion.a
                                href="https://wa.me/15550192834"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-channel-card"
                                id="channel-whatsapp"
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            >
                                <div className="channel-icon-box channel-icon-whatsapp">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                    </svg>
                                </div>
                                <div className="channel-details">
                                    <span className="channel-label">WhatsApp Direct</span>
                                    <span className="channel-value">+1 (555) 019-2834</span>
                                    <span className="channel-sub">Instant messaging &bull; 24/7 priority line</span>
                                </div>
                                <div className="channel-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </motion.a>

                            {/* Global Location / Operations */}
                            <div className="contact-channel-card contact-channel-static">
                                <div className="channel-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div className="channel-details">
                                    <span className="channel-label">Global Operations</span>
                                    <span className="channel-value">WolfoxLab International</span>
                                    <span className="channel-sub">Remote worldwide &bull; Multi-timezone coverage</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Inquiry Form */}
                    <motion.div
                        className="contact-form-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="contact-form-card">
                            <div className="form-card-header">
                                <h3 className="form-title">Send a Direct Inquiry</h3>
                                <p className="form-subtitle">Fill in the project details below and we&apos;ll schedule your consultation.</p>
                            </div>

                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        className="form-success-box"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="success-icon-wrap">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <h4 className="success-title">Message Received!</h4>
                                        <p className="success-desc">
                                            Thank you for reaching out to WolfoxLab. A senior tech specialist will review your request and contact you via email/WhatsApp shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        className="contact-form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="form-row form-row-two">
                                            <div className="form-group">
                                                <label htmlFor="contact-name" className="form-label">
                                                    Full Name <span className="label-required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="contact-name"
                                                    name="name"
                                                    required
                                                    placeholder="e.g. John Doe"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="contact-email" className="form-label">
                                                    Email Address <span className="label-required">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="contact-email"
                                                    name="email"
                                                    required
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row form-row-two">
                                            <div className="form-group">
                                                <label htmlFor="contact-whatsapp" className="form-label">
                                                    WhatsApp Number <span className="label-optional">(Optional)</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="contact-whatsapp"
                                                    name="whatsapp"
                                                    placeholder="+1 234 567 8900"
                                                    value={formData.whatsapp}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="contact-service" className="form-label">
                                                    Primary Service Needed
                                                </label>
                                                <div className="form-select-wrapper">
                                                    <select
                                                        id="contact-service"
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        className="form-select"
                                                    >
                                                        <option value="Business Solutions & Custom Software">Business Solutions &amp; Custom Software</option>
                                                        <option value="Business Portfolio & Web Showcases">Business Portfolio &amp; Corporate Web</option>
                                                        <option value="Customized E-Commerce Platforms">Customized E-Commerce Platform</option>
                                                        <option value="AI Automation (n8n & Python)">AI Automation (n8n &amp; Python)</option>
                                                        <option value="SEO & Growth Acceleration">SEO &amp; Growth Acceleration</option>
                                                        <option value="Social Media Management & Content Creation">Social Media &amp; Content Creation</option>
                                                        <option value="Video & Reels Editing">Video &amp; Reels Editing</option>
                                                        <option value="Other / Comprehensive Strategy">Other / Comprehensive Strategy</option>
                                                    </select>
                                                    <svg className="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="contact-message" className="form-label">
                                                Project Brief or Requirements <span className="label-required">*</span>
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                rows="4"
                                                required
                                                placeholder="Tell us about your business goals, required timeline, and feature requirements..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-textarea"
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            className="form-submit-btn"
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>Send Inquiry to WolfoxLab</span>
                                            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
