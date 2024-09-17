import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './features/counter/Components/Layout';
import Home from './features/counter/pages/Home';
import About from './features/counter/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ourstore from './features/counter/pages/Ourstore';
import ContactUs from './features/counter/pages/ContactUs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import ScrollTop from './features/counter/Components/ScrollTop';
import Toolbar from '@mui/material/Toolbar';
import Login from './features/counter/pages/Login';
import Signup from './features/counter/pages/Signup';
import Forgotpassword from './features/counter/pages/Forgotpassword';
import SingleProduct from './features/counter/Components/SingleProduct';
import Cart from './features/counter/pages/Cart';
import Checkout from './features/counter/pages/Checkout';
import Resetpassword from './features/counter/pages/Resetpassword';
import SingleBlog from './features/counter/Components/SingleBlog';

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
            <Route path='store/:id' element={<SingleProduct />} />
            <Route path='blog/:id' element={<SingleBlog />} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot-password' element={<Forgotpassword />} />
            <Route path='reset-password' element={<Resetpassword />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
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
