"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const ContactSection = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="relative min-h-screen bg-[#2C1A0E] flex items-center justify-center py-24 px-6">
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-[95%] max-w-[1000px] mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#D4621A] font-bold tracking-[0.3em] text-sm uppercase mb-4"
                >
                    Contact
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black text-[#FDF6EC] leading-tight mb-6"
                >
                    Let's <span className="text-[#D4621A]">talk.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#C8A882] text-lg mb-16 max-w-xl"
                >
                    Have a project in mind or just want to connect? Drop me a message and I'll get back to you within 24 hours.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        {['name', 'email'].map((field) => (
                            <div key={field}>
                                <label className="block text-sm font-semibold text-[#C8A882] mb-2 capitalize">{field}</label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={form[field]}
                                    onChange={handleChange}
                                    required
                                    placeholder={field === 'email' ? 'you@example.com' : 'Your name'}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-[#FDF6EC] placeholder:text-[#6B4F35] focus:outline-none focus:border-[#D4621A]/50 focus:bg-white/10 transition-all duration-200 text-sm"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="block text-sm font-semibold text-[#C8A882] mb-2">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-[#FDF6EC] placeholder:text-[#6B4F35] focus:outline-none focus:border-[#D4621A]/50 focus:bg-white/10 transition-all duration-200 text-sm resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-4 rounded-2xl font-bold text-white bg-[#D4621A] shadow-[0_4px_20px_rgba(212,98,26,0.4)] hover:bg-[#bf551a] transition-colors duration-200 text-sm tracking-wide"
                        >
                            {sent ? '✓ Message Sent!' : 'Send Message →'}
                        </motion.button>
                    </motion.form>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col gap-6 mt-4"
                    >
                        {[
                            { icon: <Mail size={22} />, label: 'Email', value: 'razamehdi@example.com', href: 'mailto:razamehdi@example.com', color: '#D4621A' },
                            { icon: <Linkedin size={22} />, label: 'LinkedIn', value: 'linkedin.com/in/razamehdi', href: '#', color: '#0A66C2' },
                            { icon: <Github size={22} />, label: 'GitHub', value: 'github.com/raza1315', href: '#', color: '#FDF6EC' },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ x: 8 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                className="flex items-center gap-5 group"
                            >
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                                    style={{ backgroundColor: social.color + '20', color: social.color, border: `1px solid ${social.color}25` }}
                                >
                                    {social.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#6B4F35] tracking-widest uppercase">{social.label}</p>
                                    <p className="text-sm font-medium text-[#C8A882] group-hover:text-[#D4621A] transition-colors">{social.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-xs text-[#6B4F35] leading-relaxed">
                                Based in <span className="text-[#C8A882] font-semibold">Pakistan 🇵🇰</span><br />
                                Open to remote opportunities worldwide.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
