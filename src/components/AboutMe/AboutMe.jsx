import { useTranslation } from 'react-i18next';
import { Title, TitleBox, Text } from 'components/Typography';
import css from './AboutMe.module.scss';
import myFoto from 'img/foto.jpg';
import { Button, ButtonsList } from 'components/Buttons';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className={css.AboutMe}>
      <div className={css.leftPart}>
        <div className={css.Foto}>
          <img src={myFoto} alt="Ruslan Mirasov | Web Developer" />
        </div>
      </div>
      <div className={css.rightPart}>
        <TitleBox>
          <Text>
            <Title size="h6">Summary:</Title>I am an experienced frontend developer with commercial experience since 2015, having worked for both web
            studios and as a freelancer. My technology stack includes proficiency in HTML, CSS, JavaScript and React. I work well in a team
            environment and am a quick learner. Currently looking for a company for long term collaboration.
          </Text>
          <Text>
            <Title size="h6">Summary:</Title>I am an experienced frontend developer with commercial experience since 2015, having worked for both web
            studios and as a freelancer. My technology stack includes proficiency in HTML, CSS, JavaScript and React. I work well in a team
            environment and am a quick learner. Currently looking for a company for long term collaboration.
          </Text>
          <ButtonsList>
            <Button to="https://drive.google.com/file/d/1vnaDOaGuQ7pBn6pupvAv3Jxnb5KFuZHc/view?usp=sharing" blank>
              Diploma
            </Button>
          </ButtonsList>
        </TitleBox>
      </div>
    </div>
  );
};

export default AboutMe;
