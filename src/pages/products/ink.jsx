import React from 'react'
import ProductCards from '../../components/productCards/productCards'
import Footer from '../../components/footer/footer'
import '../../styles/gallery.css'
import { calligraphyInk } from '../../database/ink';
import useSlideAnimation from '../../animation/useSlideAnimation';

function Ink() {
  useSlideAnimation();

  return (
    <div className='hidden'>
      <section className="gallery-header-container">
        <h2>CALLIGRAPHY INKS</h2>
        <p>Unleash your creativity with our vibrant, high-quality inks for every calligraphy style.</p>
      </section>

      <div className="gallery-container container text-center">
        <div className="row">
          {calligraphyInk.map((product, index) => (
            <div key={index} className="product-div col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <ProductCards
                src={product.imageSrc}
                name={product.name}
                price={product.price}
                id={product.id}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ink