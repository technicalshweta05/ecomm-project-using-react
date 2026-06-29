import { FaPlus } from "react-icons/fa";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:scale-105">

      <img
        src={product.image}
        alt={product.title}
        className="h-80 w-full object-contain p-6"
      />

      <div className="p-5">

        <p className="text-gray-400 uppercase text-sm">
          Brand : {product.brand}
        </p>

        <p className="text-gray-400 uppercase text-sm mt-2">
          Category : {product.category}
        </p>

        <h2 className="font-bold text-2xl mt-3 line-clamp-2">
          {product.title}
        </h2>

        <div className="flex justify-between items-center mt-6">

          <div>
            <span className="text-3xl font-semibold">
              ${product.price}
            </span>

            <span className="text-gray-500 line-through ml-3">
              ${product.oldPrice}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="border p-2 rounded hover:bg-blue-600 hover:text-white transition"
          >
            <FaPlus />
          </button>

        </div>

      </div>

    </div>
  );
}