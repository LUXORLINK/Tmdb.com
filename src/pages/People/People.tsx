import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Actor } from '../../api/Create.api';
import './People.scss';

interface PeopleProps {
  actors: Actor[];
}

export const People: React.FC<PeopleProps> = ({ actors }) => {
  const { t } = useTranslation();

  return (
    <section className="wrapper">
      <div className="container">
          <h2>{t('ACTORS')}</h2>
          {actors.length > 0 ? (
            <div className="actors-grid">
              {actors.map(actor => (
                <Link
                  className="actor-card"
                  to={`/actor/details/${actor.id}`}
                  key={actor.cast_id}
                >
                  {actor.profile_path ? (
                    <img className="actor-img" src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name}  />
                  ) : (
                    <div className="no-image-placeholder">{t('NO IMAGE')}</div>
                  )}
                  <div className="actor-details">
                    <div className="box">
                      <h3>{actor.name}</h3>
                      <p>{t('CHARACTER')}: {actor.character}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>{t('NO ACTORS AVAILABLE')}</p>
          )}
  
      </div>
    </section>
  );
};

export default People;
