import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import LevelSourceCodeFactory from './source-code.factory';
import Tab from './tabs/Tab';
import Tabs from './tabs/Tabs';
import styles from './level.module.scss';
import SolutionFactory from './solution.factory';

const Level: FunctionComponent<unknown> = () => {
  const { levelName } = useParams<{ levelName: string }>();

  const sourceCode = LevelSourceCodeFactory.forLevelName(levelName);
  const solution = SolutionFactory.forLevelName(levelName);

  return (
    <div className={styles.level}>
      <Tabs>
        <Tab label={'Source Code'}>{sourceCode}</Tab>
        <Tab label={'Solution'}>{solution}</Tab>
      </Tabs>
    </div>
  );
};

export default Level;
