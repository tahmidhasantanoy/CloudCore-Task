import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/api/clothApi";
import { useMemo } from "react";

const ProductDetails = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const { id } = useParams();

  const allProducts = data?.data?.data || [];

  const clickedProduct = useMemo(() => {
    return allProducts.find((singleProduct) => singleProduct.id === Number(id));
  }, [allProducts, id]);

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

  if (!clickedProduct) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold text-lg">
        Product not found.
      </div>
    );
  }

  const {
    name,
    discount_amount,
    buying_price,
    price,
    image,
    category,
    short_desc,
  } = clickedProduct;

  const imageURL = `https://admin.refabry.com/storage/product/${image}`;
  const discountPercent = Math.round((discount_amount / buying_price) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full h-[500px] overflow-hidden rounded-xl shadow-md">
        <img
          src={imageURL}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col justify-between space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-sm text-blue-600 font-medium">{category?.name}</p>

          <div className="mt-4 flex items-center space-x-4">
            <span className="text-gray-400 line-through text-xl">
              Tk {price}/-
            </span>
            <span className="text-green-600 font-bold text-2xl">
              Tk {buying_price}/-
            </span>
            <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Save {discountPercent}%
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2">Product Description</h4>
          <ul className="text-gray-700 space-y-2 list-disc list-inside whitespace-pre-line">
            {short_desc.split("\n").map((line, idx) => (
              <li key={idx}>{line.trim()}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all">
            Buy Now
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
