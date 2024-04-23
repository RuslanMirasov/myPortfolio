import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import AboutMe from 'components/AboutMe/AboutMe';
import { Title, TitleBox } from 'components/Typography';

const About = () => {
  const { t } = useTranslation();
  return (
    <Section bg="radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(0,0,0,1) 84%)" padT padB extraClass="section-about" dark>
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
