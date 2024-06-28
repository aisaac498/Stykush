import React from 'react';
import '../../styles/productCard.css';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { calligraphyInk } from '../../database/ink';
import { calligraphyPen } from '../../database/pen';
import { calligraphyNibs } from '../../database/nibs';
import { calligraphyPaper } from '../../database/paper';
import { calligraphyGuidesRulers } from '../../database/guidesRulers';
import { bestSellerProducts } from '../../database/bestsellers';
import { useCart } from '../../context/cartContext';

function ProductCards({ src, name, price, id, category }) {
  const { cart, setCart } = useCart();

  function handleCart(id, category) {
    const categoryProducts = {
      'calligraphy-ink': calligraphyInk,
      'calligraphy-pen': calligraphyPen,
      'calligraphy-nibs': calligraphyNibs,
      'calligraphy-paper': calligraphyPaper,
      'calligraphy-guides-rulers': calligraphyGuidesRulers,
      'best-seller' :bestSellerProducts
    };

    const product = categoryProducts[category]?.find((product) => product.id === id);
    if (product) {
      setCart([...cart, product]); 
    } else {
      console.error(`Product not found in category: ${category}`);
    }
  }

  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p style={{ color: 'grey' }} className="card-rating">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{' '}
          <span id="card-review"> 200 REVIEWS</span>
        </p>
        <p className="card-text">$ {price} USD </p>
      </div>
        <button onClick={() => handleCart(id, category)} className="btn btn-product-card btn-sm" data-mdb-ripple-init>
          ADD TO CART
        </button>
    </div>
  );
}

export default ProductCards;
