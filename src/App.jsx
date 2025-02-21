import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import TopRestaurants from "./components/TopRestaurants"; // Import TopRestaurants component
import RestaurantList from "./components/RestaurantList";
import Footer from "./components/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  return (

    <Router key={isLoggedIn}> {/* 🔹 Forces re-render on login/logout */}

      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

      <div className="container mt-5">
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} />
          <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
          <Route path="/" element={isLoggedIn ? <Gallery /> : <Navigate to="/login" />} />
          <Route path="/" element={isLoggedIn ? <TopRestaurants /> : <Navigate to="/login" />} />

        </Routes>
      </div>
      <RestaurantList /> {/* Use the component here */}


      <Footer />
    </Router>
  );
};

export default App;
