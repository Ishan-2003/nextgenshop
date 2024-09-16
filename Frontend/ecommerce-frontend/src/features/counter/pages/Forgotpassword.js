import React, { useState } from "react";
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Button from '@mui/material/Button';
import CustomInput from "../Components/CustomInput";
import { useNavigate } from "react-router-dom";


const Forgotpassword = () => {
    const [variant, setvariant] = useState("outlined");
    const [variant2, setvariant2] = useState("outlined");
    const navigate = useNavigate();
    return (
        <>

            <MetaTitle title="Forgot Password" />
            <Template title="Forgot Password" />
            <div className="py-5 login-wrapper" style={{ minHeight: "100vh" }}>

                <div className="my-5 bg-white rounded-3 mx-auto p-4 login-inner-wrapper">
                    <h3 className="text-center">Forgot Password</h3>
                    <p className="text-center">we will mail you password reset link</p>
                    <form action="" style={{ display: "flex", flexDirection: "column" }}>
                        <CustomInput
                            type="text"
                            label="Email Address"
                            id="email"
                            name="email"
                        />
                        <div className="Button-wrapper">
                            <Button
                                className="px-3 py-2 text-black login-color"
                                type="submit"
                                variant={variant}
                                onMouseOver={(e) => { console.log(e); setvariant("contained") }}
                                onMouseLeave={(e) => { setvariant("outline"); }}
                                onClick={()=>{navigate('/reset-password')}}
                            >
                                Submit
                            </Button>

                            <Button
                                className="px-3 py-2 text-black signup-color"
                                type="submit"
                                variant={variant2}
                                onMouseOver={(e) => { setvariant2("contained"); }}
                                onMouseLeave={(e) => { setvariant2("outline"); }}
                                onClick={()=>{navigate('/login')}}

                            >
                                Cancel
                            </Button>


                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Forgotpassword;
