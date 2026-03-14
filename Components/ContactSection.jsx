"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const ContactSection = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `Hello Raza,\n\nMy name is ${form.name}.\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/918287770740?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');

        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: '', email: '', message: '' });
    };

    const socials = [
        {
            icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>,
            label: 'WhatsApp',
            value: '+91 82877 70740',
            href: 'https://wa.me/918287770740',
            color: '#25D366'
        },
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'razasfs2003@gmail.com',
            href: 'mailto:razasfs2003@gmail.com',
            color: '#D4621A'
        },
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/razarizvi-js/',
            href: 'https://www.linkedin.com/in/razarizvi-js/',
            color: '#0077B5'
        },
        {
            icon: <Github size={24} />,
            label: 'GitHub',
            value: 'github.com/raza1315',
            href: 'https://github.com/raza1315',
            color: '#FDF6EC'
        },
        {
            icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>,
            label: 'LeetCode',
            value: 'leetcode.com/u/raza1513/',
            href: 'https://leetcode.com/u/raza1513/',
            color: '#FFA116'
        },
        {
            icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h4.811c3.173 0 5.384 2.125 5.384 6.31 0 4.184-2.211 6.31-5.384 6.31H7.595zm2.26 2.058v8.505h2.55c1.985 0 3.124-1.266 3.124-4.252 0-2.986-1.139-4.253-3.124-4.253z" /></svg>,
            label: 'Devpost',
            value: 'devpost.com/Raza-Js',
            href: 'https://devpost.com/Raza-Js',
            color: '#003E54'
        },
    ];

    return (
        <section id="contact" className="relative min-h-screen bg-[#2C1A0E] flex items-center justify-center md:py-24 py-14 px-6 overflow-hidden">
            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            {/* Soft Ambient Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4621A]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4621A]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column — Text & Info */}
                    <div className="flex flex-col">

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-black text-[#FDF6EC] leading-tight mb-6"
                        >
                            Let&apos;s <span className="text-[#D4621A]">talk.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#C8A882] text-base md:text-lg leading-relaxed mb-10 max-w-xl font-medium"
                        >
                            Have a project in mind or just want to connect? Drop me a message and I'll get back to you within 24 hours.
                        </motion.p>

                        <div className="space-y-6">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                                    className="flex items-center gap-5 group"
                                >
                                    <div
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: social.color + '15',
                                            color: social.color,
                                            border: `1px solid ${social.color}30`,
                                        }}
                                    >
                                        {social.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] md:text-xs font-bold text-[#6B4F35] tracking-[0.2em] uppercase mb-1">{social.label}</p>
                                        <p className="text-base md:text-lg font-bold text-[#C8A882] group-hover:text-[#D4621A] transition-colors">{social.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="mt-12 pt-8 border-t border-white/10"
                        >
                            <p className="text-xs md:text-sm text-[#6B4F35] font-medium leading-relaxed">
                                Based in <span className="text-[#C8A882] font-black">India 🇮🇳</span><br />
                                Open to remote opportunities worldwide.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column — Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-black/20"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#C8A882] ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Raza"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-[#FDF6EC] placeholder:text-[#6B4F35] focus:outline-none focus:border-[#D4621A] focus:bg-white/[0.07] transition-all duration-300 text-sm md:text-base"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#C8A882] ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="raza@example.com"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-[#FDF6EC] placeholder:text-[#6B4F35] focus:outline-none focus:border-[#D4621A] focus:bg-white/[0.07] transition-all duration-300 text-sm md:text-base"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-[#C8A882] ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project or just say hi..."
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-[#FDF6EC] placeholder:text-[#6B4F35] focus:outline-none focus:border-[#D4621A] focus:bg-white/[0.07] transition-all duration-300 text-sm md:text-base resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative w-full py-4 rounded-2xl font-black text-white bg-[#D4621A] shadow-[0_10px_30px_rgba(212,98,26,0.3)] hover:shadow-[0_15px_40px_rgba(212,98,26,0.4)] transition-all duration-300 text-base md:text-lg tracking-tight overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {sent ? '✓ Message Sent!' : 'Send Message'}
                                    {!sent && <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
