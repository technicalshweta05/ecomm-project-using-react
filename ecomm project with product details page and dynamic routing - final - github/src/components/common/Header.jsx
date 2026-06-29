import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import logo from "../../assets/images/logo.svg";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { totalItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />

            <h1 className="text-3xl font-semibold">
              Flowbite
            </h1>

          </Link>

          {/* Search */}

          <div className="hidden lg:flex flex-1 justify-center px-12">

            <div className="relative w-full max-w-xl">

              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-3 pl-12 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

          </div>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-10 font-medium">

            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              to="/products"
              className="hover:text-blue-600 transition"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-600 transition"
            >
              Contact
            </Link>

          </nav>

          {/* Buttons */}

          <div className="hidden md:flex items-center gap-4 ml-6">

            <Link
              to="/cart"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white font-semibold px-6 py-3 rounded-xl"
            >
              <FaShoppingCart />

              View Cart ({totalItems})

            </Link>

            <button
              onClick={() =>
                setIsLoggedIn(!isLoggedIn)
              }
              className="bg-blue-700 hover:bg-blue-800 transition text-white font-semibold px-8 py-3 rounded-xl"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>

          </div>

          {/* Mobile */}

          <div className="flex md:hidden items-center gap-3">

            <Link
              to="/cart"
              className="relative bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg"
            >
              <FaShoppingCart />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}

            </Link>

            <button
              onClick={() =>
                setIsLoggedIn(!isLoggedIn)
              }
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>

          </div>

        </div>

        {/* Mobile Search */}

        <div className="lg:hidden pb-4">

          <div className="relative">

            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-3 pl-12 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

          </div>

        </div>

      </div>

    </header>
  );
}