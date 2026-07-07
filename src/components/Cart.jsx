const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  const total = cart.reduce(
    (acc, item) => {
      return (
        acc +
        item.price * item.quantity
      );
    },
    0
  );

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Cart is Empty
        </p>
      ) : (
        <>
          {cart.map((item) => {
            return (
              <div
                className="cart-item"
                key={item.id}
              >
                <div>
                  <h4>{item.name}</h4>

                  <p>
                    ₹{item.price} ×{" "}
                    {item.quantity}
                  </p>
                </div>

                <div className="cart-buttons">
                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    ❌
                  </button>
                </div>
              </div>
            );
          })}

          <h3 className="cart-total">
            Total : ₹ {total}
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;