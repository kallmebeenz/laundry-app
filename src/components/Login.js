//This show the login page of amazon like also with a create an account functionality
import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import logo from "../images/amazon-logo-dark.png";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getError } from "../logic/utils";

function Login() {
  // Import necessary dependencies and setup state variables
  const navigate = useNavigate(); // React Router navigation function
  const [email, setEmail] = useState(""); // State for storing email input
  const [password, setPassword] = useState(""); // State for storing password input
  const [error, setError] = useState(null); // State for displaying error messages
  const [processing, setProcessing] = useState(false); // State for managing form processing state

  // Initialize a state variable to track component mount status
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []); // Set mounted to true after initial render

  // Function triggered when Sign In button is clicked
  const signIn = (event) => {
    setProcessing(true); // Set processing to true to indicate form submission is in progress
    event.preventDefault(); // Prevent the default form submission behavior

    // Firebase Sign In Functionality
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // User Login Successful
        if (auth) navigate("/"); // Navigate to home page if login is successful
      })
      .catch((err) => {
        // User Login Unsuccessful
        setProcessing(false); // Set processing back to false
        setError(getError(err.message)); // Set error message based on the caught error
      });
  };

  return (
    <div className="login">
      <div className={mounted ? "login__wrapper active" : "login__wrapper"}>
        {/* Amazon logo linked to home page */}
        <Link to="/">
          <img src={logo} alt="amazon" className="login__logo" />
        </Link>

        <div className="login__container">
          <h2>Sign In</h2>

          <form>
            {/* Display error message if error exists */}
            {!!error && <p className="login__error">{error}</p>}

            <label htmlFor="login__email">Email address</label>
            {/* Input field for email */}
            <input
              type="email"
              name="email"
              id="login__email"
              value={email}
              onChange={(e) => {
                setError(null); // Clear any previous errors
                setEmail(e.target.value); // Update email state with input value
              }}
            />

            <label htmlFor="login__password">Password</label>
            {/* Input field for password */}
            <input
              type="password"
              name="password"
              id="login__password"
              value={password}
              onChange={(e) => {
                setError(null); // Clear any previous errors
                setPassword(e.target.value); // Update password state with input value
              }}
            />

            {/* Sign In button */}
            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
              disabled={processing} // Disable button while processing form
            >
              Sign In
            </button>
          </form>

          {/* Terms and conditions */}
          <p>
            By continuing, you agree to  Amazon Clone Conditions of Use
            and Privacy Notice.
          </p>
        </div>

        {/* Link to sign up page */}
        <p>
          New to Amazon Clone? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
