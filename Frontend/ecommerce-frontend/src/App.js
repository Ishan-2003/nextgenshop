import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './features/Components/Layout';
import Home from './features/pages/Home';
import About from './features/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ourstore from './features/pages/Ourstore';
import ContactUs from './features/pages/ContactUs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import ScrollTop from './features/Components/ScrollTop';
import Toolbar from '@mui/material/Toolbar';
import Login from './features/pages/Login';
import Signup from './features/pages/Signup';
import Forgotpassword from './features/pages/Forgotpassword';
import SingleProduct from './features/Components/SingleProduct';
import Cart from './features/pages/Cart';
import Checkout from './features/pages/Checkout';
import Resetpassword from './features/pages/Resetpassword';
import SingleBlog from './features/Components/SingleBlog';
import RefundPolicy from './features/Components/RefundPolicy';
import ShippingPolicy from './features/Components/ShippingPolicy';
import PrivacyPolicy from './features/Components/PrivacyPolicy';
import TermandConditions from './features/Components/TermandConditions';
import Blog from './features/Components/Blog';
import Wishlist from './features/pages/Wishlist';

function App(props) {
  return (
    <>
      <Toolbar id="back-to-top-anchor"/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<ContactUs />} />
            <Route path='store' element={<Ourstore />} />
            <Route path='wishlist' element={<Wishlist />} />
            {/* <Route path='store/:id' element={<SingleProduct />} /> */}
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:id' element={<SingleBlog />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot-password' element={<Forgotpassword />} />
            <Route path='reset-password' element={<Resetpassword />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='termsconditions' element={<TermandConditions />} />
            <Route path='refundpolicy' element={<RefundPolicy />} />
            <Route path='shippingpolicy' element={<ShippingPolicy />} />
            <Route path='privacypolicy' element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
