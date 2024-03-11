//this is star rating component.
import React from "react";  // Import the React library for building components.

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";  // Import specific icons from the "react-icons/bs" library.

function Star({ text }) {  // Define a React functional component named "Star" that takes a prop named "text".
  // The component receives the "text" prop which should be a string representing the icon type.

  return text === "BsStarFill" ? <BsStarFill /> : text === "BsStarHalf" ? <BsStarHalf /> : <BsStar />;
  // Return a JSX element based on the value of the "text" prop.
  // If "text" is "BsStarFill", render a <BsStarFill /> component.
  // If "text" is "BsStarHalf", render a <BsStarHalf /> component.
  // Otherwise, render a <BsStar /> component.
}

export default Star;  // Export the "Star" component as the default export of this module.
