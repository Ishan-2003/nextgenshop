import React, { useState } from "react";
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Button from '@mui/material/Button';
import CustomInput from "../Components/CustomInput";
// import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { registerUser } from "../User/UserSlice";

const Login = () => {
  // const [variant, setvariant] = useState("outlined");
  const [variant2, setvariant2] = useState("outlined");
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Required'),
      lastname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last Name Required'),
      email: Yup.string().email('Invalid email address').required('Email Required'),
      mobile: Yup.string().required('Mobile number Required'),
      password: Yup.string().required('Password required')
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(registerUser(values))
    },
  });
  const dispatch = useDispatch();

  return (
    <>

      <MetaTitle title="Sign Up" />
      <Template title="Sign Up" />
      <div className="py-5 login-wrapper" style={{ minHeight: "100vh" }}>

        <div className="my-5 bg-white rounded-3 mx-auto p-4 login-inner-wrapper">
          <h3 className="text-center title">Sign Up</h3>
          <form action="" style={{ display: "flex", flexDirection: "column" }} onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="first Name"
              id="firstname"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange('firstname')}
              onBlur={formik.handleBlur('firstname')}
            />
            {(formik.touched.firstname && formik.errors.firstname) ? (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>{formik.errors.firstname}</div>
            ) : null}
            <CustomInput
              type="text"
              label="last Name"
              id="lastname"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange('lastname')}
              onBlur={formik.handleBlur('lastname')}
            />
            {(formik.touched.lastname && formik.errors.lastname) ? (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>{formik.errors.lastname}</div>
            ) : null}
            <CustomInput
              type="email"
              label="Email Address"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
            {(formik.touched.email && formik.errors.email) ? (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>{formik.errors.email}</div>
            ) : null}

            <CustomInput
              type="tel"
              label="Mobile Number"
              id="mobile"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange('mobile')}
              onBlur={formik.handleBlur('mobile')}
            />
            {(formik.touched.mobile && formik.errors.mobile) ? (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>{formik.errors.mobile}</div>
            ) : null}

            <CustomInput
              type="password"
              label="Password"
              id="pass"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            {(formik.touched.password && formik.errors.password) ? (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>{formik.errors.password}</div>
            ) : null}
            <div className="Button-wrapper">
              <Button
                className="px-3 py-2 text-black signup-color"
                type="submit"
                variant={variant2}
                onMouseOver={(e) => { setvariant2("contained"); }}
                onMouseLeave={(e) => { setvariant2("outline"); }}
              >
                Sign Up
              </Button>


            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
