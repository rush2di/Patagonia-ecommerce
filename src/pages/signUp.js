import React from "react";
import { CreateAccount } from "./signIn";
import Forms from "../components/forms";

const SignUp = () => {
  return (
    <div className="container">
      <div className="main--signin-wrapper">
        <div className="signin-content">
          <CreateAccount />
          <p>Please note that all fields are required</p>
          <Forms type={"sign-up"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
