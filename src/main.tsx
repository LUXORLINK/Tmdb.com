import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './assets/style/index.scss';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Перечисление языков
export enum LANG {
  EN = 'en',
  RU = 'ru',
}

// Инициализация i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      [LANG.EN]: {
        translation: {
          'LINK HOME': 'HOME',
          'LINK ABOUT': 'ABOUT',
          'LINK MOVIES': 'MOVIES',
          'LINK ACTORS': 'ACTORS',
          'HOME TITLE': 'THIS IS HOME PAGE',
          'ABOUT TITLE': 'THIS IS ABOUT PAGE',
          'NEW MOVIES': 'New Movies',
          'RELEASE DATE': 'Release Date',
          'TITLE DATE': 'Title',
          'ACTORS': 'Actors',
          'NO IMAGE': 'No Image',
          'CHARACTER': 'Character',
          'NO ACTORS AVAILABLE': 'No actors available',
          'ACTOR DETAILS': 'Actor Details',
          'BIRTHDAY': 'Birthday',
          'PLACE OF BIRTH': 'Place of Birth',
          'BIOGRAPHY': 'Biography',
          'FILMOGRAPHY': 'Filmography',
          'LOADING': 'Loading...',
          'ERROR LOADING ACTOR DETAILS': 'Error loading actor details',
          'NO ACTOR DETAILS': 'No actor details available'
        },
      },
      [LANG.RU]: {
        translation: {
          'LINK HOME': 'ГЛАВНАЯ',
          'LINK ABOUT': 'О НАС',
          'LINK MOVIES': 'ФИЛЬМЫ',
          'LINK ACTORS': 'АКТЕРЫ',
          'HOME TITLE': 'ЭТО СТРАНИЦА ГЛАВНАЯ',
          'ABOUT TITLE': 'ЭТО СТРАНИЦА О НАС',
          'NEW MOVIES': 'новинки фильмов',
          'RELEASE DATE': 'Дата выхода',
          'TITLE DATE': 'Название',
          'ACTORS': 'Актеры',
          'NO IMAGE': 'Нет изображения',
          'CHARACTER': 'Персонаж',
          'NO ACTORS AVAILABLE': 'Актеров нет',
          'ACTOR DETAILS': 'Детали актера',
          'BIRTHDAY': 'Дата рождения',
          'PLACE OF BIRTH': 'Место рождения',
          'BIOGRAPHY': 'Биография',
          'FILMOGRAPHY': 'Фильмография',
          'LOADING': 'Загрузка...',
          'ERROR LOADING ACTOR DETAILS': 'Ошибка загрузки данных об актере',
          'NO ACTOR DETAILS': 'Нет данных об актере'
        },
      },
    },
    lng: LANG.EN,
    fallbackLng: LANG.EN,
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
