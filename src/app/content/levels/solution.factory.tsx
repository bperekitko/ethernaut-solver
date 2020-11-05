import Fallback from './fallback/Fallback';
import React from 'react';

const forLevelName = (levelName: string): JSX.Element => {
  switch (levelName) {
    case 'fallback':
      return <Fallback />;
    default:
      return null;
  }
};

const SolutionFactory = {
  forLevelName,
};

export default SolutionFactory;
