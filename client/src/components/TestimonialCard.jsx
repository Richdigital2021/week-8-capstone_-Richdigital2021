// src/components/TestimonialCard.jsx
import { motion } from 'framer-motion';

export function TestimonialCard({ name, quote, image }) {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg cursor-pointer text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 mx-auto rounded-full border-4 border-indigo-500 mb-4"
      />
      <blockquote className="text-gray-700 dark:text-gray-300 italic mb-2">“{quote}”</blockquote>
      <p className="mt-2 font-semibold text-gray-900 dark:text-white">{name}</p>
    </motion.div>
  );
}
