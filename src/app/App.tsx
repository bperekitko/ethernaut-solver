import React, { FunctionComponent } from 'react';
import styles from './app.module.scss';
import Content from './content/Content';
import Menu from './menu/Menu';
import './styles.scss';

const App: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.app}>
      <Menu></Menu>
      <Content></Content>
    </div>
  );
};

export default App;
