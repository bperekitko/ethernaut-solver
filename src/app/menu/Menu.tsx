import { FunctionComponent } from 'react';
import Levels from './levels/Levels';
import Navbar from './navbar/Navbar';
import React from 'react';
import styles from './menu.module.scss';

const Menu: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.menu}>
      <Navbar />
      <Levels />
    </div>
  );
};

export default Menu;
