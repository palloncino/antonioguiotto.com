import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import './Notes.css';

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
        <li>
          <strong>Chatbot:</strong>
          <ul>
            <li>Create an intelligent chatbot using APIs like OpenAI's GPT-3 to handle user queries or offer product recommendations.</li>
            <li>Utilize a sleek, animated UI to make interactions lively and engaging.</li>
          </ul>
        </li>
        <li>
          <strong>Image Recognition:</strong>
          <ul>
            <li>Integrate an image recognition API such as Google Cloud Vision or AWS Rekognition to identify objects or faces in photos.</li>
            <li>Visualize the results with animations, highlighting recognized objects within the images.</li>
          </ul>
        </li>
        <li>
          <strong>Language Translation:</strong>
          <ul>
            <li>Incorporate a language translation API to offer real-time translation between various languages.</li>
            <li>Implement a smooth, animated transition between the original text and the translation.</li>
          </ul>
        </li>
        <li>
          <strong>Sentiment Analysis:</strong>
          <ul>
            <li>Utilize sentiment analysis APIs to gauge the mood of user-provided text.</li>
            <li>Display the sentiment score with a dynamic, visually appealing gauge or meter.</li>
          </ul>
        </li>
        <li>
          <strong>Voice Recognition and Synthesis:</strong>
          <ul>
            <li>Integrate voice recognition to allow users to interact with your app using their voice, and text-to-speech synthesis for auditory responses.</li>
            <li>Use sound wave animations to indicate when the app is listening or speaking.</li>
          </ul>
        </li>
        <li>
          <strong>Automated Content Creation:</strong>
          <ul>
            <li>Use AI to help users generate content, like blog posts, poems, or even artwork.</li>
            <li>Display the generation process in real-time with animations, showing the AI’s “thought process” as it creates.</li>
          </ul>
        </li>
        <li>
          <strong>Personalized Recommendations:</strong>
          <ul>
            <li>Implement a recommendation engine that learns from user interactions to provide personalized suggestions.</li>
            <li>Use animation to unveil new recommendations in an engaging manner.</li>
          </ul>
        </li>
        <li>
          <strong>Augmented Reality (AR):</strong>
          <ul>
            <li>Merge AI with AR to provide users with interactive, real-world experiences. For example, a virtual try-on feature for clothes or glasses.</li>
            <li>Utilize smooth animations and transitions as users interact with AR elements.</li>
          </ul>
        </li>
        <li>
          <strong>Predictive Analysis:</strong>
          <ul>
            <li>Allow users to input data and use AI to provide predictions or insights.</li>
            <li>Use charts, graphs, and other visualizations to display the analysis in a clear and engaging manner.</li>
          </ul>
        </li>
        <li>
          <strong>Learning and Development:</strong>
          <ul>
            <li>Create a platform where users can learn about various topics, with AI assessing their progress and adapting the curriculum based on their performance.</li>
            <li>Utilize animations to illustrate concepts and provide instant feedback.</li>
          </ul>
        </li>
      </ul>


    </div>
  );
};

export default Page01;
