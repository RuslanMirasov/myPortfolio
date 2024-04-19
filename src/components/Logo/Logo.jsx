import css from './Logo.module.scss';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';
import Icon from 'components/Icon/Icon';

const Logo = () => {
  const { menuClose } = usePopup();

  useEffect(() => {
    const spinner = document.querySelector(`[data-name="spinner"]`);
    const handleScroll = () => {
      if (spinner) {
        spinner.style.transform = `rotate(${window.scrollY / 8}deg)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavLink to="/" className={css.Logo} onClick={menuClose}>
      <div className={css.IconWrapper}>
        <div className={css.LogoIcon}>
          <Icon name="logo" size={26} />
        </div>
        <div className={css.SpinnerIcon} data-name="spinner">
          <Icon name="spin" />
        </div>
      </div>
      <div className={css.LogoText}>
        <p>Front-End</p>
        <span>Developer</span>
      </div>
    </NavLink>
  );
};

export default Logo;
