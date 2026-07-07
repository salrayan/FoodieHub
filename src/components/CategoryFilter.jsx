import "./CategoryFilter.css";

function CategoryFilter({
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "South Indian",
    "North Indian",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Fast Food",
    "Dessert",
    "Beverages",
    "Healthy",
    "Chinese",
    "Italian",
    "Mexican",
    "Japanese",
    "Street Food",
    "Bakery",
    // "Non Veg",
    // "Veg Special",
    "Indian Sweets",
    "Frozen",
  ];

  return (
    <div className="category-container">
      {categories.map((category) => (
        <button
          key={category}
          className="category-btn"
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;