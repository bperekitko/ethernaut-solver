import React, { FunctionComponent } from 'react';
import Levels from './levels/Levels';
import styles from './app.module.scss';

const App: FunctionComponent<unknown> = () => {
  return (
    <div className={styles.app}>
      <div>Here will be navigation bar</div>
      <div>
        <Levels />
        <div>Here will be level solution</div>
      </div>
    </div>
  );
};

export default App;
