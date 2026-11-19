import { useState } from "react";
import { products, categories } from "./data/products.js";
import { formatPrice } from "./utils/format.js";
import Filters from "./components/Filters.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import CompareBar from "./components/CompareBar.jsx";
import CompareModal from "./components/CompareModal.jsx";
import "./App.css";

function App() {
  // الفلاتر
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // سلة المشروع
  // كل عنصر فيها فيه كود القطعة واسمها وسعرها والكمية
  const [kit, setKit] = useState([]);

  // المقارنة
  // القطع المختارة للمقارنة اتنين على الأكتر
  const [compareList, setCompareList] = useState([]);
  // نافذة المقارنة مفتوحة ولا لأ
  const [showCompare, setShowCompare] = useState(false);

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

  // الإجمالي بيتحسب من السلة في كل مرة، علشان كده بيتحدث لحظيا
  const totalItems = kit.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = kit.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  function resetFilters() {
    setCategory("All");
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
  }

  function addToKit(product) {
    const existing = kit.find((item) => item.id === product.id);
    if (existing) {
      // القطعة موجودة في السلة، فنزود الكمية بس
      changeQuantity(product.id, 1);
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      setKit([...kit, newItem]);
    }
  }

  function changeQuantity(id, change) {
    // نغير كمية القطعة المطلوبة وباقي القطع زي ما هي
    const updated = kit.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + change };
      }
      return item;
    });
    // أي قطعة كميتها وصلت صفر بتتشال من السلة
    setKit(updated.filter((item) => item.quantity > 0));
  }

  function removeFromKit(id) {
    setKit(kit.filter((item) => item.id !== id));
  }

  function clearKit() {
    setKit([]);
  }

  // اختيار القطعة للمقارنة أو إلغاء اختيارها
  function toggleCompare(product) {
    const alreadySelected = compareList.some((item) => item.id === product.id);
    if (alreadySelected) {
      setCompareList(compareList.filter((item) => item.id !== product.id));
    } else {
      setCompareList([...compareList, product]);
    }
  }

  // المقارنة مسموحة بين قطعتين بس، ومن نفس الفئة
  function isCompareDisabled(product) {
    const alreadySelected = compareList.some((item) => item.id === product.id);
    if (alreadySelected) return false;
    if (compareList.length === 2) return true;
    if (
      compareList.length === 1 &&
      compareList[0].category !== product.category
    )
      return true;
    return false;
  }

  function clearCompare() {
    setCompareList([]);
    setShowCompare(false);
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <h1>Tech & Hardware Builder</h1>
          <p>Pick parts, compare specs, and build your project kit.</p>
        </div>

        {/* ملخص السلة بيفضل ظاهر فوق، والضغط عليه بينزل للسلة */}
        <a className="kit-pill" href="#kit">
          <span>My kit</span>
          <strong>{totalItems} items</strong>
          <strong key={totalPrice} className="kit-pill-total">
            {formatPrice(totalPrice)}
          </strong>
        </a>
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
                  isComparing={compareList.some(
                    (item) => item.id === product.id,
                  )}
                  compareDisabled={isCompareDisabled(product)}
                  onAdd={addToKit}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </div>
          )}
        </section>

        <aside className="sidebar" id="kit">
          <Cart
            items={kit}
            totalItems={totalItems}
            totalPrice={totalPrice}
            onChangeQuantity={changeQuantity}
            onRemove={removeFromKit}
            onClear={clearKit}
          />
        </aside>
      </main>

      <footer className="app-footer">
        Sample data for demonstration. Prices and specs are approximate, so
        check the datasheet or the store before buying.
      </footer>

      <CompareBar
        items={compareList}
        onOpen={() => setShowCompare(true)}
        onClear={clearCompare}
      />

      {showCompare && compareList.length === 2 && (
        <CompareModal
          first={compareList[0]}
          second={compareList[1]}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}

export default App;
