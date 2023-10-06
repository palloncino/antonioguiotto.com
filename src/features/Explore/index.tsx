import React from 'react';
import gif from './homer-simpson-dancing.gif';
import './explore.css';
import { useNavigate } from 'react-router-dom';

const Explore: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='explore-page-container'>
      <div className="expore-page__container-flex">
        <div className="expore-page-img-container">
          <img src={gif} alt="" />
        </div>
        <div>
          <div>
            <h1>
              Welcome to Antonio's Explore Page! 🌟
            </h1>
            <p>
              Hello and thank you for stopping by! If you're interested in discovering innovative digital experiences, you've come to the right place. Here on the Explore Page, you'll find a curated list of all the different apps that I, Antonio, have created over the years.
            </p>
          </div>
          <div onClick={() => navigate('/chat-up')}>
            <h3>
              Introducing ChatUp! 🎉
            </h3>
            <p>
              We're thrilled to announce the latest addition to this lineup—ChatUp! It's a dynamic and interactive chatbot designed to make your day a little easier and a lot more fun. From answering quick queries to engaging in insightful conversations, ChatUp is more than just a chatbot—it's your new virtual companion.
              So go ahead, explore and enjoy these creations. Each app has been crafted with care and passion, and I'm excited for you to experience them!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
