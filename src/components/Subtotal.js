//this component is rendered inside checkout page at the RHS...it shows the subtotal of all the products. 
import React, { useState } from "react"; // Import React and useState from the 'react' library.
import "../styles/Subtotal.css"; // Import the CSS file for styling.
import * as utils from "../logic/utils"; // Import utility functions from the 'utils' module.
import { useSelector } from "react-redux"; // Import the 'useSelector' hook from 'react-redux'.
import { useNavigate } from "react-router-dom"; // Import the 'useNavigate' hook from 'react-router-dom'.

function Subtotal() { // Define a React functional component named 'Subtotal'.
  const navigate = useNavigate(); // Create a 'navigate' function using the 'useNavigate' hook.
  const cart = useSelector((state) => state.cart); // Get the 'cart' state using the 'useSelector' hook.
  const user = useSelector((state) => state.user); // Get the 'user' state using the 'useSelector' hook.

  const [error, setError] = useState(''); // Initialize a state variable 'error' and a corresponding 'setError' function using the 'useState' hook.

  return (
    <div className="subtotal"> {/* Start of the JSX code for the Subtotal component. */}
      <div className="subtotal__title"> {/* Start of a div for the subtotal title. */}
        Subtotal ({!cart.length ? 'empty' : `${cart.length} ${cart.length === 1 ? 'item' : 'items'}` }):&nbsp;
        {/* Display the subtotal title, including the number of items in the cart using a ternary operator. */}
        <strong>
          {utils.formatter.format(  
            cart.reduce(
              (totalPrice, item) => (totalPrice += parseFloat(item.price)),
              0
            )
          )}
        </strong> {/* Display the formatted total price of items in the cart using utility functions. */}
      </div> {/* End of the div for the subtotal title. */}
      <div className="subtotal__gift"> {/* Start of a div for the gift option. */}
        <input type="checkbox" name="gift" /> {/* Display a checkbox input for gift option. */}
        <span>This order contains a gift</span> {/* Display a text indicating the gift option. */}
      </div> {/* End of the div for the gift option. */}
      <button
        onClick={() => {
          if (!cart.length) { // Check if the cart is empty.
            setError('Cart is empty'); // If cart is empty, set the error message.
            return;
          }
          user ? navigate("/payment") : setError('Please sign in first'); // If user is logged in, navigate to payment; otherwise, set the sign-in error.
        }}
        className="subtotal__button"
        type="button"
      >
        Proceed to checkout
      </button> {/* Display a button for proceeding to checkout. */}
      <div className="subtotal__error">
        {error} {/* Display the error message, if any. */}
      </div> {/* Display a div for error messages. */}
    </div> 
  );
}

export default Subtotal; // Export the Subtotal component as the default export.
