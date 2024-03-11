import React from "react";
import Header from "./Header";
import Home from "./Home";
import DeliveryDetailsForm from './DeliveryDetailsForm';
import DisplayDetails from './DisplayDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {auth} from "../config/firebase";
import { setUser } from "../redux/actions";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import SignUp from "./SignUp";






// Import the 'loadStripe' function from a module (probably Stripe library)
const promise = loadStripe(
  "pk_test_51LKikxJIr5sMtV8TVVCP3FSBVbFYb87a2Al30jAkasBgTDe61U02aRDd5ZJKT68wknB9Woa8ZNReOfSBs1Q3Ip6g00TdXWcbbN"
);

// Define the main component of the application
function App() {
  // Get the 'dispatch' function from a Redux hook
  const dispatch = useDispatch();

  // Create a state variable 'mediaWidth' and a function 'setMediaWidth' to update it
  const [mediaWidth, setMediaWidth] = useState(null);

  // Use an effect to set 'mediaWidth' to the current window's inner width when the component mounts
  useEffect(() => setMediaWidth(window.innerWidth), []);

  // Add a window event listener to update 'mediaWidth' whenever the window is resized
  window.addEventListener("resize", (event) =>
    setMediaWidth(event.target.innerWidth)
  );

  // Set up an effect that listens to the authentication state changes
  useEffect(() => {
    // When the authentication state changes, execute the provided callback function
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // If a user is logged in or was logged in, dispatch an action to set the user in the Redux store
        dispatch(setUser(authUser));
      } else {
        // If the user is logged out, dispatch an action to set 'null' as the user in the Redux store
        dispatch(setUser(null));
      }
    });
  });

  // Render the component
  return (
    // Use React Router to set up routing for different paths
    <Router>
      <div className="App">
        {/* Define different routes */}
        <Routes>
          {/* Route for the home page */}
          <Route
            path="/"
            element={
              <>
                {/* Render the header component and pass 'mediaWidth' as a prop */}
                <Header mediaWidth={mediaWidth} />
                {/* Render the home component and pass 'mediaWidth' as a prop */}
                <Home mediaWidth={mediaWidth} />
              </>
            }
          />
          {/* Route for the orders page */}
          <Route
            path="/orders"
            element={
              <>
                {/* Render the header component and pass 'mediaWidth' as a prop */}
                <Header mediaWidth={mediaWidth} />
                {/* Render the orders component */}
                <Orders />
              </>
            }
          />
          {/* Route for the login page */}
          <Route path="/login" element={<Login />} />
          {/* Route for the signup page */}
          <Route path="/signup" element={<SignUp />} />

          <Route path="/display-details" element={<DisplayDetails />} />

          <Route path="/delivery-form" element={<DeliveryDetailsForm/>} />
          

          {/* Route for the checkout page */}
          <Route
            path="/checkout"
            element={
              <>
                {/* Render the header component and pass 'mediaWidth' as a prop */}
                <Header mediaWidth={mediaWidth} />
                {/* Render the checkout component */}
                <Checkout />
              </>
            }
          />
          {/* Route for the payment page */}
          <Route
            path="/payment"
            element={
              <>
                {/* Render the header component and pass 'mediaWidth' as a prop */}
                <Header mediaWidth={mediaWidth} />
                {/* Wrap the payment component with the 'Elements' component from Stripe */}
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Export the App component as the default export
export default App;
