import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Portrait.module.css';

export const Portrait = ({ url, alt = 'Title Big Movie' }) => {
  // Image not found 😢
  const { theme } = useTheme();
  return (
    <img className={`${css.img} ${theme? '': css.themeDark}`} src={url} alt={`\n\n🎬\n${alt}\n Coming soon`} />
  );
};
