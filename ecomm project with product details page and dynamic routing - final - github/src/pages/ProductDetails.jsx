import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
    const { addToCart } = useCart();
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [qty, setQty] = useState(1);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setSelectedImage(data.thumbnail);

                fetch(
                    `https://dummyjson.com/products/category/${data.category}`
                )
                    .then((res) => res.json())
                    .then((res) =>
                        setRelatedProducts(
                            res.products.filter((item) => item.id !== data.id).slice(0, 4)
                        )
                    );
            });
    }, [id]);

    if (!product) {
        return (
            <div className="py-40 text-center text-3xl font-bold">
                Loading...
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto py-16 px-5">

            <div className="grid lg:grid-cols-2 gap-14">

                {/* Images */}

                <div>

                    <img
                        src={selectedImage}
                        alt=""
                        className="w-full h-[500px] object-cover rounded-xl border"
                    />

                    <div className="flex gap-4 mt-5">

                        {product.images.map((img, index) => (

                            <img
                                key={index}
                                src={img}
                                alt=""
                                onClick={() => setSelectedImage(img)}
                                className={`w-24 h-24 rounded-lg object-cover border cursor-pointer ${selectedImage === img
                                        ? "border-blue-600"
                                        : "border-gray-300"
                                    }`}
                            />

                        ))}

                    </div>

                </div>

                {/* Details */}

                <div>

                    <p className="uppercase text-gray-500">

                        {product.brand}

                    </p>

                    <h1 className="text-5xl font-bold mt-3">

                        {product.title}

                    </h1>

                    <div className="flex items-center gap-2 mt-5">

                        <FaStar className="text-yellow-400" />

                        <span className="font-semibold">

                            {product.rating}

                        </span>

                    </div>

                    <div className="mt-8 flex items-center gap-4">

                        <span className="text-5xl font-bold text-blue-700">

                            ${product.price}

                        </span>

                        <span className="line-through text-gray-400 text-xl">

                            $199

                        </span>

                    </div>

                    <p className="mt-8 text-gray-600 leading-8">

                        {product.description}

                    </p>

                    <div className="mt-8 space-y-3">

                        <p>

                            <strong>Category :</strong> {product.category}

                        </p>

                        <p>

                            <strong>Stock :</strong>{" "}

                            <span
                                className={
                                    product.stock > 0
                                        ? "text-green-600"
                                        : "text-red-600"
                                }
                            >
                                {product.stock} Available
                            </span>

                        </p>

                        <p>

                            <strong>Discount :</strong>{" "}

                            {product.discountPercentage}%

                        </p>

                    </div>

                    {/* Quantity */}

                    <div className="flex items-center gap-5 mt-10">

                        <button
                            onClick={() =>
                                qty > 1 && setQty(qty - 1)
                            }
                            className="border w-10 h-10 rounded hover:bg-gray-100"
                        >
                            -

                        </button>

                        <span className="text-2xl font-bold">

                            {qty}

                        </span>

                        <button
                            onClick={() => setQty(qty + 1)}
                            className="border w-10 h-10 rounded hover:bg-gray-100"
                        >
                            +

                        </button>

                    </div>

                    {/* Button */}

                    <button
                        onClick={() => addToCart(product, qty)}
                        className="mt-10 bg-blue-700 hover:bg-blue-800 transition text-white px-10 py-4 rounded-xl flex items-center gap-3 font-semibold"
                    >
                        <FaCartPlus />
                        Add To Cart
                    </button>

                </div>

            </div>

            {/* Related Products */}

            <div className="mt-24">

  <h2 className="text-4xl font-bold mb-10">
    Related Products
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {relatedProducts.map((item) => (

      <Link
        to={`/product/${item.id}`}
        key={item.id}
        className="border rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-105 transition duration-300"
      >

        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">

          <p className="text-gray-500 text-sm">
            {item.brand}
          </p>

          <h3 className="font-bold text-xl mt-2 hover:text-blue-600 transition">
            {item.title}
          </h3>

          <p className="text-blue-700 font-bold mt-3 text-xl">
            ${item.price}
          </p>

        </div>

      </Link>

    ))}

  </div>

</div>

        </section>
    );
}