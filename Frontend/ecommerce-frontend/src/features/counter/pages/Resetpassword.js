import React, { useState } from "react";
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Button from '@mui/material/Button';
import CustomInput from "../Components/CustomInput";
import { Link, useNavigate } from "react-router-dom";


const Resetpassword = () => {
    const [variant, setvariant] = useState("outlined");
    const navigate = useNavigate();
    return (
      <>
  
        <MetaTitle title="Login" />
        <Template title="Login" />
        <div className="py-5 login-wrapper" style={{ minHeight: "100vh" }}>
  
          <div className="my-5 bg-white rounded-3 mx-auto p-4 login-inner-wrapper">
            <h3 className="text-center">Reset Your Password</h3>
            <form action="" style={{ display: "flex", flexDirection: "column" }}>
              <CustomInput
                type="password"
                label="Enter new password"
                id="email"
                name="new_password"
              />
              <CustomInput
                type="password"
                label="Verify new password"
                id="email"
                name="new_password"
              />
              <div className="Button-wrapper">
                <Button
                  className="px-3 py-2 text-black login-color"
                  type="submit"
                  variant={variant}
                  onMouseOver={(e) => {console.log(e) ;setvariant("contained")}}
                  onMouseLeave={(e) => { setvariant("outline"); }}
                  onClick={()=>navigate('/login')}
                >
                  Reset
                </Button>
  
  
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default Resetpassword
