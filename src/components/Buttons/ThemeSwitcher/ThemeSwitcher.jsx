// import Icon from 'components/Icon/Icon';
import { useState, useEffect } from 'react';
import css from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.dataset.theme = newTheme;
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button type="button" className={`${css.ThemeSwitcher} ${theme === 'light' ? css.Light : ''}`} onClick={toggleTheme}>
      <span>{/* <Icon name={`${theme === 'light' ? 'sun' : 'moon'}`} /> */}</span>
    </button>
  );
};

export default ThemeSwitcher;
