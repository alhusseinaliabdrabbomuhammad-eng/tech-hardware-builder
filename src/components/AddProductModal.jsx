import { useState } from "react";
import "./AddProductModal.css";

function AddProductModal({
  categories,
  onSubmit,
  onClose,
}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    chip: "",
    description: "",
  });

  const [specs, setSpecs] = useState([{ key: "", value: "" }]);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };

    let localErrors = {};

    if (field === "id" && value.length < 5) {
      localErrors.id = "ID must be at least 5 characters";
    }

    if (field === "name" && (value.trim().length < 2 || value.trim().length > 100)) {
      localErrors.name = "Name must be 2-100 characters";
    }

    if (field === "category" && !value) {
      localErrors.category = "Please select a category";
    }

    if (field === "price") {
      if (value === "") {
        localErrors.price = "Required";
      } else if (Number(value) <= 0) {
        localErrors.price = "Must be greater than 0";
      }
    }

    setFormData(updated);
    setErrors(localErrors);
    setBtnDisabled(
      updated.name.trim().length < 2 ||
      updated.name.trim().length > 100 ||
      !updated.category ||
      (field === "price" && Number(updated.price) <= 0)
    );
  };

  const handleSpecChange = (index, field, value) => {
    const updated = [...specs];
    updated[index] = { ...updated[index], [field]: value };
    setSpecs(updated);
  };

  const addSpec = () => {
    setSpecs([...specs, { key: "", value: "" }]);
  };

  const removeSpec = (index) => {
    if (specs.length <= 1) return;
    setSpecs(specs.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalErrors = {};

    if (formData.id.length < 5) {
      finalErrors.id = "ID must be at least 5 characters";
    }

    if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      finalErrors.name = "Name must be 2-100 characters";
    }

    if (!formData.category) {
      finalErrors.category = "Please select a category";
    }

    if (Number(formData.price) <= 0) {
      finalErrors.price = "Must be greater than 0";
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    setSubmitting(true);

    const specsObj = specs
      .filter((s) => s.key.trim() && s.value.trim())
      .reduce((acc, s) => {
        acc[s.key.trim()] = s.value.trim();
        return acc;
      }, {});

    await onSubmit({
      ...formData,
      id: formData.id.trim(),
      name: formData.name.trim(),
      category: formData.category,
      price: Number(formData.price),
      chip: formData.chip.trim() || "Custom",
      description: formData.description.trim() || "منتج مضاف يدوياً",
      specs: Object.keys(specsObj).length > 0 ? specsObj : {},
    });

    setSubmitting(false);
    onClose();
  };

  return (
    <div className="add-product-modal-overlay" onClick={onClose}>
      <div className="add-product-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Add custom product</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="product-id">
              ID <span className="required">*</span>
            </label>
            <input
              id="product-id"
              type="text"
              value={formData.id}
              onChange={(e) => handleChange("id", e.target.value)}
              placeholder="Enter a unique ID (min 5 chars)"
              className={errors.id ? "error" : ""}
            />
            {errors.id && <span className="error-message">{errors.id}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-name">
              Product name <span className="required">*</span>
            </label>
            <input
              id="product-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter product name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-category">
              Category <span className="required">*</span>
            </label>
            <select
              id="product-category"
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className={errors.category ? "error" : ""}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && <span className="error-message">{errors.category}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-price">
              Price ($) <span className="required">*</span>
            </label>
            <input
              id="product-price"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
              placeholder="0.00"
              className={errors.price ? "error" : ""}
            />
            {errors.price && <span className="error-message">{errors.price}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-chip">
              Chip / Model
            </label>
            <input
              id="product-chip"
              type="text"
              value={formData.chip}
              onChange={(e) => handleChange("chip", e.target.value)}
              placeholder="e.g., ESP32, ATmega328P, RP2040"
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-description">
              Description
            </label>
            <textarea
              id="product-description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Brief description of the product"
              rows="3"
            />
          </div>

          <div className="form-group specs-section">
            <div className="specs-header">
              <label>Specifications (optional)</label>
              <button
                type="button"
                className="btn-add-spec"
                onClick={addSpec}
              >
                + Add spec
              </button>
            </div>
            <div className="specs-list">
              {specs.map((spec, index) => (
                <div key={index} className="spec-row">
                  <input
                    type="text"
                    placeholder="Spec name (e.g., RAM)"
                    value={spec.key}
                    onChange={(e) => handleSpecChange(index, "key", e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Value (e.g., 16 GB)"
                    value={spec.value}
                    onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                  />
                  {specs.length > 1 && (
                    <button
                      type="button"
                      className="btn-remove-spec"
                      onClick={() => removeSpec(index)}
                      aria-label="Remove spec"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting || btnDisabled}
            >
              {submitting ? (
                <>
                  <span className="spinner"></span>
                  Adding...
                </>
              ) : (
                "Add product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;