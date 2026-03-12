"use client";
import React from 'react';
import { motion } from 'framer-motion';

const LogoLoop = ({
    logos = [],
    speed = 40,
    direction = "left",
    logoHeight = 40,
    gap = 40,
    hoverSpeed = 0,
    scaleOnHover = false,
    fadeOut = false,
    fadeOutColor = "transparent",
    ariaLabel = "Logo Loop"
}) => {
    // Triple the logos to ensure seamless looping even on large screens
    const doubledLogos = [...logos, ...logos, ...logos];

    const isLeft = direction === "left";

    return (
        <div
            className="relative flex overflow-hidden group py-10"
            aria-label={ariaLabel}
            style={{
                maskImage: fadeOut ? `linear-gradient(to right, transparent, black 15%, black 85%, transparent)` : 'none',
                WebkitMaskImage: fadeOut ? `linear-gradient(to right, transparent, black 15%, black 85%, transparent)` : 'none',
            }}
        >
            <motion.div
                className="flex shrink-0 items-center"
                initial={{ x: isLeft ? 0 : "-50%" }}
                animate={{ x: isLeft ? "-50%" : 0 }}
                transition={{
                    duration: 100 / (speed / 10),
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ gap: `${gap}px` }}
            >
                {doubledLogos.map((logo, idx) => (
                    <div
                        key={idx}
                        className={`flex shrink-0 items-center justify-center transition-transform duration-300 ${scaleOnHover ? 'hover:scale-125' : ''}`}
                        style={{ height: `${logoHeight}px` }}
                    >
                        {logo.src ? (
                            <img
                                src={logo.src}
                                alt={logo.alt || ""}
                                className="h-full w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                            />
                        ) : (
                            <div className="text-white opacity-60 hover:opacity-100 transition-all duration-300">
                                {logo.node}
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoLoop;
