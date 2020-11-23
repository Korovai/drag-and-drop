// Base
import React from 'react';

// Material-UI
import Box from '@material-ui/core/Box';

// Components
import ListGameItems from '../list-game-items/list-game-items';

// Styles
import useStyles from './body-game-styles';

const BodyGame = ({ settings }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrBodyGame}>
      <Box className={classes.playingField}>
        {
          settings.map((item) => {
            return (
              <ListGameItems
                key={item.id}
                id={item.id}
                type={item.type}
              />
            );
          })
        }
      </Box>
    </Box>
  );
};

export default BodyGame;
