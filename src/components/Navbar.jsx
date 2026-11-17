import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuContext } from '../contexts/menucontext';
import '../style/navbar.css';

export const Navbar = () => {
    const context = useContext(MenuContext);
    const menuState = context?.menuState || [];

    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll state & active section tracking (scrollspy)
    useEffect(() => {
        const handleScroll = () => {
            // Navbar glassmorphism on scroll
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Scrollspy active section detection
            const sections = ['home', 'services', 'projects', 'about', 'contact'];
            const scrollPosition = window.scrollY + 120;

            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i];
                const sectionEl = document.getElementById(sectionId);
                if (sectionEl) {
                    const top = sectionEl.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Smooth scroll handler for nav items
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            const navOffset = 75;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setActiveSection(sectionId);
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    // Smooth scroll to top for logo
    const handleLogoClick = (e) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActiveSection('home');
        window.history.pushState(null, '', '#home');
    };

    return (
        <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navlogo">
                    <a href="#home" onClick={handleLogoClick} className="navbar-brand">
                        <img src="/navbar/wolfox_horizontal.png" alt="WolFoxLab" className="navbar-logo-img" />
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="nav-menu">
                    {menuState.map((item) => {
                        const targetId = item.toLowerCase();
                        const isActive = activeSection === targetId;

                        return (
                            <li key={item} className="nav-item">
                                <a
                                    href={`#${targetId}`}
                                    onClick={(e) => handleNavClick(e, targetId)}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop Action Button */}
                <div className="navbar-actions">
                    <motion.a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="nav-btn nav-btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Get Started
                    </motion.a>
                </div>

                {/* Mobile Hamburger Toggle Button */}
                <button
                    type="button"
                    className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className="hamburger-line line-1" />
                    <span className="hamburger-line line-2" />
                    <span className="hamburger-line line-3" />
                </button>
            </div>

            {/* Animated Mobile Dropdown Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-nav-drawer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <ul className="mobile-nav-list">
                            {menuState.map((item) => {
                                const targetId = item.toLowerCase();
                                const isActive = activeSection === targetId;

                                return (
                                    <li key={item} className="mobile-nav-item">
                                        <a
                                            href={`#${targetId}`}
                                            onClick={(e) => handleNavClick(e, targetId)}
                                            className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                                        >
                                            <span>{item}</span>
                                            {isActive && <span className="mobile-active-dot" />}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mobile-drawer-cta">
                            <motion.a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, 'contact')}
                                className="nav-btn nav-btn-primary mobile-cta-btn"
                                whileTap={{ scale: 0.96 }}
                            >
                                +88018-50554600
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
