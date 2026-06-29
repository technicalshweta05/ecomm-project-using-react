import { useEffect, useState } from "react";

export default function ProductFilters({
  products,
  filters,
  setFilters,
}) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((item) => item.category)),
    ];

    const uniqueBrands = [
      ...new Set(products.map((item) => item.brand)),
    ];

    setCategories(uniqueCategories);
    setBrands(uniqueBrands);
  }, [products]);

  const selectChip = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));

  const applyPricePreset = (min, max) =>
    setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));

  return (
    <aside className="sticky top-24 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_-24px_rgba(15,23,42,0.25)]">
      <div className="bg-linear-to-r from-slate-900 to-slate-800 px-6 py-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              Discover
            </p>
            <h2 className="text-xl font-bold">Refine your picks</h2>
          </div>

          <button
            onClick={() =>
              setFilters({
                category: "",
                brand: "",
                rating: "",
                minPrice: "",
                maxPrice: "",
              })
            }
            className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-slate-100 transition hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Category
            </h3>
            <span className="text-xs text-slate-400">
              {filters.category ? "Selected" : "All"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectChip("category", "")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                !filters.category
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => selectChip("category", category)}
                className={`rounded-full px-3 py-2 text-sm font-medium capitalize transition ${
                  filters.category === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Brand
            </h3>
            <span className="text-xs text-slate-400">
              {filters.brand ? "Selected" : "All"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectChip("brand", "")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                !filters.brand
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => selectChip("brand", brand)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  filters.brand === brand
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Price
            </h3>
            <span className="text-xs text-slate-400">Quick picks</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => applyPricePreset("", "")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                !filters.minPrice && !filters.maxPrice
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Any price
            </button>
            <button
              onClick={() => applyPricePreset("", 50)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                filters.maxPrice === "50"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Under $50
            </button>
            <button
              onClick={() => applyPricePreset(50, 100)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                filters.minPrice === "50" && filters.maxPrice === "100"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              $50 - $100
            </button>
            <button
              onClick={() => applyPricePreset(100, "")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                filters.minPrice === "100" && !filters.maxPrice
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              $100+
            </button>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, minPrice: e.target.value }))
              }
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
              }
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Rating
            </h3>
            <span className="text-xs text-slate-400">Minimum</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectChip("rating", "")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                !filters.rating
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Any
            </button>
            <button
              onClick={() => selectChip("rating", "4")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                filters.rating === "4"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              4★ & up
            </button>
            <button
              onClick={() => selectChip("rating", "3")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                filters.rating === "3"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              3★ & up
            </button>
            <button
              onClick={() => selectChip("rating", "2")}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                filters.rating === "2"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              2★ & up
            </button>
          </div>
        </section>
      </div>
    </aside>
  );
}