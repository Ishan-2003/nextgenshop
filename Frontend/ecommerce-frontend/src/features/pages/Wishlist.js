import React, { useEffect } from 'react'
import MetaTitle from '../Components/MetaTitle'
import Template from '../Components/Template'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserfromLocalStorage, getUserProductWishlist } from '../User/UserSlice'
import { getSingleProduct } from '../Products/ProductSlice'
import { store } from '../../app/store'

const Wishlist = () => {
const dispatch = useDispatch()
const user = getUserfromLocalStorage;
const prodWishlist = useSelector((state)=>state.auth.productWishlist);
// // console.log(prodWishlist)
// store.subscribe(()=>{
//   console.log('store changed')
// })
useEffect(() => {
  const getuserProductwishlist = ()=>{
      dispatch(getUserProductWishlist(user?._id));
  }
    getuserProductwishlist();
}, []);

  return (
    <div>
      <MetaTitle title='Wishlist' />
      <Template title='Wishlist' />
      {prodWishlist.length === 0 && <p className='fs-3 d-grid' style={{placeSelf:'center'}}>No Data</p>}
      <div className='d-grid' style={{gridTemplateColumns:'repeat(4,max-content)',gap:'1rem',margin:'1rem',placeSelf:'center',width:"10rem"}}>
      {prodWishlist?.map((item,indx)=>{
              /* console.log(item); */
                return (
                  <ProductCard data = {item} remove key={item._id} grid = {4}/>
                )
            })}
        
      </div>
    </div>
  )
}

export default Wishlist
