import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Formy = ({ errors, touched, isSubmitting }) => {
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

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(Formy);
