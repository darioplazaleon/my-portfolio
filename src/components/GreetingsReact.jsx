import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Greeting = () => {
    const greetings = [
        { text: "Hola", emoji: "👋" }, // Español
        { text: "Hello", emoji: "👋" }, // Inglés
        { text: "Bonjour", emoji: "👋" }, // Francés
        { text: "Hej", emoji: "👋" }, // Sueco
        { text: "Привет", emoji: "👋" }, // Ruso
        { text: "こんにちは", emoji: "👋" }, // Japonés
        { text: "안녕하세요", emoji: "👋" }, // Coreano
    ];
    

    const [index, setIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const interval = 3000 / greetings.length;

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < greetings.length - 1) {
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                setIsExiting(true);
            }
        }, interval);
        return () => clearTimeout(timeout);
    }, [index, greetings.length]);

    const variants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "-100vh" }
    };

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    id="animated-text"
                    className="w-screen h-screen bg-ctp-base fixed top-0 left-0 z-50 flex justify-center items-center"
                    initial={{ opacity: 1, y: 0 }}
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    <motion.p
                        className="text-white text-5xl"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: interval / 1000 }}
                    >
                        {greetings[index].text} {greetings[index].emoji}
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Greeting;