import { FunctionComponent } from 'react';
import React from 'react';
import styles from './levels.module.scss';
import Level from './Level';

const data: string[] = ['Intro', 'Fallback', 'Fallout', 'CoinFlip'];

const Levels: FunctionComponent<unknown> = () => {
  const levels = data.map((name, index) => <Level key={index} name={`${index}. ${name}`} href={name.toLowerCase()} />);
  return <div className={styles.levels}>{levels}</div>;
};

export default Levels;
