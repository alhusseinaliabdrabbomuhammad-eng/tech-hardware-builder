import { categoryColors } from "../data/products.js";
import { formatPrice } from "../utils/format.js";
import "./ProductCard.css";

// كارت واحد بيعرض قطعة واحدة
// القطعة ودوال الأزرار بتوصل من الصفحة الرئيسية
function ProductCard({
  product,
  isComparing,
  compareDisabled,
  onAdd,
  onToggleCompare,
}) {
  // بنعرض أول تلات مواصفات بس علشان الكارت يفضل صغير
  const previewSpecs = Object.entries(product.specs).slice(0, 3);

  return (
    <article
      className="product-card"
      style={{ "--accent": categoryColors[product.category] }}
    >
      <div className="product-thumb">
        <span className="product-category">{product.category}</span>
        <span className="product-chip">{product.chip}</span>
      </div>

      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <ul className="product-specs">
          {previewSpecs.map(([specName, specValue]) => (
            <li key={specName}>
              <span>{specName}</span>
              <strong>{specValue}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-footer">
        <span className="product-price">{formatPrice(product.price)}</span>

        <div className="product-buttons">
          <button className="btn btn-primary" onClick={() => onAdd(product)}>
            Add to kit
          </button>
          <button
            className={isComparing ? "btn btn-selected" : "btn"}
            onClick={() => onToggleCompare(product)}
            disabled={compareDisabled}
            title={
              compareDisabled ? "Compare two parts from the same category" : ""
            }
          >
            {isComparing ? "Selected" : "Compare"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
