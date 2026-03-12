"use client";
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A stunning personal portfolio built with Next.js, Framer Motion, and Tailwind CSS featuring smooth animations, interactive orbit components, and a warm beige/orange design system.',
        tags: ['Next.js', 'Framer Motion', 'Tailwind', 'GSAP'],
        color: '#D4621A',
        year: '2025',
    },
    {
        title: 'Microservices Platform',
        description: 'A distributed microservices architecture using Node.js, RabbitMQ for message brokering, Docker containers, and Kubernetes for orchestration at scale.',
        tags: ['Node.js', 'RabbitMQ', 'Docker', 'K8s'],
        color: '#2C1A0E',
        year: '2024',
    },
    {
        title: 'AI Chat Application',
        description: 'Real-time chat platform with AI-powered responses, WebSocket connections, Redis for session caching, and a stunning glassmorphic UI.',
        tags: ['React', 'WebSocket', 'Redis', 'Python'],
        color: '#8B5E3C',
        year: '2024',
    },
    {
        title: 'E-Commerce Backend',
        description: 'Full-stack e-commerce solution with PostgreSQL, RESTful API, JWT authentication, Stripe payments, and an admin dashboard.',
        tags: ['Java', 'PostgreSQL', 'Spring Boot', 'Stripe'],
        color: '#6B4F35',
        year: '2023',
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative min-h-screen bg-[#FDF6EC] flex items-center justify-center py-24 px-6">
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-[95%] max-w-[1200px] mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#D4621A] font-bold tracking-[0.3em] text-sm uppercase mb-4"
                >
                    Projects
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black text-[#2C1A0E] leading-tight mb-16"
                >
                    Things I've <span className="text-[#D4621A]">built.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="group bg-white rounded-[1.75rem] p-8 border border-[#D4621A]/10 shadow-lg shadow-[#8B5E3C]/10 hover:shadow-2xl hover:shadow-[#D4621A]/15 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                                    style={{ backgroundColor: project.color + '15', color: project.color }}
                                >
                                    🚀
                                </div>
                                <span className="text-xs font-semibold text-[#C8A882] tracking-widest">{project.year}</span>
                            </div>

                            <h3 className="text-2xl font-black text-[#2C1A0E] mb-3 group-hover:text-[#D4621A] transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-[#6B4F35] text-sm leading-relaxed mb-6">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, ti) => (
                                    <span
                                        key={ti}
                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{ backgroundColor: project.color + '12', color: project.color }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
