import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
    return (
        <section className="py-20 px-4 bg-love-50 min-h-[50vh] flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-love-100 relative"
                >
                    {/* Decorative quotes */}
                    <div className="absolute top-4 left-4 text-6xl text-love-200 font-serif leading-none">"</div>
                    <div className="absolute bottom-4 right-4 text-6xl text-love-200 font-serif leading-none rotate-180">"</div>

                    <h2 className="text-3xl font-serif text-love-600 mb-6">To My Pilluuuuu</h2>
                    <p className="text-lg text-gray-600 leading-relaxed italic">
                       Kuchduuuu I love youuu I still cannot believe we've been together for 2 fkin years 
                       this was just a small gesture from my side 
                       I love youuuuuuuuuuu</p> 
                          <p className="text-lg text-gray-600 leading-relaxed italic">
                        Many more years to come :)</p>
                          <p className="text-lg text-gray-600 leading-relaxed italic">
                        More tears , more laughs and more sexxx 😭😭😭😂😂
                                          </p>
                    <div className="mt-8 text-love-500 font-handwriting text-2xl">
                        ~ Tuza Manuuu 
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Message;
