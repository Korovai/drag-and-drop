// Base
import React from 'react';

// Material-UI
import Box from '@material-ui/core/Box';

// Styles
import useStyles from './footer-game-styles';

const FooterGame = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrFooterGame}>
      <Box componet='span'>game footer</Box>
    </Box>
  );
};

export default FooterGame;
