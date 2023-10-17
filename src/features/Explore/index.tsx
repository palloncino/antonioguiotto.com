import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import funnyDog01 from '../../media/images/dog-02.jpg'
import vagabondGif from '../../media/images/vag.gif';
import openAIIcon from '../../media/images/openai.jpg';
import './explore.css';

const Explore = () => {

  const [isHover, setIsHover] = useState(false)

  const navigate = useNavigate()
  const features = [
    {
      id: 1,
      title: "App ChatUp",
      description: "Chat about my working history and life experience. Powered by openai and langchain.",
      route: "/chat-up",
      media: funnyDog01
    },
    {
      id: 2,
      title: "Vagabond diary",
      description: "Personal notes. Brainstorming ideas for sustaining one's flesh and soul in today's age.",
      route: "/vagabond-diary",
      media: vagabondGif,
    },
    {
      id: 3,
      title: "Land pages sandbox",
      description: "This space is for experimenting with chatgpt4 capabilities, creating landing pages with features powered by chatgpt4. Using prompt like: create an interesting page with nice content has to be a tsx component and a css file, the compoenent is named x and so on ...",
      route: "/sandbox01",
      media: openAIIcon
    },
  ];

  return (
    <div className='explore-page-container' style={{ height: `${window.innerHeight}px` }}>
      <h1 className='explore-page-title'>
        <span>E</span>
        <span>x</span>
        <span>p</span>
        <span>l</span>
        <span>o</span>
        <span>r</span>
        <span>e</span>
      </h1>

      <div className="explore-page-cards">
        {features.map(({ id, ...rest }, index) => (
          <Card
            key={`${id}__${index}`}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
