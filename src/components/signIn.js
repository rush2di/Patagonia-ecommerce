import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const Formy = props => {
  const formValidate = values => {
    const errors = {};
    const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.email) {
      errors.email = "Please fill in the email field";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email adress";
    }
    return errors;
  };
  const handleSubmit = (values, setSubmitting) => {
    console.log("submited");
  };

  return (
    <Formik
      initalValues={{ email: "", password: "" }}
      validate={values => formValidate(values)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>EMAIL</div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <div>PASSWORD</div>
          <ErrorMessage name="password" component="div" />
          <a href="/#">FORGOT YOUR PASSWORD?</a>
          <div>
            <input type="checkbox" name="remember" />
            Remember Me
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
