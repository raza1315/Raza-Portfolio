"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
];

const logoTexts = ['Raza', '라자'];

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [logoIndex, setLogoIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    // Logo flip
    useEffect(() => {
        const interval = setInterval(() => {
            setLogoIndex(prev => (prev + 1) % logoTexts.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    // Scroll background switch
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy — update active link as sections enter view
    useEffect(() => {
        const sectionIds = [...navLinks.map(l => l.href.slice(1)), 'contact'];
        const observers = [];

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        const matched = navLinks.find(l => l.href === `#${id}`);
                        setActive(matched ? matched.label : id === 'contact' ? 'Contact' : 'Home');
                    }
                },
                { threshold: 0.4 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach(obs => obs.disconnect());
    }, []);

    return (
        <>
            {/* ── Desktop Navbar ── */}
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[999] hidden md:flex items-center justify-between transition-all duration-500 ${scrolled
                    ? 'px-8 py-3 bg-[#FDF6EC]/95 backdrop-blur-xl border-b border-[#D4621A]/10 shadow-[0_2px_30px_rgba(139,94,60,0.10)]'
                    : 'px-8 py-3 bg-transparent'
                    }`}
            >
                {/* Left — Logo */}
                <div className="w-28 h-8 overflow-hidden flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={logoIndex}
                            initial={{ y: 22, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -22, opacity: 0 }}
                            transition={{ duration: 0.38, ease: 'easeInOut' }}
                            className="font-black tracking-tight cursor-default select-none block text-[#D4621A] text-2xl"
                        >
                            {logoTexts[logoIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                {/* Center — Pill Nav Container */}
                <div
                    className={`flex items-center gap-0.5 rounded-2xl transition-all duration-500 ${scrolled
                        ? 'bg-white/70 border border-[#D4621A]/10 shadow-sm px-2 py-1.5'
                        : 'bg-white/10 backdrop-blur-sm border border-white/10 px-2 py-1.5'
                        }`}
                >
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            onClick={() => setActive(link.label)}
                            className="relative px-4 py-2 rounded-xl text-base font-semibold transition-colors duration-200 group"
                            style={{ color: active === link.label ? '#D4621A' : scrolled ? '#6B4F35' : '#2C1A0E' }}
                        >
                            {active === link.label && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 rounded-xl bg-[#D4621A]/12 border border-[#D4621A]/25"
                                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                                />
                            )}
                            <span className="relative z-10 group-hover:text-[#D4621A] transition-colors duration-150">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Right — Contact CTA */}
                <motion.a
                    href="#contact"
                    onClick={() => setActive('Contact')}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative overflow-hidden px-6 py-2.5 rounded-2xl text-base font-bold text-white bg-[#D4621A] shadow-[0_4px_20px_rgba(212,98,26,0.45)] group"
                >
                    {/* Shine sweep */}
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10">Contact ✉</span>
                </motion.a>
            </motion.nav>

            {/* ── Mobile Top Bar ── */}
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={`fixed top-0 left-0 right-0 z-[999] flex md:hidden items-center justify-between px-5 py-3 transition-all duration-300 ${scrolled || mobileOpen
                    ? 'bg-[#FDF6EC]/95 backdrop-blur-xl border-b border-[#D4621A]/10 shadow-md'
                    : 'bg-transparent'
                    }`}
            >
                {/* Mobile Logo */}
                <div className="h-9 overflow-hidden flex items-center w-20">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={logoIndex}
                            initial={{ y: 16, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -16, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xl font-black tracking-tight block text-[#D4621A]"
                        >
                            {logoTexts[logoIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                {/* Hamburger */}
                <motion.button
                    onClick={() => setMobileOpen(prev => !prev)}
                    whileTap={{ scale: 0.92 }}
                    className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 ${scrolled || mobileOpen
                        ? 'bg-[#D4621A]/10 text-[#D4621A] border border-[#D4621A]/20'
                        : 'bg-white/20 text-white border border-white/30'
                        }`}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={mobileOpen ? 'x' : 'menu'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </motion.span>
                    </AnimatePresence>
                </motion.button>
            </motion.div>

            {/* ── Mobile Dropdown Menu ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="fixed top-[56px] left-4 right-4 z-[998] md:hidden flex flex-col gap-1 p-3 rounded-2xl bg-[#FDF6EC]/97 backdrop-blur-xl border border-white/80 shadow-2xl shadow-[#8B5E3C]/20"
                    >
                        {[...navLinks, { label: 'Contact', href: '#contact' }].map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                onClick={() => { setActive(link.label); setMobileOpen(false); }}
                                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${link.label === 'Contact'
                                    ? 'bg-[#D4621A] text-white text-center mt-1 shadow-[0_4px_14px_rgba(212,98,26,0.35)]'
                                    : active === link.label
                                        ? 'bg-[#D4621A]/10 text-[#D4621A] border border-[#D4621A]/20'
                                        : 'text-[#6B4F35] hover:bg-[#D4621A]/6 hover:text-[#D4621A]'
                                    }`}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
