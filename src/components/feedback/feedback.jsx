import React, { useEffect } from 'react';
import '../../styles/contacts.css';
import { Link } from 'react-router-dom';
import { useFeedback } from '../../context/feedbackContext';

function Feedback() {
  const { feedback } = useFeedback();

  useEffect(() => {
    const interval = setInterval(() => {
      const carouselElement = document.querySelector('#carouselExample');
      if (carouselElement) {
        const nextButton = carouselElement.querySelector('.carousel-control-next');
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExample" className="feedback-carousel carousel slide">
      <h4 id='fb-hd'>What Our Customers Say</h4>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{marginTop: '120px', marginLeft: '10px', marginRight: '10px' }}>
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{marginTop: '120px', marginLeft: '10px', marginRight: '10px' }}>
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="feedb carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100">
            <p>Stylish Strokes has completely transformed my calligraphy journey! Their high-quality tools and comprehensive tutorials have significantly improved my skills. The supportive community and expert guidance make learning enjoyable and effective. I've seen remarkable progress in just a few months. I highly recommend it to enthusiasts of all levels.</p>
            <h6><strong>Chloe Robinson</strong></h6>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100">
            <p>Stylish Strokes has transformed my calligraphy skills! Their tutorials are clear and easy to follow, and the quality of their tools is exceptional. I've seen remarkable improvement in my lettering and confidence. The community support is fantastic, and I always find inspiration. Highly recommend for both beginners and experienced calligraphers. Stylish Strokes truly rocks!</p>
            <h6><strong>Resi Theresa</strong></h6>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100">
            <p>Stylish Strokes has completely transformed my calligraphy skills! The tutorials are easy to follow, and the quality of the tools is exceptional. The community is incredibly supportive, providing valuable feedback and inspiration. I've seen a significant improvement in my technique and confidence.</p>
            <h6><strong>Rachel Adams</strong></h6>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100">
            <p>Stylish Strokes has transformed my calligraphy journey! The high-quality supplies and detailed tutorials have significantly improved my skills. The supportive community and expert guidance make learning enjoyable and rewarding. I highly recommend Stylish Strokes to anyone passionate about calligraphy – it’s truly a haven for both beginners and experienced artists.</p>
            <h6><strong>Grace Chen</strong></h6>
          </div>
        </div>

        {feedback.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="d-block w-100">
              <p>{item.message}</p>
              <h6><strong>{item.name}</strong></h6>
            </div>
          </div>
        ))}

      </div>
      <Link to='/contact?showFeedback=true'>
        <button id='review-btn'>Leave a Review</button>
      </Link>
    </div>
  );
}

export default Feedback;
