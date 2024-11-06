import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import AboutMe from 'components/AboutMe/AboutMe';
import { Title, TitleBox } from 'components/Typography';
import Container from 'components/Container/Container';
const About = () => {
  const { t } = useTranslation();
  return (
    <Section padT padB extraClass="section-about" dark>
      <Container>
        <TitleBox>
          <Title tag="h2" size="h3">
            {t('about_title')}
          </Title>
        </TitleBox>
        <AboutMe />
      </Container>
    </Section>
  );
};

export default About;
