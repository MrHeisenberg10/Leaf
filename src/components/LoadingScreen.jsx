import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit before unmounting
                    return 100;
                }
                return prev + 1;
            });
        }, 30); // Adjust speed here

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-love-100">
            <div className="relative w-40 h-40">
                <motion.svg
                    className="w-full h-full text-love-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </motion.svg>

                <motion.div
                    className="absolute bottom-0 left-0 w-full overflow-hidden flex items-end justify-center"
                    initial={{ height: "0%" }}
                    animate={{ height: `${progress}%` }}
                    transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                >
                    <svg
                        className="w-40 h-40 text-love-600 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </motion.div>
            </div>

            <motion.h2
                className="mt-8 text-2xl font-bold text-love-600 tracking-widest font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                LOVE LOADING... {progress}%
            </motion.h2>
        </div>
    );
};

export default LoadingScreen;
