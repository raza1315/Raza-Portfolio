"use client";
import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RotatingText from './RotatingText';
import TextType from './TextType';
import OrbitImages from './OrbitImages';

const HomePage = () => {
    const [isMenuHovered, setIsMenuHovered] = useState(false);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="relative min-h-screen bg-[#C8A882] text-[#2C2A29] overflow-hidden font-sans selection:bg-[#F4D4B0] flex flex-col items-center">

            {/* Full screen noise overlay from public folder */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url('/grainyImage.avif')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Inner rounded container (The "Product" card in the design) */}
            <div className="relative z-10 w-[95%] max-w-[1400px] h-[92vh] mt-[4vh] bg-gradient-to-br from-[#FFFDF9] via-[#FDF6EC]/95 to-[#FFF0DC]/90 rounded-[2rem] border border-white/60 shadow-2xl overflow-hidden shadow-[#8B5E3C]/20 flex flex-col justify-between">

                {/* Top Spacer to replace Nav Bar */}
                <div className="w-full pt-16"></div>

                {/* Center Content Wrapper */}
                <div className="flex-1 flex flex-col justify-center items-center relative w-full mt-10">

                    {/* Massive Bold Center Typography */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 w-full px-4 text-center"
                    >
                        <h1
                            className="font-black text-[12vw] md:text-[7vw] tracking-tighter leading-[0.8] text-[#2C1A0E] select-none flex flex-wrap justify-center gap-x-2 md:gap-x-6 items-center"
                            style={{ fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif" }}
                        >
                            <span>SYED</span>
                            <RotatingText
                                texts={['RAZA', '라자']}
                                mainClassName="text-[#D4621A] mx-1 md:mx-2 -mt-2 pr-1"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2 pr-1 md:pr-2"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2500}
                            />
                            <span>MEHDI</span>
                            <span>RIZVI</span>
                        </h1>
                    </motion.div>

                </div>

                {/* Bottom Elements: Tagline, Socials, Image */}
                <div className="w-full relative z-20 flex flex-col md:flex-row justify-between items-center p-8 md:p-12 mb-4 h-full">

                    {/* Left side: Tagline and Socials */}
                    <div className="flex flex-col gap-10 max-w-xl w-full self-center -mt-20 ml-36">

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex items-start gap-4 z-10"
                        >
                            <div className="text-[#6B4F35] font-medium leading-relaxed">
                                <TextType
                                    texts={["Full Stack Developer.", "Software Engineer."]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor
                                    cursorCharacter="|"
                                    deletingSpeed={50}
                                    variableSpeedEnabled={false}
                                    cursorBlinkDuration={0.6}
                                    className="block font-black text-[#D4621A] mb-3 text-[1.65rem] md:text-4xl lg:text-5xl tracking-tight whitespace-nowrap"
                                />
                                <p className="text-lg md:text-xl font-medium">I focus on designing digital products that are not just functional, but meaningful to the people who use them.</p>
                            </div>
                        </motion.div>

                        {/* Orbit Animation underneath Text */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="w-full h-[140px] md:h-[180px] pointer-events-auto flex justify-start items-center ml-[130px] md:ml-[180px] lg:ml-[240px] mt-2 md:mt-0"
                        >
                            <OrbitImages
                                images={[
                                    "/techs/python.png",
                                    "/techs/java.jpg",
                                    "/techs/rabbitmq.png",
                                    "/techs/nodejs.png",
                                    "/techs/ts.webp",
                                    "/techs/nextjs.webp",
                                    "/techs/docker.png",
                                    "/techs/k8s.png",
                                    "/techs/nginx.webp"
                                ]}
                                shape="ellipse"
                                radiusX={180}
                                radiusY={80}
                                rotation={6}
                                duration={25}
                                itemSize={45}
                                responsive={true}
                                radius={160}
                                direction="counter-clockwise"
                                fill
                                showPath
                                paused={false}
                            />
                        </motion.div>
                    </div>

                    {/* Right side: User Image in Neumorphic Box */}
                    <div className="flex flex-col items-center md:items-end mt-16 md:mt-0 self-center md:self-end">
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="relative flex justify-end w-full md:w-auto pb-6 md:pb-8 pr-2"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                whileHover={{ scale: 1.08, rotate: -3 }}
                                transition={{
                                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                    scale: { type: "spring", stiffness: 400, damping: 20 },
                                    rotate: { type: "spring", stiffness: 400, damping: 20 }
                                }}
                                className="relative z-10 bg-[#FDF8F0] p-3 md:p-4 pb-0 rounded-t-[3rem] rounded-b-[2rem] origin-bottom cursor-pointer -rotate-2
                                           shadow-[-10px_-10px_30px_rgba(255,255,255,0.9),_10px_10px_30px_rgba(180,150,100,0.25),_inset_2px_2px_5px_rgba(255,255,255,1),_inset_-3px_-3px_7px_rgba(200,170,130,0.2)] 
                                           border border-white/70"
                            >
                                <img
                                    src="/myPic.png"
                                    alt="Syed Raza Mehdi Rizvi"
                                    className="w-[220px] md:w-[280px] lg:w-[350px] object-contain object-bottom filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] pointer-events-none"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
