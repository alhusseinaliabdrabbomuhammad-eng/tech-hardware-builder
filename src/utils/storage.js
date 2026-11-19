// اسم المفتاح اللي بنحفظ بيه السلة في ذاكرة المتصفح
const STORAGE_KEY = "tech-hardware-builder:kit";

// بتقرا السلة المحفوظة، ولو مفيش حاجة محفوظة بترجع سلة فاضية
export function loadKit() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // لو مفيش حاجة محفوظة أو الشكل غلط نبدأ بسلة فاضية
    return Array.isArray(saved) ? saved : [];
  } catch {
    // لو البيانات المحفوظة بايظة أو المتصفح مش سامح بالتخزين
    return [];
  }
}

// بتحفظ السلة في المتصفح على شكل نص
export function saveKit(kit) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(kit));
  } catch {
    // لو التخزين مش متاح منعملش حاجة والموقع يكمل عادي
  }
}
