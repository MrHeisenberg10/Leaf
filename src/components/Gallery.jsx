import React from 'react';
import { motion } from 'framer-motion';

const photos = [
    '/WhatsApp Image 2025-04-23 at 22.18.24_3f6abcc9.jpg',
    '/1000093390.jpg',
    '/1000190062.jpg',
    '/1000190074.jpg',
    '/1000190060.jpg',
    '/1000190063.jpg',
];

const Gallery = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-serif text-center text-love-600 mb-12">Our Beautiful Moments</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={photo}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
