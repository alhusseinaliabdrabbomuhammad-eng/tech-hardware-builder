import "./Compare.css";

// الشريط اللي بيظهر تحت لما المستخدم يختار قطعة للمقارنة
// القطع المختارة للمقارنة واحدة أو اتنين
function CompareBar({ items, onOpen, onClear }) {
  // لو مفيش قطع مختارة منعرضش حاجة
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="compare-bar">
      <p className="compare-bar-text">
        {items.length === 1
          ? `${items[0].name} selected. Pick one more from the same category.`
          : `${items[0].name} vs ${items[1].name}`}
      </p>

      <button
        className="btn btn-primary"
        onClick={onOpen}
        disabled={items.length < 2}
      >
        Compare now
      </button>
      <button className="btn" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

export default CompareBar;
