import React from 'react'
// import product from '../pages/Assets/images/watch.jpg'
import { Link } from 'react-router-dom'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ReactStars from 'react-stars'
import { useDispatch } from 'react-redux';
import { AddToWishlist } from '../Products/ProductSlice';

const ProductCard = ({ data , grid, remove}) => {
  const product = data;
  const dispatch = useDispatch();
  const addToWishlist = (prod)=>{
    // alert(prodId);
    // alert(userId);
    dispatch(AddToWishlist(prod))
  }
  console.log(product);
  return (
    <div className='product-card'>
    {
      (grid===1)?<div className='d-grid single-grid' style={{gridTemplateColumns:'repeat(2,max-content)'}} >
      <div className="product-image">
        <img src='https://th.bing.com/th/id/OIP.XjqWdgNTvW76t7sDEUPy5AAAAA?rs=1&pid=ImgDetMain' alt="product img" />
      </div>
      <div className='single-prod'>
      <div className="product-desc">
        <h6 className='product-brand'>
          {product?.brand}
        </h6>
        <p className='product-caption'>
          {product?.description}
        </p>
      </div>
      <ReactStars/>
        <p className='product-sub-caption'>
          {product?.description}
        </p>
      <p className='prod-price'>
          <span style={{fontSize:'1.3rem'}}>$</span>{product?.price}
      </p>

      </div>
    </div>:<div className='d-grid multi-grid' >
      <div className="product-image">
        <img src='https://th.bing.com/th/id/OIP.XjqWdgNTvW76t7sDEUPy5AAAAA?rs=1&pid=ImgDetMain' alt="product img" />
      </div>
      <div className="product-desc">
        <h6 className='product-brand'>
          {product?.brand}
        </h6>
        <p className='product-caption'>
          {product?.description}
        </p>
      </div>
      <ReactStars/>
        <p className='product-sub-caption'>
          {product?.description}
        </p>
      <p className='prod-price'>
          <span style={{fontSize:'1.3rem'}}>$</span>{product?.price}
      </p>
    </div>
    }
    <div className='action-bar position-absolute'>
        <Link className='action-icon' to={`/product/${data?._id}`}>
        <RemoveRedEyeOutlinedIcon/>
        </Link>
        {!remove&&<Link className='action-icon' onClick={(e)=>addToWishlist(product)}>
          <LocalMallOutlinedIcon/>
        </Link>}
    </div>
    {remove&&<div className='cross'>
      <img src='https://th.bing.com/th/id/OIP.xHn4P14c-FSSF59QpadUWQAAAA?rs=1&pid=ImgDetMain' alt='delete'/>
    </div>}
    </div>
  )
}

export default ProductCard
