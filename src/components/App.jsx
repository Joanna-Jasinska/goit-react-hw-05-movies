import { useEffect } from 'react';
import {
  Routes,
  Route,
  NavLink,
  useParams,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MainPage } from 'pages/MainPage';
import { SearchMoviesPage } from 'pages/SearchMoviesPage';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { Searchbar } from './Searchbar/Searchbar';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { Article } from './Article/Article';
import { NotFoundPage } from 'pages/NotFoundPage';
import { CreditsPage } from 'pages/CreditsPage';

export const App = () => {
  const location = useLocation();
  const idToScrollTo = `#${
    location.state.from.substring(location.state.from.lastIndexOf('/') + 1) ||
    'home'
  }`;
  const scrollTo = location.state
    ? document.querySelector(idToScrollTo)
    : undefined;
  useEffect(() => {
    console.log(`[${idToScrollTo}]`);
    console.log(scrollTo);
    if (scrollTo) {
      scrollTo.scrollIntoView();
    }
    // window.scrollTo(0, scrollTo);
  }, [location, scrollTo]);
  useEffect(() => {
    document.title = 'Movie Finder';
    const canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;
    const ctx = canvas.getContext('2d');
    // ctx.fillStyle = '#99ccff';
    ctx.font = '64px serif';
    ctx.fillText('🎬', -10, 53);

    const link = document.createElement('link');
    const oldLinks = document.querySelectorAll('link[rel="icon"]');
    oldLinks.forEach(e => e.parentNode.removeChild(e));
    link.id = 'movie-favicon';
    link.rel = 'icon';
    link.href = canvas.toDataURL();
    document.head.appendChild(link);
  }, []);
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="credits" element={<CreditsPage />} />
            <Route path="movies" element={<SearchMoviesPage />}>
              <Route index element={<Searchbar />} />
            </Route>
            <Route path="movies/:movieId" element={<MovieInfo />}>
              {/* <Route path="" element={<MovieInfo />}> */}
              <Route index element={<>Nic</>} />
              <Route
                path="cast"
                element={
                  <Article
                    id="cast"
                    title="art title cast"
                    content={'bla bla bla \nbla bla bla \nbla bla bla'}
                  />
                }
              />
              <Route
                path="reviews"
                element={
                  <Article
                    id="reviews"
                    title="art title reviews"
                    content={'bla bla bla \nbla bla bla \nbla bla bla'}
                  />
                }
              />
              {/* </Route> */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
