import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    subtotal,
    tax,
    total,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-5 py-14">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2 border rounded-xl min-h-[500px] flex items-center justify-center">

            <div className="text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt=""
                className="w-52 mx-auto mb-6"
              />

              <h2 className="text-3xl font-bold">
                Your Cart is Empty
              </h2>

              <p className="text-gray-500 mt-3">
                Looks like you haven't added anything yet.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl mt-8 transition"
              >
                Continue Shopping
                <FaArrowRight />
              </Link>

            </div>

          </div>

          {/* Summary */}

          <div className="border rounded-xl p-8 h-fit">

            <h2 className="text-2xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Original Price</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between">
                <span>Savings</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between">
                <span>Store Pickup</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>$0.00</span>
              </div>

            </div>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-14">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Products */}

        <div className="lg:col-span-2 space-y-6">

          {cart.map((item) => (

            <div
              key={item.id}
              className="border rounded-xl p-5 flex flex-col md:flex-row gap-6"
            >

              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-40 h-40 rounded-lg object-cover"
              />

              <div className="flex-1">

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {item.brand}
                </p>

                <p className="text-blue-700 font-bold text-2xl mt-4">
                  ${item.price}
                </p>

                <div className="flex items-center gap-5 mt-6">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="border w-10 h-10 rounded hover:bg-gray-100"
                  >
                    <FaMinus />
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="border w-10 h-10 rounded hover:bg-gray-100"
                  >
                    <FaPlus />
                  </button>

                </div>

              </div>

              <div className="flex flex-col justify-between items-end">

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <FaTrash size={22} />
                </button>

                <p className="text-2xl font-bold">
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Summary */}

        <div className="border rounded-xl p-8 h-fit sticky top-24">

          <h2 className="text-2xl font-bold mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-blue-700 hover:bg-blue-800 transition text-white py-4 rounded-xl font-semibold">
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="block text-center mt-4 text-blue-700 hover:underline"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}