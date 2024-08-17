import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getActorDetails } from '../../../api/Create.api';
import './ActorDetails.scss';
import BackButtonActors from '../../Details/BackButton/BackButtonActors';

const ActorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [actor, setActor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchActorDetails(id);
    }
  }, [id]);

  const fetchActorDetails = async (id: string) => {
    try {
      const data = await getActorDetails(id);
      setActor(data);
    } catch (error) {
      console.error('Error fetching actor details:', error);
      setError(t('ERROR LOADING ACTOR DETAILS'));
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>{t('LOADING')}</div>;
  if (error) return <div>{t(error)}</div>;

  return (
    <div className="actor-details">
      <BackButtonActors/>
      {actor ? (
        <>
          <div className="actor-info">
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
            <div className="info">
              <h2>{actor.name}</h2>
              <p>{t('BIRTHDAY')}: {actor.birthday}</p>
              <p>{t('PLACE OF BIRTH')}: {actor.place_of_birth}</p>
              <p>{t('BIOGRAPHY')}: {actor.biography}</p>
            </div>
          </div>
          <div className="movie-credits">
            <h4>{t('FILMOGRAPHY')}</h4>
            <ul className="movie-list">
              {actor.movie_credits.cast.map((movie: any) => (
                <li className="movie-card" key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  <div>
                    <h5>{movie.title}</h5>
                    <p>{t('CHARACTER')}: {movie.character}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>{t('NO ACTOR DETAILS')}</div>
      )}
    </div>
  );
};

export default ActorDetails;
