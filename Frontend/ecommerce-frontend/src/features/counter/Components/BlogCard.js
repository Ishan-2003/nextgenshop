import React from 'react'
import blogImage from '../pages/Assets/images/blog-1.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const BlogCard = () => {
  return (
    <div className='blog-card-wrapper'>
      <div className='blog-img'>
        <img src={blogImage} alt='blog' className='' />
      </div>
      <div className='blog-text'>
        <p>22 Dec 2022</p>
        <h3>Virtual Reality Smart emulators</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link><Button className='d-flex gap-3 banner-btn blog-btn'>Read More</Button></Link>

      </div>
    </div>
  )
}

export default BlogCard
