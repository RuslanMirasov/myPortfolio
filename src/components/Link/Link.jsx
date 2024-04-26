import Icon from 'components/Icon/Icon';
import css from './Link.module.scss';

const Link = ({ href, blank, children, onClick }) => {
  return (
    <a href={href} className={css.Link} target={blank ? '_blank' : ''} rel="noreferrer" onClick={onClick}>
      <span>{children}</span>
      <Icon name="select-arrow" size="12" />
    </a>
  );
};

export default Link;
