// DisplayDetails.js
import React from 'react';
import Checkout from './Checkout';
import { useSelector } from 'react-redux';
import Payment from './Payment';

const DisplayDetails = () => {
  const deliveryDetails = useSelector(state => state.userInfo.deliveryDetails);

  return (
    

    <><div>
      <h1>Delivery Details</h1>
      <p>Phone Number: {deliveryDetails.phoneNumber}</p>
      <p>Address: {deliveryDetails.address}</p>
      <p>Additional Info: {deliveryDetails.additionalInfo}</p>
      <p>Region: {deliveryDetails.region}</p>
      <p>City: {deliveryDetails.city}</p>
    </div><Checkout /></>

  );

  
};

export default DisplayDetails;
