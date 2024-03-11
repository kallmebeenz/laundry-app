import React from "react"; // We're importing the React library which helps us create and manage components.
import "../styles/Order.css"; // We're importing the CSS styles for the Order component.
import CheckoutProduct from "./CheckoutProduct"; // We're importing the CheckoutProduct component.

function Order({ order }) { // We're defining a React functional component named "Order" that takes a prop called "order".
  return ( // The start of the component's render function.
    <div className="order"> {/* We're creating a div element with a class "order" to style it. */}
      <h2>Order</h2> {/* We're adding a level 2 heading to display "Order". */}
      <p className="order__id"> {/* Paragraph with a class "order__id" for styling. */}
        <small>{order.order_id}</small> {/* We're displaying the order's ID using a smaller font. */}
      </p>
      <p>{order.created}</p> {/* We're displaying the order creation date and time. */}
      {/* We're mapping through items in the order's cart. */}
      {order.cart.map((item, index) => ( 
        <CheckoutProduct
          id={item.id} // Sending the product's ID as a prop to the CheckoutProduct component.
          cartId={index} // Sending the index as a prop to the CheckoutProduct component.
          title={item.title} // Sending the product's title as a prop to the CheckoutProduct component.
          image={item.image} // Sending the product's image URL as a prop to the CheckoutProduct component.
          price={item.price} // Sending the product's price as a prop to the CheckoutProduct component.
          rating={item.rating} // Sending the product's rating as a prop to the CheckoutProduct component.
        />
      ))}
      <p className="order__total"> {/* Paragraph with a class "order__total" for styling. */}
        Order Total:&nbsp; {/* Text to display "Order Total:" along with a non-breaking space. */}
        {order.amount} {/* Displaying the total order amount. */}
      </p>
    </div> // Closing div for the "order" class div.
  ); // End of the component's render function.
}

export default Order; // We're exporting the Order component to make it available for other parts of the application.
