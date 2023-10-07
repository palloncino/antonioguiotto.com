import { useNavigate } from 'react-router-dom';
import './documents.css';

const Documents = () => {

  const navigate = useNavigate()

  return (
    <div className='documents-page-container'>
      <button onClick={() => navigate('/')}>
        Go Back to Explore page
      </button>
      <h3>
        Request documents at powerhydratoni@gmail.com
      </h3>
    </div>
  );
};

export default Documents;
