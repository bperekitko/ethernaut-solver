import React, { FunctionComponent } from 'react';
import Icon from '../../../../assets/icons/home-24px.svg';
import styles from './home.module.scss';

const Home: FunctionComponent<unknown> = () => {
  return (
    <button className={styles.home}>
      <Icon />
    </button>
  );
};

export default Home;
