import { useNavigate } from 'react-router-dom';
import './documents.css';

const Documents = () => {

  const navigate = useNavigate()

  return (
    <div className='documents-page-container'>
      <div onClick={() => navigate('/')}>
        go back 
      </div>
    </div>
  );
};

export default Documents;
