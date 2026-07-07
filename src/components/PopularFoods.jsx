
const PopularFoods = () => {
  const foods = ["🍕 Pizza","🍔 Burger","🍟 Fries","🌮 Taco"];

  return (
    <div className="popular-section">
      <h2>🔥 Popular Foods</h2>

      <div className="popular-list">
        {foods.map((food,index)=>(
          <div key={index} className="popular-card">
            {food}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFoods;
