import { Routes, Route, NavLink } from 'react-router-dom';
import css from './ActionBtn.module.css';
export const ActionBtn = ({ to = '/', display }) => {
  return (
    <NavLink
      className={nav => `${css.navLink} ${nav.isActive ? css.active : ''}`}
      to={to}
      end
    >
      {display || to[0].toUpperCase() + '' + `${to}`.slice(1)}
    </NavLink>
  );
};
