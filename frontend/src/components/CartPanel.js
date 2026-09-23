import React from "react";

function CartPanel({ cart, onIncrease, onDecrease, onCheckout }) {
  const getPrice = (item) => item.selectedSize?.price ?? item.variations?.[0]?.sizes?.[0]?.price;
  const grouped = Object.values(
    cart.reduce((acc, item) => {
      const key = item.id || item.name;
      const price = getPrice(item) ?? 0;
      if (!acc[key]) acc[key] = { ...item, qty: 0, unitPrice: price };
      acc[key].qty += 1;
      return acc;
    }, {})
  );

  const total = grouped.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

  return (
    <div className="d-flex flex-column border-start p-3" style={{ width: "300px", height: "100vh" }}>
      <h4>Cart</h4>
      {grouped.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div style={{ flex: 1, overflowY: "auto" }}>
            {grouped.map((item, index) => (
              <div key={index} className="mb-2 border-bottom pb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div>{item.name}</div>
                    <div className="d-flex align-items-center gap-2 mt-1">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => onDecrease(item.id)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => onIncrease(item.id)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <strong className="text-primary">₹{item.unitPrice * item.qty}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-2 border-top">
            <div className="d-flex justify-content-between">
              <h5>Total:</h5>
              <h5 className="text-success">₹{total}</h5>
            </div>
            <button type="button" className="btn btn-success w-100" onClick={onCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPanel;