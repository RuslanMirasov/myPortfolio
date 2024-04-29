import Icon from 'components/Icon/Icon';
import css from './ContactItem.module.scss';

const ContactItem = ({ icon, href, title, children }) => {
  return (
    <a href={href} className={css.ContactItem}>
      <span className={css.Icon}>
        <Icon name={icon} />
      </span>
      <span className={css.title}>{title}</span>
      <p className={css.Contact}>{children}</p>
    </a>
  );
};

export default ContactItem;
