import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "5000+", label: "Happy Patients" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Google Rating" }
  ];

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <div className="flex justify-center gap-10 flex-wrap">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-center"
          >
            <h3 
            className="text-3xl font-bold text-[#5A4FCF]"
            >
              {stat.number}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}