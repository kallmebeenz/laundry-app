// This function takes a price and an optional type parameter. It splits the price into main and decimal parts,
// then returns either the main part or the decimal part based on the provided type.
export const getPrice = (price, type = "main") => {
  // Splitting the price into main and decimal parts using the dot as a separator.
  const [main, decimal] = price.split(".");

  // Checking the type parameter to decide which part of the price to return.
  if (type === "decimal") {
    // If the type is "decimal", return the decimal part.
    return decimal;
  } else {
    // If the type is not "decimal", return the main part.
    return main;
  }
};

// This function takes a numeric rating as input and converts it into an array of star icons based on a specific logic.
export const renderRating = (num) => {
  // Define a function called renderRating that takes a single argument 'num'.

  let rawRating = num;
  // Create a variable 'rawRating' and initialize it with the value of 'num'.
  
  if (!rawRating) rawRating = 1;
  // If 'rawRating' is falsy (undefined, null, 0, etc.), set it to 1.

  let convertedRating = Math.floor((rawRating / 2) * 10);
  // Calculate 'convertedRating' by dividing 'rawRating' by 2 and multiplying by 10, then rounding down.

  let remainder = convertedRating % 10;
  // Calculate the remainder of 'convertedRating' when divided by 10.

  convertedRating -= remainder;
  // Subtract the remainder from 'convertedRating'.

  let stars = new Array(convertedRating / 10).fill("BsStarFill").join(",");
  // Create an array of stars by filling it with "BsStarFill" repeated 'convertedRating / 10' times, then join the array with commas.
  
  remainder === 0
    ? (remainder = 0)
    : remainder > 5
    ? (remainder = 10)
    : (remainder = 5);
  // Depending on the value of 'remainder', adjust it: if 0, keep it 0; if greater than 5, set it to 10; otherwise, set it to 5.

  convertedRating += remainder;
  // Add the adjusted 'remainder' back to 'convertedRating'.

  convertedRating /= 10;
  // Divide 'convertedRating' by 10.

  if (remainder) stars += ",BsStarHalf";
  // If 'remainder' is non-zero, add "BsStarHalf" to the 'stars' string.

  stars = stars.split(",");
  // Split the 'stars' string by commas to create an array of star values.

  if (stars.length < 5) {
    const remainder = new Array(5 - stars.length);
    // Create an array called 'remainder' with a length that makes the total stars 5.

    remainder.fill("BsStar");
    // Fill the 'remainder' array with "BsStar".

    stars = [...stars, ...remainder];
    // Concatenate the 'stars' array with the 'remainder' array.
  }

  return stars;
  // Return the 'stars' array as the result of the function.
};

// Creating a formatter object for formatting numbers as currency in USD.
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// This function calculates the total price of items in a cart array.
// This function calculates the total price of items in a shopping cart.
export const getTotalPrice = (cart) =>
  // The function takes a 'cart' array as input, which contains items to be purchased.

  cart.reduce((totalPrice, item) => (totalPrice += parseFloat(item.price)), 0);
  // The 'reduce' function is used to iterate over each item in the 'cart' array and accumulate a total price.
  // It takes two parameters:
  // 1. A callback function that runs for each item in the array.
  //    - This callback function takes two parameters:
  //      - 'totalPrice': The current accumulated total price.
  //      - 'item': The current item being processed.
  //    - Inside the callback, the price of the current item is parsed to a 
  //      floating-point number using 'parseFloat'.
  //    - This parsed price is added to the 'totalPrice'.
  // 2. The initial value of the accumulator, which is set to 0.

  // Finally, the total price of all items in the cart is returned as the result of the 'reduce' function.

// This function takes a Firebase error message and extracts a user-friendly error description from it.
export const getError = (firebaseErr) => {
  // Checking if the error message contains a specific pattern related to Firebase authentication errors.
  if (firebaseErr.includes("Firebase: Error (auth/")) {
    // Extracting the relevant error code, removing dashes, and converting to a user-friendly format.
    return firebaseErr
      .replace("Firebase: Error (auth/", "")
      .replace(").", "")
      .split("-")
      .join(" ");
  }
};
