/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import logoImg from "../../public/Images/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logoImg} alt="Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              MordernMarket
            </span>
          </motion.div>

          {/* Menu section */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "Shop", "Collection", "Sale"].map((item, index) => (
              <motion.a
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-500 font-medium transition duration-200"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Cart section */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="text-gray-600 hover:text-blue-500 transition">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-500 transition">
                <User className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-500 transition relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </motion.div>

            <motion.button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-1">
              {["Home", "Shop", "Collection", "Sale"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="block py-2 text-gray-600 hover:text-blue-500 font-medium"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-6 py-2 border-t border-gray-100 mt-2 pt-4">
                <button className="text-gray-600 hover:text-blue-500 transition">
                  <Search className="h-5 w-5" />
                </button>
                <button className="text-gray-600 hover:text-blue-500 transition">
                  <User className="h-5 w-5" />
                </button>
                <button className="text-gray-600 hover:text-blue-500 transition relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
