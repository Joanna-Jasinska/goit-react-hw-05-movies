import { Routes, Route, NavLink } from 'react-router-dom';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './NavBtn.module.css';
export const NavBtn = ({ to = '/', display }) => {
  const { theme } = useTheme();
  return (
    <NavLink
      className={nav =>
        `${css.navLink} ${theme ? '' : css.themeDark} ${
          nav.isActive ? css.active : ''
        }`
      }
      to={to}
      end
    >
      {display || to[0].toUpperCase() + '' + `${to}`.slice(1)}
    </NavLink>
  );
};
