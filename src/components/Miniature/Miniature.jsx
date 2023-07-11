import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Miniature.module.css';

export const Miniature = ({
  url,
  alt = '😎\nIncognito',
  title,
  padding = false,
  bg,
}) => {
  // const pic = url ? require(`${url}`) : '';
  // Image not found 😢
  const { theme } = useTheme();
  return (
    <figure className={`${css.miniature} ${theme ? '' : css.themeDark}`}>
      <div
        className={`${css.imgFrame} ${padding ? css.padding : ''} ${
          theme ? '' : css.themeDark
        } ${bg ? css[bg] : ''}`}
      >
        <img className={css.img} src={url} alt={`\n${alt}`} />
      </div>
      <figcaption className={css.figcaption}>{title || alt}</figcaption>
    </figure>
  );
};
