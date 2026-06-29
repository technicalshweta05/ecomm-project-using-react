import { FaPlus } from "react-icons/fa";

export default function WomenProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 duration-300 overflow-hidden">

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-contain p-8"
      />

      <div className="p-5">

        <div className="flex gap-3 text-sm text-gray-400 uppercase">
          <p>Brand : {product.brand}</p>
          <p>Category : {product.category}</p>
        </div>

        <h2 className="text-2xl font-bold mt-4">
          {product.title}
        </h2>

        <div className="flex justify-between items-center mt-6">

          <div>
            <span className="text-3xl font-semibold">
              ${product.price}
            </span>

            <span className="ml-3 line-through text-gray-500">
              ${product.oldPrice}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="border border-gray-400 p-2 rounded hover:bg-blue-600 hover:text-white duration-300"
          >
            <FaPlus />
          </button>

        </div>

      </div>

    </div>
  );
}