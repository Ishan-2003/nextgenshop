import React from 'react'
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import { Link } from 'react-router-dom';
import blogImage from '../pages/Assets/images/blog-1.jpg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap'

const SingleBlog = () => {
  return (
    <>
      <MetaTitle title="Dynamic blog" />
      <Template title="Dynamic blog" />
      <div className='d-grid blog-shop-category'>
      <div className='blog-category'>
      <h5>Shop By Categories</h5>
      <div className='category-links'>
        <Link to = '/'>Home</Link>
        <Link to = '/store'>Our Store</Link>
        <Link to = '/blog'>Blogs</Link>
        <Link to = '/contact'>Contact</Link>
      </div>
      </div>
      <div className='single-blog-desc'>
        <h5>
          Dummy Greetings
        </h5>
        <img src={blogImage} alt="DynamicBlog" className='image-fluid'/>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nulla fugit. Amet ipsa perspiciatis unde earum consequuntur! Ad et quisquam laborum qui, deserunt maxime dignissimos saepe voluptas. Illo, harum perspiciatis!
        </p>
        <div className='icons-div'>
          <Link to='/blog' style={{color:'black'}}>
          <KeyboardBackspaceIcon/> Back to blogs</Link>
          <div className='blog-icons'>
            <FacebookIcon/>
            <XIcon/>
          </div>
        </div>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      className='blog-comment-section'
    >
      <h4>Leave A Comment</h4>
      <TextField fullWidth label="Name" id="fullWidth"
      required = {true} style={{backgroundColor:'#f5f5f7'}}/>
      <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          // defaultValue="Default Value"
          required = {true}
          style={{backgroundColor:'#f5f5f7'}}
        />
    <Link><Button className='d-flex gap-3 banner-btn blog-btn'>Read More</Button></Link>
    </Box>
      </div>
      </div>
    </>
  )
}

export default SingleBlog