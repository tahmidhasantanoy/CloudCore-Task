import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const {
    name,
    category,
    short_desc,
    discount_amount,
    buying_price,
    imageUrl,
  } = product;

  const image = imageUrl || "/placeholder.png";
  const discountPercent = Math.round((discount_amount / buying_price) * 100);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4"
    >
      <img
        src={image}
        alt={category?.name || "Product"}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm font-medium text-blue-600">{category?.name}</h4>
        <p className="text-sm text-gray-600">{short_desc}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-green-600">
            ৳{discount_amount}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ৳{buying_price}
          </span>
          <span className="text-xs text-red-600 font-medium">
            Save {discountPercent}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
