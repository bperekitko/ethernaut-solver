import { FunctionComponent } from 'react';
import React from 'react';
import styles from './levels.module.scss';
import Level from './Level';

const data: string[] = ['Intro', 'Fallback', 'Fallout', 'CoinFlip'];

const Levels: FunctionComponent<unknown> = () => {
  const newLocal = data.map((d, index) => <Level key={index} levelName={`${index}. ${d}`} />);
  return <div className={styles.levels}>{newLocal}</div>;
};

export default Levels;
