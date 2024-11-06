import css from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';
import Icon from 'components/Icon/Icon';

const Logo = () => {
  const { menuClose } = usePopup();

  return (
    <NavLink to="/" className={css.Logo} onClick={menuClose}>
      <div className={css.IconWrapper}>
        <Icon name="logo" size={50} color="var(--color)" fill="currentColor" />
      </div>
      <div className={css.LogoText}>
        <p>MirasovRuslan</p>
      </div>
    </NavLink>
  );
};

export default Logo;
