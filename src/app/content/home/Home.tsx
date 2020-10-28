import { FunctionComponent } from 'react';
import React from 'react';
import styles from './home.module.scss';
import { useWeb3Context } from '../../web3-context/web3-context';
import Web3Model from '../../web3-context/web3-context.model';

const Home: FunctionComponent<unknown> = () => {
  const web3Context = useWeb3Context();
  const content = prepareContent(web3Context);

  return (
    <div className={styles.home}>
      <div>Welcome to the Ethernaut Solver!</div>
      {content}
    </div>
  );
};

const prepareContent = (web3Context: Web3Model): JSX.Element => {
  const { address, balance, initialized } = web3Context;

  return initialized ? (
    <>
      <div>Your eth balance is: {balance}</div>
      <div>Your eth address is: {address}</div>
    </>
  ) : (
    <div>Connect your wallet to continue</div>
  );
};

export default Home;
