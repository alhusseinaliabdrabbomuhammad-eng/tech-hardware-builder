import { formatPrice } from "./format.js";

// بتجهز القائمة كنص بسيط ينفع يتبعت في واتساب أو إيميل
export function makeKitText(items, totalPrice) {
  const lines = items.map((item) => {
    const lineTotal = formatPrice(item.price * item.quantity);
    return `${item.quantity} x ${item.name} @ ${formatPrice(item.price)} = ${lineTotal}`;
  });

  return [
    "My Project Kit",
    "--------------------",
    ...lines,
    "--------------------",
    `Total: ${formatPrice(totalPrice)}`,
  ].join("\n");
}

// بتجهز نفس القائمة بصيغة بيانات منظمة
export function makeKitJson(items, totalPrice) {
  const data = {
    createdAt: new Date().toISOString(),
    total: Number(totalPrice.toFixed(2)),
    items: items,
  };
  return JSON.stringify(data, null, 2);
}

// بتنزّل أي نص كملف على جهاز المستخدم
export function downloadFile(fileName, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();

  // بنستنى ثانية قبل ما نمسح الرابط علشان التحميل يبدأ بسلام
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
