import "./App.css";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";
import SearchFilter from "./components/SearchFilter";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import CategoryFilter from "./components/CategoryFilter";
import Checkout from "./components/Checkout";
import LandingPage from "./components/LandingPage";
import PopularFoods from "./components/PopularFoods";
import Coupon from "./components/Coupon";
import Profile from "./components/Profile";

import foodData from "./assets/foodData";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const [page, setPage] = useState(1);
  const [showProfile, setShowProfile] = useState(false);
  const itemsPerPage = 20;

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  if (showLanding) {
    return (
      <LandingPage
        setShowLogin={setShowLogin}
        setShowLanding={setShowLanding}
      />
    );
  }

  if (!isLoggedIn) {
    return (
      <div>
        {showLogin ? (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setShowLogin={setShowLogin}
          />
        ) : (
          <Signup setShowLogin={setShowLogin} />
        )}
      </div>
    );
  }

  
  if(showProfile){
    return (
      <div>
        <Navbar
          cart={cart}
          handleLogout={handleLogout}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          wishlist={wishlist}
          setShowProfile={setShowProfile}
        />

        <Profile />
      </div>
    );
  }

  let filteredFoods = foodData.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  if (selectedCategory === "All") {
    filteredFoods = filteredFoods.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.name === item.name)
    );
  }

  const visibleFoods = filteredFoods.slice(0, page * itemsPerPage);

  const addToCart = (item) => {
    const existingItem = cart.find((c) => c.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((c) =>
          c.id === item.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const toggleWishlist = (item) => {
    const exists = wishlist.find((w) => w.id === item.id);

    if (exists) {
      setWishlist(wishlist.filter((w) => w.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLanding(true);
    setCart([]);
    setWishlist([]);
    setSearch("");
    setSelectedCategory("All");
    setPage(1);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const categories = [
    "All",
    ...new Set(foodData.map((item) => item.category)),
  ];

  return (
    <div>
      <Navbar
        cart={cart}
        handleLogout={handleLogout}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        wishlist={wishlist}
        setShowProfile={setShowProfile}
      />

      <SearchFilter search={search} setSearch={setSearch} />

      <CategoryFilter
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />

      
      <PopularFoods />
      

      <div className="container">
        {visibleFoods.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            cart={cart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
        setShowProfile={setShowProfile}
          />
        ))}
      </div>

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />

      
      <Coupon total={total} />
      <Checkout total={total} />
    </div>
  );
}

export default App;
