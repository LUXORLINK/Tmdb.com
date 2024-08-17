import './BackButton.scss'
import { useNavigate } from "react-router-dom";

const BackButtonActors = () => {
    const navigate = useNavigate();
  
    const goBack = () => {
      navigate('/people'); 
    };
  
    return (
      <button onClick={goBack} style={{ fontSize: '24px', cursor: 'pointer' }} className='back-button2'> &laquo;</button>
    );
  };
  
  export default BackButtonActors;
  