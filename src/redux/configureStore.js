// Importing necessary modules and components
import cart from "./cart/cart"; // Importing the 'cart' reducer from the 'cart' directory
import user from "./user/user"; // Importing the 'user' reducer from the 'user' directory
import userInfo from "./userInfo/userInfo"; // Importing the 'userInfo' reducer from the 'userInfo' directory
import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Importing functions from Redux Toolkit for store configuration
import thunk from 'redux-thunk'; // Importing the 'thunk' middleware for handling asynchronous actions

// Combining the imported reducers into a single 'rootReducer'
const rootReducer = combineReducers({
  cart,       // Adding the 'cart' reducer to the combined reducer
  user,       // Adding the 'user' reducer to the combined reducer
  userInfo, 
   // Adding the 'userInfo' reducer to the combined reducer
});

// Configuring the Redux store with the combined 'rootReducer'
const store = configureStore({
  reducer: rootReducer,   // Providing the combined 'rootReducer' to the store configuration
  middleware: [thunk],    // Adding the 'thunk' middleware to the store's middleware chain
});

// Exporting the configured Redux store
export default store;  // Making the 'store' variable available for other parts of the application
