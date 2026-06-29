import { useState } from "react";
import WomenProductCard from "./WomenProductCard";
import womenProducts from "../data/womenproducts";

export default function WomenSection() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Women Cart :", [...cart, product]);
  };

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-5xl font-bold text-center">
          Celebration wear for Women
        </h1>

        <p className="text-center text-lg mt-5 mb-16">
          Beautiful collection of Lehenga cholis, Sarees,
          Salwar suits for engagement, wedding and other
          ethnic occasions.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {womenProducts.map((item) => (
            <WomenProductCard
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