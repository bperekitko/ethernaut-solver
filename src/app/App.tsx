import React, { FunctionComponent } from 'react';
import styles from './app.module.scss';
import Content from './content/Content';
import Menu from './menu/Menu';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const App: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Menu></Menu>
        <Content></Content>
      </Router>
    </div>
  );
};

export default App;
