import React from 'react'
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import CategoryCard from '../../components/categorycard/categoryCard';
import { bestSellerProducts } from '../../database/bestsellers';
import ProductCards from '../../components/productCards/productCards';
import '../../styles/home.css'
import Feedback from '../../components/feedback/feedback';



function Home() {
  useSlideAnimation();

  return (
    <div>
      {/* carousel section */}
      <section className='hidden'>
        <Carousel />
      </section>

      {/* shop by category */}
      <div className='container'>
        <section className='container hidden shop-by-category-container'>
          <CategoryCard />
        </section>
      </div>

      {/* best sellers section */}
      <section className='hidden' id='best-sellers-section'>
        <div className="container text-center">
          <h2>MEET OUR BEST SELLERS</h2>
          <div className="row">
            {bestSellerProducts.map((product, index) => (
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
      </section>

      {/* feedback option */}
      <div className='hidden container'>
        <Feedback />
      </div>


      {/* footer section */}
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home