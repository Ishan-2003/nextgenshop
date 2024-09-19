import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="py-4 footer-row">
                    <Col md={4}>
                        <div>
                        <h5>Contact Us</h5>
                        <p>
                            Tollfree: (888) 4322 6001 <br />
                            Email: support@mystore.com
                        </p>

                        </div>
                    </Col>
                    <Col md={4}>
                    <div>
                        <h5>Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>

                    </div>
                    </Col>
                    <Col md = {4}>
                    <h5>Information</h5>
                    <Nav className="flex-column">
                            <Nav.Link href="/privacypolicy">Privacy Policy</Nav.Link>
                            <Nav.Link href="/refundpolicy">Refund Policy</Nav.Link>
                            <Nav.Link href="/shippingpolicy">Shipping Policy</Nav.Link>
                            <Nav.Link href="/termscondition">Terms & Conditions</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4}>
                    <div>
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter size={30}/>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                        </div>

                    </div>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col className="text-center">
                        <p className="mb-0">© 2024 MyStore. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
