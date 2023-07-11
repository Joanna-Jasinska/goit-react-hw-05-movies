import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieLink.module.css';
export const MovieLink = ({ to = '', text = '' }) => {
  const location = useLocation();
  return (
    <li className={css.MovieLi}>
      <NavLink
        className={css.MovieLink}
        to={to}
        state={{ from: location.pathname }}
      >
        {text}{' '}
      </NavLink>
    </li>
  );
};
