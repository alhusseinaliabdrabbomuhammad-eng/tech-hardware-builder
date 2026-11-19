import { formatPrice } from "../utils/format.js";
import "./Compare.css";

// نافذة المقارنة فيها جدول فيه القطعتين جنب بعض
function CompareModal({ first, second, onClose }) {
  // بنجمع أسماء كل المواصفات من القطعتين من غير تكرار
  const specNames = Object.keys(first.specs);
  for (const name of Object.keys(second.specs)) {
    if (!specNames.includes(name)) {
      specNames.push(name);
    }
  }

  // الأرخص بيتلون بالأخضر
  const firstCheaper = first.price < second.price;
  const secondCheaper = second.price < first.price;

  return (
    // الضغط على الخلفية بيقفل النافذة
    <div className="modal-backdrop" onClick={onClose}>
      {/* بنمنع الضغطة من الوصول للخلفية علشان الضغط جوه النافذة نفسها ميقفلهاش */}
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Compare parts"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Compare</h2>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>

        <table className="compare-table">
          <thead>
            <tr>
              <th></th>
              <th>{first.name}</th>
              <th>{second.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Price</th>
              <td className={firstCheaper ? "cheaper" : ""}>
                {formatPrice(first.price)}
                {firstCheaper && <span className="cheaper-badge">Cheaper</span>}
              </td>
              <td className={secondCheaper ? "cheaper" : ""}>
                {formatPrice(second.price)}
                {secondCheaper && (
                  <span className="cheaper-badge">Cheaper</span>
                )}
              </td>
            </tr>

            {specNames.map((name) => (
              <tr key={name}>
                <th>{name}</th>
                <td>{first.specs[name] || "-"}</td>
                <td>{second.specs[name] || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareModal;
