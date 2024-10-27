import axios from "axios";
import { authConfig, base_url } from "../../Utils/AxiosConfig";

const getProducts = async()=>{
    // console.log('do not works')
    const response = await axios.get(`${base_url}Product/getallprod/`);
    if(response.data){
        return response.data
    }
}

const get_a_Product = async(id)=>{
    // console.log('do not works')
    const response = await axios.get(`${base_url}Product/get_a_prod/${id}`);
    if(response.data){
        return response.data
    }
}

const addToWishlist = async(prod)=>{
    // console.log('do not works')
    const prodId = prod._id;
    const response = await axios.put(`${base_url}Product/wishlist`,{prodId,prod},authConfig);
    // console.log(response)
    if(response.data.msg==='product added') {
        const res = await axios.delete(`${base_url}Product/removeFromwish/${prodId}`,authConfig);
        return res.data;
    }
    // console.log(response.msg)
    else if(response.data){
        // console.log(response)
        return response.data
    }
}

const removeFromWishlist = async(prodId)=>{
    // console.log(prodId)
    const res = await axios.delete(`${base_url}Product/removeFromwish/${prodId}`,authConfig);
    if(res.data){
        return res.data
    }
}

export const productService = {
    getProducts,
    get_a_Product,
    addToWishlist,
    removeFromWishlist
}