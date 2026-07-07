
const Navbar = ({
  cart,
  handleLogout,
  darkMode,
  setDarkMode,
  wishlist,
  setShowProfile,
}) => {
  return (
    <div className="navbar">
      <h1>🍔 Food App Pro</h1>

      <div className="nav-right">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        
        <button
          className="theme-btn"
          onClick={() => setShowProfile(true)}
        >
          👤 Profile
        </button>

        <span className="cart-count">
          ❤️ {wishlist.length}
        </span>

        <span className="cart-count">
          🛒 {cart.length}
        </span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
