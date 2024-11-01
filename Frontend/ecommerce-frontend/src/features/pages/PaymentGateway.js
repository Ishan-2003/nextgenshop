import { Box, FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, Radio, styled, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import bitcoin from './Assets/images/bitCoin.jpg'
import HttpsIcon from '@mui/icons-material/Https';
import HelpIcon from '@mui/icons-material/Help';

function BoldText({ children }) {
    return (
        <span style={{ fontWeight: 'bold' }}>{children}</span>
    );
}
const PaymentGateway = () => {
    const [value,setValue] = useState(true);
    const BpIcon = styled('span')(({ theme }) => ({
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
          ...theme.applyStyles('dark', {
            backgroundColor: '#30404d',
          }),
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
          ...theme.applyStyles('dark', {
            background: 'rgba(57,75,89,.5)',
          }),
        },
        ...theme.applyStyles('dark', {
          boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
          backgroundColor: '#394b59',
          backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
        }),
      }));
    
      const BpCheckedIcon = styled(BpIcon)({
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&::before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      });
    
      function BpRadio(props) {
        return (
          <Radio
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
          />
        );
      }
    return (
        <div className='stepper-hero'>
            <div className='stepper-main'>
                <div className='d-grid my-2' style={{ gridTemplateColumns: '80px 400px max-content', gap: '1rem', alignItems: 'center', justifyContent: 'end' }}>
                    <p style={{ alignSelf: 'center', margin: '0px' }}>Contact</p>
                    <p style={{ alignSelf: 'center', margin: '0px' }}>21bcs022@nith.ac.in</p>
                    <Link>Change</Link>
                </div>
                <div className='BOTTOM'></div>
                <div className='d-grid my-2' style={{ gridTemplateColumns: '80px 400px max-content', gap: '1rem', alignItems: 'center', justifyContent: 'end' }}>
                    <p style={{ alignSelf: 'center', margin: '0px' }}>Ship to</p>
                    <p style={{ alignSelf: 'center', margin: '0px' }}>JESSIE SANTANA. 4325 W PALM BEACH RD RM 419. SAN FRANCISCO CA 94116</p>
                    <Link>Change</Link>
                </div>
                <div className='BOTTOM'></div>
                <div className='d-grid my-2' style={{ gridTemplateColumns: '80px 400px', gap: '1rem', alignItems: 'center' }}>
                    <p style={{ alignSelf: 'center', margin: '0px' }}>Method</p>
                    <p style={{ alignSelf: 'center', margin: '0px' }}>Standard <BoldText>$22.65</BoldText></p>
                </div>
            </div>
            <div>
                <h4>Payment</h4>
                <p>All transactions are secure and encrypted.</p>
                <div style={{ display: 'grid', gridTemplateRows: 'repeat(2,max-content)', border: '1px solid rgb(142, 142, 142)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,50%)', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: 'white' }}>
                        <h6 style={{ margin: '0px' }}>Credit card</h6>
                        <div style={{ width: '1.7rem', height: '1.7rem', justifySelf: 'end' }}>
                            <img src={require('./Assets/images/bitCoin.jpg')} alt='logo' style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: '#bfbfbf' }}>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'grid',gap:'1.6rem',paddingTop:'0.4rem' }}
                            autoComplete="off"
                        >
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-card">Card Number</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-card"
                                    endAdornment={
                                        <InputAdornment>
                                            <HttpsIcon></HttpsIcon>
                                        </InputAdornment>
                                    }
                                    label='Card Number'
                                    style={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-card">Card Number</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-card"
                                    label='Card Number'
                                    multiline
                                    maxRows={2}
                                    Rows={2}
                                    style={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
                                />
                            </FormControl>
                            <div className='d-grid' style={{ gridTemplateColumns: '48% 48%', gap: '4%', margin: '0rem 0rem', width: '100%' }}>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-card">Card Number</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-card"
                                        label='Card Number'
                                        multiline
                                        maxRows={2}
                                        Rows={2}
                                        style={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                                    <InputLabel htmlFor="outlined-adornment-code">Security Code</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-code"
                                        endAdornment={
                                            <InputAdornment>
                                                <HelpIcon></HelpIcon>
                                            </InputAdornment>
                                        }
                                        label='Security Code'
                                        style={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
                                    />
                                </FormControl>
                            </div>
                        </Box>
                    </div>

                </div>
            </div>
            <div>
                <h4>Billing address</h4>
                <p>Select the address that matches your card or payment method</p>
            </div>
            <div className='d-grid' style={{border:'1px solid rgb(165, 165, 165)',borderRadius:'0.3rem'}}>
            <div className='d-grid' style={{gridTemplateColumns:'repeat(2,50%)',padding:'0.3rem 1rem',borderBottom:'1px solid rgb(165, 165, 165)',marginTop:'1rem'}}>
          <div style={{justifySelf:'start',display:'grid',gridTemplateColumns:'repeat(2,max-content)',gap:'0.5rem'}}>
          <FormControlLabel value="male" control={<BpRadio />} label="Standard" style={{placeSelf:"center"}} onClick={ev=>setTimeout(()=>setValue(!value),300)} checked={value}/>
          </div>
          <p style={{justifySelf:'end',alignSelf:'center',height:'fit-content',margin:'0px'}}>
            $220.2
          </p>
        </div>
        <div className='d-grid' style={{gridTemplateColumns:'repeat(2,50%)',padding:'0.3rem 1rem',marginTop:'1rem'}}>
          <div style={{justifySelf:'start',display:'grid',gridTemplateColumns:'repeat(2,max-content)',gap:'0.5rem'}}>
          <FormControlLabel value="male" control={<BpRadio />} label="Standard" style={{placeSelf:"center"}} onClick={ev=>setTimeout(()=>setValue(!value),300)} checked={value}/>
          </div>
          <p style={{justifySelf:'end',alignSelf:'center',height:'fit-content',margin:'0px'}}>
            $220.2
          </p>
        </div>
            </div>
        </div>
    )
}

export default PaymentGateway
