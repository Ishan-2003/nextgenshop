import { FormControlLabel } from '@mui/material';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';

const SteppeerPayment = () => {
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
        <div className='d-grid py-2' style={{gridTemplateColumns:'80px 400px max-content',gap:'1rem',alignItems:'center',justifyContent:'end'}}>
            <p style={{alignSelf:'center',margin:'0px'}}>Contact</p>
            <p style={{alignSelf:'center',margin:'0px'}}>21bcs022@nith.ac.in</p>
            <Link>Change</Link>
        </div>
        <div className='BOTTOM'></div>
        <div className='d-grid py-2' style={{gridTemplateColumns:'80px 400px max-content',gap:'1rem',alignItems:'center',justifyContent:'end'}}>
            <p style={{alignSelf:'center',margin:'0px'}}>Ship to</p>
            <p style={{alignSelf:'center',margin:'0px'}}>JESSIE SANTANA. 4325 W PALM BEACH RD RM 419. SAN FRANCISCO CA 94116</p>
            <Link>Change</Link>
        </div>
      </div>
      <div>
        <h6>Shipping Method</h6>
        <div className='d-grid' style={{gridTemplateColumns:'repeat(2,50%)',padding:'0.3rem 1rem',border:'1px solid rgb(165, 165, 165)',marginTop:'1rem',borderRadius:'0.3rem'}}>
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

export default SteppeerPayment
