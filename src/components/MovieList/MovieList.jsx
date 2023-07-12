import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { MovieLink } from './MovieLink/MovieLink';
import css from './MovieList.module.css';
export const MovieList = ({ list = [], path = '/movies' }) => {
  return (
    <ul className={css.MovieList}>
      {list.map(movie => (
        <MovieLink
          text={movie.title}
          to={`${path}/${movie.id}`}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};
