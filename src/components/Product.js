//This component deals with displaying or rendering product from Home and Adding items to CART
import React from "react"; // Importing the React library to use React components
import "../styles/Product.css"; // Importing the CSS file for styling
import * as utils from "../logic/utils"; // Importing utility functions from the utils module
import Star from "./Star"; // Importing the Star component from the "Star.js" file
import { useDispatch } from "react-redux"; // Importing the useDispatch hook from React Redux
import { addToCart } from "../redux/actions"; // Importing the addToCart action creator

function Product({ id, image, title, price, rating }) { // Defining a functional component named "Product" that takes props as parameters
  const dispatch = useDispatch(); // Using the useDispatch hook to get the Redux dispatch function

  const handleAddClick = () => { // Defining a function to handle the "Add to cart" button click event
    const item = {
      id,
      title,
      image,
      price,                        
      rating,
    };
    dispatch(addToCart(item)); // Dispatching the addToCart action with the selected item as payload
  };

  return (
    <div className="product"> {/* Starting the JSX for rendering the product */}
      <div className="product__img">
        <img src={image} alt=''/> {/* Displaying the product image */}
      </div>
      <div className="product__info">
        <p className="product__title">{title}</p> {/* Displaying the product title */}
        <div className="product__rating">
          {utils.renderRating(rating * 2).map((val, index) => (
            <Star key={index} text={val} /> // Rendering star components based on the calculated rating
          ))}
        </div>
        <p className="product__price">
          <span>$</span>
          <span>{utils.getPrice(price)}</span> {/* Displaying the integer part of the price */}
          <span>{utils.getPrice(price, "decimal")}</span> {/* Displaying the decimal part of the price */}
        </p>
      </div>
      <button type="button" onClick={handleAddClick}> {/* Adding an "Add to cart" button */}
        Add to cart
      </button>
    </div>
  );
}

export default Product; // Exporting the Product component as the default export
