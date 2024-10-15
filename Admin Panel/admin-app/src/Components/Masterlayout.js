import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
// import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
// import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
// import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import CategoryIcon from '@mui/icons-material/Category';
import SegmentIcon from '@mui/icons-material/Segment';
import PeopleIcon from '@mui/icons-material/People';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { FaBlog } from "react-icons/fa6";
import { ImBlog } from "react-icons/im"
import { Link, Outlet } from "react-router-dom";
// import React, { useState } from "react";
import image from "../Assets/images/full-scott-adkins.jpg"
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
// import { Fragment } from "react";
const App = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="admin-master-layout">
      <Sidebar className="admin-sidebar">
        <Menu>
          <div id="hamburger">
            <MenuItem
              component={<Link to="" className="link" />}
              icon={<MenuRoundedIcon style={{ color: "black"}} />}
              onClick={() => {
                collapseSidebar();
              }}
            >
              Admin
            </MenuItem>

          </div>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            icon={<GridViewRoundedIcon style={{ color: "black" }} />}>
            Dashboard
          </MenuItem>
          <MenuItem component={<Link to="customer" className="link" />} icon={<PeopleIcon style={{ color: "black" }} />}>
            Customers
          </MenuItem>
          <SubMenu label="Catalog" icon={<ShoppingCartIcon style={{ color: "black" }} />} key="Catalog">
            <MenuItem component={<Link to="product" className="link" />} icon={<Inventory2Icon style={{ color: "black" }} />} className="subitem">Add Product </MenuItem>
            <MenuItem component={<Link to="product-list" className="link" />} icon={<SegmentIcon style={{ color: "black" }} />} className="subitem"> Product List </MenuItem>
            <MenuItem component={<Link to="category" className="link" />} icon={<BrandingWatermarkIcon style={{ color: "black" }} />} className="subitem"> Brand </MenuItem>
            <MenuItem component={<Link to="category-list" className="link" />} icon={<SegmentIcon style={{ color: "black" }} />} className="subitem"> Brand List</MenuItem>
            <MenuItem component={<Link to="category" className="link" />} icon={<CategoryIcon style={{ color: "black" }} />} className="subitem"> Category</MenuItem>
            <MenuItem component={<Link to="category-list" className="link" />} icon={<SegmentIcon style={{ color: "black" }} />} className="subitem"> Category List</MenuItem>
            <MenuItem component={<Link to="color" className="link" />} icon={<ColorLensRoundedIcon style={{ color: "black" }} />} className="subitem"> Color</MenuItem>
            <MenuItem component={<Link to="color-list" className="link" />} icon={<SegmentIcon style={{ color: "black" }} />} className="subitem"> Color List</MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="order" className="link" />} icon={<LocalShippingIcon style={{ color: "black" }} />}>
            Orders
          </MenuItem>
          <SubMenu label="Blogs" icon={<FaBlog fontSize="22px" style={{ color: "black" }} />}>
            <MenuItem component={<Link to="blog" className="link" />} icon={<ImBlog style={{ color: "black" }} />} className="subitem"> Add Blog</MenuItem>
            <MenuItem component={<Link to="blog-list" className="link" />} icon={<FaBlog style={{ color: "black" }} />} className="subitem"> Blog List</MenuItem>
            <MenuItem component={<Link to="blog-category" className="link" />} icon={<ImBlog style={{ color: "black" }} />} className="subitem">Add Blog Category</MenuItem>
            <MenuItem component={<Link to="blog-category-list" className="link" />} icon={<FaBlog style={{ color: "black" }} />} className="subitem"> Blog Category List</MenuItem>

          </SubMenu>
          <MenuItem component={<Link to="enquirie" className="link" />} icon={<SupportAgentIcon style={{ color: "black" }} />}>
            Enquiries
          </MenuItem>
          <MenuItem component={<Link to="logout" className="link" />} icon={<LogoutRoundedIcon style={{ color: "black" }} />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <div className="admin-main-layout">

        <header className="admin-nav">
          <div>
            <h1>LOGO</h1>
          </div>
          <div className="sign-in-info">
            <div className="admin-nav-img">
              <img src={image} alt="" />
            </div>
            <div>
              <h3>Ishan</h3>
              <p>Email : 21bcs022@nith.ac.in</p>
            </div>
          </div>
        </header>
        <section>
          <div className="outlet">
            <Outlet />
          </div>
        </section>

      </div>

    </div>
  );
};
export default App;