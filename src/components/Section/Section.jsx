import css from './Section.module.scss';
import { useState, useEffect } from 'react';

const hexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const rgbColor = /^rgb\(/;
const rgbaColor = /^rgba\(/;
const varColor = /^var\(/;
const linearGradient = /^linear-gradient\(/;
const radialGradient = /^radial-gradient\(/;

const bgCheck = bgStyle => {
  if (
    hexColor.test(bgStyle) ||
    rgbColor.test(bgStyle) ||
    rgbaColor.test(bgStyle) ||
    varColor.test(bgStyle) ||
    linearGradient.test(bgStyle) ||
    radialGradient.test(bgStyle) ||
    bgStyle === 'none'
  ) {
    return bgStyle;
  }
  return `url(${bgStyle}) no-repeat center center / cover`;
};

const Section = ({ bg = 'none', dark, full, padT, padB, noline, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionClasses = {
    [css.Section]: true,
    [css.padTopNormal]: padT,
    [css.padBottomNormal]: padB,
    [css.padTopSmall]: padT === 'small',
    [css.padBottomSmall]: padB === 'small',
    [css.padTopBig]: padT === 'big',
    [css.padBottomBig]: padB === 'big',
    [css.FullScreen]: full,
    [css.Dark]: dark,
    [css.Noline]: noline,
    [css.Visible]: isVisible === true,
  };

  const currentSectionClasses = Object.keys(sectionClasses)
    .filter(key => sectionClasses[key])
    .join(' ');

  return (
    <section className={currentSectionClasses} style={{ background: bgCheck(bg) }}>
      {!noline && <div className={css.Lines}></div>}
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
