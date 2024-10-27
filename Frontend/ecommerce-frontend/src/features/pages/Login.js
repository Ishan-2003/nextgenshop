import React, { useState } from "react";
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Button from '@mui/material/Button';
import CustomInput from "../Components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../User/UserSlice";


const Login = () => {
  const [variant, setvariant] = useState("outlined");
  const [variant2, setvariant2] = useState("outlined");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authstate = useSelector(state=>state.auth)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email Address Required'),
      password: Yup.string().required('Password required')
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(loginUser(values))
      // console.log('navigation');
      navigate('/')
    },
  });
  return (
    <>

      <MetaTitle title="Login" />
      <Template title="Login" />
      <div className="py-5 login-wrapper" style={{ minHeight: "100vh" }}>

        <div className="my-5 bg-white rounded-3 mx-auto p-4 login-inner-wrapper">
          <h3 className="text-center title">Login</h3>
          <p className="text-center">Login to your account to continue.</p>
          <form action="" style={{ display: "flex", flexDirection: "column" }} onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="Email Address"
              id="email"
              name="email"
              onChange = {formik.handleChange('email')}
              value = {formik.values.email}
            />
             {(formik.touched.email && formik.errors.email) ? (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>{formik.errors.email}</div>
            ) : null}
            <CustomInput
              type="password"
              label="Password"
              id="pass"
              name="password"
              onChange = {formik.handleChange('password')}
              value = {formik.values.password}
            />
             {(formik.touched.password && formik.errors.password) ? (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>{formik.errors.password}</div>
            ) : null}
            <div className="mb-3 text-end">
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="Button-wrapper">
              <Button
                className="px-3 py-2 text-black login-color"
                type="submit"
                variant={variant}
                onMouseOver={(e) => {console.log(e) ;setvariant("contained")}}
                onMouseLeave={(e) => { setvariant("outline"); }}
              >
                Login
              </Button>

              <Button
                className="px-3 py-2 text-black signup-color"
                type="submit"
                variant={variant2}
                onMouseOver={(e) => { setvariant2("contained"); }}
                onMouseLeave={(e) => { setvariant2("outline");}}
              >
              <Link to='/signup' style={{color:'black'}}>
                Sign Up
              </Link>
              </Button>


            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
