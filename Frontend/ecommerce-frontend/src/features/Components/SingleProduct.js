import React, { useEffect } from 'react'
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import product from '../pages/Assets/images/speaker.jpg'
import product1 from '../pages/Assets/images/headphone.jpg'
import ReactStars from 'react-stars'
import { EasyZoomOnHover, EasyZoomOnMove } from "easy-magnify";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../Products/ProductSlice';
const SingleProduct = () => {
  const location = useLocation();
  const getProduct_id = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(getProduct_id));
  }, []);
  const fetchedProduct = useSelector((state)=>state.product)
  console.log(fetchedProduct);
  return (
    <div>
      <MetaTitle title={fetchedProduct?.product?.title} />
      <Template title={fetchedProduct?.product?.title} />
      <div className='Product-detail-page'>
        <div className='Product-details'>
        <div className='main-sub-prod'>
          <EasyZoomOnMove mainImage={{
            width: 100,
            height: 466,
            src: `${fetchedProduct?.product?.images}`,
            alt: "My Product",
          }}
            zoomImage={{
              src: `${fetchedProduct?.product?.images}`,
              alt: "My Product",
            }}
          />
           <div className='sub-prod'>
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <img src={product} alt="" />
            </div>
           
           </div>

        </div>
        <div className='main-prod-desc'>
            <p>{fetchedProduct?.product?.description}</p>
        </div>
        </div>
        <div className='Product-description'>
          <h4>
            Product Description
          </h4>
          <p style={{ fontSize: "0.7rem" }}>
          {fetchedProduct?.product?.description}
          </p>
        </div>
        <div className='Product-reviews'>
          <h3>Reviews</h3>
          <div className='reviews'>
            <p>
              <ReactStars
              count={5}
              size={22}
              edit={false}
              // value={}
               />
            </p>
          </div>
        </div>
        <div className='also-visited-prod'>

        </div>
      </div>
    </div>
  )
}

export default SingleProduct;
