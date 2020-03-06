import React from "react";
import Formy from "./form";

const SignIn = () => {
  return (
    <div className="container">
      <div className="main--signin-wrapper">
        <div className="signin-content-ft">
          <h3>SIGN IN TO YOUR ACCOUNT</h3>
          <p>
            Welcome to the new Brand. If you had an existing account with us,
            you will need to reset your password to use it. Simply select
            'Forgot Your Password?' below to do so.
          </p>
          <Formy />
        </div>
        <div className="signin-content-sec">
          <h3>CREATE AN ACCOUNT</h3>
          <p>This will allow you to:</p>
          <ul>
            <li>Save billing and shipping details for faster checkout.</li>
            <li>
              Complete your surfer profile to receive Patagonia's news and
              product updates.
            </li>
            <li>Archive purchases and order history</li>
            <li>Register purchased surfboards and warranties</li>
          </ul>
          <button>CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
