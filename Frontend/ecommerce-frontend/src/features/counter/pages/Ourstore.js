import React from 'react';
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

const Ourstore = () => {
    return (
        <>
            <MetaTitle title="My Store" />
            <Template title="My Store" />
            <div className='store-wrapper'>
                <div className='store-filter'>
                    <div className='category-filter-list'>
                        <h3>
                            Filter By Categories
                        </h3>
                        <ul>
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Laptop</li>
                            <li>Storage Devices</li>
                        </ul>
                    </div>
                    <div className='stock-filter-list'>
                        <h3>
                            Filter By Lot
                        </h3>
                        <div>
                            <div>
                                <label htmlFor='uncheck'>
                                    In Stock - 1.
                                </label>
                                <input className='checked-input' type='checkbox' value="" id="uncheck" />
                            </div>
                            <div>
                                <label htmlFor='checked'>
                                    Out of Stock - 2.
                                </label>
                                <input className='checked-input' type='checkbox' value="" id="checked" />
                            </div>

                        </div>
                        <div className='Price-input'>
                            <h5>Price</h5>
                            <Slider
                                aria-label="Temperature"
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                        </div>
                        <div className='Color-input'>
                            <h5>Color</h5>
                            <div className=''>

                            </div>
                        </div>
                    </div>
                    <div>Product Tags</div>
                    <div>Arbitrary Product Filter</div>
                </div>
                <div className='store-result-area'>
                    <h3>
                        Product-area
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Ourstore
