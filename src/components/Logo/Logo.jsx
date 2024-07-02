import css from './Logo.module.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';
import Icon from 'components/Icon/Icon';

const Logo = () => {
  const { menuClose } = usePopup();
  const { t } = useTranslation();

  return (
    <NavLink to="/" className={css.Logo} onClick={menuClose}>
      <div className={css.IconWrapper}>
        <Icon name="logo" size={50} />
      </div>
      <div className={css.LogoText}>
        <p>Front-End</p>
        <span>{t('logo')}</span>
      </div>
    </NavLink>
  );
};

export default Logo;
