import React from 'react';
import { Link } from 'react-router-dom';
import './Not.found.scss';

export const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404 - Страница не найдена</h1>
            <p>К сожалению, запрашиваемая вами страница не существует.</p>
            <Link to="/" className="home-link">
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default NotFound;
