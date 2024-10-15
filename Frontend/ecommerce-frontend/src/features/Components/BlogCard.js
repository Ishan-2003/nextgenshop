import React from 'react'
// import blogImage from '../pages/Assets/images/blog-1.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import moment from 'moment'

const BlogCard = ({blog}) => {
  // console.log(blog)
  return (
    <div className='blog-card-wrapper'>
      <div className='blog-img'>
        <img src={blog?.images} alt='blog' className='' />
      </div>
      <div className='blog-text'>
        <p>{moment(blog?.createdAt).format('MMMM Do YYYY,h:mm A')}</p>
        <h3>{blog?.title}</h3>
        <p>
          {blog?.description}
        </p>
        <Link to={blog?._id}><Button className='d-flex gap-3 banner-btn blog-btn'>Read More</Button></Link>

      </div>
    </div>
  )
}

export default BlogCard
