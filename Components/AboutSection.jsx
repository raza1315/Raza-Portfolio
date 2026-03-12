"use client";
import { motion } from 'framer-motion';

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '5+', label: 'Certifications' },
];

const AboutSection = () => {
    return (
        <section id="about" className="relative min-h-screen bg-[#C8A882] flex items-center justify-center py-24 px-6">
            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-[95%] max-w-[1200px] mx-auto">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#D4621A] font-bold tracking-[0.3em] text-sm uppercase mb-4"
                >
                    About Me
                </motion.p>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black text-[#2C1A0E] leading-tight mb-6">
                            Building things that <span className="text-[#D4621A]">matter.</span>
                        </h2>
                        <p className="text-[#6B4F35] text-lg leading-relaxed mb-6">
                            I'm Syed Raza Mehdi Rizvi — a Full Stack Developer with a passion for crafting beautiful, performant, and user-centric digital experiences. I work across the entire stack — from designing pixel-perfect UIs to architecting robust backend systems.
                        </p>
                        <p className="text-[#6B4F35] text-lg leading-relaxed">
                            When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or learning about system design and distributed systems.
                        </p>
                    </motion.div>

                    {/* Right — Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="bg-gradient-to-br from-[#FFFDF9] to-[#FFF0DC] rounded-[2rem] p-10 border border-white/60 shadow-2xl shadow-[#8B5E3C]/20"
                    >
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                                    className="text-center"
                                >
                                    <p className="text-5xl font-black text-[#D4621A] mb-1">{s.value}</p>
                                    <p className="text-sm font-semibold text-[#6B4F35] tracking-wide">{s.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-[#D4621A]/10">
                            <p className="text-[#6B4F35] text-sm font-medium text-center italic">
                                "I don't just write code — I craft experiences."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
