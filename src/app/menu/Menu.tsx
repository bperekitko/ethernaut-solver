import { FunctionComponent } from 'react';
import Levels from './levels/Levels';
import React from 'react';
import styles from './menu.module.scss';
import { useWeb3Connector, useWeb3Context } from '../web3-context/web3-context';

const walletButtonLabel = (address: string) => {
  if (address) {
    return `${address.slice(0, 10)}...${address.slice(address.length - 8)}`;
  }
  return 'Connect your wallet';
};

const Menu: FunctionComponent<unknown> = () => {
  const web3Connector = useWeb3Connector();
  const web3Context = useWeb3Context();
  const walletButtonText = walletButtonLabel(web3Context.address);
  return (
    <div className={styles.menu}>
      <div className={styles.navbar}>
        <button className={styles.wallet_button} onClick={web3Connector.connect}>
          {walletButtonText}
        </button>
      </div>
      <Levels />
    </div>
  );
};

export default Menu;
