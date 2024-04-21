import css from './TitleBox.module.scss';

const TitleBox = ({ width, children }) => {
  return (
    <div style={width && { maxWidth: width + 'px' }} className={css.TitleBox}>
      {children}
    </div>
  );
};

export default TitleBox;
