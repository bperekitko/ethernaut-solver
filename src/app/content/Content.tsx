import { FunctionComponent } from 'react';
import React from 'react';
import styles from './content.module.scss';
import { Switch, Route } from 'react-router-dom';
import Intro from './intro/Intro';
import Fallback from './fallback/Fallback';
import Fallout from './fallout/Fallout';
import Coinflip from './coinflip/Coinflip';

const Content: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path='/'>
          <div>Welcome to the Ethernaut Solver!</div>
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
