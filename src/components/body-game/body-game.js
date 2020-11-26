// Base
import React, { Component } from 'react';

// Material-UI
import Box from '@material-ui/core/Box';

// Beautiful DND
import { Droppable } from "react-beautiful-dnd";

// Components
import ListGameItems from '../list-game-items/list-game-items';

class BodyGame extends Component {
  render() {
    const { classes, settings } = this.props;
    
    return (
      <Droppable droppableId="droppableElements">
        {(provided) => (
          <Box
            className={classes.wrBodyGame}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Box className={classes.playingField}>
              {
                settings.map((item, index) => {
                  return (
                    <ListGameItems
                      key={item.id}
                      id={item.id}
                      type={item.type}
                      load={item.load}
                      index={index}
                    />
                  );
                })
              }
            </Box>
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    );
  };
};

export default BodyGame;
