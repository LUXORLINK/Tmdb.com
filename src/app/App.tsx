import { FC, useState, useEffect } from 'react';
import AppRouter, { Page_List, RoutePageType } from './routes/AppRouter';
import Movies from '../pages/Movies/Movies';
import MovieInfo from '../pages/Movies/MovieInfo/MovieInfo';
import { Section } from '../components/Section';
import { Header } from '../components/Header';
import People from '../pages/People/People';
import { getMovieCredits, Actor } from '../api/Create.api';
import About from '../pages/About/About';
import './index.scss'
import Sidebar from '../pages/Sidebar/Sidebar';
import Selected from '../pages/Movies/MovieInfo/Selected/selected';
import ActorDetails from '../pages/People/ActorDetails/ActorDetails';

const App: FC = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [movieId, setMovieId] = useState<string>('550'); 

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorData = await getMovieCredits(movieId);
        console.log('Actors:', actorData); 
        setActors(actorData);
      } catch (error) {
        console.error('Ошибка при загрузке данных актеров:', error);
      }
    };

    fetchActors();
  }, [movieId]);

  const handleMovieSelect = (id: string) => {
    setMovieId(id);
  };

  const routes: RoutePageType[] = [
    {
      path: Page_List.Section,
      Element: <Section />
    },
    {
      path: Page_List.Selected,
      Element: <Selected/>
    },
    {
      path: Page_List.People,
      Element: <People actors={actors} />
    },
    {
      path: Page_List.Movies,
      Element: <Movies onSelectMovie={handleMovieSelect} />
    },
    {
      path: `${Page_List.MoviesInfo}/:id`,
      Element: <MovieInfo />
    },
    {
      path: `${Page_List.About}`,
      Element: <About />
    },
    {
      path: '/actor/details/:id', 
      Element: <ActorDetails />
    }
  ];

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
       <Sidebar/>
        <main className="content">
          <AppRouter pages={routes} />
        </main>
      </div>
    </div>
  );
};

export default App;
