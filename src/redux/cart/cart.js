//this is cart reducer
// Importing all action types from the '../actionTypes' module.
import * as actionType from '../actionTypes';   

// Defining the initial state of the 'cart' reducer as an empty array.
const initialState = [];

// Creating the 'cart' reducer function which takes the 'state' and 'action' as arguments.
const cart = (state = initialState, action) => {
  // Using a switch statement to handle different action types.
  switch (action.type) {
    // If the action type is 'ADD_TO_CART':
    case actionType.ADD_TO_CART:
      // Returning a new array that includes all the existing items in 'state' and the new item from the action payload.
      return [...state, action.payload.item];

    // If the action type is 'REMOVE_FROM_CART':
    case actionType.REMOVE_FROM_CART:
      // Returning a new array by filtering the items in 'state', excluding the item with the index specified in the action payload.
      return state.filter((item, itemIndex) => itemIndex !== action.payload.id);

    // If the action type is 'EMPTY_CART':
    case actionType.EMPTY_CART:
      // Returning an empty array to clear the cart.
      return [];

    // If the action type doesn't match any of the above cases:
    default:
      // Returning the current state as is, since the action doesn't affect the cart.
      return state;
  }
}

// Exporting the 'cart' reducer function to be used in the application.
export default cart;
