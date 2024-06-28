import React, { useState, useEffect } from 'react';
import '../../styles/ticker.css';  // Corrected path

const Ticker = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b66e7fc2c3b3afe47c9c6c0fc8cbe4cd&units=metric`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              setLocation(data.name ? `${data.name}, ${data.sys.country}` : 'Location unavailable');
            })
            .catch(() => {
              setLocation('Location unavailable');
            });
        },
        () => {
          setLocation('Location unavailable');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ticker">
      {dateTime.toLocaleString()} - {location}
    </div>
  );
};

export default Ticker;
