import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./components/common/RootLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";

import CartProvider from "./context/CartContext";
import SearchProvider from "./context/SearchContext";

export default function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<RootLayout />}>

              <Route index element={<Home />} />

              <Route path="about" element={<About />} />

              <Route path="products" element={<Product />} />

              <Route
                path="product/:id"
                element={<ProductDetails />}
              />

              <Route path="contact" element={<Contact />} />

              <Route path="cart" element={<Cart />} />

              <Route path="*" element={<Error404 />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  );
}