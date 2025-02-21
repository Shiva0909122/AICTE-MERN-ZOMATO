import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion"; // 🚀 Import animation library
import './auth.css';
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Password Validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.username === username)) {
      setError("Username already exists. Try another one.");
      return;
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess(true);
    setError("");

    setTimeout(() => {
      navigate("/login");
    }, 1500); // Redirect after 1.5 seconds
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2>Register</h2>
      
      {error && (
        <motion.div 
          className="alert alert-danger"
          animate={{ x: [10, -10, 0] }} // Shake animation on error
        >
          {error}
        </motion.div>
      )}

      {success && (
        <motion.div 
          className="alert alert-success"
          animate={{ opacity: [0, 1] }} // Fade-in effect on success
        >
          Registration successful! Redirecting to login...
        </motion.div>
      )}

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>

        <motion.button
          type="submit"
          className="btn btn-primary w-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.button>
      </form>

      <p>Already have an account? <Link to="/login">Login</Link></p>
    </motion.div>
  );
};

export default Register;
