import css from './Title.module.scss';

const Title = ({ tag, size, align, children }) => {
  const Tag = tag || 'strong';
  const titleClasses = {
    [css.Title]: true,
    [css.TitleH1]: size === 'h1',
    [css.TitleH2]: size === 'h2',
    [css.TitleH3]: size === 'h3',
    [css.TitleH4]: size === 'h4',
    [css.TitleH5]: size === 'h5',
    [css.TitleH6]: size === 'h6',
  };
  return (
    <Tag
      style={align && { textAlign: align }}
      className={Object.keys(titleClasses)
        .filter(key => titleClasses[key])
        .join(' ')}
    >
      {children}
    </Tag>
  );
};

export default Title;
