import React from 'react';
import FallbackCode from './fallback/FallbackCode';

const forLevelName = (levelName: string): JSX.Element => {
  switch (levelName) {
    case 'fallback': {
      return <FallbackCode />;
    }
    default:
      return null;
  }
};

const LevelSourceCodeFactory = {
  forLevelName,
};

export default LevelSourceCodeFactory;
