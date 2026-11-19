import { useState, useEffect } from "react";
import { getCombinedProducts, categories, categories as staticCategories, products } from "./data/products.js";
import { loadKit, saveKit, loadCustomProducts, saveCustomProducts } from "./utils/storage.js";
import { formatPrice } from "./utils/format.js";
import Filters from "./components/Filters.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import ExportButtons from "./components/ExportButtons.jsx";
import CompareBar from "./components/CompareBar.jsx";
import CompareModal from "./components/CompareModal.jsx";
import AddProductModal from "./components/AddProductModal.jsx";
import "./App.css";

function App() {
  // الفلاتر
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // السلة
  const [kit, setKit] = useState(loadKit);

  // جميع المنتجات (أساسية + محفوظة)
  const [allProducts, setAllProducts] = useState(() => {
    const custom = loadCustomProducts();
    const combined = custom.length === 0 ? products : [...products, ...custom];
    return combined;
  });

  // المنتجات المضافة محلياً
  const [customProducts, setCustomProducts] = useState(() => loadCustomProducts());

  // المقارنة
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  // إضافة منتج جديد
  const [showAddModal, setShowAddModal] = useState(false);

  // الفئات الديناميكية
  const [dynamicCategories, setDynamicCategories] = useState(categories);

  useEffect(() => {
    saveKit(kit);
  }, [kit])

  useEffect(() => {
    updateCategories()
  }, [])

  // القطع اللي هتظهر بعد تطبيق الفلاتر
  const searchText = search.trim().toLowerCase();
  const visibleProducts = allProducts.filter((product) => {
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

  function addNewProduct(product) {
    const customProducts = loadCustomProducts();
    if (!customProducts.find((p) => p.id === product.id)) {
      const updatedCustom = [...customProducts, product];
      saveCustomProducts(updatedCustom);
      setCustomProducts(updatedCustom);
      setAllProducts((prev) => [...prev, product]);
      updateCategories();
    }
  }

  function addToKit(product) {
    const existing = kit.find((item) => item.id === product.id);
    if (existing) {
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

  function updateCategories() {
    const customProducts = loadCustomProducts();
    const extraCategories = Object.keys(
      customProducts.reduce((acc, p) => {
        acc[p.category] = true
        return acc
      }, {})
    );
    const merged = [...staticCategories, ...extraCategories];
    const unique = merged.filter((v, i, a) => a.indexOf(v) === i)
    setDynamicCategories(unique)
  }

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
              categories={dynamicCategories}
              category={category}
              onCategoryChange={setCategory}
              search={search}
              onSearchChange={setSearch}
              minPrice={minPrice}
              onMinPriceChange={setMinPrice}
              maxPrice={maxPrice}
              onMaxPriceChange={setMaxPrice}
              onReset={resetFilters}
              onAddProduct={() => setShowAddModal(true)}
            />

          <p className="results-count">
            Showing {visibleProducts.length} of {allProducts.length} parts
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
          <ExportButtons items={kit} totalPrice={totalPrice} />
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

      {showAddModal && (
        <AddProductModal
          categories={dynamicCategories}
          onSubmit={addNewProduct}
          onClose={() => setShowAddModal(false)}
        />
      )}

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
