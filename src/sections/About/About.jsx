import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import AboutMe from 'components/AboutMe/AboutMe';
import { Title, TitleBox } from 'components/Typography';
import backgroundImege from 'img/aboutBG.jpg';
const About = () => {
  const { t } = useTranslation();
  return (
    <Section bg={backgroundImege} padT padB extraClass="section-about" dark>
      <TitleBox>
        <Title tag="h2" size="h3">
          {t('about_title')}
        </Title>
      </TitleBox>
      <AboutMe />
    </Section>
  );
};

export default About;
