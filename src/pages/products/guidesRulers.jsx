import React from 'react'
import ProductCards from '../../components/productCards/productCards'
import Footer from '../../components/footer/footer'
import '../../styles/gallery.css'
import useSlideAnimation from '../../animation/useSlideAnimation';
import { calligraphyGuidesRulers } from '../../database/guidesRulers';

function GuidesRulers() {
  useSlideAnimation();

  return (
    <div className='hidden'>
      <section className="gallery-header-container">
        <h2>CALLIGRAPHY GUIDES & RULERS</h2>
        <p>Perfect your art with our precision guides and rulers for flawless calligraphy every time.</p>
      </section>
      <div className="gallery-container container text-center">
        <div className="row">
          {calligraphyGuidesRulers.map((product, index) => (
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

export default GuidesRulers