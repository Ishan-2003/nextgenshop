import React, { useState } from 'react'
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import product1 from '../pages/Assets/images/headphone.jpg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const [quantity, setquantity] = useState(0);
    const increase = () => { setquantity(quantity + 1); };
    const decrease = () => { setquantity(quantity - 1); };
    return (
        <div>
            <div style={{backgroundColor:'white'}}>
            <MetaTitle title="Cart" />
            <Template title="Cart" />
            </div>
            <div className='Cart-page'>
                <div className='product-meta'>
                    <div className='cart-prod-img-fit'>
                        <div>PRODUCT</div>
                        <div className='PRODUCT'></div>
                        <div className='cart-products'>
                            <div className='cart-img'>
                                <img src={product1} alt="headphones" />
                            </div>
                            <div className='cart-prod-desc'>
                                <p>lorem epsum</p>
                                <p>Size : M</p>
                                <p>Color : #A95B6B</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div style={{justifySelf:'end'}}>PRICE</div>
                        <div className='PRICE'></div>
                        <div className='cart-prod-price'>
                            <p>
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div>QUANTITY</div>
                        <div className='QUANTITY'></div>
                        <div className='qty-container'>
                            <div className='qty-counter'>
                                <div className='qty-btn'>
                                    <GoPlus onClick={increase} size={15} />
                                    <div className='qty-border'></div>
                                    <HiOutlineMinus onClick={decrease} size={15} />

                                </div>
                                <div className='qty'>
                                    {quantity >= 0 ? quantity : 0}
                                </div>
                            </div>
                            <div style={{ backgroundColor: "black", width: '1.8rem', height: '1.8rem', display: 'flex', placeContent: 'center', placeItems: 'center', borderRadius: '1rem', cursor: 'pointer', padding: '0.2rem' }}>
                                <RiDeleteBin6Line color='white' />

                            </div>
                        </div>
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div>TOTAL</div>
                        <div className='TOTAL'></div>
                        <div className='cart-total'>
                            $100.00
                        </div>
                    </div>
                </div>
                <div className='product-meta'>
                    <div className='cart-prod-img-fit'>
                        <div>PRODUCT</div>
                        <div className='PRODUCT'></div>
                        <div className='cart-products'>
                            <div className='cart-img'>
                                <img src={product1} alt="headphones" />
                            </div>
                            <div className='cart-prod-desc'>
                                <p>lorem epsum</p>
                                <p>Size : M</p>
                                <p>Color : #A95B6B</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div style={{justifySelf:'end'}}>PRICE</div>
                        <div className='PRICE'></div>
                        <div className='cart-prod-price'>
                            <p>
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div>QUANTITY</div>
                        <div className='QUANTITY'></div>
                        <div className='qty-container'>
                            <div className='qty-counter'>
                                <div className='qty-btn'>
                                    <GoPlus onClick={increase} size={15} />
                                    <div className='qty-border'></div>
                                    <HiOutlineMinus onClick={decrease} size={15} />

                                </div>
                                <div className='qty'>
                                    {quantity >= 0 ? quantity : 0}
                                </div>
                            </div>
                            <div style={{ backgroundColor: "black", width: '1.8rem', height: '1.8rem', display: 'flex', placeContent: 'center', placeItems: 'center', borderRadius: '1rem', cursor: 'pointer', padding: '0.2rem' }}>
                                <RiDeleteBin6Line color='white' />

                            </div>
                        </div>
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div>TOTAL</div>
                        <div className='TOTAL'></div>
                        <div className='cart-total'>
                            $100.00
                        </div>
                    </div>
                </div>
                <div className='product-meta'>
                    <div className='cart-prod-img-fit'>
                        <div>PRODUCT</div>
                        <div className='PRODUCT'></div>
                        <div className='cart-products'>
                            <div className='cart-img'>
                                <img src={product1} alt="headphones" />
                            </div>
                            <div className='cart-prod-desc'>
                                <p>lorem epsum</p>
                                <p>Size : M</p>
                                <p>Color : #A95B6B</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div style={{justifySelf:'end'}}>PRICE</div>
                        <div className='PRICE'></div>
                        <div className='cart-prod-price'>
                            <p>
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div>QUANTITY</div>
                        <div className='QUANTITY'></div>
                        <div className='qty-container'>
                            <div className='qty-counter'>
                                <div className='qty-btn'>
                                    <GoPlus onClick={increase} size={15} />
                                    <div className='qty-border'></div>
                                    <HiOutlineMinus onClick={decrease} size={15} />

                                </div>
                                <div className='qty'>
                                    {quantity >= 0 ? quantity : 0}
                                </div>
                            </div>
                            <div style={{ backgroundColor: "black", width: '1.8rem', height: '1.8rem', display: 'flex', placeContent: 'center', placeItems: 'center', borderRadius: '1rem', cursor: 'pointer', padding: '0.2rem' }}>
                                <RiDeleteBin6Line color='white' />

                            </div>
                        </div>
                    </div>
                    <div className='cart-prod-img-fit'>
                        <div>TOTAL</div>
                        <div className='TOTAL'></div>
                        <div className='cart-total'>
                            $100.00
                        </div>
                    </div>
                </div>
                <Link to='/products'><Button className='d-flex gap-3 banner-btn fs-7 cart-btn'>Continue Shopping</Button></Link>
                <Link to='/checkout' className='d-flex justify-content-end'><Button className='d-flex gap-3 banner-btn fs-7 cart-btn'>Checkout</Button></Link>
                <div className='BOTTOM-BORDER'></div>
            </div>
        </div>
    )
}

export default Cart
