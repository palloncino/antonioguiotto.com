import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import './explore.css';

const Explore = () => {

  const [isHover, setIsHover] = useState(false)

  const navigate = useNavigate()
  const features = [
    {
      id: 1,
      title: "App ChatUp",
      description: "Chat about my working history and life experience. Powered by openai and langchain.",
      route: "/chat-up"
    },
    {
      id: 2,
      title: "Vagabond diary",
      description: "Personal notes. Brainstorming ideas for sustaining one's flesh and soul in today's age.",
      route: "/vagabond-diary"
    },
    {
      id: 3,
      title: "GPT4 powered page 01",
      description: "This is a page mostly built by Openai APIs, using prompts like: now it's your turn, one chance to show off all of your ability. I want you to make some very appealing Sandbox01 functional component/feature page to impress, needs to be neat but also very appealing and cool, the style should rappresent some content about animals and some animation in the text to make it more engaging, the animal rappresented can be those you can find the most appealing material of, go I need tsx and css, 2 files, best you can do",
      route: "/sandbox01"
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
        {features.map(({ route, id, title, description }, index) => (
          <Card
            key={`${id}__${index}`}
            route={route}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
