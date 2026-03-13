"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Award, X, ExternalLink, Calendar, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
    {
        id: 1,
        title: "First step korean",
        issuer: "Coursera",
        date: "2025",
        image: "/certificates/ct1.png",
    },
    {
        id: 2,
        title: "Introduction to Artificial Intelligence",
        issuer: "Great Learning",
        date: "2025",
        image: "/certificates/ct2.png",
    },
    {
        id: 3,
        title: "Path to product based company",
        issuer: "IEEE Jamia Hamdard",
        date: "2022",
        image: "/certificates/ct3.png",
    },
    {
        id: 4,
        title: "Webinar on virtual labs",
        issuer: "Jamia Hamdard",
        date: "2021",
        image: "/certificates/ct4.png",
    },
    {
        id: 6,
        title: "Delhi Police Hackathon",
        issuer: "Delhi Police",
        date: "2024",
        image: "/certificates/ct6.png",
    },
    {
        id: 7,
        title: "Tech Team Member",
        issuer: "Tezos Jamia Hamdard",
        date: "2025",
        image: "/certificates/ct7.png",
    },
    {
        id: 8,
        title: "Profile Building",
        issuer: "Tezos Jamia Hamdard",
        date: "2024",
        image: "/certificates/ct8.png",
    },
    {
        id: 9,
        title: "First place in March past",
        issuer: "Good Samaritan School",
        date: "2015",
        image: "/certificates/ct9.png",
    },
    {
        id: 10,
        title: "2nd place in kho kho",
        issuer: "Good Samaritan School",
        date: "2014",
        image: "/certificates/ct10.png",
    },
    {
        id: 11,
        title: "Most creative student",
        issuer: "Good Samaritan School",
        date: "2011",
        image: "/certificates/ct11.png",
    },
];

const hackathons = [
    {
        date: "2023",
        title: "IEEE HACKATHON",
        link: "https://www.linkedin.com/posts/razarizvi-js_rpa-automationanywhere-hackathon-activity-7174300912344043520-lREA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvEv9kBr5Zd2ESX0flcfPB1SMwot-RbRr4",
    },
    {
        date: "2024",
        title: "GIA Hacks",
        link: "https://devpost.com/software/nature-nest-y28hza",
    },
    {
        date: "2024",
        title: "Landing Page Hackathon",
        link: "https://devpost.com/software/coolfizz",
    },
    {
        date: "2024",
        title: "American Allegiance of Education",
        link: "https://devpost.com/software/momsconnect-zkr4sj",
    },
    {
        date: "2024",
        title: "CirFin CREATE",
        link: "https://devpost.com/software/nature-nest-y28hza",
    },
];

const CertificatesSection = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certificates" className="relative min-h-screen bg-[#FDF6EC] py-16 md:py-20 px-6 overflow-hidden">
            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto space-y-16">

                {/* ── PART 1: CERTIFICATIONS ── */}
                <div className="space-y-10">
                    <div className="text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#D4621A] font-bold tracking-[0.4em] text-xs uppercase mb-3"
                        >
                            Achievements
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-[#2C1A0E] tracking-tighter"
                        >
                            Certifications And <span className="text-[#D4621A]">Achievements.</span>
                        </motion.h2>
                    </div>

                    {/* Horizontal scroll for certificates */}
                    <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                onClick={() => setSelectedCert(cert)}
                                className="flex-shrink-0 w-[80vw] md:w-[300px] snap-center cursor-pointer group"
                            >
                                <div className="bg-white rounded-[2rem] border border-[#D4621A]/10 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#D4621A]/10 transition-all duration-500 h-full flex flex-col">
                                    <div className="relative aspect-[4/3] w-full bg-[#FDF6EC] overflow-hidden">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-lg font-black text-[#2C1A0E] mb-2 group-hover:text-[#D4621A] transition-colors line-clamp-2 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-[#6B4F35]">{cert.issuer}</span>
                                            <span className="text-[10px] font-bold text-[#C8A882]">{cert.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── PART 2: HACKATHONS (Journey Grid) ── */}
                <div className="pt-12 border-t border-[#D4621A]/10 space-y-10">
                    <div className="text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#6B4F35] font-black tracking-[0.4em] text-[10px] uppercase mb-2"
                        >
                            Competitive Spirit
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-[#2C1A0E] tracking-tighter"
                        >
                            The Hackathon <span className="text-[#D4621A]">Circuit.</span>
                        </motion.h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                        {hackathons.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="group relative h-full"
                            >
                                {/* Card Background Bloom */}
                                <div className="absolute inset-0 bg-[#D4621A]/5 blur-3xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative bg-white/60 backdrop-blur-md p-7 md:p-9 rounded-[2.5rem] border border-[#D4621A]/15 shadow-[0_10px_40px_rgba(212,98,26,0.03)] hover:shadow-[0_20px_60px_rgba(212,98,26,0.12)] transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">

                                    {/* Decorative Number/Year background */}
                                    <div className="absolute -top-6 -right-6 text-[8rem] font-black text-[#D4621A]/5 pointer-events-none select-none group-hover:text-[#D4621A]/10 transition-colors duration-500">
                                        {event.date.slice(-2)}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D4621A] to-[#E8913A] flex items-center justify-center text-white shadow-lg shadow-[#D4621A]/20">
                                                <Trophy size={18} strokeWidth={2.5} />
                                            </div>
                                            <div className="h-px flex-1 bg-gradient-to-r from-[#D4621A]/30 to-transparent" />
                                            <span className="text-[10px] font-black text-[#D4621A] uppercase tracking-widest bg-[#D4621A]/5 px-3 py-1.5 rounded-full border border-[#D4621A]/10">
                                                {event.date}
                                            </span>
                                        </div>

                                        <h4 className="text-xl md:text-2xl font-black text-[#2C1A0E] mb-6 leading-[1.1] tracking-tight group-hover:text-[#D4621A] transition-colors duration-300">
                                            {event.title}
                                        </h4>
                                    </div>

                                    <div className="relative z-10">
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#D4621A]/20 text-[#D4621A] rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm hover:bg-[#D4621A] hover:text-white hover:border-[#D4621A] transition-all duration-300 group/btn"
                                        >
                                            <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                                            View Submission
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center pt-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://devpost.com/Raza-Js"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-[#2C1A0E] text-white font-black text-xs uppercase tracking-[0.3em] rounded-[2rem] hover:bg-[#D4621A] transition-all duration-500 shadow-2xl shadow-black/20"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h4.811c3.173 0 5.384 2.125 5.384 6.31 0 4.436-2.211 6.31-5.384 6.31H7.595zm2.26 2.058v8.505h2.55c1.985 0 3.124-1.266 3.124-4.252 0-2.986-1.139-4.253-3.124-4.253z" />
                            </svg>
                            The Devpost Archive
                        </motion.a>
                    </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-4xl bg-[#FDF6EC] rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                                >
                                    <X size={20} />
                                </button>
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-2/3 bg-black flex items-center justify-center aspect-video md:aspect-auto">
                                        <div className="relative w-full h-[60vh] p-4">
                                            <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 p-8 flex flex-col justify-center">
                                        <h2 className="text-2xl font-black text-[#2C1A0E] mb-2 tracking-tight">{selectedCert.title}</h2>
                                        <p className="text-[#D4621A] font-bold text-xs uppercase tracking-widest">{selectedCert.issuer}</p>
                                        <p className="mt-4 text-[#6B4F35] text-sm">Obtained in {selectedCert.date}</p>
                                        <button
                                            onClick={() => setSelectedCert(null)}
                                            className="mt-8 w-full bg-[#2C1A0E] text-white py-3 rounded-xl font-bold text-sm uppercase transition-colors hover:bg-[#D4621A]"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            </div>
        </section>
    );
};

export default CertificatesSection;
