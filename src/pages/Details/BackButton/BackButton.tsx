
import { useNavigate } from 'react-router-dom';

import './BackButton.scss'

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/'); 
  };

  return (
    <button onClick={goBack} style={{ fontSize: '24px', cursor: 'pointer' }} className='back-button'> &laquo;</button>
  );
};

export default BackButton;



