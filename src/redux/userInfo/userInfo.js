//this is user info reducer
// We're importing all exports from the "actionTypes" module and giving it an alias "actionType".
import * as actionType from "../actionTypes";

// We're setting the initial state of the "userInfo" to an empty object.
const initialState = {
  deliveryDetails: {
    phoneNumber: '',
    address: '',
    additionalInfo: '',
    region: '',
    city: ''
  }

};

// This is a function called "userInfo" that takes two arguments: "state" and "action".
// It's responsible for handling changes to the user information in the Redux store.
const userInfo = (state = initialState, action) => {
  // We're starting a switch statement based on the "action.type" value.
  switch (action.type) {
    // If the action type is "ADD_ORDER":
    case actionType.ADD_ORDER:
      // We're checking if the "orders" property doesn't exist in the current state.
      // If it doesn't exist, we're creating a new state object with an "orders" array
      // containing the order from the action payload.
      // If it does exist, we're creating a new state object with the new order added
      // to the beginning of the existing orders array.
      return !state.orders
        ? { ...state, orders: [action.payload.order] }
        : { ...state, orders: [action.payload.order, ...state.orders] };
      
    // If the action type is "UPDATE_USER_ORDERS":
    case actionType.UPDATE_USER_ORDERS:
      // We're creating a new state object with the "orders" property updated to
      // the orders array from the action payload.
      return { ...state, orders: action.payload.orders };

      
      case 'SET_DELIVERY_DETAILS':
          return {
            ...state,
            deliveryDetails: action.payload
          };
    
      
      
    // If the action type is "DELETE_USER_ORDERS":
    case actionType.DELETE_USER_ORDERS:
      // We're creating a new state object with an empty "orders" array, effectively
      // deleting all user orders.
      return { ...state, orders: [] };
      
    // If the action type doesn't match any of the above cases:
    default:
      // We're returning the current state as is, without any changes.
      return state;
  }
};

// We're exporting the "userInfo" function as the default export from this module.
export default userInfo;
