import { useState } from "react";
import products from "../data/menproducts";
import ProductCard from "./MenProductCard";

export default function MenSection() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart :", [...cart, product]);
  };

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-5xl font-bold text-center">
          Celebration wear for Men
        </h1>

        <p className="text-center mt-6 text-lg">
          Welcome to Bagtesh Fashion Buy Indian Men's Ethnic suits,
          Tuxedos, Sherwanis, Nehru jacket, Jodhpurs pants,
          Blazers, Shirts and much more.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
            />
          ))}

        </div>

      </div>

    </section>
  );
}