import {
  Routes,
  Route,
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Title } from 'components/Title/Title';
import { Separator } from 'components/Separator/Separator';
// import { Button } from 'components/Button/Button';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

export const SearchMoviesPage = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <article>
      {/* <Title txt="--movies page--" /> */}
      <Outlet />
    </article>
  );
};
