import css from './Article.module.css';
export const Article = ({ title = '', content = '', id }) => {
  return (
    <article
      className={css.article}
      id={id ? id : `Article:${title.replaceAll(' ', '').toLowerCase}`}
    >
      {title ? <h4>{title}</h4> : ''}
      {content}
      {/* <div className={css.content}></div> */}
    </article>
  );
};
