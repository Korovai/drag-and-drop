// Base
import React from 'react';

// Material-UI
import Box from '@material-ui/core/Box';

// Styles
import './list-game-items-styles.css';

const ListGameItems = ({ id, type }) => {
  return (
    <Box className={`${type}`}>
      { id }
    </Box>
  );
};

export default ListGameItems;
