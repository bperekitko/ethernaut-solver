import { FunctionComponent } from 'react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Level from './levels/Level';

const Content: FunctionComponent<unknown> = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:levelName'>
        <Level />
      </Route>
    </Switch>
  );
};

export default Content;
