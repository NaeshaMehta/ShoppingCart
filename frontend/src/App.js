import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>

      {products.length === 0 ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;