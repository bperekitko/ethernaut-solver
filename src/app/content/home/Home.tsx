import { FunctionComponent } from 'react';
import React from 'react';
import styles from './home.module.scss';
import { useWeb3Context } from '../../web3-context/web3-context';

const Home: FunctionComponent<unknown> = () => {
  const content = prepareContent();

  return (
    <div className={styles.home}>
      <div className={styles.title}>Welcome to the Ethernaut Solver!</div>
      {content}
    </div>
  );
};

const prepareContent = (): JSX.Element => {
  const { initialized } = useWeb3Context();

  return initialized ? (
    <>
      <div className={styles.content}>
        This app contains solutions to all levels of Ethernaut wargame created by OpenZeppelin. You can check it out{' '}
        <a href='https://solidity-05.ethernaut.openzeppelin.com/' target='_blank' rel='noopener noreferrer'>
          here
        </a>
        . You can try to solve the levels on your own and come back here to check your answers. Or you can solve them
        right here. Make sure you are connected to Rinkeby test network, because it is the network used by Ethernaut.
        Choose a level from the menu on the left and let&apos;s jump in!
      </div>
    </>
  ) : (
    <div>Connect your wallet to continue</div>
  );
};

export default Home;
