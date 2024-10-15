import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { blogService } from "./BlogService";
// import { fabClasses } from "@mui/material";

const initialState = {
    user : '',
    isError : false,
    isSuccess : false,
    isLoading : false,
    blogList : [],
    product : {},
    errorMessage : '',
    message:'',
    addtowishlist:'',
}

export const getAllBlogs = createAsyncThunk('blog/getBlogs',async(thunkAPI)=>{
    try {
        return blogService.getBlogs();
    } catch (error) {
        // console.log('here')
        return thunkAPI.rejectWithValue(error);
    }
})

export const blogSlice = createSlice({
    name : 'blog',
    initialState : initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllBlogs.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllBlogs.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.blogList = action.payload
        })
        .addCase(getAllBlogs.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = action.error
        })
       
    }
})

export default blogSlice.reducer;