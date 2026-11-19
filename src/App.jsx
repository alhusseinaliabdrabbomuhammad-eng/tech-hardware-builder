import { products } from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import "./App.css";

function App() {
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
          <div className="product-grid">
            {products.map((product) => (
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
