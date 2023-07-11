import { useState } from 'react';
// import { useAppContext } from 'components/ContextProvider/ContextProvider';
import { Routes, Route, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { HeaderNavBtn } from '../HeaderNavBtn/HeaderNavBtn';
import { ActionBtn } from './ActionBtn/ActionBtn';
import { ToggleBtn } from '../ToggleBtn/ToggleBtn';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Header.module.css';
import { useEffect } from 'react';

export const Header = () => {
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
  const [isUp, setIsUp] = useState(false);
  const toggleIsUp = () => setIsUp(!isUp);
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');
  useEffect(() => {
    if (isUp && footer) {
      // window.scrollTo(0, window.innerHeight);
      footer.scrollIntoView();
    } else {
      // if (header)
      window.scrollTo(0, 0);
      // header.scrollIntoView();
    }
  }, [isUp, header, footer]);

  return (
    <header className={`header ${css.header} ${theme ? '' : css.themeDark}`}>
      <nav className={css.leftNav}>
        <HeaderNavBtn to="/" display="Home" />
        <HeaderNavBtn to="/movies" display="Movies" />
        <HeaderNavBtn to="/credits" display="About" />
      </nav>

      <nav className={css.rightNav}>
        {/* <ToggleBtn display={['⚙️EN', '⚙️PL']} /> */}
        <ToggleBtn
          display={['⇩', '⇧']}
          toggle={toggleIsUp}
          selectedIndex={Number(isUp)}
        />
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
