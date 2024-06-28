import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../../styles/navbar.css';
import { LiaPenNibSolid } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";
import VisitorCount from '../../components/visitorCount/visitorCount';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      // Logic for showing/hiding a button could go here if needed
    } else {
      // Logic for showing/hiding a button could go here if needed
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="navbar-container container">
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            <LiaPenNibSolid />
            <div className="main-text">Stylish Strokes</div>
            <div className="sub-text">ELEGANT EXPRESSION</div>
            <VisitorCount />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleClick}
            aria-controls="navbarSupportedContent"
            aria-expanded={click}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={click ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about" onClick={closeMobileMenu}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" aria-expanded="false" to="/products" onClick={(e) => e.preventDefault()}>Resources</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/history" onClick={closeMobileMenu}>History of Calligraphy</Link></li>
                  <li><Link className="dropdown-item" to="/learning" onClick={closeMobileMenu}>Learning Resources</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" aria-expanded="false" to="/products" onClick={(e) => e.preventDefault()}>Shop</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/products/pen" onClick={closeMobileMenu}>Calligraphy Pen</Link></li>
                  <li><Link className="dropdown-item" to="/products/ink" onClick={closeMobileMenu}>Calligraphy Ink</Link></li>
                  <li><Link className="dropdown-item" to="/products/nibs" onClick={closeMobileMenu}>Nibs</Link></li>
                  <li><Link className="dropdown-item" to="/products/paper" onClick={closeMobileMenu}>Calligraphy Paper</Link></li>
                  <li><Link className="dropdown-item" to="/products/guides-rulers" onClick={closeMobileMenu}>Guides and Rulers</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact" onClick={closeMobileMenu}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/cart" onClick={closeMobileMenu}>
                  <FaShoppingCart size='23'/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
