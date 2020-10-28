import React from 'react';
import styles from './levels.module.scss';
import levelsData from './level.data';

const prepare = (levelClickHandler: (href: string) => void): JSX.Element[] => {
  const levels = levelsData.map((level) => (
    <div key={level.id} className={styles.level} onClick={() => levelClickHandler(level.href)}>
      {`${level.id}. ${level.name}`}
    </div>
  ));
  return levels;
};

const LevelFactory = {
  prepare: prepare,
};

export default LevelFactory;
