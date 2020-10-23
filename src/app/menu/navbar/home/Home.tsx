import React, { FunctionComponent } from 'react';
import Icon from '../../../../assets/icons/home-24px.svg';
import styles from './home-button.module.scss';

const HomeButton: FunctionComponent<unknown> = () => {
  return (
    <button className={styles.home_button}>
      <Icon />
    </button>
  );
};

export default HomeButton;
