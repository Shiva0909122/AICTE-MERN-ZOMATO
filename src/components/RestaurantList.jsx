
import React, { useState, useEffect } from "react";
import "./RestaurantList.css";
const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://api.npoint.io/fd2ca043960610c4536a"; // Replace with your actual API link

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Get unique city names for filtering
  const cities = ["All", ...new Set(restaurants.map((r) => r.city))];

  // Filter restaurants based on selected city
  const filteredRestaurants =
    selectedCity === "All"
      ? restaurants
      : restaurants.filter((r) => r.city === selectedCity);

  return (
    <div className="container1">
      <h2 className="text-center my-4">Restaurants List</h2>

      {/* Error Handling */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Loading State */}
      {loading ? (
        <p className="text-center">Loading restaurants...</p>
      ) : (
        <>
          {/* City Filter Buttons */}
          <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                className={`btn ${selectedCity === city ? "btn-success" : "btn-outline-secondary"} px-3 py-2`}
                onClick={() => setSelectedCity(city)}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Restaurant Cards */}
          <div className="row g-4">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <div key={restaurant.product_id} className="col-md-3 col-sm-6">
                  <div className="card shadow-sm h-100">
                    <img
                      src={restaurant.image_url}
                      alt={restaurant.name}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover", borderRadius: "5px" }}
                      onError={(e) => (e.target.src = "https://via.placeholder.com/180")}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{restaurant.name}</h5>
                      <p className="card-text">
                        {restaurant.city}, {restaurant.country_name}
                      </p>
                      <p className="fw-bold text-success">₹{restaurant.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No restaurants found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantList;
