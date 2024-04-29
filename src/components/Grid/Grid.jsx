import React, { useState, useEffect } from 'react';
import css from './Grid.module.scss';

const Grid = ({ tag, width = ['100%', '100%', '100%'], gap = [0, 0], col = [1, 1, 1], children, extraClass = '' }) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const Tag = tag || 'div';

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  const getResponsivIndex = () => {
    if (screenWidth >= 1280) {
      return 0;
    } else if (screenWidth > 768 && screenWidth < 1280) {
      return 1;
    } else {
      return 2;
    }
  };

  const getColWidth = () => {
    return `calc((100% - (${parseInt(col[getResponsivIndex()]) - 1}) * ${gap[1]}px) / ${parseInt(col[getResponsivIndex()])})`;
  };

  const getRowWidth = () => {
    return width[getResponsivIndex()];
  };

  return (
    <Tag className={`${css.Grid} ${extraClass}`} style={{ gap: `${gap[0]}px ${gap[1]}px`, maxWidth: getRowWidth() }}>
      {React.Children.map(children, child => React.cloneElement(child, { style: { width: getColWidth() } }))}
    </Tag>
  );
};

export default Grid;
