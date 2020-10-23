import React, { FunctionComponent } from 'react';
import styles from './navbar.module.scss';
import WalletButton from './wallet/WalletButton';
import HomeButton from './home/Home';

const Navbar: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.navbar}>
      <HomeButton></HomeButton>
      <WalletButton></WalletButton>
    </div>
  );
};

export default Navbar;
