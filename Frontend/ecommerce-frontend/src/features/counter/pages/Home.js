import React from 'react'
import { Carousel, Button ,Col,Row, Container} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import banner1 from './Assets/images/main-banner.jpg';
import banner2 from './Assets/images/main-banner-1.jpg';
import smallbanner1 from './Assets/images/catbanner-01.jpg';
import smallbanner2 from './Assets/images/catbanner-02.jpg';
import smallbanner3 from './Assets/images/catbanner-03.jpg';
import smallbanner4 from './Assets/images/catbanner-04.jpg';
import brand01 from './Assets/images/brand-01.png';
import brand02 from './Assets/images/brand-02.png';
import brand03 from './Assets/images/brand-03.png';
import brand04 from './Assets/images/brand-04.png';
import brand05 from './Assets/images/brand-05.png';
import brand06 from './Assets/images/brand-06.png';
import brand07 from './Assets/images/brand-07.png';
import brand08 from './Assets/images/brand-08.png';
import {Link} from "react-router-dom";
import ProductCard from '../Components/ProductCard';
import BlogCard from '../Components/BlogCard';
const Home = () => {
  return (
    <>
    <section className='hm-wrapper-1 py-3'>
    <Row className='banner'>
    <Col>
      <Carousel className="w-100">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Upto 30% Discount on Head phones</h3>
                    <h1><strong>S13+ Pro</strong></h1>
                    <Link><Button className='d-flex gap-3 banner-btn'>BUY NOW</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Upto 30% Discount on Earpodes</h3>
                    <h1><strong>S13+ Pro</strong></h1>
                    <Link><Button className='d-flex gap-3 banner-btn'>BUY NOW</Button></Link>
                  </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Col>
        <Col>
        <Row>
        <Col>
        <div className="small-banner position-relative">
            <img src={smallbanner1} alt="small banner" className='img-fluid rounded-2'/>
        </div>

        </Col>
        <Col>
        <div className="small-banner position-relative">
            <img src={smallbanner2} alt="small banner" className='img-fluid rounded-2'/>
        </div>

        </Col>
        </Row>
        <Row>
        <Col>
        <div className="small-banner position-relative py-4">
            <img src={smallbanner3} alt="small banner" className='img-fluid rounded-2'/>
        </div>

        </Col>
        <Col>
        <div className="small-banner position-relative py-4">
            <img src={smallbanner4} alt="small banner" className='img-fluid rounded-2'/>
        </div>

        </Col>
        </Row>
        </Col>
        </Row>
    </section>
    <section className='marquee-height py-3'>
    <div className="marquee-wrapper">
                    <Marquee className='d-flex'>
                    <div className='brand-div'>
                        <img src={brand01} alt="brand" className='marque-img' />
                    </div>
                    <div className='brand-div'>
                        <img src={brand02} alt="brand" className='marque-img'/>
                    </div>
                    <div className='brand-div'>
                        <img src={brand03} alt="brand" className='marque-img'/>
                    </div>
                    <div className='brand-div'>
                        <img src={brand04} alt="brand" className='marque-img'/>
                    </div>
                    <div className='brand-div'>
                        <img src={brand05} alt="brand" className='marque-img' />
                    </div>
                    <div className='brand-div'>
                        <img src={brand06} alt="brand" className='marque-img'/>
                    </div>
                    <div className='brand-div'>
                        <img src={brand07} alt="brand" className='marque-img'/>
                    </div>
                    <div className='brand-div'>
                        <img src={brand08} alt="brand" className='marque-img'/>
                    </div>
                    </Marquee>
    </div>
    </section>
    <section className='blog-wrapper'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </section>
    <section className='py-5'>
        <Container>
        <Row>
            <Col>
                <p>Featured Collections</p>
            </Col>
        </Row>
        <Row sm={6} className='product-inner-wrapper'>
            {
                Array.from({length:6},(val,indx)=><ProductCard/>)
            }
           
        </Row>

        </Container>
    </section>
    </>
  )
}

export default Home