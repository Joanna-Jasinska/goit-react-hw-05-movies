import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Miniature.module.css';

export const Miniature = ({
  url,
  alt = '😎\nIncognito',
  title,
  padding = false,
  bg,
}) => {
  // Image not found 😢
  const { theme } = useTheme();
  return (
    <figure className={`${css.miniature} ${theme ? '' : css.themeDark}`}>
      <div
        className={`${css.imgFrame} ${padding ? css.padding : ''} ${
          theme ? '' : css.themeDark
        } ${bg ? css[bg] : ''}`}
      >
        {url && url != '' ? (
          <img className={css.img} src={url} alt={`\n${alt}`} />
        ) : (
          <div className={css.textBox}>Missing {alt}</div>
        )}
      </div>
      <figcaption className={css.figcaption}>{title || alt}</figcaption>
    </figure>
  );
};
