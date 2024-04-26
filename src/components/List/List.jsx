import css from './List.module.scss';

const List = ({ tag, col = '100', mark, children }) => {
  const Tag = tag || 'ul';
  const listClasses = {
    [css.List]: true,
    [css.Mark]: mark || tag === 'ol',
    [css.Col_auto]: col === 'auto',
    [css.DesctopCol_1]: col[0] === '1',
    [css.DesctopCol_2]: col[0] === '2',
    [css.DesctopCol_3]: col[0] === '3',
    [css.DesctopCol_4]: col[0] === '4',
    [css.DesctopCol_5]: col[0] === '5',
    [css.TabletCol_1]: col[1] === '1',
    [css.TabletCol_2]: col[1] === '2',
    [css.TabletCol_3]: col[1] === '3',
    [css.TabletCol_4]: col[1] === '4',
    [css.TabletCol_5]: col[1] === '5',
    [css.MobilCol_1]: col[2] === '1',
    [css.MobilCol_2]: col[2] === '2',
    [css.MobilCol_3]: col[2] === '3',
    [css.MobilCol_4]: col[2] === '4',
    [css.MobilCol_5]: col[2] === '5',
  };
  return (
    <Tag
      className={Object.keys(listClasses)
        .filter(key => listClasses[key])
        .join(' ')}
    >
      {children}
    </Tag>
  );
};

export default List;
