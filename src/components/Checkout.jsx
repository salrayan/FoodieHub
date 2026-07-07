const Checkout = ({ total, setCart }) => {

  const handleOrder = () => {

    if (total === 0) {
      alert("🛒 Your cart is empty");
      return;
    }

    alert("✅ Order Placed Successfully");

    setCart([]);
  };

  return (
    <div className="checkout">

      <h2>Checkout 💳</h2>

      <h3>Total Amount: ₹{total}</h3>

      <p>
        Scan QR Code to Complete Payment
      </p>

      <img
        className="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FoodPayment"
        alt="QR Code"
      />

      <button
        className="order-btn"
        onClick={handleOrder}
      >
        Place Order
      </button>

    </div>
  );
};

export default Checkout;