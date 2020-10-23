import React, { FunctionComponent } from 'react';
import { useWeb3Initializer } from '../../../web3-context/web3-context';
import styles from './walletbutton.module.scss';

const WalletButton: FunctionComponent<unknown> = () => {
  const initWallet = useWeb3Initializer().init;
  return (
    <button className={styles.wallet_button} onClick={initWallet}>
      Connect wallet
    </button>
  );
};

export default WalletButton;
