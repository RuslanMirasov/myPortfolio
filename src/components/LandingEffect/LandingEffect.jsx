import Icon from 'components/Icon/Icon';
import css from './LandingEffect.module.scss';
import { useEffect } from 'react';

const LandingEffect = () => {
  useEffect(() => {
    const landingPage = document.querySelector(`[data-name="landingPage"]`);
    const landingPage2 = document.querySelector(`[data-name="landingPage2"]`);
    const landingPage3 = document.querySelector(`[data-name="landingPage3"]`);
    const handleMove = event => {
      let mouseX = event.clientX - window.innerWidth + window.innerWidth / 2;
      let mouseY = window.innerHeight / 2 - event.clientY;
      if (landingPage && !document.body.classList.contains('locked')) {
        landingPage.style.transform = `rotateY(${mouseX / 20}deg)rotateX(${mouseY / 50}deg)`;
        landingPage2.style.transform = `translateZ(${Math.abs(mouseX) / 16}px)`;
        landingPage3.style.transform = `translateZ(${Math.abs(mouseX) / 6}px)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div className={css.LandingEffect}>
      <div className={css.SvgList} data-name="landingPage">
        <div className={`${css.SvgList_item} ${css.Svg_1}`}>
          <Icon name="landing1" />
        </div>
        <div className={`${css.SvgList_item} ${css.Svg_2}`} data-name="landingPage2">
          <Icon name="landing2" />
        </div>
        <div className={`${css.SvgList_item} ${css.Svg_3}`} data-name="landingPage3">
          <Icon name="landing3" />
        </div>
      </div>
    </div>
  );
};

export default LandingEffect;
