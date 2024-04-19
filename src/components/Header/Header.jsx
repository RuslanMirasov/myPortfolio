import css from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import { Burger } from 'components/Buttons';
import Navigation from 'components/Navigation/Navigation';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';

const Header = () => {
  return (
    <header className={`${css.Header} header`}>
      <div className={css.Container}>
        <div className={css.LeftPart}>
          <Logo />
          <LanguageSelect />
        </div>
        <Navigation />
        <Burger />
      </div>
    </header>
  );
};

export default Header;
