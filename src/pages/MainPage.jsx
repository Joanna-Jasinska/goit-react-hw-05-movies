import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from 'components/Title/Title';
import { fetchTrending } from 'services/api';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Separator } from 'components/Separator/Separator';
export const MainPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();
  const list = [
    { title: 'movie1', movieId: 'movieId1' },
    { title: 'movie2', movieId: 'movieId1' },
    { title: 'movie3', movieId: 'movieId1' },
  ];

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchTrending();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [setError, setIsLoading, setTrendingMovies]);
  return (
    <article>
      <MovieList list={trendingMovies} />
    </article>
  );
};
export default MainPage;
