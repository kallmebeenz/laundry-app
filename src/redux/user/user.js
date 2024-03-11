//this is user reducer
// Import all exported items from the '../actionTypes' module and store them in an object called 'actionType'.
import * as actionType from '../actionTypes';

// Declare a constant variable called 'initialState' and assign it the value of null.
const initialState = null;

// Declare a function called 'user' that takes two parameters: 'state' (defaulted to 'initialState') and 'action'.
const user = (state = initialState, action) => {
  // Begin a switch statement based on the value of 'action.type'.
  switch (action.type) {

    // If 'action.type' is equal to the value stored in 'actionType.SET_USER':
    case actionType.SET_USER:
      // Return the 'user' property from the 'payload' object inside the 'action' parameter.
      return action.payload.user;

    // If none of the above cases match:
    default:
      // Return the current state without any changes.
      return state;
  }
}

// Export the 'user' function as the default export of this module.
export default user;
