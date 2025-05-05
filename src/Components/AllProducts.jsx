import { useGetAllProductsQuery } from "../Redux/api/clothApi";
import { useMemo, lazy, Suspense } from "react";
import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";
const ProductCard = lazy(() => import("./ProductCard"));

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  const allProducts = useMemo(() => {
    return data?.data?.data || [];
  }, [data]);

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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block relative mb-6">
            <motion.span
              className="absolute -top-5 -left-6 text-blue-200"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <Snowflake size={20} />
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-1 relative">
              Winter Collection 2025
            </h2>
            <motion.span
              className="absolute -bottom-5 -right-6 text-blue-200"
              animate={{ rotate: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            >
              <Snowflake size={20} />
            </motion.span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay warm and stylish with our premium selection of hoodies and
            jackets designed for the winter season.
          </p>
        </motion.div>

        <Suspense fallback={<div>Loading products...</div>}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default AllProducts;
