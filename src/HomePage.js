import React from "react";
import "./HomePage.scss";

function HomePage() {
  const items = ["Hats", "Jackets", "Sneakers", "Womens", "Mens"];
  return (
    <div className="HomePage">
      <div className="menu">
        {items.map(item => (
          <div className="menu-item">
            <div className="menu-item-box">
              <h1>{item}</h1>
              <span>Shop Now</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
