import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Title } from 'components/Title/Title';
import { Portrait } from 'components/Portrait/Portrait';
import { Separator } from 'components/Separator/Separator';
import css from './MovieInfo.module.css';
import { Article } from 'components/Article/Article';
import { Button } from 'components/Button/Button';
import { NavBtn } from 'components/NavBtn/NavBtn';

export const MovieInfo = ({
  movieId = '[movie id]',
  title = 'The Movie Title',
  url = 'Coming soon 🎬',
}) => {
  const location = useLocation();
  return (
    <>
      <div className={css.dividedSection}>
        <div className={css.frame}>
          <Portrait url={url} />
        </div>
        {/* <Separator vertical={true} relative={true} /> */}
        <div className={css.frame}>
          <Title txt={title} />
          User score: 71% <br />
          <h3>Overwiev</h3>
          txt <br />
          <h4>Genres</h4>
          genre list <br />
        </div>
      </div>
      <Separator />
      Additional information: <br />
      <br />
      <NavBtn to={`cast`} display="Cast" />
      <NavBtn to={`reviews`} display="Reviews" />
      <Separator />
      {/* info content
      <Article
        title="art title"
        content={'bla bla bla \nbla bla bla \nbla bla bla'}
      />
      <Article title="art title" content="bla bla bla" />
      <Article
        title="art title"
        content={'bla bla bla \nbla bla bla \nbla bla bla'}
      /> */}
      <Outlet />
      <Separator />
    </>
  );
};
