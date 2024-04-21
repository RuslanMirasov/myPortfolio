import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import { TitleBox, Title, Text } from 'components/Typography';
import { Button, ButtonsList, ScrollDown } from 'components/Buttons';
import LandingEffect from 'components/LandingEffect/LandingEffect';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section full extraClass="section-hero">
      <LandingEffect />
      <TitleBox>
        <Text>{t('hero_head')}</Text>
        <Title tag="h1" size="h1">
          FRONT-END <br />
          {t('logo')}
        </Title>
        <Text width="450">{t('hero_subtitle')}</Text>
        <ButtonsList>
          <Button scrollto="section-portfolio">{t('hero_button')}</Button>
        </ButtonsList>
      </TitleBox>
      <ScrollDown scrollto="section-portfolio" />
    </Section>
  );
};

export default Hero;
