import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from 'components/Title/Title';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Separator } from 'components/Separator/Separator';
export const MainPage = () => {
  const location = useLocation();
  const list = [
    { title: 'movie1', movieId: 'movieId1' },
    { title: 'movie2', movieId: 'movieId1' },
    { title: 'movie3', movieId: 'movieId1' },
  ];
  return (
    <article>
      <Title txt="--Main page--" />
      <MovieList list={list} />
    </article>
  );
};
