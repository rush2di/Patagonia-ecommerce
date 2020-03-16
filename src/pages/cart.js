import React from "react";
import { Link } from "react-router-dom";
import express from "../assets/icons/americanExpress.svg";
import amex from "../assets/icons/amex.svg";
import visa from "../assets/icons/visa.svg";
import paypal from "../assets/icons/paypal.svg";

const Cart = () => {
  const cards = [express, paypal, amex, visa];
  const cardsMapper = cards.map(card => <img src={card} alt="" />);

  return (
    <div className="main--cart container">
      <h3>SHOPPING CART</h3>
      <div className="main--cart-msg">
        <div className="msg-box">
          <span className="main-msg">Your Shopping Cart is Empty</span>
          <p>Nothing to see here.</p>
          <p>Check out your wishlist items.</p>
          <button>VIEW WISH LIST</button>
          <Link to="/shop/surfboards">Continue Shopping</Link>
        </div>
      </div>
      <div className="main--cart-footer">
        <div className="footer-box">
          <h3>Contact Us</h3>
          <ul>
            <li>8:00am - 6:00pm MST, Monday-Friday</li>
            <li>877-808-8154</li>
            <li>surfercare@patagonia.com</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>Helpful Links</h3>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Return Policy</li>
            <li>Warranty Policy</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>We Accept</h3>
          <div className="flex-cards">{cardsMapper}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
