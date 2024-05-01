//this component show individual home products 
//This component deals with Passing of Products as prop to the product component and setting of "item added alert"
import React, { useEffect, useState } from "react";
import background from "../images/home-bg.jpg";
import DeliveryDetailsForm from"./DeliveryDetailsForm";
import background2 from "../images/home-bg-2.jpg";
import Main from "./Main";
import "../styles/Home.css";
import Product from "./Product"; 



// Images
import homeback from "../images/washing machine.jpg"
import teddy from "../images/teddy.jpg";
import caftan from "../images/Blare-Long-Caftan.jpg";
import ishiagu from "../images/Ishiagu.jpg";
import agbada from "../images/agbada.jpg";
import asooke from "../images/aso oke.jpg";
import blanket from "../images/blanket.jpeg";
import blazer from "../images/blazer.jpg";
import camisole from "../images/camisole.webp";
import cassock from "../images/cassock.jpg";
import collar from "../images/collar.webp";
import duvet from "../images/duvet.webp";
import gown from "../images/gown.jpg";
import iro from "../images/iro and buba.jpg";
import jelabiya from "../images/jelabiya.jpeg";
import raincoat from "../images/rain-coat-printfactory-lagos-nigeria.png";
import shorts from "../images/shorts.jpg";
import suit from "../images/suit-jacket.jpg";
import sweatshirt from "../images/sweat shirt.webp";

import { useSelector } from "react-redux";
function Home({ mediaWidth }) {
  // This function represents the Home component, which takes a prop called mediaWidth.

  // useSelector hook to access the 'cart' state from the Redux store.
  const cart = useSelector((state) => state.cart);

  // useState hook to manage the 'alert' state, which shows a message when an item is added to the cart.
  const [alert, setAlert] = useState(null);

  // Another piece of state to store the timeout ID.
  const [timeOutID, setTimeOutID] = useState(null);

  // useEffect hook to perform side effects based on changes in the 'cart' state.
  useEffect(() => {
    // When items are added to the cart, set the 'alert' message to "Item added to cart".
    if (cart.length) {
      setAlert("Item added to cart");

      // If a timeout ID exists (meaning a timeout is already set), clear it.
      if (timeOutID) clearTimeout(timeOutID);

      // Set a new timeout to clear the 'alert' message after 1000 milliseconds (1 second).
      const TID = setTimeout(() => {
        setAlert(null); // Clear the 'alert' message.
      }, 1000);
      setTimeOutID(TID); // Store the new timeout ID.
    }
  }, [cart]); // This effect depends on changes in the 'cart' state.

  // The component's UI rendering starts here.
  return (
    <div className="home">
      <div className="home__container">
        {/* Display an image based on the 'mediaWidth' prop value */}
        <img src={mediaWidth > 840 ? homeback : background2} alt="home-background" className="home__image" />

        {/* Render a row of Product components */}
        

        <div className="home__row">
          <Product
            key="537340"
            id="537340"
            image={ishiagu}
            title="ishiagu"
            price="1299.99"
            rating={5}
          />
          <Product
            key="537341"
            id="537341"
            image={agbada}
            title="agbada"
            price="599.99"
            rating={5}
          />
          <Product
            key="537342"
            id="537342"
            image={asooke}
            title="Aso oke"
            price="139.00"
            rating={4.5}
          />
                 
            <Product
            key="537343"
            id="537343"
            image={blanket}
            title="Blanket"
            price="139.00"
            rating={4.5}
          />     

        </div>

        <div className="home__row">
          <Product
            key="537344"
            id="537344"
            image={blazer}
            title="Blazer"
            price="1299.99"
            rating={5}
          />
          <Product
            key="537345"
            id="537345"
            image={camisole}
            title="Camisole"
            price="599.99"
            rating={5}
          />
          <Product
            key="537346"
            id="537346"
            image={cassock}
            title="Cassock"
            price="139.00"
            rating={4.5}
          />
                 
            <Product
            key="537347"
            id="537347"
            image={collar}
            title="Collar"
            price="139.00"
            rating={4.5}
          />     
     </div>

     <div className="home__row">
          <Product
            key="537348"
            id="537348"
            image={duvet}
            title="Duvet"
            price="1299.99"
            rating={5}
          />
          <Product
            key="537349"
            id="537349"
            image={gown}
            title="Gown"
            price="599.99"
            rating={5}
          />
          <Product
            key="537350"
            id="537350"
            image={iro}
            title="Iro"
            price="139.00"
            rating={4.5}
          />
                 
            <Product
            key="537351"
            id="537351"
            image={jelabiya}
            title="Jelabiya"
            price="139.00"
            rating={4.5}
          />     
      </div>
 
      <div className="home__row">
          <Product
            key="537352"
            id="537352"
            image={raincoat}
            title="Raincoat"
            price="1299.99"
            rating={5}
          />
          <Product
            key="537353"
            id="537353"
            image={shorts}
            title="Shorts"
            price="599.99"
            rating={5}
          />
          <Product
            key="537354"
            id="537354"
            image={suit}
            title="Suit"
            price="139.00"
            rating={4.5}
          />
                 
            <Product
            key="537355"
            id="537355"
            image={sweatshirt}
            title="Sweatshirt"
            price="139.00"
            rating={4.5}
          />     
            </div>

            <div className="home__row">
            <Product
            key="537356"
            id="537356"
            image={teddy}
            title="Teddy"
            price="814.99"
            rating={4.5}   
          />
          <Product
            key="537357"
            id="537357"
            image={caftan}
            title="Caftan"
            price="599.99"
            rating={4.5}
          />

            </div>
       

        <div className="home__row">
          {/* Display product information using the Product component */}
          {/* Each Product component represents a product card */}
         
                <DeliveryDetailsForm/>
        <Main/>

        </div>

      </div>
      
      {/* Check if the width of the media is greater than 840 pixels.
  // If the condition is met, create a div element in the HTML with a specific class.
  // The class name of the div will depend on the value of the 'alert' variable.
  // If 'alert' is equal to "Item added to cart", add the class "active" to the <div>,
  // otherwise, just use the base class name.
  // This <div> will serve as an alert container.*/}


      {mediaWidth > 840 && (
        <div
          className={
            alert === "Item added to cart"
              ? "home__alert active"
              : "home__alert"
          }
        >
          {alert}
        </div>
      )}

      
    </div>
    
  );
}

export default Home;
