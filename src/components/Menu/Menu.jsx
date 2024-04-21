import { useTranslation } from 'react-i18next';
import { usePopup } from 'contexts/PopupContext';
import { useEffect } from 'react';
import { addArrowsToMultipleLinks, arrowBtnAction } from 'utils/menuFunctions';
import MenuLink from './MenuLink';
import Button from 'components/Buttons/Button/Button';
import css from './Menu.module.scss';

const Menu = () => {
  const { popupOpen } = usePopup();
  const { t } = useTranslation();

  useEffect(() => {
    addArrowsToMultipleLinks(css.Menu, css.More, handleArrowClick);
  }, []);

  const handleArrowClick = e => {
    arrowBtnAction(e.target, css.Open);
  };

  return (
    <ul className={`${css.Menu} custom-scrollbar`}>
      <MenuLink scrollto="body" text={t('home')} />
      {/* <MenuLink to="./blog" text={t('blog')}>
        <ul>
          <MenuLink to="./blog" text="Edication">
            <ul>
              <MenuLink to="./blog" text="Javascript">
                <ul>
                  <MenuLink to="./blog" text="Lesson 1" />
                  <MenuLink to="./blog" text="Lesson 2" />
                  <MenuLink to="./blog" text="Lesson 3" />
                  <MenuLink to="./blog" text="Lesson 4" />
                  <MenuLink to="./blog" text="Lesson 5" />
                  <MenuLink to="./blog" text="Lesson 6" />
                  <MenuLink to="./blog" text="Lesson 7" />
                </ul>
              </MenuLink>
              <MenuLink to="./blog" text="React" />
              <MenuLink to="./blog" text="Redux-Toolkit" />
              <MenuLink to="./blog" text="Next.js" />
              <MenuLink to="./blog" text="TypeScript" />
              <MenuLink to="./blog" text="Node.js" />
              <MenuLink to="./blog" text="MySQL" />
            </ul>
          </MenuLink>
          <MenuLink to="./blog" text="Components">
            <ul>
              <MenuLink to="./blog" text="App" />
              <MenuLink to="./blog" text="Accordeon" />
              <MenuLink to="./blog" text="Header">
                <ul>
                  <MenuLink to="./blog" text="Logo" />
                  <MenuLink to="./blog" text="Navigation" />
                  <MenuLink to="./blog" text="Menu" />
                </ul>
              </MenuLink>
              <MenuLink to="./blog" text="Buttons">
                <ul>
                  <MenuLink to="./blog" text="Button" />
                  <MenuLink to="./blog" text="Buttons List" />
                  <MenuLink to="./blog" text="Close Button" />
                  <MenuLink to="./blog" text="Burger Button" />
                  <MenuLink to="./blog" text="Theme Switcher" />
                  <MenuLink to="./blog" text="Scroll to top" />
                </ul>
              </MenuLink>
              <MenuLink to="./blog" text="Menu" />
              <MenuLink to="./blog" text="Typography">
                <ul>
                  <MenuLink to="./blog" text="TextWrapper" />
                  <MenuLink to="./blog" text="Title" />
                  <MenuLink to="./blog" text="Text" />
                  <MenuLink to="./blog" text="List" />
                </ul>
              </MenuLink>
              <MenuLink to="./blog" text="Footer" />
            </ul>
          </MenuLink>
          <MenuLink to="./blog" text="Scripts">
            <ul>
              <MenuLink to="./blog" text="Utilites" />
              <MenuLink to="./blog" text="Custom Scripts" />
            </ul>
          </MenuLink>
          <MenuLink to="./blog" text="Job interview">
            <ul>
              <MenuLink to="./blog" text="General questions" />
              <MenuLink to="./blog" text="HTML/CSS" />
              <MenuLink to="./blog" text="JavaScript" />
              <MenuLink to="./blog" text="React/Redux" />
              <MenuLink to="./blog" text="Node.js/MongoDB" />
            </ul>
          </MenuLink>
        </ul>
      </MenuLink> */}
      <MenuLink scrollto="section-portfolio" text={t('portfolio')} />
      <MenuLink scrollto="section-about" text={t('about')} />
      <MenuLink scrollto="section-skills" text={t('skills')} />
      <MenuLink scrollto="section-contacts" text={t('contacts')} />
      <MenuLink
        text={
          <Button size="small" variant="border-dark">
            {t('to_order')}
          </Button>
        }
        onClick={() => popupOpen('request')}
      />
    </ul>
  );
};

export default Menu;
