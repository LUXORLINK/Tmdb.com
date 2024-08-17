import Movies from '../../pages/Movies/Movies';
import { FC } from 'react';
import './Scetion.scss'
import imgs3 from '../../assets/images/wrapper-fon.jpg'

const Section: FC = () => {

  const onSelectMovie = (id: string) => {
    console.log(`Selected movie ID: ${id}`);
  };

  return (
    <section className="wrapper">
      <img src={imgs3} alt="" className='wrapper__fon' />
      <div className="container">
        <Movies onSelectMovie={onSelectMovie} />
      </div>
    </section>
  );
};

export default Section;
