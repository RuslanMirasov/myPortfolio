import css from './Text.module.scss';

const Text = ({ size, width, children }) => {
  const textClasses = {
    [css.Text]: true,
    [css.Big]: size === 'big',
    [css.Small]: size === 'small',
  };

  const currentTextClasses = Object.keys(textClasses)
    .filter(key => textClasses[key])
    .join(' ');

  return (
    <p className={currentTextClasses} style={width && { maxWidth: width + 'px' }}>
      {children}
    </p>
  );
};

export default Text;
