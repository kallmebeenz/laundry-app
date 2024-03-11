//this show all the information about the black navbar page which include logo,cart etc
import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../images/laund.webp";
import AmericaFlag from "../images/america-flag.png";
import shoppingCart from "../images/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { TbMenu2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase"; 
  
function Header({ mediaWidth }) {
  // Import necessary dependencies and modules
  const cart = useSelector((state) => state.cart); // Retrieve cart data from the application state
  const user = useSelector((state) => state.user); // Retrieve user data from the application state

  const navigate = useNavigate(); // Get a navigation function to programmatically navigate between pages

  const [mobileNav, setMobileNav] = useState(false); // Initialize mobile navigation state

  // Function to handle user authentication and navigation
  const handleAuthentication = () => {
    setMobileNav((prevState) => !prevState); // Toggle mobile navigation state
    if (mediaWidth <= 840) !user && navigate("/login"); // If screen width is small and user is not logged in, navigate to login
    if (user) auth.signOut(); // If user is logged in, sign them out
  };

  // Function to extract username from email
  const getUserName = (email) => email.split("@")[0];

  // Start rendering the header component
  return (
    <div className="header">
      <div className="header__container">
        {/* Toggle Menu Button (Visible on small screens) */}
        {mediaWidth <= 840 && (
          <TbMenu2
            className="header__toggleOpen"
            onClick={() => setMobileNav((prevState) => !prevState)}
          />
        )}

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="amazon" className="header__logo" />
        </Link>

        {/* Search Input (Visible on large screens) */}
        {mediaWidth > 840 && (
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <div className="header__searchIcon">
              <AiOutlineSearch />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="header__nav">
          {/* Language Option (Visible on large screens) */}
          {mediaWidth > 840 && (
            <div className="header__option">
              <span className="header__optionOne">English</span>
              <span className="header__optionTwo header__optionImg">
                <img src={AmericaFlag} alt="English" />
              </span>
            </div>
          )}

          {/* Sign In/Sign Out and User Info (Visible on large screens) */}
          {mediaWidth > 840 && (
            <Link to={!user && "/login"}>
              <div className="header__option" onClick={handleAuthentication}>
                <span className="header__optionOne">
                  Hello, {user ? getUserName(user.email) : "Guest"}
                </span>
                <span className="header__optionTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          )}

          {/* Orders/Returns Option (Visible on large screens) */}
          {mediaWidth > 840 && (
            <Link to="/orders">
              <div className="header__option">
                <span className="header__optionOne">Returns</span>
                <span className="header__optionTwo">& Orders</span>
              </div>
            </Link>
          )}

          {/* User Info and Login Button (Visible on small screens) */}
          {mediaWidth <= 840 && (
            <div className="header__mobileUser" onClick={() => !user && navigate('/login')}>
              <MdPersonOutline className="header__mobileUserIcon" />
              <span className="header__mobileUserName">
                {user ? getUserName(user.email) : "Guest"}
              </span>
            </div>
          )}
         <Link to="/checkout">
  {/* This is a link that wraps the shopping cart icon and count */}
  <div className="header__optionBasket">
    <div>
      {/* This div contains the count of items in the cart */}
      <div className="header__optionBasketCount">{cart.length}</div>
      {/* This is an image of a shopping cart */}
      <img
        src={shoppingCart}
        alt="shopping cart"
        className="header__basket"
      />
    </div>
    {/* This span displays the text "Cart" if media width is greater than 840 */}
    {mediaWidth > 840 && <span>Cart</span>}
  </div>
</Link>
{/* Closing the navigation section */}
</nav>
{/* Closing the navigation container */}
</div>


{/* THIS IS WHERE MOILE VIEW START */}
<div className="header__mobileContainer">
  {/* This section is for mobile view when the media width is 840 or less */}
  {mediaWidth <= 840 && (
    <div className="header__search">
      {/* This input field is for searching */}
      <input type="text" className="header__searchInput" />
      <div className="header__searchIcon">
        {/* This is a search icon */}
        <AiOutlineSearch />
      </div>
    </div>
  )}
</div>

{/* This section is for mobile navigation */}
{mediaWidth <= 840 && (
  <div
    className={
      mobileNav ? "header__mobileNav active" : "header__mobileNav"
    }
  >
    {/* This container holds the mobile navigation content */}
    <div
      className={
        mobileNav
          ? "header__mobileNavContainer active"
          : "header__mobileNavContainer"
      }
    >

      {/* This is where the 3 horizontal bar start */}
      {/* Mobile navigation header */}
      <div className="header__mobileNavHeader">
        <div className="header__mobileNavUser">
          {/* Display user's email or "Guest" */}
          <span>{user ? user.email : "Guest"}</span>
          {/* This is an icon for user */}
          <MdPersonOutline />
        </div>
        <p>
          {/* Display "Browse Amazon Clone" */}
          <span>Browse</span>
          <br />
          Amazon Clone
        </p>
      </div>

      {/* List of mobile navigation items */}
      <ul className="header__mobileNavItems">
        {/* Language option */}
        <li className="header__option header__mobileNavItem">
          <span className="header__optionOne">English</span>
          <span className="header__optionTwo header__optionImg">
            {/* Display the American flag image */}
            <img src={AmericaFlag} alt="" />
          </span>
        </li>

        {/* Returns and orders option */}
        <li
          className="header__option header__mobileNavItem"
          onClick={() => {
            navigate("/orders");
            setMobileNav((prevState) => !prevState);
          }}
        >
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </li>

        {/* Authentication option */}
        <li
          className="header__option header__mobileNavItem"
          onClick={handleAuthentication}
        >
          {/* Display user's name or "Sign In" */}
          <span className="header__optionOne">
            Hello, {user ? getUserName(user.email) : "Guest"}
          </span>
          <span className="header__optionTwo">
            {/* Display "Sign Out" or "Sign In" based on user's login state */}
            {user ? "Sign Out" : "Sign In"}
          </span>
        </li>
      </ul>
    </div>
    {/* Mobile navigation close button */}
    <div
      className={
        mobileNav ? "header__toggleClose active" : "header__toggleClose"
      }
      onClick={() => setMobileNav((prevState) => !prevState)}
    >
      {/* Display a close icon */}
      <CgClose />
    </div>
  </div>
)}

</div>
);
    }
    export default Header;
