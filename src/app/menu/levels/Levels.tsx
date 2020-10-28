import { FunctionComponent } from 'react';
import React from 'react';
import styles from './levels.module.scss';
import LevelFactory from './level-factory';
import { useHistory } from 'react-router-dom';

const Levels: FunctionComponent<unknown> = () => {
  const history = useHistory();
  const levels = LevelFactory.prepare((href) => history.push(href));

  return <div className={styles.levels}>{levels}</div>;
};

export default Levels;
