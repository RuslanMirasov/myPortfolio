import PopupAnimation from './PopupAnimation/PopupAnimation';
import ProjectFullDescription from 'components/ProjectFullDescription/ProjectFullDescription';

const PopupProject = ({ content }) => {
  return (
    <PopupAnimation>
      <ProjectFullDescription content={content} />
    </PopupAnimation>
  );
};

export default PopupProject;
