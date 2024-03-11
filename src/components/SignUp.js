//this is the sign up page
import React, { useEffect, useState } from "react";  
import "../styles/Login.css";
import logo from "../images/amazon-logo-dark.png";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getError } from "../logic/utils"; 

function SignUp() {
  // Import the 'useNavigate' hook from a library (not shown in this code).
  // Initialize state variables using 'useState' hook.
  const navigate = useNavigate();  // Initialize a navigation function.
  const [email, setEmail] = useState("");  // State for storing email input.
  const [password, setPassword] = useState("");  // State for storing password input.
  const [error, setError] = useState(null);  // State for displaying error messages.
  const [processing, setProcessing] = useState(false);  // State to control form processing.

  // Another state to track if the component is mounted, using 'useEffect' hook.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);  // Set 'mounted' to true once the component is mounted.

  // Function to handle user registration.
  const register = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior.
    setProcessing(true);  // Set 'processing' to true to show processing state.

    // Firebase Register Functionality
    // Call 'createUserWithEmailAndPassword' function from 'auth' with 'email' and 'password'.
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // User Creation Successful
        if (auth) navigate("/");  // If user created, navigate to the homepage.
      })
      .catch((err) => {
        // User Creation Unsuccessful
        setProcessing(false);  // Set 'processing' to false on error.
        setError(getError(err.message));  // Set error message using 'getError' function.
      });
  };

  return (
    <div className="login">
      {/* Conditional class based on 'mounted' state */}
      <div className={mounted ? "login__wrapper active" : "login__wrapper"}>
        {/* Logo linking to home page */}
        <Link to="/">
          <img src={logo} alt="amazon" className="login__logo" />
        </Link>

        <div className="login__container">
          <h2>Sign Up</h2>

          <form>
            {!!error && <p className="login__error">{error}</p>}

            {/* Email input */}
            <label htmlFor="login__email">Email address</label>
            <input
              type="email"
              name="email"
              id="login__email"
              value={email}
              onChange={(e) => {
                setError(null);  // Clear previous errors when input changes.
                setEmail(e.target.value);  // Update 'email' state with input value.
              }}
            />

            {/* Password input */}
            <label htmlFor="login__password">Password</label>
            <input
              type="password"
              name="password"
              id="login__password"
              value={password}
              onChange={(e) => {
                setError(null);  // Clear previous errors when input changes.
                setPassword(e.target.value);  // Update 'password' state with input value.
              }}
            />

            {/* Submit button */}
            <button
              type="submit"
              className="login__signInButton"
              onClick={register}  // Call 'register' function on button click.
              disabled={processing}  // Disable the button if processing is ongoing.
            >
              Create Account
            </button>
          </form>

          {/* Privacy notice */}
          <p>
            By continuing, you agree to  Amazon Clone Conditions of Use
            and Privacy Notice.
          </p>
        </div>

        {/* Link to sign-in page */}
        <p>
          Already on Amazon Clone? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
