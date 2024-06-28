import React from 'react';
import '../../styles/about.css';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import { Link } from 'react-router-dom';
import TeamSection from '../../components/teamSection/teamSection';

function About() {
  useSlideAnimation();
  return (
    <div>
      <div id='about-hd-img'>
        <h3>ABOUT US</h3>
      </div>

      <div style={{ textAlign: 'center' }} className="about-bg hidden ">
        <div className="text">
          <nav className='about-breadcrumb' aria-label="breadcrumb">
            <ol className=" breadcrumb">
              <li className="breadcrumb-item active" aria-current="page"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item">About</li>
            </ol>
          </nav>

          <h4 className='header'>OUR STORY</h4>
          <p>Stylish Strokes is a thriving sanctuary for calligraphy enthusiasts, offering an extensive array of tools, tutorials, and resources for mastering the art of beautiful writing. 
            Since its inception, Stylish Strokes has been synonymous with quality and creativity, dedicated to nurturing the calligraphic talents of individuals worldwide.
          </p>
          <p>
          With our reach expanding across various platforms and communities, Stylish Strokes remains committed to providing premium offerings and personalized guidance. 
          At Stylish Strokes, we believe in the transformative power of art and self-expression, empowering individuals to create and share their unique stories through elegant script.
          </p>
          <p>
          Explore Stylish Strokes for an inspiring collection of calligraphy supplies and innovative resources, where each visit promises growth and artistic fulfillment. 
          Our experienced team of calligraphers and educators is devoted to offering the highest level of support, ensuring that every member of our community feels inspired and equipped to achieve their creative potential.
          </p>

        </div>
        
        <h4 className='header'>OUR MISSION</h4>
        <p className="mission">Our mission at Stylish Strokes is to redefine the calligraphy landscape by delivering unparalleled quality and service since our establishment. 
          With a strong foundation in the art community, we have broadened our influence, driven by the success and trust of our dedicated members. 
          We are committed to offering a diverse range of calligraphy tools, tutorials, and support, setting the highest standards for quality and innovation. 
          Our unwavering dedication to exceptional service ensures that every individual experiences the joy of learning and creating with calligraphy. 
          At Stylish Strokes, we strive to empower artists to embrace their creativity and enhance their skills, making every interaction a rewarding and transformative experience.
          </p>

        <div>
        <TeamSection />
        </div>

        <div>
          <h4 className='header'>What We Offer</h4>
          <ul className="no-dots">
            <li>Tutorials and Guides: Step-by-step instructions for various calligraphy styles and techniques.</li>
            <li>High-Quality Supplies: A curated selection of the best tools and materials for calligraphers.</li>
            <li>Inspiration and Ideas: Regular blog posts, articles, and a gallery showcasing beautiful calligraphy.</li>
            <li>Events and Workshops: Opportunities to learn from experts and participate in calligraphy events.
            </li>
          </ul>
        </div>

        <h4 className='header'>Join Us</h4>
        <p>
        We invite you to join our community and embark on your calligraphy journey with Stylish Strokes. Explore our resources, connect with fellow enthusiasts, and create beautiful works of art. 
        Together, we can bring the timeless elegance of calligraphy to the world.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
