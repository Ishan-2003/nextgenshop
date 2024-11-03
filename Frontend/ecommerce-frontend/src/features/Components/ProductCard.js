import React from 'react'
// import product from '../pages/Assets/images/watch.jpg'
import { Link } from 'react-router-dom'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ReactStars from 'react-stars'
import { useDispatch} from 'react-redux';
import { AddToWishlist, removefromWishlist } from '../Products/ProductSlice';
import { addProductToCart, getUserfromLocalStorage, getUserProductWishlist } from '../User/UserSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({ data , grid, remove}) => {
  const product = data;
  const dispatch = useDispatch();
  const user = getUserfromLocalStorage;
  const removeFromWishlist = (prodId)=>{
    dispatch(removefromWishlist(prodId));
    setTimeout(()=>{
      dispatch(getUserProductWishlist(user?._id));
    },300)
  }
  const addToWishlist = (prod)=>{
    // alert(prodId);
    // alert(userId);
    dispatch(AddToWishlist(prod))
  }

  const addToCart = (product)=>{
    dispatch(addProductToCart(product))
  }
  // const message = useSelector((state)=>state.product.addtowishlist)

  // console.log(message);
  return (
    <div className='product-card'>
    {
      (grid===1)?(<div className='d-grid single-grid' style={{gridTemplateColumns:'repeat(2,max-content)'}} >
      <div className="product-image">
        <img src={product?.image} alt="product img" className='img-fluid'/>
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
    </div>):(<div className='d-grid multi-grid'>
      <div className="product-image">
        <img src={product?.image} alt="product img" />
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
    </div>)
    }
    <div className='action-bar position-absolute'>
        <Link className='action-icon' to={`/product/${data?._id}`}>
        <RemoveRedEyeOutlinedIcon/>
        </Link>
        <Link className='action-icon' onClick={(e)=>addToCart(product)}>
        <AddShoppingCartIcon/>
        </Link>
        {!remove&&<Link className='action-icon' onClick={(e)=>addToWishlist(product)}>
          <LocalMallOutlinedIcon/>
        </Link>}
    </div>
    {remove&&<div className='cross' onClick={()=>removeFromWishlist(data?._id)}>
      <img src='https://th.bing.com/th/id/OIP.xHn4P14c-FSSF59QpadUWQAAAA?rs=1&pid=ImgDetMain' alt='delete'/>
    </div>}
    </div>
  )
}

export default ProductCard
