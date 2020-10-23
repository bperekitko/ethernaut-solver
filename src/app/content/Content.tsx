import { FunctionComponent } from 'react';
import React from 'react';
import styles from './content.module.scss';
import { Switch, Route } from 'react-router-dom';
import Intro from './intro/Intro';
import Fallback from './fallback/Fallback';
import Fallout from './fallout/Fallout';
import Coinflip from './coinflip/Coinflip';
import { useWeb3Context } from '../web3-context/web3-context';
const Content: FunctionComponent<unknown> = () => {
  const { address, balance } = useWeb3Context();
  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path='/'>
          <div className={styles.welcome_content}>
            <div>Welcome to the Ethernaut Solver!</div>
            <div>Your eth balance is: {balance}</div>
            <div>Your eth address is: {address}</div>
          </div>
        </Route>
        <Route exact path='/intro'>
          <Intro />
        </Route>
        <Route exact path='/fallback'>
          <Fallback />
        </Route>
        <Route exact path='/fallout'>
          <Fallout />
        </Route>
        <Route exact path='/coinflip'>
          <Coinflip />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
