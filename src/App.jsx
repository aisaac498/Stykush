import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contacts from "./pages/contacts/contacts";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Error from "./pages/error/error";
import Carts from "./pages/carts/carts";
import Gallery from "./pages/gallery/gallery";
import GuidesRulers from './pages/products/guidesRulers';
import Nibs from './pages/products/nibs';
import Paper from './pages/products/paper';
import Ink from './pages/products/ink';
import History from "./pages/history/history";
import Learning from "./pages/learning/learning";
import Pen from './pages/products/pen';
import Checkout from "./pages/checkout/checkout";
import { CartProvider } from "./context/cartContext";
import { FeedbackProvider } from "./context/feedbackContext";

import './App.css';

function App() {
  return (
    <FeedbackProvider>
      <CartProvider>
        <BrowserRouter>
          <div className='header-navbar-wrapper' >
            
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/history" element={<History />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/products/guides-rulers" element={<GuidesRulers />} />
            <Route path="/products/nibs" element={<Nibs />} />
            <Route path="/products/paper" element={<Paper />} />
            <Route path="/products/ink" element={<Ink />} />
            <Route path="/products/pen" element={<Pen />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </FeedbackProvider>
  );
}

export default App;
