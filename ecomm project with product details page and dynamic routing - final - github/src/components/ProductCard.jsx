import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";


export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    return (


        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">

            {/* Image */}
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                />
            </Link>

            {/* Details */}

            <div className="p-5">

                <p className="text-sm text-gray-400 uppercase">
                    Brand : {product.brand}
                </p>

                <p className="text-sm text-gray-400 uppercase mb-2">
                    Category : {product.category}
                </p>

                <Link to={`/product/${product.id}`}>
                    <h2 className="font-bold text-xl hover:text-blue-700 transition">
                        {product.title}
                    </h2>
                </Link>

                <div className="flex justify-between items-center mt-5">

                    <div>

                        <span className="text-2xl font-bold">
                            ${product.price}
                        </span>

                        <span className="line-through text-gray-400 ml-2">
                            $199
                        </span>

                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="border rounded p-2 hover:bg-blue-600 hover:text-white transition"
                    >
                        <FaCartPlus />
                    </button>

                </div>

            </div>

        </div>
    );
}