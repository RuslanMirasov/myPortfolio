import IconLanding from 'components/IconLanding/IconLanding';
import css from './LandingEffect.module.scss';
import { useEffect } from 'react';

const LandingEffect = () => {
  useEffect(() => {
    const handleEffect = () => {
      if (window.innerWidth >= 1280) {
        const landingPage = document.querySelector(`[data-name="landingPage"]`);
        const landingPage2 = document.querySelector(`[data-name="landingPage2"]`);
        const landingPage3 = document.querySelector(`[data-name="landingPage3"]`);

        const handleMove = event => {
          const mouseX = event.clientX - window.innerWidth + window.innerWidth / 2;
          const mouseY = window.innerHeight / 2 - event.clientY;

          if (landingPage && !document.body.classList.contains('locked')) {
            landingPage.style.transform = `rotateY(${mouseX / 20}deg) rotateX(${mouseY / 50}deg)`;
            landingPage2.style.transform = `translateZ(${Math.abs(mouseX) / 16}px)`;
            landingPage3.style.transform = `translateZ(${Math.abs(mouseX) / 6}px)`;
          }
        };

        window.addEventListener('mousemove', handleMove);

        return () => {
          window.removeEventListener('mousemove', handleMove);
        };
      }
    };

    handleEffect();

    const handleResize = () => {
      handleEffect();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={css.LandingEffect}>
      <div className={css.SvgList} data-name="landingPage">
        <div className={`${css.SvgList_item} ${css.Svg_1}`} data-name="landingPage1">
          <IconLanding name="landing1" />
        </div>
        <div className={`${css.SvgList_item} ${css.Svg_2}`} data-name="landingPage2">
          <IconLanding name="landing2" />
        </div>
        <div className={`${css.SvgList_item} ${css.Svg_3}`} data-name="landingPage3">
          <IconLanding name="landing3" />
        </div>
      </div>
    </div>
  );
};

export default LandingEffect;
