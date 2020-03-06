import React from "react";
import Forms from "../components/forms";

const SignIn = () => {
  return (
    <div className="container">
      <div className="main--signin-wrapper">
        <div className="signin-content-ft">
          <h3>SIGN IN TO YOUR ACCOUNT</h3>
          <p>
            Welcome to the Patagonia surfboards. If you had an existing account
            with us, and you can't remember the password you will need to reset
            it by simply selecting 'Forgot Your Password?' below.
          </p>
          <Forms type={"sign-in"} />
        </div>
        <CreateAccount showBtn={true} />
      </div>
    </div>
  );
};

export default SignIn;

export const CreateAccount = ({ showBtn }) => {
  return (
    <div className="signin-content-sec">
      <h3>CREATE AN ACCOUNT</h3>
      <p>This will allow you to:</p>
      <ul>
        <li>Save billing and shipping details for faster checkout.</li>
        <li>
          Complete your surfer profile to receive Patagonia's news and product
          updates.
        </li>
        <li>Archive purchases and order history</li>
        <li>Register purchased surfboards and warranties</li>
      </ul>
      {!!showBtn && <button>CREATE ACCOUNT</button>}
    </div>
  );
};
