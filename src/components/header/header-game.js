// Base
import React from 'react';

// Material-UI
import Box from '@material-ui/core/Box';

// Styles
import useStyles from './header-game-styles';

const HeaderGame = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrHeaderGame}>
      <h1 className={classes.headerGame}>Drag and Drop Game</h1>
    </Box>
  );
};

export default HeaderGame;
