import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, Movie } from '../../../api/Create.api';
import BackButton from '../../Details/BackButton/BackButton';
import './MovieInfo.scss';
import imgs from '../../../assets/images/123bookmark_99967.png';

export const MovieInfo: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieById(id!);
        setMovie(movieData);

        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some((fav: Movie) => fav.id === movieData.id));
      } catch (error) {
        console.error('Ошибка при загрузке данных о фильме:', error);
        setError('Ошибка при загрузке данных о фильме');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  const handleFavoriteChange = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      // Удалить из избранных
      const updatedFavorites = favorites.filter((fav: Movie) => fav.id !== movie!.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Добавить в избранные
      favorites.push(movie!);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!movie) return <div>Фильм не найден</div>;

  return (
    <section className='wrapper'>
      <div className='container'>
        <BackButton />
        <div className="movie-details" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
          <label>
            <img
              className={`Selected-imgs ${isFavorite ? 'active' : ''}`}
              src={imgs}
              alt="Add to favorites"
              onClick={handleFavoriteChange}
            />
          </label>
          <div className="details-content">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="text-details">
              <h3>{movie.title} ({new Date(movie.release_date).getFullYear()})</h3>
              <p>Статус: {movie.status}</p>
              <p>Длительность: {movie.runtime} минут</p>
              <p>Дата выхода: {movie.release_date}</p>
              <p>Популярность: {movie.popularity}</p>
              <p>Рейтинг: {movie.vote_average}</p>
              <p>Жанры: {movie.genres.map(genre => genre.name).join(', ')}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieInfo;

