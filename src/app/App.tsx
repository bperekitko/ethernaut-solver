import React, { FunctionComponent } from 'react';
import styles from './app.module.scss';
import Content from './content/Content';
import Menu from './menu/Menu';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Web3Provider } from './web3-context/web3-context';

const App: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Web3Provider>
          <Menu></Menu>
          <Content></Content>
        </Web3Provider>
      </Router>
    </div>
  );
};

export default App;
