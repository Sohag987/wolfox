import React, { useEffect, useRef } from 'react';

/**
 * HeroCreativeCanvas
 * An interactive creative coding canvas featuring an electric particle constellation
 * with dynamic distance connections, mouse physics, and click pulse bursts.
 */
export const HeroCreativeCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let width = (canvas.width = canvas.parentElement.offsetWidth);
        let height = (canvas.height = canvas.parentElement.offsetHeight);

        // Particle configuration
        const particleCount = Math.min(Math.floor((width * height) / 14000), 65);
        const particles = [];
        const mouse = { x: null, y: null, radius: 150 };
        const ripples = [];

        // Neon Yellow and Cyber Blue palette
        const colors = [
            'rgba(245, 255, 103, ',   // Neon Yellow #f5ff67
            'rgba(142, 175, 255, ',   // Soft Cyan-Blue
            'rgba(255, 255, 255, '    // Pure White
        ];

        class Particle {
            constructor(x, y) {
                this.x = x || Math.random() * width;
                this.y = y || Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.9;
                this.vy = (Math.random() - 0.5) * 0.9;
                this.baseRadius = Math.random() * 2 + 1.2;
                this.radius = this.baseRadius;
                this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = Math.random() * 0.6 + 0.3;
                this.pulseSpeed = Math.random() * 0.03 + 0.01;
                this.pulseAngle = Math.random() * Math.PI * 2;
            }

            update() {
                this.pulseAngle += this.pulseSpeed;
                this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.8;

                // Move
                this.x += this.vx;
                this.y += this.vy;

                // Bounce at edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (gentle attraction / repulsion spring)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        // Subtle magnetic pull towards cursor with spring recoil
                        this.x += Math.cos(angle) * force * 1.5;
                        this.y += Math.sin(angle) * force * 1.5;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
                ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#f5ff67';
                ctx.fill();
                ctx.shadowBlur = 0; // reset
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Click burst ripple effect
        class Ripple {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 2;
                this.maxRadius = 120;
                this.alpha = 0.8;
            }

            update() {
                this.radius += 3.5;
                this.alpha *= 0.94;
            }

            draw() {
                if (this.alpha <= 0.01) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(245, 255, 103, ${this.alpha})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }

        // Connection lines between nearby nodes
        const connectParticles = () => {
            const maxDistance = 135;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < maxDistance) {
                        const opacity = (1 - dist / maxDistance) * 0.28;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(245, 255, 103, ${opacity})`;
                        ctx.lineWidth = 0.9;
                        ctx.stroke();
                    }
                }

                // Connect to mouse if close
                if (mouse.x !== null && mouse.y !== null) {
                    const mdx = particles[i].x - mouse.x;
                    const mdy = particles[i].y - mouse.y;
                    const mdist = Math.hypot(mdx, mdy);
                    if (mdist < mouse.radius) {
                        const mOpacity = (1 - mdist / mouse.radius) * 0.45;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(245, 255, 103, ${mOpacity})`;
                        ctx.lineWidth = 1.2;
                        ctx.stroke();
                    }
                }
            }
        };

        // Render loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update & draw ripples
            for (let i = ripples.length - 1; i >= 0; i--) {
                ripples[i].update();
                ripples[i].draw();
                if (ripples[i].alpha <= 0.01) ripples.splice(i, 1);
            }

            // Draw connection lines
            connectParticles();

            // Draw and update particles
            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Event Listeners
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            ripples.push(new Ripple(clickX, clickY));

            // Spawn 3 mini particles on click
            for (let i = 0; i < 3; i++) {
                const p = new Particle(clickX, clickY);
                p.vx = (Math.random() - 0.5) * 3;
                p.vy = (Math.random() - 0.5) * 3;
                particles.push(p);
                if (particles.length > 80) particles.shift();
            }
        };

        const handleResize = () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        };

        const parent = canvas.parentElement;
        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseleave', handleMouseLeave);
        parent.addEventListener('click', handleClick);
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseleave', handleMouseLeave);
            parent.removeEventListener('click', handleClick);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero-creative-canvas" aria-hidden="true" />;
};

export default HeroCreativeCanvas;
