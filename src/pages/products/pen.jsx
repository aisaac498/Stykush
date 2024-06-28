import React from 'react'
import ProductCards from '../../components/productCards/productCards'
import Footer from '../../components/footer/footer'
import '../../styles/gallery.css'
import useSlideAnimation from '../../animation/useSlideAnimation';
import { calligraphyPen } from '../../database/pen';


function Pen() {
  useSlideAnimation();

  return (
    <div>
      <div className='hidden'>
        <section className="gallery-header-container">
          <h2>CALLIGRAPHY PENS</h2>
          <p>Discover the perfect pen to elevate your calligraphy with precision and elegance.</p>
        </section>
        <div className="gallery-container container text-center">
          <div className="row">
            {calligraphyPen.map((product, index) => (
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
      </div></div>
  )
}

export default Pen