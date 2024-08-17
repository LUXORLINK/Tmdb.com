import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../config/error/Not.found';

export enum Page_List {
  Section = '/',
  Selected = '/selected',
  People = '/people',
  Movies = '/movies',
  MoviesInfo = '/movie/details',
  About = '/about'
}

export type RoutePageType = {
  path: string;
  Element: JSX.Element;
}

interface IAppRouterProps {
  pages: RoutePageType[];
}

const AppRouter: FC<IAppRouterProps> = ({ pages }) => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.Element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
