import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import './VagabondDiary.css';

const Page01 = () => {

  const [height, setHeight] = useState(window.innerHeight);
  const navigate = useNavigate()

  // Update the height state whenever the window resizes
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    
    // Attach the event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty dependency array means this useEffect runs once, similar to componentDidMount

  return (
    <div className="VagabondDiaryContainer" style={{ height: `${height}px` }}>

        <div className='VagabondDiaryHeaderContainer'>
          <Button onClick={() => navigate('/')} label="Back" link />
        </div>

        <h3>
          Ideas
        </h3>
        <ul>
          <li>Reporter: record videos where you describe certain areas souther Spain. From Girona to Malaga</li>
          <li>Reporter: Interview people in the weekend outside clubs and bars in barcelona (born)</li>
          <li>Go around and make tattoos, ask strangers, document your journey</li>
          <li>Be a reporter in psytrance festivals</li>
        </ul>
    </div>
  );
};

export default Page01;
