import React, { useState } from "react";
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Button from '@mui/material/Button';
import CustomInput from "../Components/CustomInput";
import { Link } from "react-router-dom";


const Login = () => {
  const [variant, setvariant] = useState("outlined");
  const [variant2, setvariant2] = useState("outlined");

  return (
    <>

      <MetaTitle title="Login" />
      <Template title="Login" />
      <div className="py-5 login-wrapper" style={{ minHeight: "100vh" }}>

        <div className="my-5 bg-white rounded-3 mx-auto p-4 login-inner-wrapper">
          <h3 className="text-center title">Login</h3>
          <p className="text-center">Login to your account to continue.</p>
          <form action="" style={{ display: "flex", flexDirection: "column" }}>
            <CustomInput
              type="text"
              label="Email Address"
              id="email"
              name="email"
            />

            <CustomInput
              type="password"
              label="Password"
              id="pass"
              name="password"

            />
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
