import Grid from 'components/Grid/Grid';
import IconSkills from 'components/IconSkills/IconSkills';
import { Title } from 'components/Typography';
import css from './SkillsList.module.scss';

const SkillsList = ({ title }) => {
  return (
    <div className={css.Skills}>
      <div className={css.skillsTitle}>
        <Title tag="h2" size="h3">
          {title}
        </Title>
      </div>
      <Grid tag="ul" col={[5, 5, 3]} extraClass={css.SkillsList} width={['66.666666%', '66.666666%', '100%']}>
        <li>
          <IconSkills name="html" size="60" />
        </li>
        <li>
          <IconSkills name="css" size="60" />
        </li>
        <li>
          <IconSkills name="scss" size="60" />
        </li>
        <li>
          <IconSkills name="javascript" size="50" />
        </li>
        <li>
          <IconSkills name="typeScript" size="50" />
        </li>
        <li>
          <IconSkills name="jquery" size="80" />
        </li>
        <li>
          <IconSkills name="react" size="50" />
        </li>
        <li>
          <IconSkills name="redux" size="45" />
        </li>
        <li>
          <IconSkills name="node" size="40" />
        </li>
        <li>
          <IconSkills name="mongoDB" size="25" />
        </li>
        <li>
          <IconSkills name="php" size="65" />
        </li>
        <li>
          <IconSkills name="wordpress" size="80" />
        </li>
        <li>
          <IconSkills name="wooCommerce" size="18" />
        </li>
        <li>
          <IconSkills name="mysql" size="35" />
        </li>
        <li>
          <IconSkills name="github" size="45" />
        </li>
        <li>
          <IconSkills name="webpack" size="50" />
        </li>
        <li>
          <IconSkills name="vscode" size="45" />
        </li>
        <li>
          <IconSkills name="photoshop" size="50" />
        </li>
        <li>
          <IconSkills name="figma" size="50" />
        </li>
        <li>
          <IconSkills name="slack" size="45" />
        </li>
      </Grid>
    </div>
  );
};

export default SkillsList;
