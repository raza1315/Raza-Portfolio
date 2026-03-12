"use client";
import { motion } from 'framer-motion';

const skillGroups = [
    {
        category: 'Frontend',
        color: '#D4621A',
        skills: [
            { name: 'React', icon: '⚛️' },
            { name: 'Next.js', icon: '▲' },
            { name: 'TypeScript', icon: '🔷' },
            { name: 'Tailwind CSS', icon: '🎨' },
        ],
    },
    {
        category: 'Backend',
        color: '#2C1A0E',
        skills: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Python', icon: '🐍' },
            { name: 'Java', icon: '☕' },
            { name: 'RabbitMQ', icon: '🐇' },
        ],
    },
    {
        category: 'DevOps & Infra',
        color: '#8B5E3C',
        skills: [
            { name: 'Docker', icon: '🐳' },
            { name: 'Kubernetes', icon: '⚙️' },
            { name: 'Nginx', icon: '🔀' },
            { name: 'AWS', icon: '☁️' },
        ],
    },
    {
        category: 'Databases',
        color: '#6B4F35',
        skills: [
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'Redis', icon: '🔴' },
            { name: 'MySQL', icon: '💾' },
        ],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="relative min-h-screen bg-[#2C1A0E] flex items-center justify-center py-24 px-6">
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-[95%] max-w-[1200px] mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#D4621A] font-bold tracking-[0.3em] text-sm uppercase mb-4"
                >
                    Skills & Tech
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black text-[#FDF6EC] leading-tight mb-16"
                >
                    My <span className="text-[#D4621A]">toolbox.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={gi}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: gi * 0.1 }}
                            className="bg-[#FDF6EC]/5 border border-white/10 rounded-[1.5rem] p-6 hover:bg-[#FDF6EC]/10 transition-colors duration-300"
                        >
                            <div
                                className="w-3 h-3 rounded-full mb-4"
                                style={{ backgroundColor: group.color }}
                            />
                            <h3 className="text-[#FDF6EC] font-bold text-lg mb-5">{group.category}</h3>
                            <div className="flex flex-col gap-3">
                                {group.skills.map((skill, si) => (
                                    <motion.div
                                        key={si}
                                        whileHover={{ x: 6 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                        className="flex items-center gap-3 text-[#C8A882] text-sm font-medium"
                                    >
                                        <span className="text-xl">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
