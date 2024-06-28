import React from 'react';
import '../../styles/footer.css';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaYoutube, FaTiktok } from "react-icons/fa";
import Ticker from '../../components/ticker/ticker';

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-0.6"></i>STYLISH STROKES
                            </h6>
                            <p>
                            Stylish Strokes is a premier destination for calligraphy enthusiasts and artists. 
                            Known for our high-quality supplies and expert guidance, we have been inspiring beautiful writing since 1985. 
                            Explore our extensive collection and experience our exceptional service today.
                            <br />
                            <FaFacebook /> <FaTwitterSquare /> <FaInstagramSquare /> <FaYoutube /> <FaTiktok />
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Quick Links
                            </h6>
                            <p>
                                <a href="/About" className="text-reset">About Us</a>
                            </p>
                            <p>
                                <a href="/gallery" className="text-reset">Gallery</a>
                            </p>
                            <p>
                                <a href="/history" className="text-reset">History of Calligraphy</a>
                            </p>
                            <p>
                                <a href="/learning" className="text-reset">Learning Resources</a>
                            </p>
                            <p>
                                <a href="/contact" className="text-reset">Let's Talk!</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Reach Us</h6>
                            <p><i className="fas fa-home me-1"></i>49 Admiralty way, Lekki Phase I</p>
                            <p><i className="fas fa-envelope me-1"></i>sylishstrokes12@gmail.com</p>
                            <p><i className="fas fa-phone me-1"></i>+234 123 456 7890</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-copyright text-center p-4">
                Copyright © 2024
                <br />
                <span>STYLISH STROKES</span>
                <Ticker />
            </div>
        </footer>
    );
}

export default Footer;
