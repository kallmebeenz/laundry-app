//This show information of item added to cart the image, price and other info in CHECKOUT Page
//it is final page with address and others where you actually pay that is(payment component)
import React from "react";  // Import the React library to work with React components.
import "../styles/CheckoutProduct.css";  // Import the CSS styles for the CheckoutProduct component.
import * as utils from "../logic/utils";  // Import utility functions from the "utils" module.
import { useDispatch } from "react-redux";  // Import the useDispatch hook from the "react-redux" library.
import Star from "./Star";  // Import the Star component from the "Star.js" file.
import { removeFromCart } from "../redux/actions";  // Import the removeFromCart action from the Redux actions.

// Define the CheckoutProduct component with props (cartId, image, title, price, rating).
function CheckoutProduct({ cartId, image, title, price, rating }) { 
  const dispatch = useDispatch();  // Create a dispatch function to interact with Redux store.

  // Define a function to handle the click event when the "Delete" button is clicked.
  const handleRemoveClick = () => {
    dispatch(removeFromCart(cartId));  // Dispatch the removeFromCart action with the cartId parameter.
  }

  return (
    <div className="checkout__product">  {/* Start rendering the checkout product component */}
      <div className="checkout__productImg">
        <img src={image} alt=''/>  {/* Render the product image with the provided source */}
      </div>

      <div className="checkout__productInfo">
        <div className="checkout__productTitlePrice">
          <div className="checkout__productTitle">{title}</div>  {/* Render the product title */}
          <div className="checkout__productPrice">${price}</div>  {/* Render the product price */}
        </div>

        <div className="checkout__productGift">
          <input type="checkbox" name="gift" />  {/* Render a checkbox for marking as a gift */}
          <span>This is a gift</span>  {/* Display text indicating that this is a gift option */}
          <a href="https://github.com/kallmebeenz" target="_blank" rel="noreferrer">
            Learn More
          </a>  {/* Render a link to learn more about gifts */}
        </div>

        <div className="checkout__productRating">
          {utils.renderRating(rating * 2).map((val, index) => (  // Render the product rating stars
            <Star key={index} text={val} />  // Render the Star component for each rating star.
          ))}
        </div>

        <div className="checkout__productButtons">
          <button type="button" onClick={handleRemoveClick}>Delete</button>  {/* Render a "Delete" button with a click event handler */}
          <button type="button">Save for later</button>  {/* Render a "Save for later" button */}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;  // Export the CheckoutProduct component for use in other parts of the application.
