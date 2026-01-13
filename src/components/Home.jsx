import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen bg-love-50 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Hearts */}
            <div className="absolute inset-0 pointer-events-none heart-bg opacity-30"></div>

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10 text-center p-8 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl"
            >
                <h1 className="text-5xl md:text-7xl font-bold text-love-600 mb-4 drop-shadow-sm font-serif">
                    Happy 2nd Anniversary mauuuu mani mauuu
                </h1>
                <p className="text-xl md:text-2xl text-love-400 font-light tracking-wider">
                    Two years of love, laughter, and memories.
                </p>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="text-love-400 text-sm">Scroll Down</div>
                <svg className="w-6 h-6 text-love-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </motion.div>
        </div>
    );
};

export default Home;
