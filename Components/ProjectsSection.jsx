"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/Components/ui/carousel";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/Components/ui/drawer";
import { ExternalLink, Github, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: "MomsConnect",
        description: "MomsConnect—a safe and engaging app for mothers and moms-to-be! With secure login, selfie verification, personalized profiles, informative blogs, interactive chat rooms, and an emergency SOS feature, it creates a supportive community for every stage of motherhood. 🤱❤️",
        image: "/projects/m1.png",
        screenshots: [
            "/projects/m1.png",
            "/projects/m2.png",
            "/projects/m3.png",
            "/projects/m4.png",
            "/projects/m5.png",
            "/projects/m6.png",
        ],
        tech: [
            "React Native",
            "MongoDB",
            "Express.js",
            "Node.js",
            "Tailwind",
            "Expo",
            "Gemini",
            "Socket.io",
        ],
        link: "https://devpost.com/software/momsnest",
    },
    {
        title: "MigraineEase",
        description: "MigraineEase is a comprehensive health management application designed to empower individuals with Migraine through efficient tracking, real-time support, and accessible healthcare solutions. Leveraging modern technologies and a user-centric approach, MigraineEase ensures seamless management of health data while fostering a supportive community.",
        image: "/projects/e1.png",
        screenshots: [
            "/projects/e1.png",
            "/projects/e2.png",
            "/projects/e3.png",
            "/projects/e4.png",
            "/projects/e5.png",
            "/projects/e6.png",
            "/projects/e7.png",
        ],
        tech: [
            "React Native",
            "Postgres",
            "Express.js",
            "Node.js",
            "Tailwind",
            "Expo",
            "Huggingface",
            "Socket.io",
            "Websockets",
            "WebRTC",
            "Twilio",
            "CDN",
        ],
        link: "https://github.com/raza1315/MigraineEase",
    },
    {
        title: "CoolFizz",
        description: "CoolFizz is more than just a soft drink—it’s a celebration of flavors and fun! 🌈🥤 Our vibrant website welcomes you with a refreshing design, shares our story, showcases flavors in a stunning gallery, and lets you explore products effortlessly. With full responsiveness, CoolFizz ensures a seamless experience on any device. Dive into the fizz and fun! 🎉",
        image: "/projects/c1.png",
        screenshots: [
            "/projects/c1.png",
            "/projects/c2.png",
            "/projects/c3.png",
            "/projects/c4.png",
            "/projects/c5.png",
            "/projects/c6.png",
        ],
        tech: ["Next js", "React js", "Node.js", "Tailwind", "scss"],
        link: "https://coolfizz.vercel.app/",
    },
    {
        title: "Nature Nest",
        description: "Nature Nest is an innovative app that makes learning about climate fun and interactive! With quizzes, a chatbot for eco-friendly tips, real-time weather updates, AI-powered recyclable object classification, and an educational sorting game, it helps users stay informed and take action for a greener planet. 🌍♻️",
        image: "/projects/n1.png",
        screenshots: [
            "/projects/n1.png",
            "/projects/n2.png",
            "/projects/n3.png",
            "/projects/n4.png",
            "/projects/n5.png",
        ],
        tech: [
            "React Native",
            "MongoDB",
            "Express.js",
            "Node.js",
            "Tailwind",
            "Expo",
            "Huggingface",
        ],
        link: "https://devpost.com/software/nature-nest-y28hza",
    },
    {
        title: "Flavour Find",
        description: "Flavour Find is your ultimate cooking companion, making meal preparation fun and easy! 🍲✨ With an extensive recipe database, AI-powered dish search, and ingredient-based suggestions, it helps you discover new dishes and make the most of what you have. Let’s turn every meal into a delicious experience! 🥗📱",
        image: "/projects/f1.png",
        screenshots: [
            "/projects/f1.png",
            "/projects/f2.png",
            "/projects/f3.png",
            "/projects/f4.png",
            "/projects/f5.png",
            "/projects/f6.png",
            "/projects/f7.png",
            "/projects/f8.png",
            "/projects/f9.png",
            "/projects/f10.png",
        ],
        tech: [
            "React Native",
            "Node.js",
            "Tailwind",
            "Expo",
            "Reanimated",
            "LottieFiles",
        ],
        link: "https://devpost.com/software/flavour-find",
    },
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [drawerApi, setDrawerApi] = useState(null);
    const [drawerCurrent, setDrawerCurrent] = useState(0);
    const [drawerCount, setDrawerCount] = useState(0);
    const scrollRef = useRef(null);

    // Track drawer carousel state
    React.useEffect(() => {
        if (!drawerApi) return;
        setDrawerCount(drawerApi.scrollSnapList().length);
        setDrawerCurrent(drawerApi.selectedScrollSnap());
        drawerApi.on("select", () => {
            setDrawerCurrent(drawerApi.selectedScrollSnap());
        });
    }, [drawerApi]);

    // Reset drawer state when project changes
    React.useEffect(() => {
        if (!selectedProject) {
            setDrawerApi(null);
            setDrawerCurrent(0);
            setDrawerCount(0);
        }
    }, [selectedProject]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const cardWidth = window.innerWidth < 768 ? clientWidth * 0.85 : 400;
            const gap = 32;
            const index = Math.round(scrollLeft / (cardWidth + gap));
            if (index !== activeIndex) setActiveIndex(index);
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const cardWidth = window.innerWidth < 768 ? clientWidth * 0.85 : 400;
            const gap = 32;
            const step = cardWidth + gap;

            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - step : scrollLeft + step,
                behavior: 'smooth'
            });
        }
    };

    const scrollToProject = (index) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const cardWidth = window.innerWidth < 768 ? clientWidth * 0.85 : 400;
            const gap = 32;
            scrollRef.current.scrollTo({
                left: index * (cardWidth + gap),
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="projects" className="relative min-h-screen bg-[#FDF6EC] flex items-center justify-center md:py-24 py-16 px-6 overflow-hidden">
            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url('/grainyImage.avif')`, backgroundSize: 'cover' }}
            />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto">
                <div className="text-center md:mb-16 mb-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#D4621A] font-bold tracking-[0.4em] text-sm uppercase mb-4"
                    >
                        Portfolio
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-[#2C1A0E] tracking-tighter"
                    >
                        Recent <span className="text-[#D4621A]">Projects.</span>
                    </motion.h2>
                </div>

                {/* --- Custom Scrollable Container --- */}
                <div className="relative group/main">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white border border-[#D4621A]/10 text-[#2C1A0E] flex items-center justify-center shadow-xl opacity-0 group-hover/main:opacity-100 group-hover/main:translate-x-0 transition-all duration-300 hover:bg-[#D4621A] hover:text-white"
                        aria-label="Previous Project"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white border border-[#D4621A]/10 text-[#2C1A0E] flex items-center justify-center shadow-xl opacity-0 group-hover/main:opacity-100 group-hover/main:translate-x-0 transition-all duration-300 hover:bg-[#D4621A] hover:text-white"
                        aria-label="Next Project"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:py-10 py-6 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                                className="group/card flex-shrink-0 w-[85vw] md:w-[400px] snap-center cursor-pointer bg-white border border-[#D4621A]/10 rounded-[2.5rem] overflow-hidden shadow-xl shadow-[#8B5E3C]/10 hover:shadow-2xl hover:shadow-[#D4621A]/20 transition-all duration-500"
                            >
                                <div className="md:p-8 p-6">
                                    {/* 1. Title */}
                                    <h3 className="text-2xl md:text-3xl font-black text-[#2C1A0E] md:mb-6 mb-4 group-hover/card:text-[#D4621A] transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>

                                    {/* 2. Project Image Area */}
                                    <div className="relative rounded-[1.8rem] overflow-hidden aspect-[16/10] md:mb-6 mb-4 bg-[#FDF6EC]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end justify-between p-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                                            <span className="text-white font-bold flex items-center gap-2 text-sm">
                                                <Layers size={16} /> View Details
                                            </span>
                                        </div>
                                    </div>

                                    {/* 3. Description (3 lines) */}
                                    <p className="text-[#6B4F35] text-sm leading-relaxed line-clamp-3 mb-2 font-medium">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination Dots (Highly visible on Mobile) */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToProject(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i
                                    ? 'bg-[#D4621A] w-6'
                                    : 'bg-[#D4621A]/20'
                                    }`}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Inline CSS to hide scrollbar for webkit */}
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                </div>
            </div>

            {/* --- Project Detail Drawer (Bottom Drawer) --- */}
            <Drawer open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DrawerContent className="bg-[#FDF6EC] border-t border-[#D4621A]/20 rounded-t-[3rem] focus:outline-none">
                    <div className="mx-auto w-full max-w-[1000px] overflow-y-auto max-h-[85vh]">
                        {selectedProject && (
                            <div className="md:p-12 p-6">
                                <DrawerHeader className="p-0 md:mb-10 mb-6">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <DrawerTitle className="text-4xl md:text-6xl font-black text-[#2C1A0E] tracking-tight">
                                                {selectedProject.title}
                                            </DrawerTitle>
                                        </div>
                                        <DrawerClose className="p-2 hover:bg-[#D4621A]/10 rounded-full transition-colors">
                                            <X size={28} className="text-[#2C1A0E]" />
                                        </DrawerClose>
                                    </div>
                                </DrawerHeader>

                                {/* Content: Stacked Order (Image -> Description -> Tech -> Button) */}
                                <div className="flex flex-col md:gap-8 gap-6 items-center">
                                    {/* 1. Screenshots Carousel (Medium Sized) */}
                                    <div className="w-full max-w-[700px] mx-auto relative group/carousel">
                                        <Carousel
                                            setApi={setDrawerApi}
                                            className="w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10"
                                        >
                                            <CarouselContent>
                                                {selectedProject.screenshots.map((src, idx) => (
                                                    <CarouselItem key={idx}>
                                                        <div className="aspect-video w-full">
                                                            <img
                                                                src={src}
                                                                alt={`${selectedProject.title} preview ${idx}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            {/* Enhanced Next/Prev Buttons - Visible on Mobile, Hover on Desktop */}
                                            <CarouselPrevious className="md:left-6 left-2 bg-[#D4621A] border-none text-white hover:bg-[#2C1A0E] md:w-12 md:h-12 w-10 h-10 flex items-center justify-center rounded-full shadow-2xl md:opacity-0 md:group-hover/carousel:opacity-100 opacity-100 transition-all duration-300 md:scale-110" />
                                            <CarouselNext className="md:right-6 right-2 bg-[#D4621A] border-none text-white hover:bg-[#2C1A0E] md:w-12 md:h-12 w-10 h-10 flex items-center justify-center rounded-full shadow-2xl md:opacity-0 md:group-hover/carousel:opacity-100 opacity-100 transition-all duration-300 md:scale-110" />
                                        </Carousel>

                                        {/* Drawer Dots Indicator */}
                                        <div className="flex justify-center gap-2 mt-4">
                                            {Array.from({ length: drawerCount }).map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => drawerApi?.scrollTo(i)}
                                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${drawerCurrent === i
                                                        ? 'bg-[#D4621A] w-6'
                                                        : 'bg-[#D4621A]/20'
                                                        }`}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* 2. Description */}
                                    <div className="space-y-4 w-full text-left">
                                        <h4 className="text-[#6B4F35] font-black uppercase tracking-widest text-xs">About project</h4>
                                        <p className="text-[#6B4F35] text-lg md:text-xl leading-relaxed font-medium">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    {/* 3. Technologies */}
                                    <div className="space-y-4 w-full text-left">
                                        <h4 className="text-[#6B4F35] font-black uppercase tracking-widest text-xs">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-white border border-[#D4621A]/10 text-[#D4621A] px-5 py-2.5 rounded-xl text-xs font-black shadow-sm"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 4. Action Button */}
                                    <div className="pt-4 w-full">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-3 bg-[#D4621A] text-white px-8 py-5 rounded-2xl font-black text-lg hover:scale-[1.01] transition-all shadow-xl shadow-[#D4621A]/20 active:scale-95"
                                        >
                                            <ExternalLink size={22} /> View Project
                                        </a>
                                    </div>
                                </div>

                                <DrawerFooter className="p-0 mt-12 mb-6" />
                            </div>
                        )}
                    </div>
                </DrawerContent>
            </Drawer>
        </section>
    );
};

export default ProjectsSection;
