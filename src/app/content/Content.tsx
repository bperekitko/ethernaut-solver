import { FunctionComponent } from 'react';
import React from 'react';
import styles from './content.module.scss';

const Content: FunctionComponent<unknown> = () => {
  return <div className={styles.content}>Welcome to the Ethernaut Solver!</div>;
};

export default Content;
