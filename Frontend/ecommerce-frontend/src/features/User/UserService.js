import axios from "axios";
import { authConfig, base_url } from "../../Utils/AxiosConfig";

const registerUser = async (userdata) => {
    // console.log('do not works')
    const response = await axios.post(`${base_url}User/register`, userdata);
    if (response.data) localStorage.setItem('Customer', JSON.stringify(response.data));
    return response.data
}

const loginUser = async (userdata) => {
    const response = await axios.post(`${base_url}User/login`, userdata);
    if (response.data) localStorage.setItem('User', JSON.stringify(response.data));
    return response.data
}

const getUserProdWishlist = async(id)=>{
    const response = await axios.get(`${base_url}User/${id}`,authConfig);
    // console.log(response.data.get_a_user.wishlist)
    if(response.data) return response.data.get_a_user.wishlist;
    return {msg:'Wishlist err!!!'}
}
 
const addToCart = async(cartData)=>{
    const response = await axios.post(`${base_url}User/cart`,cartData,authConfig);
    // console.log(response.data.get_a_user.wishlist)
    if(response.data) return response.data;
    return {msg:'Cart err !!!'}
}



export const authService = {
    registerUser,
    loginUser,
    getUserProdWishlist,
    addToCart
}