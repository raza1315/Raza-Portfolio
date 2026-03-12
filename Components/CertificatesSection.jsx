"use client";
import { motion } from 'framer-motion';

const certificates = [
    {
        title: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: 'Jan 2025',
        emoji: '☁️',
        color: '#FF9900',
        id: 'AWS-DEV-2025',
    },
    {
        title: 'Certified Kubernetes Administrator',
        issuer: 'Cloud Native Computing Foundation',
        date: 'Nov 2024',
        emoji: '⚙️',
        color: '#326CE5',
        id: 'CKA-2024',
    },
    {
        title: 'Meta Frontend Developer',
        issuer: 'Meta / Coursera',
        date: 'Aug 2024',
        emoji: '⚛️',
        color: '#0081FB',
        id: 'META-FE-2024',
    },
    {
        title: 'Google Data Analytics',
        issuer: 'Google / Coursera',
        date: 'Jun 2024',
        emoji: '📊',
        color: '#4285F4',
        id: 'GDA-2024',
    },
    {
        title: 'Docker Certified Associate',
        issuer: 'Docker Inc.',
        date: 'Mar 2024',
        emoji: '🐳',
        color: '#2496ED',
        id: 'DCA-2024',
    },
    {
        title: 'Python for Everybody',
        issuer: 'University of Michigan / Coursera',
        date: 'Dec 2023',
        emoji: '🐍',
        color: '#3776AB',
        id: 'PY4E-2023',
    },
];

const CertificatesSection = () => {
    return (
        <section id="certificates" className="relative min-h-screen bg-[#C8A882] flex items-center justify-center py-24 px-6">
            <div
                className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-[95%] max-w-[1200px] mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#2C1A0E] font-bold tracking-[0.3em] text-sm uppercase mb-4"
                >
                    Certifications
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black text-[#2C1A0E] leading-tight mb-16"
                >
                    Proof of <span className="text-white">mastery.</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="relative bg-gradient-to-br from-[#FFFDF9] to-[#FFF0DC] rounded-[1.5rem] p-7 border border-white/80 shadow-xl shadow-[#8B5E3C]/20 transition-all duration-300 cursor-pointer group overflow-hidden"
                        >
                            {/* Decorative corner badge */}
                            <div
                                className="absolute top-0 right-0 w-20 h-20 rounded-bl-[2rem] opacity-10 group-hover:opacity-20 transition-opacity"
                                style={{ backgroundColor: cert.color }}
                            />

                            <div className="flex items-start justify-between mb-5">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                                    style={{ backgroundColor: cert.color + '18' }}
                                >
                                    {cert.emoji}
                                </div>
                                <span className="text-xs font-bold text-[#C8A882] tracking-widest mt-1">{cert.date}</span>
                            </div>

                            <h3 className="text-lg font-black text-[#2C1A0E] mb-1 leading-snug group-hover:text-[#D4621A] transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-medium text-[#8B5E3C] mb-5">{cert.issuer}</p>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-[#C8A882]">{cert.id}</span>
                                <motion.span
                                    whileHover={{ x: 4 }}
                                    className="text-xs font-bold text-[#D4621A] flex items-center gap-1 cursor-pointer"
                                >
                                    View →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
