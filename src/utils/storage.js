// اسم المفتاح اللي بنحفظ بيه السلة في ذاكرة المتصفح
const STORAGE_KEY = "tech-hardware-builder:kit";
const STORAGE_KEY_CUSTOM_PRODUCTS = "tech-hardware-builder:custom-products";

export function loadKit() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function saveKit(kit) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(kit));
  } catch {
    // لو التخزين مش متاح منعملش حاجة والموقع يكمل عادي
  }
}

export function loadCustomProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY_CUSTOM_PRODUCTS));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function saveCustomProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_PRODUCTS, JSON.stringify(products));
  } catch {
    // لو التخزين مش متاح منعملش حاجة والموقع يكمل عادي
  }
}
