import React, { useState } from 'react';
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Slider from '@mui/material/Slider';
import { FaGripLinesVertical } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { RxDragHandleVertical } from "react-icons/rx";
import { MdHorizontalSplit } from "react-icons/md";
import ProductCard from '../Components/ProductCard';

function valuetext(value) {
    return `${value}°C`;
}

const Ourstore = () => {
    const [grid, setgrid] = useState(4);
    const gridsetMethod = async (numCols) => {
        setgrid(numCols);
    }
    // if(gridsetMethod) alert(grid)
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
                <div className='store-res-wrapper'>
                    <div className='sort-by-nav'>
                        <div className='sort-by'>
                            <p>Sort By:</p>
                            <select name="" id="prod-sort">
                                <option value="manual">Customised</option>
                                <option value="best-selling" selected>Best Selling</option>
                                <option value="alpha-asc">A-Z</option>
                                <option value="alpha-desc">Z-A</option>
                                <option value="price-inc">Price (0 - inf)</option>
                                <option value="price-dec">Price (inf - 0)</option>
                                <option value="old">Date newest</option>
                                <option value="new">Date old</option>
                            </select>
                        </div>
                        <div className='display-setting'>
                            <p>22 products</p>
                            <div>
                                <RxDragHandleVertical size={31} onClick={() => gridsetMethod(4)} />
                                <FaGripLinesVertical size={30} onClick={() => gridsetMethod(2)} />
                                <TbMinusVertical size={31} onClick={() => gridsetMethod(1)} />
                                <MdHorizontalSplit size={31} onClick={() => gridsetMethod(1)} />
                            </div> 
                        </div>
                    </div>
                    <div className='store-result-area p-4 d-grid' style={{gridTemplateColumns:`repeat(${grid},1fr)`}}>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Ourstore
