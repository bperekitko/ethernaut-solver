import { FunctionComponent } from 'react';
import React from 'react';
import styles from './level.module.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Level: FunctionComponent<{ name: string; href: string }> = (props) => {
  const history = useHistory();
  const onLevelClicked = () => history.push(props.href);
  return (
    <div className={styles.level} onClick={onLevelClicked}>
      {props.name}
    </div>
  );
};

Level.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};

export default Level;
