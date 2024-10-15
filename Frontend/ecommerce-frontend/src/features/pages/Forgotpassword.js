import React, { useState } from "react";
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Button from '@mui/material/Button';
import CustomInput from "../Components/CustomInput";
import { useNavigate } from "react-router-dom";
import { Height } from "@mui/icons-material";


const Resetpassword = () => {
    const [variant, setvariant] = useState("outlined");
    const navigate = useNavigate();
    return (
        <>

            <MetaTitle title="Forgot Password" />
            <Template title="Forgot Password" />
            <div className="py-5 login-wrapper" style={{ minHeight: "100vh" }}>

                <div className="my-5 bg-awhite rounded-3 mx-auto p-4 login-inner-wrapper">
                    <h3 className="text-center" style={{ fontSize: '1rem', color: '#8A8787' }}>Reset Your Password</h3>
                    <p style={{ margin: 'auto 4rem', fontSize: '0.9rem' }}>We will send a link to your Email id</p>
                    <form action="" style={{ display: "flex", flexDirection: "column" }}>
                        <CustomInput
                            type="password"
                            label="Enter new password"
                            id="email"
                            name="new_password"
                            
                        />
                        <div className="Button-wrapper">
                            <Button
                                className="px-3 py-2 text-black login-color"
                                type="submit"
                                variant={variant}
                                onMouseOver={(e) => { console.log(e); setvariant("contained") }}
                                onMouseLeave={(e) => { setvariant("outline"); }}
                                onClick={() => navigate('/login')}
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
