import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import SkillsList from 'components/SkillsList/SkillsList';
import Container from 'components/Container/Container';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section padT padB extraClass="section-skills">
      <Container>
        <SkillsList title={t('skills')} />
      </Container>
    </Section>
  );
};

export default Skills;
