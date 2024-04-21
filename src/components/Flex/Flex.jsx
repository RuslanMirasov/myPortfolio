import css from './Flex.module.scss';

const Flex = ({ ta, va, width, gap, mt, mb, children }) => {
  const allClasses = {
    [css.Flex]: true,
    [css.taLeft]: ta === 'left',
    [css.taCenter]: ta === 'center',
    [css.taRight]: ta === 'right',
    [css.taSpace]: ta === 'space',
    [css.vaTop]: va === 'top',
    [css.vaCenter]: va === 'center',
    [css.vaBottom]: va === 'bottom',
  };

  const currentClasses = Object.keys(allClasses)
    .filter(key => allClasses[key])
    .join(' ');

  return (
    <div className={currentClasses} style={{ maxWidth: width + 'px', gap: gap + 'px', marginTop: mt + 'px', marginBottom: mb + 'px' }}>
      {children}
    </div>
  );
};

export default Flex;
