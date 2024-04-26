import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import SkillsList from 'components/SkillsList/SkillsList';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section padT padB extraClass="section-skills">
      <SkillsList title={t('skills')} />
    </Section>
  );
};

export default Skills;
