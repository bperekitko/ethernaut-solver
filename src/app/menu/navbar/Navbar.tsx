import React, { FunctionComponent } from 'react';
import styles from './navbar.module.scss';
import Wallet from './wallet/Wallet';
import Home from './home/Home';

const Navbar: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.navbar}>
      <Home></Home>
      <Wallet></Wallet>
    </div>
  );
};

export default Navbar;
