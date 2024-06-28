import React, { useState, useEffect } from 'react';
import '../../styles/contacts.css';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import { FaPhone } from "react-icons/fa6";
import { useFeedback } from "../../context/feedbackContext";

function MapComponent({ address }) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCOmUvYh3QOFTFZSihs75tueN_e7ebcwAg`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch coordinates');
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          throw new Error('No results found');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  useEffect(() => {
    const initializeMap = () => {
      if (coordinates) {
        const map = new window.google.maps.Map(document.getElementById(`map-${address}`), {
          center: coordinates,
          zoom: 12
        });
        new window.google.maps.Marker({
          position: coordinates,
          map: map,
          title: address
        });
      }
    };

    if (coordinates) {
      if (window.google && window.google.maps) {
        initializeMap();
      } else {
        window.initMap = initializeMap;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCOmUvYh3QOFTFZSihs75tueN_e7ebcwAg&callback=initMap`;
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, [coordinates, address]);

  return (
    <div className='map' id={`map-${address}`} style={{ width: '300px', height: '350px' }}></div>
  );
}

function Contacts() {
  useSlideAnimation();
  const address = { address: "49 Admiralty way, Lekki Phase I", phone: "+234 123 456 7890" };
  const { addFeedback } = useFeedback();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const feedbackData = {
      name: formData.get('name'),
      message: formData.get('message')
    };
    addFeedback(feedbackData);
    e.target.reset();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('showFeedback')) {
      document.getElementById('contact-us-container').scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='hidden' id='contact-us-container'>
      {showAlert && <div className="alert">Feedback added</div>}
      <h3 className= 'feedback-header'>FEEDBACK</h3>
      <p>You can reach out to us if you have any questions</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
        </div>
        <br />
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name="message" style={{ height: "100px" }} required></textarea>
          <label htmlFor="floatingTextarea2">Message</label>
        </div>
        <br />
        <button style={{ width: '100%' }} type="submit" className="btn btn-dark">Send</button>
      </form>

      <br />
      <h3>CONTACT US</h3>
      <h4>OUR LOCATIONS</h4>
      <div id='map-container'>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column align-items-center">
            <div className="location-info text-center">
              <MapComponent address={address.address} />
              <span id='address'>{address.address}</span>
              <br />
              <span id='number'><FaPhone /> {address.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacts;
