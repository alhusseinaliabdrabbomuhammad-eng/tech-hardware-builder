import { useState } from "react";
import { products, categories } from "./data/products.js";
import Filters from "./components/Filters.jsx";
import ProductCard from "./components/ProductCard.jsx";
import "./App.css";

function App() {
  // الفلاتر
  // كل قيمة هنا هي حالة وأول ما بتتغير الصفحة بتتحدث لوحدها
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // القطع اللي هتظهر بعد تطبيق الفلاتر
  const searchText = search.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchCategory = category === "All" || product.category === category;
    const matchSearch = (product.name + " " + product.chip)
      .toLowerCase()
      .includes(searchText);
    const matchMin = minPrice === "" || product.price >= Number(minPrice);
    const matchMax = maxPrice === "" || product.price <= Number(maxPrice);
    return matchCategory && matchSearch && matchMin && matchMax;
  });

  function resetFilters() {
    setCategory("All");
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
  }

  // مؤقتا الأزرار بتطبع في الكونسول بس وهنربطها بالسلة والمقارنة بعدين
  function addToKit(product) {
    console.log("Add to kit:", product.name);
  }

  function toggleCompare(product) {
    console.log("Compare:", product.name);
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <h1>Tech & Hardware Builder</h1>
          <p>Pick parts, compare specs, and build your project kit.</p>
        </div>
      </header>

      <main className="layout">
        <section className="catalog">
          <Filters
            categories={categories}
            category={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
            minPrice={minPrice}
            onMinPriceChange={setMinPrice}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            onReset={resetFilters}
          />

          <p className="results-count">
            Showing {visibleProducts.length} of {products.length} parts
          </p>

          {visibleProducts.length === 0 ? (
            <p className="no-results">
              No parts match your filters. Try changing the search or the price
              range.
            </p>
          ) : (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isComparing={false}
                  compareDisabled={false}
                  onAdd={addToKit}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        Sample data for demonstration. Prices and specs are approximate, so
        check the datasheet or the store before buying.
      </footer>
    </div>
  );
}

export default App;
