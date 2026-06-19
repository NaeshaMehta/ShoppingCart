import React from "react";

function ProductCard({ product }) {
  const price = product.variations[0]?.sizes[0]?.price;
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top img-fluid"
        style={{ height: 300, objectFit: "contain", backgroundColor: "#f7f7f7" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p> <br></br>
        <p className="card-text"> {price ? <>&#8377;{price}</> : "Out of Stock"} </p>
      </div>
    </div>
  );
}

export default ProductCard;
