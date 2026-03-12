"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';
import TextType from './TextType';

// ── Reusable variants ──────────────────────────────────────
const fromLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -48 },
    animate: { opacity: 1, x: 0 },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
});

const fromRight = (delay = 0) => ({
    initial: { opacity: 0, x: 48 },
    animate: { opacity: 1, x: 0 },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
});

const fromBottom = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
});

const scaleUp = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
});

const HomePage = () => {
    const [isMenuHovered, setIsMenuHovered] = useState(false);

    const socials = [
        {
            href: 'https://github.com/raza1315',
            label: 'GitHub', bg: '#24292e',
            svg: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>,
        },
        {
            href: 'https://www.linkedin.com/in/razarizvi-js/',
            label: 'LinkedIn', bg: '#0077B5',
            svg: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
        },
        {
            href: 'https://leetcode.com/u/raza1513/',
            label: 'LeetCode', bg: '#FFA116',
            svg: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>,
        },
        {
            href: 'https://devpost.com/Raza-Js',
            label: 'Devpost', bg: '#003E54',
            svg: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h4.811c3.173 0 5.384 2.125 5.384 6.31 0 4.184-2.211 6.31-5.384 6.31H7.595zm2.26 2.058v8.505h2.55c1.985 0 3.124-1.266 3.124-4.252 0-2.986-1.139-4.253-3.124-4.253z" /></svg>,
        },
    ];

    return (
        <div id="home" className="relative min-h-screen bg-[#C8A882] text-[#2C2A29] overflow-hidden font-sans selection:bg-[#F4D4B0] flex flex-col items-center">

            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

            {/* Inner card */}
            <div className="relative z-10 w-[95%] max-w-[1400px] h-[92vh] mt-[4vh] bg-gradient-to-br from-[#FFFDF9] via-[#FDF6EC]/95 to-[#FFF0DC]/90 rounded-[2rem] border border-white/60 shadow-2xl overflow-hidden shadow-[#8B5E3C]/20 flex flex-col justify-between">

                {/* ── Big Name — scales up from center ── */}
                <div className="flex-1 flex flex-col justify-center items-center relative w-full mt-10 pt-20">
                    <motion.div
                        {...scaleUp(0.1)}
                        className="relative z-10 w-full px-4 text-center"
                    >
                        <h1 className="font-black text-[12vw] md:text-[7vw] tracking-tighter leading-[0.8] text-[#2C1A0E] select-none flex flex-wrap justify-center gap-x-2 md:gap-x-6 items-center">
                            {/* "SYED" — slides up */}
                            <motion.span {...fromBottom(0.25)}>SYED</motion.span>

                            {/* Rotating "RAZA/라자" — already has its own animation */}
                            <RotatingText
                                texts={['RAZA', '라자']}
                                mainClassName="text-[#D4621A] mx-1 md:mx-2 -mt-2 pr-1"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2 pr-1 md:pr-2"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2500}
                            />

                            {/* "MEHDI" — slides up with slight delay */}
                            <motion.span {...fromBottom(0.35)}>MEHDI</motion.span>

                            {/* "RIZVI" — slides up last */}
                            <motion.span {...fromBottom(0.45)}>RIZVI</motion.span>
                        </h1>
                    </motion.div>
                </div>

                {/* ── Bottom Row ── */}
                <div className="w-full relative z-20 flex flex-col md:flex-row justify-between items-center p-8 md:p-12 mb-4 h-full">

                    {/* Left — slides in from left */}
                    <div className="flex flex-col gap-10 max-w-xl w-full self-center -mt-20 ml-36">

                        {/* Tagline — from left */}
                        <motion.div
                            {...fromLeft(0.5)}
                            className="flex items-start gap-4 z-10"
                        >
                            <div className="text-[#6B4F35] font-medium leading-relaxed">
                                <TextType
                                    texts={["Full Stack Developer.", "Software Engineer."]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor
                                    cursorCharacter="|"
                                    deletingSpeed={50}
                                    variableSpeedEnabled={false}
                                    cursorBlinkDuration={0.6}
                                    className="block font-black text-[#D4621A] mb-3 text-[1.65rem] md:text-4xl lg:text-5xl tracking-tight whitespace-nowrap"
                                />
                                {/* Description — from left, slightly later */}
                                <motion.p
                                    {...fromLeft(0.65)}
                                    className="text-lg md:text-xl font-medium"
                                >
                                    Building high-performance applications with React, Next.js, Node.js, MongoDB, RabbitMQ, Bunny.net, AWS, Docker, and Kubernetes. Passionate about scalable backends, seamless cloud deployments, and cutting-edge digital solutions.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Social icons + button */}
                        <div className="flex flex-col gap-8">

                            {/* Social icons — pop up from bottom, staggered */}
                            <div className="flex items-center gap-7">
                                {socials.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        initial={{ opacity: 0, y: 28, scale: 0 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{
                                            delay: 0.8 + i * 0.1,
                                            duration: 0.55,
                                            ease: [0.34, 1.56, 0.64, 1],
                                        }}
                                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                                        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-125 active:scale-95 transition-transform duration-200"
                                        style={{ backgroundColor: social.bg, boxShadow: `0 6px 20px ${social.bg}66` }}
                                    >
                                        {social.svg}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Learn More — slides up from bottom */}
                            <motion.a
                                initial={{ opacity: 0, y: 28, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 1.15, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                                href="#about"
                                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                className="relative inline-flex items-center gap-2 self-start px-7 py-3.5 rounded-2xl font-bold text-white text-base overflow-hidden group shadow-[0_8px_30px_rgba(212,98,26,0.4)] hover:scale-110 active:scale-95 transition-transform duration-200"
                                style={{ background: 'linear-gradient(135deg, #D4621A 0%, #E8913A 50%, #D4621A 100%)' }}
                            >
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: 'linear-gradient(135deg, #BF551A 0%, #D4621A 50%, #F0A050 100%)' }}
                                />
                                <span className="relative z-10 flex items-center gap-2">
                                    Learn More
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Right — photo slides in from right */}
                    <div className="flex flex-col items-center md:items-end mt-16 md:mt-0 self-center md:self-end">
                        <motion.div
                            {...fromRight(0.6)}
                            className="relative flex justify-end w-full md:w-auto pb-6 md:pb-8 pr-2"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                whileHover={{ scale: 1.08, rotate: -3 }}
                                transition={{
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                    scale: { type: "spring", stiffness: 400, damping: 20 },
                                    rotate: { type: "spring", stiffness: 400, damping: 20 },
                                }}
                                className="relative z-10 bg-[#FDF8F0] p-3 md:p-4 pb-0 rounded-t-[3rem] rounded-b-[2rem] origin-bottom cursor-pointer -rotate-2
                                           shadow-[-10px_-10px_30px_rgba(255,255,255,0.9),_10px_10px_30px_rgba(180,150,100,0.25),_inset_2px_2px_5px_rgba(255,255,255,1),_inset_-3px_-3px_7px_rgba(200,170,130,0.2)]
                                           border border-white/70 mr-10"
                            >
                                <img
                                    src="/myPP.jpg"
                                    alt="Syed Raza Mehdi Rizvi"
                                    className="w-[220px] md:w-[280px] lg:w-[350px] object-contain object-bottom filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] pointer-events-none rounded-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
