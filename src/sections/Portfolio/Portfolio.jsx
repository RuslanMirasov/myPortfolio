import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import { TitleBox, Title, Text } from 'components/Typography';
import { Button } from 'components/Buttons';
import Flex from 'components/Flex/Flex';
import Projects from 'components/Projects/Projects';
import Container from 'components/Container/Container';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Section padT="small" padB extraClass="section-portfolio">
      <Container>
        <Flex ta="space" va="bottom" gap="30" mb="40">
          <TitleBox width="390">
            <Title tag="h2" size="h3">
              {t('portfolio_title')}
            </Title>
            <Text>{t('portfolio_subtitle')}</Text>
          </TitleBox>
          <Button to="./Portfolio" variant="border-dark">
            {t('portfolio_button')}
          </Button>
        </Flex>
        <Projects />
      </Container>
    </Section>
  );
};

export default Portfolio;
