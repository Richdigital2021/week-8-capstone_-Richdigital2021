// src/components/ui/FeatureCard.jsx
import { motion } from 'framer-motion';

export function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
