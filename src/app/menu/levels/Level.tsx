import { FunctionComponent } from 'react';
import React from 'react';
import styles from './level.module.scss';
import PropTypes from 'prop-types';

const Level: FunctionComponent<{ levelName: string }> = (props) => {
  return <div className={styles.level}>{props.levelName}</div>;
};

Level.propTypes = {
  levelName: PropTypes.string,
};

export default Level;
