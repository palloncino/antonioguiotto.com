
import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import './VagabondDiary.css';

const Page01 = () => {

  const navigate = useNavigate()

  return (
    <div className="VagabondDiaryContainer">
        <div className='VagabondDiaryHeaderContainer'>
          <Button onClick={() => navigate('/')} label="Back" />
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
    )
};

export default Page01;