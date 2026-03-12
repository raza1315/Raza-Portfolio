"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: 'CreateStir',
        role: 'SDE Intern',
        desc: 'Applying technical skills and contributing to innovative projects.',
    },
    {
        company: 'AlmostZero.io',
        role: 'Full Stack Developer',
        desc: 'Developed, maintained, and scaled applications for 2000+ active users, optimizing performance and ensuring a seamless user experience across the platform.',
    }
];

const AboutSection = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section id="about" className="relative min-h-screen bg-[#C8A882] flex items-center justify-center md:py-24 py-12 md:px-6 px-2">
            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-[95%] max-w-[1240px] mx-auto">
                {/* Section Label */}
                {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#D4621A] font-bold tracking-[0.3em] text-sm uppercase mb-4"
                >
                    About Me
                </motion.p> */}

                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#2C1A0E] leading-tight mb-8">
                            Building things that <span className="text-[#D4621A]">matter.</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-[#6B4F35] text-lg md:text-xl leading-relaxed">
                                I'm Syed Raza Mehdi Rizvi, a Full Stack Developer with a passion for crafting beautiful, performant, and user-centric digital experiences. I work across the entire stack, from designing pixel-perfect UIs to architecting robust backend systems.
                            </p>
                            <p className="text-[#6B4F35] text-lg md:text-xl leading-relaxed">
                                When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or learning about system design and distributed systems.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="bg-gradient-to-br from-[#FFFDF9] to-[#FFF0DC] rounded-[2.5rem] p-8 md:p-10 border border-white/70 shadow-2xl shadow-[#8B5E3C]/30 relative overflow-hidden"
                    >
                        {/* Soft Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4621A]/5 blur-3xl rounded-full" />

                        <h3 className="text-2xl font-black text-[#2C1A0E] mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#D4621A] flex items-center justify-center text-white">
                                <Briefcase size={20} strokeWidth={2} />
                            </span>
                            Professional Experience
                        </h3>

                        <div className="space-y-10 relative">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.2 + 0.4 }}
                                    className="relative pl-8 border-l-2 border-[#D4621A]/20"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#D4621A] border-4 border-[#FFFDF9]" />

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                        <h4 className="text-xl font-bold text-[#2C1A0E]">{exp.company}</h4>
                                        <span className="text-[#D4621A] font-bold text-xs uppercase tracking-wider bg-[#D4621A]/10 px-3 py-1 rounded-full">
                                            {exp.role}
                                        </span>
                                    </div>
                                    <p className="text-[#6B4F35] text-sm md:text-base leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Experience Letters — Grid of two */}
                        <div className="mt-12 grid grid-cols-2 gap-4">
                            {[
                                { company: 'CreateStir', delay: 0.8, img: '/CreateStir.png' },
                                { company: 'AlmostZero.io', delay: 0.95, img: '/AlmostZero.png' }
                            ].map((letter, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: letter.delay }}
                                    onClick={() => setSelectedImg(letter.img)}
                                    className="rounded-xl overflow-hidden border border-[#D4621A]/20 shadow-lg group relative h-32 cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                                    <img
                                        src={letter.img}
                                        alt={`${letter.company} Experience Letter`}
                                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute bottom-2 left-2 z-20">
                                        <span className="bg-[#FFFDF9]/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-black text-[#2C1A0E] shadow-sm uppercase">
                                            {letter.company}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                        <span className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
                                            Preview
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-full max-h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img
                                src={selectedImg}
                                alt="Full screen preview"
                                className="max-w-full max-h-[85vh] object-contain"
                            />
                            <button
                                onClick={() => setSelectedImg(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-[#D4621A] text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors duration-300 font-bold"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AboutSection;
