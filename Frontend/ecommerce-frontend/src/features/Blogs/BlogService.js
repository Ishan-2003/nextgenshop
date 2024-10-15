import axios from "axios";
import { authConfig, base_url } from "../../Utils/AxiosConfig";

const getBlogs = async()=>{
    // console.log('do not works')
    const response = await axios.get(`${base_url}Blog/get_all_Blog/`);
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
    if(response.data){
        // console.log(response)
        return response.data
    }
}

export const blogService = {
    getBlogs,
    get_a_Product,
    addToWishlist
}