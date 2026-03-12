"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextType = ({
    texts = [],
    text = [],
    typingSpeed = 75,
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = "_",
    deletingSpeed = 50,
    variableSpeedEnabled = false,
    variableSpeedMin = 60,
    variableSpeedMax = 120,
    cursorBlinkDuration = 0.5,
    className = "",
    style = {}
}) => {
    const content = texts.length > 0 ? texts : text;

    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeedCurrent, setTypingSpeedCurrent] = useState(typingSpeed);

    useEffect(() => {
        let timer;
        if (content.length === 0) return;

        const handleTyping = () => {
            const i = loopNum % content.length;
            const fullText = content[i];

            if (isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }

            setTypingSpeedCurrent(() => {
                if (variableSpeedEnabled) {
                    return Math.random() * (variableSpeedMax - variableSpeedMin) + variableSpeedMin;
                }
                return isDeleting ? deletingSpeed : typingSpeed;
            });

            if (!isDeleting && displayText === fullText) {
                timer = setTimeout(() => setIsDeleting(true), pauseDuration);
                return;
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                timer = setTimeout(() => { }, 500);
                return;
            }

            timer = setTimeout(handleTyping, typingSpeedCurrent);
        };

        timer = setTimeout(handleTyping, typingSpeedCurrent);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, content, pauseDuration, typingSpeed, deletingSpeed, typingSpeedCurrent, variableSpeedEnabled, variableSpeedMin, variableSpeedMax]);

    return (
        <span className={className} style={style}>
            {displayText}
            {showCursor && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: cursorBlinkDuration, repeat: Infinity, ease: "linear" }}
                    className="ml-1"
                >
                    {cursorCharacter}
                </motion.span>
            )}
        </span>
    );
};

export default TextType;
