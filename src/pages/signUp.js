import React from "react";
import { CreateAccount } from "./signIn";
import Forms from "../components/forms";

const SignUp = () => {
  return (
    <div className="container">
      <div className="main--signup-wrapper">
        <div className="main--signup-content">
          <CreateAccount />
          <p className="main--signup-content-note">
            Please note that all fields are required
          </p>
          <Forms type={"sign-up"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
