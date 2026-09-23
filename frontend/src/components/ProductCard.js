import React, { useState } from "react";

function ProductCard({ product, addToCart }) {
  const variations = product.variations ?? [];
  const [selectedVariationId, setSelectedVariationId] = useState("");
  const selectedVariation = variations.find(
    (variation) => String(variation.id) === selectedVariationId
  );
  const sizes = selectedVariation?.sizes ?? [];
  const [selectedSizeId, setSelectedSizeId] = useState("");
  const selectedSize = sizes.find((size) => String(size.id) === selectedSizeId);

  function handleVariationChange(event) {
    setSelectedVariationId(event.target.value);
    setSelectedSizeId("");
  }

  function handleAdd() {
    addToCart({
      ...product,
      selectedVariation,
      selectedSize,
    });
  }

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top img-fluid"
        style={{ height: 180, objectFit: "contain", backgroundColor: "#f7f7f7" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text description" title={product.description}>{product.description}</p>
        <select
          className="form-select form-select-sm mb-2"
          value={selectedVariationId}
          onChange={handleVariationChange}
          aria-label={`Select ${product.name} variation`}
          disabled={variations.length === 0}
        >
          <option value="">Select variation</option>
          {variations.map((variation) => (
            <option key={variation.id} value={variation.id}>
              {variation.name}
            </option>
          ))}
        </select>
        <select
          className="form-select form-select-sm mb-2"
          value={selectedSizeId}
          onChange={(event) => setSelectedSizeId(event.target.value)}
          aria-label={`Select ${product.name} size`}
          disabled={!selectedVariation}
        >
          <option value="">Select size</option>
          {sizes.map((size) => (
            <option key={size.id} value={size.id}>
              {size.size}
            </option>
          ))}
        </select>
        <p className="card-text">
          {selectedSize ? <>&#8377;{selectedSize.price}</> : "Select options"}
        </p>
      </div>
      <button className="btn btn-primary m-3 mt-0" onClick={handleAdd} disabled={!selectedVariation || !selectedSize}>
        Add
      </button>
    </div>
  );
}

export default ProductCard;
