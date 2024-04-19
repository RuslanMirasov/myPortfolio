import { useEffect } from 'react';
import { addArrowsToMultipleLinks } from 'utils/menuFunctions';
import { useTranslation } from 'react-i18next';
import css from './LanguageSelect.module.scss';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    addArrowsToMultipleLinks(css.Menu, css.More);
  }, []);

  const handleClick = e => {
    const languageLabel = e.target.dataset.text;
    i18n.changeLanguage(languageLabel.toLowerCase());
  };

  return (
    <ul className={css.Menu}>
      <li>
        <p className="language">{t('languageCode')}</p>
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
