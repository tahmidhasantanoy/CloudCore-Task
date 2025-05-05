import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    name,
    category,
    short_desc,
    discount_amount,
    buying_price,
    image,
    description,
  } = product;

  const imageURL = `https://admin.refabry.com/storage/product/${image}`;
  const discountPercent = Math.round((discount_amount / buying_price) * 100);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 w-full max-w-md mx-auto group"
    >
      <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
        <img
          src={imageURL}
          alt={category?.name || "Product"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10">
          Save {discountPercent}%
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm font-medium text-blue-600">{category?.name}</h4>

        {description?.map((item, index) => (
          <p key={index} className="text-sm text-gray-600">
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>

      <div className="mt-4 mb-2">
        <div className="flex justify-center items-center gap-2">
          <span className="text-sm text-gray-400 line-through">
            Tk {buying_price}/-
          </span>{" "}
          &nbsp;&nbsp;
          <span className="text-lg font-bold text-green-600">
            Tk {discount_amount}/-
          </span>
        </div>
      </div>

      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link to={`/productDetails/${product.id}`}>
          <button className="w-full bg-black text-white text-sm font-semibold py-2 rounded-md hover:bg-gray-800">
            Shop Now
          </button>{" "}
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
