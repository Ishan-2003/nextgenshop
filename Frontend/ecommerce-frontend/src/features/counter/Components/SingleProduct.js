import React from 'react'
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import product from '../pages/Assets/images/speaker.jpg'
import product1 from '../pages/Assets/images/headphone.jpg'
import ReactStars from 'react-stars'
import { EasyZoomOnHover, EasyZoomOnMove } from "easy-magnify";
const SingleProduct = () => {

  return (
    <div>
      <MetaTitle title="Product Name" />
      <Template title="Product Name" />
      <div className='Product-detail-page'>
        <div className='Product-details'>
        <div className='main-sub-prod'>
          <EasyZoomOnMove mainImage={{
            width: 100,
            height: 466,
            src: `${product1}`,
            alt: "My Product",
          }}
            zoomImage={{
              src: `${product1}`,
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
            <p>Lorem ipsum dolor sit.</p>
        </div>
        </div>
        <div className='Product-description'>
          <h4>
            Product Description
          </h4>
          <p style={{ fontSize: "0.7rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur aspernatur ipsum ea modi minima necessitatibus quod ipsam vero, quasi cumque animi. Sequi aut qui repellendus hic deleniti facilis tenetur veritatis ullam neque et.
          </p>
        </div>
        <div className='Product-reviews'>
          <h3>Reviews</h3>
          <div className='reviews'>
            <p>
              <ReactStars />
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
