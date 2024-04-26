import IconSkills from 'components/IconSkills/IconSkills';
import { Title } from 'components/Typography';
import css from './SkillsList.module.scss';

const SkillsList = ({ title }) => {
  return (
    <div className={css.Skills}>
      <div className={css.skillsTitle}>
        <Title tag="h2" size="h2">
          {title}
        </Title>
      </div>
      <ul className={css.SkillsList}>
        <li>
          <IconSkills name="html" />
        </li>
        <li>
          <IconSkills name="css" />
        </li>
        <li>
          <IconSkills name="scss" />
        </li>
        <li>
          <IconSkills name="javascript" />
        </li>
        <li>
          <IconSkills name="typeScript" />
        </li>
        <li>
          <IconSkills name="jquery" />
        </li>
        <li>
          <IconSkills name="react" />
        </li>
        <li>
          <IconSkills name="redux" />
        </li>
        <li>
          <IconSkills name="node" />
        </li>
        <li>
          <IconSkills name="mongoDB" />
        </li>
        <li>
          <IconSkills name="php" />
        </li>
        <li>
          <IconSkills name="wordpress" />
        </li>
        <li>
          <IconSkills name="wooCommerce" />
        </li>
        <li>
          <IconSkills name="mysql" />
        </li>
        <li>
          <IconSkills name="github" />
        </li>

        <li>
          <IconSkills name="webpack" />
        </li>
        <li>
          <IconSkills name="vscode" />
        </li>
        <li>
          <IconSkills name="photoshop" />
        </li>
        <li>
          <IconSkills name="figma" />
        </li>
        <li>
          <IconSkills name="slack" />
        </li>
      </ul>
    </div>
  );
};

export default SkillsList;
