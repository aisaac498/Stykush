import React, { useState, useEffect } from 'react';
import '../../styles/visitorCount.css';

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/your-namespace/your-key');
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };
    fetchVisitorCount();
  }, []);

  return (
    <div className="visitor-count">
      Visitors: {count}
    </div>
  );
};

export default VisitorCount;
