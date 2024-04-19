import { useEffect } from 'react';
import { addArrowsToMultipleLinks } from 'utils/menuFunctions';
import css from './LanguageSelect.module.scss';

const LanguageSelect = () => {
  useEffect(() => {
    addArrowsToMultipleLinks(css.Menu, css.More);
  }, []);

  const handleClick = e => {
    const languageLabel = e.target.dataset.text;
    document.querySelector('.language').innerHTML = languageLabel;
  };

  return (
    <ul className={css.Menu}>
      <li>
        <p className="language">En</p>
        <ul>
          <li>
            <p onClick={e => handleClick(e)} data-text="En">
              English
            </p>
          </li>
          <li>
            <p onClick={e => handleClick(e)} data-text="De">
              Deutsch
            </p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default LanguageSelect;
