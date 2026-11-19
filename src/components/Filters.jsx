import "./Filters.css";

// قسم الفلاتر فيه بحث وفئات وسعر
// المكوّن ده مفيهوش حالة خاصة بيه وبياخد القيم من الصفحة الرئيسية
// ولما المستخدم يغير حاجة بينادي على الدالة المناسبة علشان الصفحة تتحدث
function Filters({
  categories,
  category,
  onCategoryChange,
  search,
  onSearchChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  onReset,
}) {
  return (
    <section className="filters" aria-label="Filters">
      <input
        className="search-input"
        type="search"
        aria-label="Search parts"
        placeholder="Search, e.g. ESP32 or 74HC595"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <div className="category-buttons">
        {categories.map((name) => (
          <button
            key={name}
            className={name === category ? "chip-button active" : "chip-button"}
            onClick={() => onCategoryChange(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="price-row">
        <label>
          Min price ($)
          <input
            type="number"
            min="0"
            placeholder="0"
            value={minPrice}
            onChange={(event) => onMinPriceChange(event.target.value)}
          />
        </label>

        <label>
          Max price ($)
          <input
            type="number"
            min="0"
            placeholder="Any"
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(event.target.value)}
          />
        </label>

        <button className="btn" onClick={onReset}>
          Reset filters
        </button>
      </div>
    </section>
  );
}

export default Filters;
