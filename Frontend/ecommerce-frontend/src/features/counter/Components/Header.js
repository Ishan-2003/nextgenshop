import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="px-3 header-master-sec">
                <div className="offer">
                    <p>Free Shipping Over $100 & no extra charges</p>
                </div>
                <div className="contact-info">
                    <p>
                        Tollfree : (888) 4322 6001 - (888) 5322 8002
                    </p>
                </div>
            </Navbar>
            <Navbar expand="lg" className="px-3 header-master-main" id='sec-nav'>
                <Navbar.Brand href="#home">
                    <i className="fas fa-store"></i> MyStore
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                        <Form className="d-flex mx-auto w-100 h-25 gap-2 nav-btn-color">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success" className='d-flex gap-3'>Search <div><BsSearch className='search'/></div></Button>
                        </Form>
                        
                    <Nav>
                        <Nav.Link href="#cart">
                            <i className="fas fa-shopping-cart"></i> Cart
                        </Nav.Link>
                        <Nav.Link href="#login">
                            <i className="fas fa-user"></i> Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Navbar expand="lg" className="px-3 header-master-main" id='sec-nav'>
            <Nav className="mr-auto">
            <Navbar.Collapse id="basic-navbar-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#category/1">Category 1</NavDropdown.Item>
                            <NavDropdown.Item href="#category/2">Category 2</NavDropdown.Item>
                            <NavDropdown.Item href="#category/3">Category 3</NavDropdown.Item>
                        </NavDropdown>
                        </Navbar.Collapse>
                    </Nav>
            </Navbar>
           
        </>

    );
}

export default Header;
