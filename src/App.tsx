import React, { FunctionComponent } from 'react';
import styles from './app.module.scss';

const App: FunctionComponent<unknown> = () => {
  return <h1 className={styles.title}>Ethernaut Solver Works!</h1>;
};

export default App;
