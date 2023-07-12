import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = ({ txt, hide = '/' }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const hasFrom = location.state && location.state.from;
  const pathIsRedundant =
    (location.pathname === hide && !hasFrom) ||
    (hasFrom &&
      (location.state.from === location.pathname ||
        location.state.from == hide));
  if (pathIsRedundant) return <></>;

  const from = hasFrom
    ? `${location.state.from.substring(
        location.state.from.lastIndexOf('/') + 1
      )}`
    : 'Home';
  const shortFrom = `${from[0].toUpperCase()}${from.slice(1)}`;
  const display =
    shortFrom === `${Number(shortFrom)}` ? 'Movie Details' : `${shortFrom}`;
  const goBack = () => {
    navigate(hasFrom ? location.state.from : '/', {
      replace: false,
      state: { from: location.pathname },
    });
  };
  return (
    <button
      className={`${css.button} ${theme ? '' : css.themeDark}`}
      type="button"
      onClick={goBack}
    >
      {txt || 'Back to \u2192 ' + display}
      {/* \u2190 */}
    </button>
  );
};

GoBackBtn.propTypes = {
  txt: PropTypes.string,
};
