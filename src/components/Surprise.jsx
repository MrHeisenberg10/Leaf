import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Surprise = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => {
                    console.log("Audio play failed (expected if no file):", e);
                    alert("Don't forget to add your 'song.mp3' to the public folder!");
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 px-4 bg-white text-center border-t border-love-100">
            {/* 
            IMPORTANT: Replace 'song.mp3' with your actual audio filename.
            Place the audio file in the 'public' folder of your project.
        */}
            <audio ref={audioRef} src='/audio (3).mp3' loop />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className="text-xl md:text-2xl text-gray-500 mb-8 font-serif italic">
                  ata khali parynt aalich ahes tar thamb 2 min 
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleAudio}
                    className={`
                    px-8 py-4 rounded-full shadow-lg transition-all duration-300 font-medium tracking-wide flex items-center gap-3 mx-auto
                    ${isPlaying ? 'bg-love-100 text-love-600' : 'bg-love-500 text-white hover:bg-love-600'}
                `}
                >
                    {isPlaying ? (
                        <>
                            <span className="animate-pulse">SSHHHSSHSHSHSHSHS goadd mulgi</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </>
                    ) : (
                        <>
                            aahhh mamme daba nai toh choco dunga 😭😭
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </>
                    )}
                </motion.button>
                <p className="text-sm text-love-300 mt-6 animate-pulse-slow">
                            Awaz vadhavvv        </p>
            </motion.div>
        </section>
    );
};

export default Surprise;
