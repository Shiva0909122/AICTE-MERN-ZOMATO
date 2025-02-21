import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./TopRestaurants.css"; // Ensure this CSS file exists

const restaurantData = [
  { id: 127, name: "Paradise Biryani", city: "Hyderabad", image_url: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 128, name: "Cafe Bahar", city: "Hyderabad", image_url: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 129, name: "Shadab Hotel", city: "Hyderabad", image_url: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 130, name: "Bawarchi", city: "Hyderabad", image_url: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" },
  
  { id: 132, name: "Alpha Hotel", city: "Hyderabad", image_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 133, name: "Mehfil", city: "Hyderabad", image_url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const TopRestaurants = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 300, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => prev + 300);
  };

  return (
    <div className="top-restaurants-container">
      <h2>Top restaurant chains in Hyderabad</h2>
      <div className="slider-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>

        <div className="slider" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {restaurantData.map((restaurant, index) => (
            <div key={restaurant.id} className="restaurant-card">
              <img 
                src={restaurant.image_url} 
                alt={restaurant.name} 
                onError={(e) => e.target.src = "https://via.placeholder.com/200"} 
              />
              <h3>{restaurant.name}</h3>
              <p>{restaurant.city}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopRestaurants;
