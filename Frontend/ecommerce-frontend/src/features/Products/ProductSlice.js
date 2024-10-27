import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { productService } from "./ProductService";
// import { fabClasses } from "@mui/material";
import { toast } from "react-toastify";

const initialState = {
    user : '',
    isError : false,
    isSuccess : false,
    isLoading : false,
    productList : [],
    product : {},
    errorMessage : '',
    message:'',
    addtowishlist:''
}

export const getAllProducts = createAsyncThunk('product/getProducts',async(thunkAPI)=>{
    try {
        return productService.getProducts();
    } catch (error) {
        // console.log('here')
        return thunkAPI.rejectWithValue(error);
    }
})

export const getSingleProduct = createAsyncThunk('product/getProduct',async(id,thunkAPI)=>{
    try {
        return productService.get_a_Product(id);
    } catch (error) {
        // console.log('here')
        return thunkAPI.rejectWithValue(error);
    }
})

export const AddToWishlist = createAsyncThunk('product/wishlist',async(prod,thunkAPI)=>{
    try {
        return await productService.addToWishlist(prod);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const removefromWishlist = createAsyncThunk('product/wishlist/remove',async(prodId,thunk)=>{
    try{
        return await productService.removeFromWishlist(prodId);
    }
    catch(err) {return thunk.rejectWithValue(err);}
})


export const productSlice = createSlice({
    name : 'product',
    initialState : initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.productList = action.payload
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = action.error
        })
        .addCase(getSingleProduct.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getSingleProduct.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.product = action.payload
            state.message = 'Product fetched (200--OK)'
        })
        .addCase(getSingleProduct.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = action.error
        })
        .addCase(AddToWishlist.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(AddToWishlist.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.addtowishlist = action.payload
            state.message = 'Product added to Wishlist (200--OK)'
            // console.log(action.payload);
            toast.success('Product added successfully')
        })
        .addCase(AddToWishlist.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = action.error
            toast.error(`${action.error}`);
        })
        .addCase(removefromWishlist.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(removefromWishlist.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = action.payload
            toast.success('Product removed successfully')
        })
        .addCase(removefromWishlist.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = action.error
            toast.error(`${action.error}`);
        })
    }
})

export default productSlice.reducer;