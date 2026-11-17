import React from 'react';
import { motion } from 'motion/react';
import HeroCreativeCanvas from './HeroCreativeCanvas';
import HeroCodeConsole from './HeroCodeConsole';
import '../style/hero.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export const Hero = () => {
    return (
        <section className="hero" id="home">
            {/* Background Photographic Layer */}
            <div className="hero-bg">
                <motion.img
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.6, ease: 'easeOut' }}
                    src="/navbar/hero/pexels-arthousestudio-4640892.jpg"
                    alt="WolfoxLab hero background"
                    className="hero-bg-img"
                />
                <div className="hero-overlay" />
            </div>

            {/* Interactive Creative Coding Canvas (Constellation & Particle Mesh) */}
            <HeroCreativeCanvas />

            {/* Floating Cybernetic Feature Chips */}
            <motion.div
                className="hero-floating-chip chip-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <motion.div
                    className="chip-inner"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                >
                    <span className="chip-glow-dot" />
                    <span className="chip-text">⚡ AI Agents &amp; n8n Orchestration</span>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-floating-chip chip-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
            >
                <motion.div
                    className="chip-inner"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                >
                    <span className="chip-glow-dot dot-cyan" />
                    <span className="chip-text">🚀 Bespoke High-Scale Web &amp; ERP</span>
                </motion.div>
            </motion.div>

            {/* Main Hero Foreground Content */}
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={itemVariants} className="hero-eyebrow">
                    WolfoxLab &bull; Next-Gen Creative Technology Lab
                </motion.p>

                <motion.h1 variants={itemVariants} className="hero-headline">
                    Big Ideas.<br />
                    <span className="hero-headline-accent">Simple Solutions.</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="hero-subtext">
                    Custom Software &bull; E-Commerce Platforms &bull; SEO &amp; Growth
                    <br />
                    Video &amp; Reels Editing &bull; AI Automation &bull; n8n &amp; Python Workflows
                </motion.p>

                <motion.div variants={itemVariants} className="hero-cta-row">
                    <motion.a
                        href="#services"
                        className="hero-btn hero-btn-primary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Explore Services
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="hero-btn hero-btn-outline"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                {/* Interactive Developer HUD / Live Code Console */}
                <motion.div variants={itemVariants} className="hero-code-wrapper">
                    <HeroCodeConsole />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero-scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <motion.span
                    className="hero-scroll-dot"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                />
                <span className="hero-scroll-label">Scroll to Explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
