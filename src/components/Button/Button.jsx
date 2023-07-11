import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Button.module.css';

export const Button = ({ onClick, txt }) => {
  const { theme } = useTheme();
  return (
    <button
      className={`${css.button} ${theme ? '' : css.themeDark}`}
      type="button"
      onClick={onClick}
    >
      {txt}
    </button>
  );
};

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
