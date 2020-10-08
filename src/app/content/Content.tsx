import { FunctionComponent } from 'react';
import React from 'react';
import styles from './content.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './intro/Intro';

const Content: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.content}>
      <Router>
        <Switch>
          <Route exact path='/intro'>
            <Intro />
          </Route>
          <Route path='/'>
            <div>Welcome to the Ethernaut Solver!</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Content;
