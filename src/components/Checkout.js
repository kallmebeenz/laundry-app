//this component shows the check out page after item has been added to cart.it is the first checkout page
//after tis page we move over to cart payment page with address info(checkoutproduct.js)
import React from "react";
import "../styles/Checkout.css";
import Ad from "../images/Developer-Ad.png"; // Importing an image
import Subtotal from "./Subtotal"; // Importing the Subtotal component
import { useSelector, useDispatch } from "react-redux"; // Importing Redux functions
import CheckoutProduct from "./CheckoutProduct"; // Importing the CheckoutProduct component
import { emptyCart } from "../redux/actions";  // Importing an action to empty the cart

// Defining the Checkout component
function Checkout() { 
  const dispatch = useDispatch(); // Getting the dispatch function from Redux
  const cart = useSelector((state) => state.cart); // Getting the 'cart' state from Redux

  // Function to handle deselecting all items in the cart
  const handleDeselectClick = () => {
    dispatch(emptyCart()); // Dispatching the 'emptyCart' action to clear the cart
  };

  // Rendering the component's UI
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* Adding a link to an external LinkedIn profile */}
        <a
          href="http://www.linkedin.com/in/charles-k-okoye/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Displaying an image */}
          <img
            src={Ad}
            alt="Are you looking for a Developer"
            className="checkout__ad"
          />
        </a>

        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          {/* Button to trigger the 'handleDeselectClick' function */}
          <button onClick={handleDeselectClick}>Deselect all items</button>
        </div>

        <div className="checkout__products">
          {/* Mapping through items in the 'cart' and rendering CheckoutProduct component */}
          {cart.map((item, index) => 
            <CheckoutProduct
              id={item.id}
              cartId={index}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          )}
        </div>
      </div>

      <div className="checkout__right">
        {/* Displaying the Subtotal component */}
        <Subtotal />
      </div>
    </div>
  );
}

// Exporting the Checkout component
export default Checkout;
