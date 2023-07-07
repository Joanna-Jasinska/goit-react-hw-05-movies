// import { useState } from 'react';
// import { useAppContext } from 'components/ContextProvider/ContextProvider';
import { Routes, Route, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { NavBtn } from './NavBtn/NavBtn';
import { ActionBtn } from './ActionBtn/ActionBtn';
import { ToggleBtn } from './ToggleBtn/ToggleBtn';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Header.module.css';

export const Header = ({ leftList }) => {
  // {leftList,rightList}
  // const { query, setQuery } = useAppContext();
  // const [input, setInput] = useState(query);
  // const inputHandle = e => setInput(e.target.value);
  // const submitHandle = e => {
  //   e.preventDefault();
  //   setQuery(input);
  //   searchHandle();
  // };
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`${css.header} ${theme ? '' : css.themeDark}`}>
      <nav className={css.leftNav}>
        <NavBtn to="/" display="Home" />
        <NavBtn to="/movies" display="Movies" />
      </nav>

      <nav className={css.rightNav}>
        <ToggleBtn display={['⚙️EN', '⚙️PL']} />
        <ToggleBtn
          display={['🌘', '☀️']}
          toggle={toggleTheme}
          selectedIndex={Number(theme)}
        />
      </nav>
    </header>
  );
};

// Searchbar.propTypes = {
//   searchHandle: PropTypes.func.isRequired,
// };
