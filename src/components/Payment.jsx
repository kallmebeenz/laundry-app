//This is the payment page that show option for payment after checking out.
import React, { useState } from "react";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import * as utils from "../logic/utils";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import { emptyCart, addOrder } from "../redux/actions";
import { v4 } from "uuid";
import moment from "moment";


function Payment() {
  // Importing necessary functions and components
  const navigate = useNavigate(); // A function for navigating to different pages
  const dispatch = useDispatch(); // A function to dispatch actions to the Redux store

  // Extracting data from the Redux store
  const user = useSelector((state) => state.user); // Getting user data from the store
  const cart = useSelector((state) => state.cart); // Getting cart items from the store

  // Setting up state variables
  const [succeeded, setSucceeded] = useState(false); // State for successful payment
  const [processing, setProcessing] = useState(""); // State for payment processing status
  const [error, setError] = useState(null); // State for capturing any errors
  const [disabled, setDisabled] = useState(true); // State for disabling payment button

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing the default form submission behavior

    // If the cart is empty, navigate to the orders page and return
    if (!cart.length) {
      navigate('/orders', { replace: true });
      return;
    }

    // If there's no error, set processing to true
    !error && setProcessing(true);

    // Creating an order object
    const order = {
      order_id: v4(), // Generating a unique order ID using a library (not shown here)
      amount: utils.formatter.format(utils.getTotalPrice(cart)), // Formatting total cart price
      created: moment().format("MMMM Do YYYY, h:mma"), // Formatting current timestamp
      cart, // Including cart items in the order
    };
    
    // Dispatching an action to add the order to the Redux store
    dispatch(addOrder(order));

    // Simulating a delay and updating states
    setTimeout(() => {
      setProcessing("");
      setSucceeded(true);
      setDisabled(true);
      
      // Dispatching an action to empty the cart in the Redux store
      dispatch(emptyCart());

      // Navigating to the orders page
      navigate('/orders', { replace: true });
    }, 1000);
  };

  // Handling changes in the payment form
  const handleChange = (event) => {
    // Updating disabled state based on the form's validity
    setDisabled(event.empty);
    
    // Updating error state with the error message, if any
    setError(event.error ? event.error.message : "");
  };

  // Rendering the UI
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {
          <Link to="/checkout">
            {/* Displaying the cart status */}
            {!cart.length ? 'empty' : `${cart.length} ${cart.length === 1 ? 'item' : 'items'}` }
          </Link>
        }</h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {/* Displaying user's delivery address */}
            <p>{user.email}</p>
            <p>123 Charles Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/* Mapping over cart items and rendering CheckoutProduct components */}
            {cart.map((item, index) => (
              <CheckoutProduct
                id={item.id}
                cartId={index}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>


        

<div className="payment__section">
  {/* This div contains the section for the payment details */}
  <div className="payment__title">
    {/* This div contains the title for the payment method */}
    <h3>Payment Method</h3> {/* The actual title text */}
  </div>
  <div className="payment__details">
    {/* This div contains the form for entering payment details */}
    <form onSubmit={handleSubmit}>
      {/* The form that will be submitted when attempting to make a payment */}
      <CardElement onChange={handleChange} />
      {/* A component (probably from a payment library) for entering card details */}

      <div className="payment__priceContainer">
        {/* This div holds the order total and the "Buy Now" button */}
        <div>
          Order Total :&nbsp;
          <strong>
            {utils.formatter.format(utils.getTotalPrice(cart))}
          </strong>
          {/* Displaying the formatted total price of the items in the cart */}
        </div>
        <button disabled={processing || disabled || succeeded}>
          {/* A button for making the payment, conditionally disabled */}
          <span>{processing ? "processing" : "Buy Now"}</span>
          {/* Displaying "processing" or "Buy Now" based on payment state */}
        </button>
      </div>

      {error && <div>{error}</div>}
      {/* Displaying an error message if an error occurs during payment */}
    </form>
  </div>
</div>
</div>
    </div>
  );
}

export default Payment;

