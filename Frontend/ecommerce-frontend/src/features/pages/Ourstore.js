import React, { useEffect, useState } from 'react';
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import Slider from '@mui/material/Slider';
import { FaGripLinesVertical } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { RxDragHandleVertical } from "react-icons/rx";
import { MdHorizontalSplit } from "react-icons/md";
import ProductCard from '../Components/ProductCard';
import { Box, MenuItem, TextField } from '@mui/material';
import { ColorPicker } from 'mui-color';
// import { MuiColorInput } from 'mui-color-input'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../Products/ProductSlice';
// import { ColorPicker } from 'mui-color';
// "installCommand": "npm install --legacy-peer-deps"
// function valuetext(value) {
//     return `${value}°C`;
// }

const Ourstore = () => {
    // const [colorVal, setColor] = React.useState('#ffffff')

    const [grid, setgrid] = useState(4);
    const gridsetMethod = async (numCols) => {
        setgrid(numCols);
    }
    // const handlePicker = (newValue) => {
    //   setValue(newValue)
    // }

    const currencies = [
        {
            value: 'USD',
            label: '$ - Dollars',
        },
        {
            value: 'EUR',
            label: '€ - Euro',
        },
        {
            value: 'BTC',
            label: '฿ - Pounds',
        },
        {
            value: 'JPY',
            label: '¥ - Yen',
        },
    ];

    function valuetext(value) {
        return `${value}°C`;
    }

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch()

    const getProducts = () => {
        dispatch(getAllProducts());
    }
    const productState = useSelector((state) => state.product.productList)
    // console.log(productState)
    useEffect(() => {
        getProducts();
    }, []);

    // if(gridsetMethod) alert(grid)
    return (
        <>
            <MetaTitle title="My Store" />
            <Template title="My Store" />
            <div className='store-wrapper'>
                <div className='store-filter'>
                    <div className='category-filter-list'>
                        <h5>
                            Filter By Categories
                        </h5>
                        <ul>
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Laptop</li>
                            <li>Storage Devices</li>
                        </ul>
                    </div>
                    <div className='stock-filter-list'>
                        <h3>
                            Filter By
                        </h3>
                        <div className='d-grid g-2'>
                            <h5>Availability</h5>
                            <div className='filter-input'>
                                <input className='checked-input' type='checkbox' value="" id="uncheck" />
                                <label htmlFor='uncheck'>
                                    In Stock (1)
                                </label>
                            </div>
                            <div className='filter-input'>
                                <input className='checked-input' type='checkbox' value="" id="checked" />
                                <label htmlFor='checked'>
                                    Out of Stock (2)
                                </label>
                            </div>

                        </div>
                        <div className='Price-input'>
                            <h5>Price</h5>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay='auto'
                                getAriaValueText={valuetext}
                                size='small'
                            //   valueLabelFormat={value => `From : {value*100}`}
                            />

                            <Box
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select"
                                    defaultValue="EUR"
                                    helperText="Please select your currency"
                                    variant="standard"
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </Box>

                        </div>
                        <div className='Color-input'>
                            <h5>Color</h5>
                            <div className='color-picker'>
                                <ColorPicker defaultValue="Type Color" />
                                {/* <MuiColorInput format="hex" value={colorVal} onChange={handlePicker} /> */}
                            </div>
                        </div>
                    </div>
                    <div className='product-tag'>
                        <h5>Product Tag</h5>
                        <div className='d-flex flex-wrap align-items-center row-gap-2 column-gap-3'>
                            <div className=' text-secondary rounded-4 py-2 px-2' style={{ backgroundColor: 'rgb(232, 232, 232)' }}>Headphone</div>
                            <div className=' text-secondary rounded-4 py-2 px-2' style={{ backgroundColor: 'rgb(232, 232, 232)' }}>Device</div>
                            <div className=' text-secondary rounded-4 py-2 px-2' style={{ backgroundColor: 'rgb(232, 232, 232)' }}>Listen</div>
                            <div className=' text-secondary rounded-4 py-2 px-2' style={{ backgroundColor: 'rgb(232, 232, 232)' }}>Microphone</div>
                        </div>
                    </div>
                    <div className='arbit-tag'>Arbitrary Product Filter</div>
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
                            <p>{productState.length}</p>
                            <div>
                                <RxDragHandleVertical size={31} onClick={() => gridsetMethod(3)} />
                                <FaGripLinesVertical size={30} onClick={() => gridsetMethod(2)} />
                                <TbMinusVertical size={31} onClick={() => gridsetMethod(1)} />
                                <MdHorizontalSplit size={31} onClick={() => gridsetMethod(4)} />
                            </div>
                        </div>
                    </div>
                    <div className='store-result-area p-4 d-grid' style={{ gridTemplateColumns: `repeat(${grid},1fr)`, gap: '1rem' }}>
                        {
                            Array.from(productState)?.map((item, indx) => {
                                return (
                                    <ProductCard data={item} key={item._id} grid={grid} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourstore
