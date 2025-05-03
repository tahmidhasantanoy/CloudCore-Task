/* eslint-disable no-unused-vars */
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Snowflake,
} from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../../public/Images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img className="w-12 h-12" src={logoImg} alt="Brand Logo" />
              <span className="text-blue-400 font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-2xl">
                MordernMarket
              </span>
            </div>
            <p className="text-gray-400 text-start mb-6">
              Premium winter clothing for all your needs. Stay warm and stylish
              with our collection of high-quality hoodies and jackets.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="/"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="/"
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="/"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 relative">
              Quick Links
              <motion.span
                className="absolute -top-2 -right-2 text-blue-400"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <Snowflake size={14} />
              </motion.span>
            </h3>
            <ul className="space-y-3">
              {["Home", "Shop", "About Us", "Contact", "FAQs"].map(
                (item, index) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                    >
                      <ChevronRight size={16} className="mr-2" />
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 relative">
              Contact Us
              <motion.span
                className="absolute -top-2 -right-2 text-blue-400"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              >
                <Snowflake size={14} />
              </motion.span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-400">
                  123 Winter Street, Cold City
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@winterstyle.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 relative">
              Newsletter
              <motion.span
                className="absolute -top-2 -right-2 text-blue-400"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 2 }}
              >
                <Snowflake size={14} />
              </motion.span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-500 p-1"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="w-full bg-blue-500 hover:bg-blue-600">
                  Subscribe
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} MordernMarket. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
