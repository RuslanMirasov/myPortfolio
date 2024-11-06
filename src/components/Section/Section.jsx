import css from './Section.module.scss';
import './Sections.scss';
import { useState, useEffect } from 'react';

const Section = ({ dark, full, extraClass, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionClasses = {
    [extraClass]: extraClass,
    [css.Section]: true,
    [css.FullScreen]: full,
    [css.Dark]: dark,
    [css.Visible]: isVisible === true,
  };

  const currentSectionClasses = Object.keys(sectionClasses)
    .filter(key => sectionClasses[key])
    .join(' ');

  return <section className={currentSectionClasses}>{children}</section>;
};

export default Section;
