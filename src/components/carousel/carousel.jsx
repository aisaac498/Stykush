import React from 'react';
import '../../styles/home.css';
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            <div className="carousel-inner">
            <div className="carousel-item active">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://unsplash.com/photos/_d2YajYba98/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNhbGxpZ3JhcGh5fGVufDB8MHx8fDE3MTk1MDcwMTd8MA&force=true&w=1920' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Experience the Art of Words</h2>
                            <p>Explore our gallery to witness the elegance and precision of calligraphy, where each stroke tells a timeless story.</p>
                            <Link to='/gallery'>
                                <button>LEARN MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://unsplash.com/photos/2NPV75ItVhg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDJ8fGNhbGxpZ3JhcGh5fGVufDB8MHx8fDE3MTg5NjcxNjB8MA&force=true&w=1920' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Embark on your Calligraphy Journey</h2>
                            <p>Embark on your calligraphy journey with Stylish Strokes, where every stroke is a step towards mastering the art. We're here to guide you with expert tutorials, tips, and tools. Explore our diverse selection of courses and resources today.</p>
                            <Link to='/learning'>
                                <button>GET STARTED</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://unsplash.com/photos/egEuzZNpjvE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGNhbGxpZ3JhcGh5fGVufDB8fHx8MTcxODk0MjAxM3ww&force=true&w=1920' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Dive into the Art of Calligraphy</h2>
                            <p>Discover exquisite tools and techniques to perfect your craft. Designed for all skill levels, our resources will inspire and guide you every step of the way.</p>
                            <Link to='/products/pen'>
                                <button>SHOP NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </div>
    );
}

export default Carousel;
