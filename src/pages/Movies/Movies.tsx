import { FC, useEffect, useState } from 'react';
import './Movies.scss';
import { Link } from 'react-router-dom';
import { getAllMovies, Movie } from '../../api/Create.api';
import Pagination from '../Details/Pagination/Pagination';
import Search from '../Details/SearchMovi/Search';
import { useTranslation } from 'react-i18next';

interface MoviesProps {
  onSelectMovie: (id: string) => void;
}

export const Movies: FC<MoviesProps> = ({ onSelectMovie }) => {
  const { t, i18n } = useTranslation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const moviesPerPage = 20;

  useEffect(() => {
    fetchMovies();
  }, [i18n.language]); 

  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchQuery]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const moviesData = await getAllMovies(13, i18n.language);
      if (moviesData && moviesData.results) {
        setMovies(moviesData.results);
        setFilteredMovies(moviesData.results);
      } else {
        throw new Error(t('ERROR LOADING MOVIES'));
      }
    } catch (error) {
      console.error(t('ERROR LOADING MOVIES'), error);
      setError(t('ERROR LOADING MOVIES'));
      setMovies([]);
      setFilteredMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectMovie = (id: string) => {
    onSelectMovie(id);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  if (loading) return <div>{t('LOADING')}</div>
  if (error) return <div>{t(error)}</div>

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div className="wrapper__box">
      <h2>{t('NEW MOVIES')}</h2>
      <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className="movies-list">
        {currentMovies.map(movie => (
          <Link
            className="card"
            to={`/movie/details/${movie.id}`}
            key={movie.id}
            onClick={() => handleSelectMovie(movie.id.toString())}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="details">
              <h3>{movie.title}</h3>
              <p>{t('RELEASE DATE')}: {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleSelectPage}
      />
    </div>
  );
};

export default Movies;
