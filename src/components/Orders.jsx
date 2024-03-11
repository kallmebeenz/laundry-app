import React, { useEffect, useState } from "react";
import "../styles/Orders.css";
import { useDispatch, useSelector } from "react-redux"; 
import Order from "./Order";
import { deleteUserOrders, setUser, updateUserOrders } from "../redux/actions";

// Define a functional component called Orders
function Orders() {
  // Utilize the useSelector hook to retrieve the user state from the Redux store
  const user = useSelector((state) => state.user);

  // Utilize the useSelector hook to retrieve the userInfo state from the Redux store
  const userInfo = useSelector((state) => state.userInfo);

  // Initialize a state variable named 'orders' using the useState hook, with an empty array as the initial value
  const [orders, setOrders] = useState([]);

  // Access the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Set up an effect that runs when the component mounts or when 'user' or 'userInfo' changes
  useEffect(() => {
    // Check if the 'user' object is truthy (not null or undefined)
    if (user) {
      // Retrieve the orders associated with the user from local storage using their unique ID (uid)
      const extStoreOrders = JSON.parse(localStorage.getItem(`charles_amazon_clone_user_${user.uid}`)) || {};

      // Extract the 'orders' array from the retrieved data, or use an empty array if not present
      const orders = extStoreOrders.orders || [];

      // Compare the length of locally stored orders with the length of orders in userInfo
      if (extStoreOrders.length < userInfo.orders.length) {
        // Update the locally stored user data with the current 'userInfo' using their uid as the key
        localStorage.setItem(
          `charles_amazon_clone_user_${user.uid}`,
          JSON.stringify(userInfo)
        );

        // Set the 'orders' state with the retrieved 'orders' array
        setOrders(orders);
      }
    }
  }, [user, userInfo]);

  // Set up another effect that runs when 'user' or 'orders' change
  useEffect(() => {
    // Check if the 'user' object is truthy
    if (user) {
      // Dispatch an action to update the user's orders in the Redux store
      dispatch(updateUserOrders(orders));
    } else {
      // If 'user' is falsy (null or undefined), reset 'orders' to an empty array
      setOrders([]);
      // Dispatch an action to delete the user's orders from the Redux store
      dispatch(deleteUserOrders());
    }
  }, [user, orders]);

  // Return JSX elements representing the UI of the component
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      
      <div className="orders__order">
        {/* Display a message if the user is not authenticated */}
        {!user && "Sign In to see your orders"}
        {/* Display a message if the user is authenticated but has no orders */}
        {user && !orders.length && "Currently no orders"}
        {/* Map through the 'orders' array and render an 'Order' component for each order */}
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

// Export the Orders component as the default export
export default Orders;
