import { useLocation } from 'react-router-dom';
import { Title } from 'components/Title/Title';
export const NotFoundPage = () => {
  const location = useLocation();
  return (
    <article>
      <Title txt="😢 Page not found" />
    </article>
  );
};
