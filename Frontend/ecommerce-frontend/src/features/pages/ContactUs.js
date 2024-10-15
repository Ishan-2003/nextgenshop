import React from 'react'
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactUs = () => {
    
  return (
    <div className='contact-us'>
      <MetaTitle title="Contact Us" />
      <Template title="Contact Us" />
      <div className='contact-us-wrapper'>
        <div className='map-location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27038.021384157273!2d76.27262594999999!3d32.102969500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b458198590ddf%3A0xad8e3ff3dfe5b1fe!2sKangra%2C%20Himachal%20Pradesh%20176001!5e0!3m2!1sen!2sin!4v1725514054916!5m2!1sen!2sin" width="600" height="450" style={{border:"0px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='location'></iframe>
        </div>
        <div className='contact-req'>
        <div className='contact-us'>
        <h3>Contact Us</h3>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      autoComplete="off"
    >
        <TextField
        required = {true}
          id="filled-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          variant="filled"
          color="success"
        />
        <TextField
        required = {true}
          id="filled-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          variant="filled"
          color="success"
        />
        <TextField
        required = {true}
          id="filled-multiline-flexible"
          label="Phone number"
          multiline
          maxRows={4}
          variant="filled"
          color="success"
        />
        <TextField
          id="filled-multiline-flexible"
          label="Comment"
          multiline
          rows={4}
          variant="outlined"
          color="success"
          className='comment'
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
        </Box>
        </div>
        <div className='reach-us'>
        <h3>Reach Us</h3>
        <div>
        <MailOutlineIcon style={{marginRight:"1rem",placeSelf:"center"}}/>
        <a href="mailto:21bcs022@nith.ac.in" style={{color:"#bfbfbf"}}>
        21bcs022@nith.ac.in
        </a>
        </div>
        <div>
        <PhoneIcon/>
        <a href='tel:+91 8278807611' style={{color:"#bfbfbf"}}>
        (+91)-8278807611
        </a>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
