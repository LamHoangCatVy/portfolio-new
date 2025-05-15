import { motion } from "framer-motion";

export default function Highlights({ items }) {
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {items.map(({ icon, title, description }) => (
        <div
          key={title}
          className="bg-[#1f2937] p-5 rounded-xl shadow text-center flex flex-col items-center justify-between"
        >
          <div className="text-3xl mb-2">{icon}</div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      ))}
    </motion.div>
  );
}
