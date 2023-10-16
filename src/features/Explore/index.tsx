import { useNavigate } from 'react-router-dom';
import './explore.css';

const Explore = () => {

  const navigate = useNavigate()
  const features = [
    {
      id: 1,
      title: "Introducing ChatUp",
      description: "Chat about data related to my working history and life experience",
      route: "/chat-up"
    },
    {
      id: 2,
      title: "Vagabond diary",
      description: "Brainstorming ideas for sustaining one's flesh and soul in today's age",
      route: "/vagabond-diary"
    },
  ];

  return (
    <div className='explore-page-container' style={{ height: `${window.innerHeight}px` }}>
      <div className="explore-page-cards">
        {features.map(({ route, id, title, description }, index) => (
          <div
            onClick={() => navigate(`${route}`)} key={`${id}__${index}`} className="explore-page-card">
            <div className="explore-card-title">
              {title}
            </div>
            <div className="explore-card-description">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
