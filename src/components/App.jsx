import { Routes, Route, NavLink } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MainPage } from 'pages/MainPage';
import { MoviesPage } from 'pages/MoviesPage';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
export const App = () => {
  return (
    <>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/*" element={<MainPage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </>
  );
};
