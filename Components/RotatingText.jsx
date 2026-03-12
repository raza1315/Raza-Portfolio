"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RotatingText = ({
    texts,
    mainClassName = "",
    staggerFrom = "last",
    initial = { y: "100%" },
    animate = { y: 0 },
    exit = { y: "-120%" },
    staggerDuration = 0.025,
    splitLevelClassName = "",
    transition = { type: "spring", damping: 30, stiffness: 400 },
    rotationInterval = 2000,
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, rotationInterval);
        return () => clearInterval(intervalId);
    }, [texts, rotationInterval]);

    const currentText = texts[index];
    const characters = currentText.split("");

    // Determine longest word for container sizing
    const longestWord = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

    // Reverse index logic for staggerFrom="last"
    const getStaggerDelay = (i) => {
        if (staggerFrom === "first") return i * staggerDuration;
        if (staggerFrom === "last") return (characters.length - 1 - i) * staggerDuration;
        if (staggerFrom === "center") {
            const center = Math.floor(characters.length / 2);
            return Math.abs(center - i) * staggerDuration;
        }
        return i * staggerDuration;
    };

    return (
        <div className={`relative flex items-center ${mainClassName}`}>
            <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                {longestWord}
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className={`flex ${splitLevelClassName}`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {characters.map((char, i) => (
                            <motion.span
                                key={`${index}-${i}`}
                                initial={initial}
                                animate={animate}
                                exit={exit}
                                transition={{
                                    ...transition,
                                    delay: getStaggerDelay(i),
                                }}
                                className="inline-block whitespace-pre"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default RotatingText;
