import { useState } from "react";
import { makeKitText, makeKitJson, downloadFile } from "../utils/exportKit.js";
import "./ExportButtons.css";

// أزرار نسخ القائمة أو تحميلها كملف نصي أو ملف بيانات
function ExportButtons({ items, totalPrice }) {
  // رسالة صغيرة بتظهر بعد النسخ
  const [message, setMessage] = useState("");
  const isEmpty = items.length === 0;

  function showMessage(text) {
    setMessage(text);
    setTimeout(() => setMessage(""), 2500);
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(makeKitText(items, totalPrice));
      showMessage("Copied to clipboard!");
    } catch {
      showMessage("Could not copy. Try the save buttons instead.");
    }
  }

  function saveText() {
    downloadFile(
      "my-project-kit.txt",
      makeKitText(items, totalPrice),
      "text/plain",
    );
  }

  function saveJson() {
    downloadFile(
      "my-project-kit.json",
      makeKitJson(items, totalPrice),
      "application/json",
    );
  }

  return (
    <section className="export-box">
      <h2>Save & share</h2>
      <p>
        Your kit is saved automatically in this browser. Export it to send it to
        a friend or to use it when you buy.
      </p>

      <div className="export-buttons">
        <button className="btn" onClick={copyText} disabled={isEmpty}>
          Copy text
        </button>
        <button className="btn" onClick={saveText} disabled={isEmpty}>
          Save .txt
        </button>
        <button className="btn" onClick={saveJson} disabled={isEmpty}>
          Save .json
        </button>
      </div>

      <p className="export-message">{message}</p>
    </section>
  );
}

export default ExportButtons;
