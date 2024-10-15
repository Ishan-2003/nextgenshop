import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/User/UserSlice'
import productReducer from '../features/Products/ProductSlice';
import blogReducer from '../features/Blogs/BlogSlice';
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth : authReducer,
    product : productReducer,
    blog : blogReducer
  },
});
