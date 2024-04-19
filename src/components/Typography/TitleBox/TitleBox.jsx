import css from './TitleBox.module.scss';

const TitleBox = ({ align, width, children }) => {
  return (
    <div style={(align && { textAlign: align }, width && { maxWidth: width + 'px' })} className={css.TitleBox}>
      {children}
    </div>
  );
};

export default TitleBox;
