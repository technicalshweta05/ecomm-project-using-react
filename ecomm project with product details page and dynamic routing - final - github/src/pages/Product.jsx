import { useEffect, useMemo, useState } from "react";
import { FaThLarge } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilter";
import { useSearch } from "../context/SearchContext";


export default function Product() {
  const { searchTerm } = useSearch();
  const [sortBy, setSortBy] = useState("");

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 9;

  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    rating: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(console.error);
  }, []);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      data = data.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.brand?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q)
      );
    }

    if (filters.category)
      data = data.filter((i) => i.category === filters.category);

    if (filters.brand)
      data = data.filter((i) => i.brand === filters.brand);

    if (filters.rating)
      data = data.filter((i) => i.rating >= Number(filters.rating));

    if (filters.minPrice)
      data = data.filter((i) => i.price >= Number(filters.minPrice));

    if (filters.maxPrice)
      data = data.filter((i) => i.price <= Number(filters.maxPrice));

    if (sortBy === "price-low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      data.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [products, filters, searchTerm, sortBy]);

  useEffect(() => {
    setPage(1);
  }, [filters, searchTerm, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / limit));
  const currentProducts = filteredProducts.slice(
    (page - 1) * limit,
    page * limit
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between border-b pb-5">
        <div>
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="text-gray-500 mt-2">
            {filteredProducts.length} Products Found
          </p>
        </div>
        <FaThLarge size={22} />
      </div>

      <div className="grid grid-cols-12 gap-8 mt-10">
        <div className="col-span-12 lg:col-span-3">
          <ProductFilters
            products={products}
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Discover your favorites
              </h2>
              <p className="text-sm text-slate-500">
                Browse curated products with smart sorting.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="sortBy" className="text-sm font-medium text-slate-600">
                Sort by
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              >
                <option value="">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {currentProducts.length === 0 ? (
            <div className="text-center py-24">
              <h2 className="text-3xl font-bold">No Products Found</h2>
              <p className="text-gray-500 mt-3">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="flex justify-center gap-3 mt-10">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="px-5 py-2 border rounded-lg hover:bg-blue-600 hover:text-white disabled:opacity-50"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      page === i + 1
                        ? "bg-blue-600 text-white"
                        : "border hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-5 py-2 border rounded-lg hover:bg-blue-600 hover:text-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
