
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
        <div>
          <h3>Intro</h3>
          <p>
            One day I realized: I was jobless in my house, with no friends and nothing to do.
            I travel around Europe ever since I am 18 and I discover many things about myself and my surrounding.
            For the past 5 years I have working on and off as software developer for various companies.
            Even tho I like to develop software for my own personal reasons, working for a company can be tedious
            and boring job. With that said nowadays we have tools that allow us to do things that weren't even in
            the imaginary of people of our fathers.
          </p>
          <h3>Coming up with ideas</h3>
          <p>
            The idea is that you need a minimum amount of money to live, nowadays 1.300 EUR are bare minimum.
            I cut expenses on the housing as I live in my car (rooftent), I always eat the same things and now
            I started to look up for leftovers in restaurants and trashbins.
            Although this might seem unjustified, I feel great about it, because it is a mental excercise, to
            free your mind from people's opinion, which constantly block your personal development as it's freezing you from taking action.

            This last part is currently crucial to me, as I am not yet in a position to be hungry (I still have some money saved up), but I believe that all the wealth in the universe is locked at the other end of my fears.
          </p>

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