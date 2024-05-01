// DeliveryDetailsForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/DeliveryDetailsForm.css";
import "../styles/CheckoutProduct.css";
import { useNavigate } from 'react-router-dom'; // Import useHistory hook to navigate to another page
import { setDeliveryDetails } from '../redux/actions';

const DeliveryDetailsForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();// Initialize useHistory hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      phoneNumber,
      address,
      additionalInfo,
      region,
      city
    };
    dispatch(setDeliveryDetails(details));
     // Navigate to the display details page
     navigate('/display-details');
  };

  return (
    
    <div className="input_form">
    <form onSubmit={handleSubmit}>
        
      {/* Input fields */}
    <h3>DELIVERY INFORMATION</h3>

      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Delivery Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Additional Information:
        <input
          type="text"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </label>
      <label>
        Region:
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
      
  );

  
};



export default DeliveryDetailsForm;
