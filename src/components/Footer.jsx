import React, { useState } from 'react';
import { motion } from 'motion/react';
import '../style/footer.css';

export const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (newsletterEmail) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setNewsletterEmail('');
            }, 4000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            {/* Ambient Background Glows */}
            <div className="footer-ambient-glow footer-glow-left" aria-hidden="true" />
            <div className="footer-ambient-glow footer-glow-right" aria-hidden="true" />

            <div className="footer-container">
                {/* Top Section / Brand + Navigation Grid */}
                <motion.div
                    className="footer-main-grid"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Col 1: Brand & Identity */}
                    <div className="footer-col footer-col-brand">
                        <a href="#home" className="footer-brand-link">
                            <img
                                src="/navbar/wolfox_horizontal.png"
                                alt="WolfoxLab"
                                className="footer-brand-logo"
                            />
                        </a>
                        <p className="footer-brand-tagline">
                            Big Ideas. <span className="footer-text-accent">Simple Solutions.</span>
                        </p>
                        <p className="footer-brand-desc">
                            A next-generation engineering and business solutions lab. We build bespoke software, autonomous AI workflows, scalable e-commerce, and viral growth systems.
                        </p>

                        {/* Live Status Badge */}
                        <div className="footer-system-status">
                            <span className="footer-status-dot" />
                            <span>All Systems Operational &bull; WolfoxLab v2.4</span>
                        </div>

                        {/* Social Icons */}
                        <div className="footer-social-row">
                            <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Col 2: Services */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Our Services</h4>
                        <ul className="footer-links-list">
                            <li><a href="#services">Business Solutions &amp; ERP</a></li>
                            <li><a href="#services">Corporate Web &amp; Portfolio</a></li>
                            <li><a href="#services">Custom E-Commerce Engine</a></li>
                            <li><a href="#services">AI Automation (n8n &amp; Python)</a></li>
                            <li><a href="#services">SEO &amp; Growth Acceleration</a></li>
                            <li><a href="#services">Social Media Management</a></li>
                            <li><a href="#services">Video &amp; Reels Production</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Navigation & Platforms */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Platforms &amp; Work</h4>
                        <ul className="footer-links-list">
                            <li><a href="#projects">All Featured Case Studies</a></li>
                            <li>
                                <a href="https://boibondhu.xyz" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                                    <span>Boibondhu.xyz</span>
                                    <span className="footer-tag-pill">Live</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://good-choice.shop" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                                    <span>Good-choice.shop</span>
                                    <span className="footer-tag-pill">Store</span>
                                </a>
                            </li>
                            <li><a href="#about">About WolfoxLab Team</a></li>
                            <li><a href="#contact">Direct Consultation</a></li>
                            <li><a href="mailto:contact@wolfoxlab.com">Developer API Support</a></li>
                        </ul>
                    </div>

                    {/* Col 4: Newsletter & Inquiries */}
                    <div className="footer-col footer-col-newsletter">
                        <h4 className="footer-col-title">WolfoxLab Digest</h4>
                        <p className="footer-newsletter-desc">
                            Subscribe for cutting-edge updates in custom software, AI automation, and business scaling.
                        </p>

                        {isSubscribed ? (
                            <div className="footer-subscribed-msg">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
                                <div className="footer-input-wrapper">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        className="footer-email-input"
                                    />
                                    <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}

                        <div className="footer-contact-quick">
                            <span className="quick-label">Direct Lines:</span>
                            <a href="mailto:[sohagmondal987@gmail.com]" className="quick-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>[sohagmondal987@gmail.com]</span>
                            </a>
                            <a href="https://wa.me/15550192834" target="_blank" rel="noopener noreferrer" className="quick-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                                <span>+88 01850554600 (WhatsApp)</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar: Copyright, Legal & Back-To-Top */}
                <div className="footer-bottom-bar">
                    <p className="footer-copyright">
                        &copy; {currentYear} <span className="footer-copy-brand">WolfoxLab</span>. All rights reserved. Engineering Tomorrow.
                    </p>

                    <div className="footer-legal-links">
                        <a href="#privacy">Privacy Policy</a>
                        <span className="footer-divider">&bull;</span>
                        <a href="#terms">Terms of Service</a>
                        <span className="footer-divider">&bull;</span>
                        <a href="#security">Security</a>
                    </div>

                    <motion.button
                        type="button"
                        onClick={scrollToTop}
                        className="footer-back-to-top"
                        aria-label="Back to Top"
                        title="Back to Top"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.94 }}
                    >
                        <span>Top</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="19" x2="12" y2="5" />
                            <polyline points="5 12 12 5 19 12" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
