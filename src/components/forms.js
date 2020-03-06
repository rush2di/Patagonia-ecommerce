import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Forms = ({ type }) => {
  if (type === "sign-in") {
    const mapPropsToValues = ({ email, password, remember }) => {
      return {
        email: email || "",
        password: password || "",
        remember: remember || false
      };
    };

    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      remember: Yup.boolean()
    });

    const handleSubmit = (values, { resetForm, setSubmitting }) => {
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, 1500);
    };

    const FormikSignIn = withFormik({
      mapPropsToValues,
      validationSchema,
      handleSubmit
    })(SignIn);

    return <FormikSignIn />;
  } else if (type === "sign-up") {
    const mapPropsToValues = ({
      firstname,
      lastname,
      email,
      password,
      repassword
    }) => {
      return {
        firstname: firstname || "",
        lastname: lastname || "",
        email: email || "",
        password: password || "",
        repassword: repassword || ""
      };
    };

    const validationSchema = Yup.object().shape({
      firstname: Yup.string()
        .min(2)
        .required("Firstname is required"),
      lastname: Yup.string()
        .min(2)
        .required("Lastname is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      repassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Please confirm your password")
    });

    const handleSubmit = (values, { resetForm, setSubmitting }) => {
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, 1500);
    };

    const FormikSignUp = withFormik({
      mapPropsToValues,
      validationSchema,
      handleSubmit
    })(SignUp);

    return <FormikSignUp />;
  }
};

const SignIn = ({ errors, touched, isSubmitting }) => {
  return (
    <Form className="form">
      <label>EMAIL</label>
      <Field type="email" name="email" />
      <div>{touched.email && errors.email && <p>{errors.email}</p>}</div>
      <label>PASSWORD</label>
      <Field type="password" name="password" />
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <a href="/#">FORGOT YOUR PASSWORD?</a>
      <label>
        <Field type="checkbox" name="remember" />
        Remember Me
      </label>
      <button disabled={isSubmitting} type="submit">
        Sign In
      </button>
    </Form>
  );
};

const SignUp = ({ errors, touched, isSubmitting }) => {
  return (
    <Form className="form">
      <label>FIRSTNAME</label>
      <Field type="text" name="firstname" />
      <div>
        {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
      </div>
      <label>LASTNAME</label>
      <Field type="text" name="lastname" />
      <div>
        {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
      </div>
      <label>EMAIL</label>
      <Field type="email" name="email" />
      <div>{touched.email && errors.email && <p>{errors.email}</p>}</div>
      <label>PASSWORD</label>
      <Field type="password" name="password" />
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <label>CONFIRM PASSWORD</label>
      <Field type="password" name="repassword" />
      <div>
        {touched.repassword && errors.repassword && <p>{errors.repassword}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">
        Sign Up
      </button>
    </Form>
  );
};

export default Forms;
