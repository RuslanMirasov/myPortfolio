import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import { TitleBox, Title, Text } from 'components/Typography';
import { Button, ButtonsList, ScrollDown } from 'components/Buttons';
import Container from 'components/Container/Container';
import Experience from 'components/Experience/Experience';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section full extraClass="section-hero">
      <Experience />
      <Container>
        <TitleBox>
          <b>{t('hero_head')}</b>
          <Title tag="h1" size="h1">
            Front-end <br />
            {t('logo')}
          </Title>
          <Text width="350">{t('hero_subtitle')}</Text>
          <ButtonsList>
            <Button variant="border-dark" scrollto="section-portfolio">
              Portfolio
            </Button>
          </ButtonsList>
        </TitleBox>
      </Container>

      <ScrollDown scrollto="section-portfolio" />
    </Section>
  );
};

export default Hero;
