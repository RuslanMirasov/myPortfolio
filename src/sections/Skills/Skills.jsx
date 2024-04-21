import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import { TitleBox, Title } from 'components/Typography';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section padT="big" padB="big" extraClass="section-skills">
      <TitleBox>
        <Title tag="h2" size="h2">
          {t('skills')}
        </Title>
      </TitleBox>
    </Section>
  );
};

export default Skills;
