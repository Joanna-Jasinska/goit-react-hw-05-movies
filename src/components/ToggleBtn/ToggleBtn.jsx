// import { Routes, Route, NavLink } from 'react-router-dom';
import css from './ToggleBtn.module.css';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
// import { Button } from 'components/Button/Button';
export const ToggleBtn = ({
  to = '/',
  display = ['', ''],
  toggle = console.log,
  selectedIndex = 0,
}) => {
  const { theme } = useTheme();
  return (
    <button
      className={`${css.toggleBtn} ${theme ? '' : css.themeDark}`}
      type="button"
      onClick={toggle}
    >
      {display[selectedIndex]}
    </button>
  );
};