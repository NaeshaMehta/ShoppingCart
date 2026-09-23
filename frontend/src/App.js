import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./components/ProductCard";
import CartPanel from "./components/CartPanel";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  function changeQuantity(productId, amount) {
    setCart((currentCart) => {
      if (amount > 0) {
        const product = currentCart.find((item) => item.id === productId);
        return product ? [...currentCart, product] : currentCart;
      }

      const productIndex = currentCart.findIndex((item) => item.id === productId);
      return productIndex === -1
        ? currentCart
        : currentCart.filter((_, index) => index !== productIndex);
    });
  }

  function checkout() {
    setCart([]);
    window.alert("Thank you for your purchase!");
  }
  return (
    <div className="d-flex">
    <div className="p-5 flex-grow-1">
      <h1 className="text-center mb-4">Shopping Cart</h1>

      {products.length === 0 ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-sm-4 col-md-3 mb-4">
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    <CartPanel
      cart={cart}
      onIncrease={(productId) => changeQuantity(productId, 1)}
      onDecrease={(productId) => changeQuantity(productId, -1)}
      onCheckout={checkout}
    />
    </div>
  );
}

export default App;