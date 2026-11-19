import { formatPrice } from "../utils/format.js";
import "./Cart.css";

// سلة المشروع بتعرض القطع المضافة والكمية والإجمالي
// القطع اللي في السلة والدوال بتيجي من الصفحة الرئيسية
function Cart({
  items,
  totalItems,
  totalPrice,
  onChangeQuantity,
  onRemove,
  onClear,
}) {
  return (
    <section className="cart">
      <div className="cart-header">
        <h2>Your Project Kit</h2>
        {items.length > 0 && (
          <button className="link-button" onClick={onClear}>
            Clear all
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="cart-empty">
          Your kit is empty. Add parts from the catalog to start building.
        </p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                <strong>{item.name}</strong>
                <span>{formatPrice(item.price)} each</span>
              </div>

              <button
                className="remove-button"
                aria-label={`Remove ${item.name}`}
                onClick={() => onRemove(item.id)}
              >
                ×
              </button>

              <div className="quantity-controls">
                <button
                  aria-label={`Decrease quantity of ${item.name}`}
                  onClick={() => onChangeQuantity(item.id, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  aria-label={`Increase quantity of ${item.name}`}
                  onClick={() => onChangeQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

              <span className="cart-item-total">
                {formatPrice(item.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-total">
        <span>Total ({totalItems} items)</span>
        {/* تغيير المفتاح بيخلي الحركة تتكرر كل ما السعر يتغير */}
        <strong key={totalPrice} className="cart-total-price">
          {formatPrice(totalPrice)}
        </strong>
      </div>
    </section>
  );
}

export default Cart;
