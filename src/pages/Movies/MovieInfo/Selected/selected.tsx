import { FC, useEffect, useState } from 'react';
import { Movie } from '../../../../api/Create.api';
import './selected.scss'

export const Selected: FC = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        const loadFavorites = () => {
            const favoritesData = JSON.parse(localStorage.getItem('favorites') || '[]');
            setFavorites(favoritesData);
        };

        loadFavorites();
    }, []);

    return (
        <section className='container'>
            <div className="selected">
                <h1>Избранные фильмы</h1>
                {favorites.length > 0 ? (
                    <div className="movie-list">
                        {favorites.map((movie) => (
                            <div key={movie.id} className="movie-card">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='page__movi' />
                                <div className="movie-details">
                                    <h3>{movie.title}</h3>
                                    <p>Дата выхода: {movie.release_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Нет избранных фильмов.</p>
                )}
            </div>
        </section>
    );
}

export default Selected;
