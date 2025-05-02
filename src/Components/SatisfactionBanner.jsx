import { motion } from "framer-motion";

const SatisfactionBanner = () => {
  return (
    <section className="py-6 px-16 bg-[#121928]">
      <motion.div
        className="rounded-2xl overflow-hidden relative"
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-12 md:py-16 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-6 md:mb-0">
            <motion.h2
              className="text-2xl md:text-3xl text-start font-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Satisfaction Guaranteed
            </motion.h2>
            <motion.p
              className="max-w-md text-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              If you're not completely satisfied with your purchase, return it
              within 30 days for a full refund. No questions asked.
            </motion.p>
          </div>

          <motion.div
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-5 py-2 rounded-lg text-lg shadow-md">
              Shop Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SatisfactionBanner;
