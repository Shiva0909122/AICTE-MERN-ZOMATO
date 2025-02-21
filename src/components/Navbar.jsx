import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // 🚀 Import animation library

const Navbar = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser") || "";
    setUsername(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">Zomato</Link>
        
        <div className="d-flex align-items-center">
          <span className="welcome-text">Welcome, {username}!</span>
          <motion.button
            className="btn btn-outline-danger"
            onClick={handleLogout}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Logout
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
