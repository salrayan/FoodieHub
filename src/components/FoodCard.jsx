
const FoodCard = ({
  item,
  addToCart,
  cart,
  toggleWishlist,
  wishlist,
}) => {
  const cartItem = cart.find(
    (c) => c.id === item.id
  );

  const isWishlisted = wishlist.find(
    (w) => w.id === item.id
  );

  const quantity = cartItem
    ? cartItem.quantity
    : 0;

  return (
    <div className="card">
      <img
        src={item.image}
        alt={item.name}
      />

      <div className="card-content">
        <h2>{item.name}</h2>

        <p className="price">
          ₹ {item.price}
        </p>

        <p className="category">
          {item.category}
        </p>

        <div className="button-group">
          <button
            onClick={() =>
              addToCart(item)
            }
          >
            Add To Cart
          </button>

          <button
            className="wish-btn"
            onClick={() =>
              toggleWishlist(item)
            }
          >
            {isWishlisted ? "❤️" : "🤍"}
          </button>
        </div>

        {quantity > 0 && (
          <p className="qty-text">
            Added ✔ {quantity}
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
