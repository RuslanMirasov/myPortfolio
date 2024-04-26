import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { TitleBox, Text } from 'components/Typography';
import css from './AboutMe.module.scss';
import myFoto from 'img/foto.jpg';
import { Button, ButtonsList } from 'components/Buttons';
import List from 'components/List/List';
import Link from 'components/Link/Link';
import diplomaBasic from 'pdf/diploma_Ruslan_Mirasov_Web_Developer_Basic.pdf';
import diplomaFullstack from 'pdf/diploma_Ruslan_Mirasov_Fullstack_Developer.pdf';
import resumeEN from 'pdf/resume_en.pdf';
import resumeDE from 'pdf/resume_de.pdf';

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const [moreInfo, setMoreInfo] = useState(false);
  const resume = i18n.language === 'en' ? resumeEN : resumeDE;

  const handleMore = () => {
    const moreBlock = document.querySelector('[data-more]');
    setMoreInfo(!moreInfo);
    if (!moreInfo) {
      moreBlock.style.position = 'relative';
      moreBlock.style.height = moreBlock.scrollHeight + 'px';
      return;
    }
    moreBlock.style.height = '0px';
    setTimeout(() => {
      moreBlock.style.position = 'absolute';
    }, 600);
  };

  return (
    <div className={css.AboutMe}>
      <div className={css.leftPart}>
        <div className={css.Foto}>
          <img src={myFoto} alt="Ruslan Mirasov | Web Developer" />
        </div>
      </div>
      <div className={css.rightPart}>
        <TitleBox>
          <List col={['2', '2', '1']}>
            <li>
              <b>Name:</b> Ruslan Mirasov
            </li>
            <li>
              <b>{t('date_of_birth')}:</b> 11.12.1985
            </li>
            <li>
              <b>{t('place_of_birth')}:</b> Mariupol, Ukraine
            </li>
            <li>
              <b>{t('place_of_residence')}:</b> Berlin, {t('Germany')}
            </li>
            <li>
              <b>{t('Gender')}:</b> {t('male')}
            </li>
            <li>
              <b>{t('marital_status')}:</b> {t('married')}
            </li>
          </List>

          <List>
            <b className="color">{t('summary')}:</b>
            <li>
              <Text>{t('summary_text')}</Text>
            </li>
          </List>
          <div className={css.MoreInformation} data-more>
            <List mark>
              <b className="color">{t('work_experience')}:</b>
              <li>
                <b>[ 2022 - now ]</b> {t('Freelancer')}
              </li>
              <li>
                <b>[ 2017 - 2022 ]</b> Front-end {t('developer')} ( {t('remotely')} )
                <Text>
                  {t('Marketing_agency')}{' '}
                  <a href="https://beautyalliance-marketing.com/" target="_blank" rel="noreferrer">
                    "Beauty Alliance"
                  </a>
                </Text>
              </li>
              <li>
                <b>[ 2015 - 2017 ]</b> Junior Front-End {t('Developer')} ( {t('remotely')} )
                <Text>
                  {t('Marketing_agency')}{' '}
                  <a href="https://mokselle.ru/" target="_blank" rel="noreferrer">
                    "Mokselle"
                  </a>
                </Text>
              </li>
            </List>
            <List mark>
              <b className="color">{t('Education')}:</b>
              <li>
                <b>[ 2023 - 2024 ]</b> Full-stack {t('Developer')}
                <Text>
                  <a href={diplomaFullstack} target="_blank" rel="noreferrer">
                    IT {t('School')} "GoIT"
                  </a>
                </Text>
              </li>
              <li>
                <b>[ 2014 - 2015 ]</b> Web {t('Developer')} "Basic"
                <Text>
                  <a href={diplomaBasic} target="_blank" rel="noreferrer">
                    IT {t('School')} "Skillbox"
                  </a>
                </Text>
              </li>
              <li>
                <b>[ 2005 - 2011 ]</b> {t('my_degree')}
                <Text>
                  <a href="https://pstu.edu/en/" target="_blank" rel="noreferrer">
                    {t('my_uni')}
                  </a>
                </Text>
              </li>
            </List>
            <List>
              <b className="color">{t('languages')}:</b>
              <li>
                <Text>
                  <b>{t('Ukrainian')}:</b> {t('native')}
                </Text>
              </li>
              <li>
                <Text>
                  <b>{t('Russian')}:</b> {t('native')}
                </Text>
              </li>
              <li>
                <Text>
                  <b>{t('English')}:</b> B1
                </Text>
              </li>
              <li>
                <Text>
                  <b>{t('German')}:</b> {t('B2_Beruf')}
                </Text>
              </li>
            </List>
          </div>
          <Link onClick={handleMore}>{!moreInfo ? t('Read_more') : t('Hide')}</Link>
        </TitleBox>
        <ButtonsList>
          <Button href={resume} blank>
            {t('Download_my_CV')}
          </Button>
        </ButtonsList>
      </div>
    </div>
  );
};

export default AboutMe;
