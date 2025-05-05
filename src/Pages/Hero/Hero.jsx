import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/api/clothApi";

const Hero = () => {
  const { data, isLoading } = useGetAllProductsQuery([]);
  const allProducts = data?.data?.data || [];
  const product = allProducts?.[0];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2 min-h-screen">
        <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="w-7 h-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { name, discount_amount, buying_price, price, image, category } =
    product;

  const imageURL = `https://admin.refabry.com/storage/product/${image}`;
  const discountPercent = Math.round((discount_amount / buying_price) * 100);

  return (
    <section
      id="hero"
      className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <motion.div
            className="max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block">Stay Warm</span>
              <span className="text-blue-500">Stay Stylish</span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Discover our premium collection of winter clothing designed for
              maximum comfort and style. From cozy hoodies to insulated jackets,
              we have everything you need to brave the cold.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-lg font-semibold text-lg w-full sm:w-auto flex items-center justify-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-8 py-6 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold text-lg hover:bg-blue-50 w-full sm:w-auto">
                  Winter Collection
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto md:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-lg"
              initial={{ rotate: 3 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={imageURL}
                alt={name}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{name}</h3>
                <p className="text-gray-500 mb-2 text-sm line-clamp-2">
                  {category?.name}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-500">
                      Tk {price}/-
                    </span>
                    {buying_price && (
                      <span className="text-gray-400 line-through ml-2 text-sm">
                        Tk {buying_price}/-
                      </span>
                    )}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={`/productDetails/${product?.id}`}>
                      <button className="bg-blue-500 hover:bg-black px-6 py-3 text-sm rounded text-white">
                        View
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="font-bold">{discountPercent}%</div>
                  <div className="text-xs uppercase">Off</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
