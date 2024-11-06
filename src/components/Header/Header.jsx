import css from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import { Burger } from 'components/Buttons';
import Navigation from 'components/Navigation/Navigation';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';
import ThemeSwitcher from 'components/Buttons/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className={`${css.Header} header`}>
      <div className={css.Container}>
        <Logo />
        <LanguageSelect />
        <Navigation />
        <ThemeSwitcher />
        <Burger />
      </div>
    </header>
  );
};

export default Header;
