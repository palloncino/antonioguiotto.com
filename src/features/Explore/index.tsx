import { useNavigate } from 'react-router-dom';
import './explore.css';

const Explore = () => {

  const navigate = useNavigate()
  const features = [
    {
      id: 1,
      title: "Introducing ChatUp! 🎉",
      description: "We're thrilled to announce the latest addition...",
      route: "/chat-up"
    },
  ];

  return (
    <div className='explore-page-container'>
      <h1>Welcome to Antonio's Explore Page! 🌟</h1>
      <div className="explore-page-cards">
        {features.map(({route, id, title, description}, index) => (
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
