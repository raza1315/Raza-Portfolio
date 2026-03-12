"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Layout, Palette, Zap,
    Server, Database, Cpu, Layers,
    Cloud, Box, Settings, Terminal,
    FileJson, Workflow, Share2
} from 'lucide-react';
import LogoLoop from './LogoLoop';

const skillGroups = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', level: 92, icon: <Code2 size={18} /> },
            { name: 'Next.js', level: 88, icon: <Layout size={18} /> },
            { name: 'Tailwind CSS', level: 95, icon: <Palette size={18} /> },
            { name: 'Framer Motion', level: 85, icon: <Zap size={18} /> },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', level: 90, icon: <Server size={18} /> },
            { name: 'Express / NestJS', level: 88, icon: <Database size={18} /> },
            { name: 'RabbitMQ', level: 78, icon: <Cpu size={18} /> },
            { name: 'MongoDB / PostgreSQL', level: 85, icon: <Layers size={18} /> },
        ],
    },
    {
        category: 'DevOps & Cloud',
        skills: [
            { name: 'AWS / Cloudflare', level: 75, icon: <Cloud size={18} /> },
            { name: 'Docker', level: 82, icon: <Box size={18} /> },
            { name: 'Kubernetes', level: 70, icon: <Settings size={18} /> },
            { name: 'Nginx / Bunny.net', level: 80, icon: <Share2 size={18} /> },
        ],
    },
    {
        category: 'Architecture',
        skills: [
            { name: 'DSA', level: 85, icon: <FileJson size={18} /> },
            { name: 'System Design', level: 80, icon: <Workflow size={18} /> },
            { name: 'Git & Linux', level: 92, icon: <Terminal size={18} /> },
            { name: 'State Management', level: 88, icon: <Settings size={18} /> },
        ],
    },
];

const techLogos = [
    { src: "/techs/nodejs.svg", alt: "Node.js" },
    { src: "/techs/python.png", alt: "Python" },
    { src: "/techs/docker.png", alt: "Docker" },
    { src: "/techs/rabbitmq.png", alt: "RabbitMQ" },
    { src: "/techs/k8s.png", alt: "Kubernetes" },
    { src: "/techs/nextjs.webp", alt: "Next.js" },
    { src: "/techs/ts.webp", alt: "TypeScript" },
    { src: "/techs/nginx.webp", alt: "Nginx" },
    { src: "/techs/bunny.png", alt: "BunnyCDN" },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="relative min-h-screen bg-[#2C1A0E] flex flex-col items-center justify-center md:pt-24 pt-16 md:pb-24 pb-10 px-6 overflow-hidden">
            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4621A]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1240px] mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-[#FDF6EC] tracking-tighter"
                    >
                        My Technical <span className="text-[#D4621A]">Arsenal.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 -mt-6">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={gi}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: gi * 0.1 }}
                            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4621A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-[#FDF6EC] font-black text-xl mb-8 relative z-10 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#D4621A] rounded-full" />
                                {group.category}
                            </h3>

                            <div className="space-y-8 relative z-10">
                                {group.skills.map((skill, si) => (
                                    <div key={si} className="space-y-3">
                                        <div className="flex items-center justify-between text-[#C8A882]">
                                            <div className="flex items-center gap-3">
                                                <div className="text-[#D4621A] opacity-80">{skill.icon}</div>
                                                <span className="text-sm font-bold tracking-wide uppercase">{skill.name}</span>
                                            </div>
                                            <span className="text-xs font-black text-[#D4621A]">{skill.level}%</span>
                                        </div>

                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "circOut", delay: gi * 0.1 + si * 0.1 }}
                                                className="h-full bg-gradient-to-r from-[#D4621A] via-[#E8913A] to-[#D4621A] relative"
                                            >
                                                <motion.div
                                                    animate={{ x: ['-100%', '200%'] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Logo Loop Section */}
                <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-center text-[#6B4F35] text-xs font-bold tracking-[.4em] uppercase mb-4">Powering modern architecture</p>
                    <LogoLoop
                        logos={techLogos}
                        speed={50}
                        direction="left"
                        logoHeight={45}
                        gap={80}
                        scaleOnHover
                        fadeOut
                    />
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
