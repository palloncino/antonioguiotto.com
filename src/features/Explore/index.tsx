import { useNavigate } from 'react-router-dom';
import './explore.css';

const Explore = () => {

  const navigate = useNavigate()
  const features = [
    {
      id: 1,
      title: "Introducing ChatUp",
      description: "Chat about my working history",
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
    <div className='explore-page-container'>
      <h1 className='explore-page-title'>🗺️ Explore page</h1>
      <div className="explore-page-cards">
        {features.map(({ route, id, title, description }, index) => (
          <div onClick={() => navigate(`${route}`)} key={`${id}__${index}`} className="explore-page-card">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
