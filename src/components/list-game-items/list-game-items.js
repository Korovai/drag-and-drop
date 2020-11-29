// Base
import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Material-UI
import Box from '@material-ui/core/Box';

// Beautiful DND
import { Draggable } from "react-beautiful-dnd";

// Styles
import './list-game-items-styles.css';

class ListGameItems extends Component {

  static propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    load: PropTypes.number,
    index: PropTypes.number,
    handleRestartGame: PropTypes.func
  };
  
  getItemStyle = (isDragging, draggableStyle) => ({
    // Some basic styles to make the items look a bit nicer
    userSelect: 'none',
  
    // Change background colour if dragging
    background: isDragging ? '#A5B9C9' : '',
  
    // Styles we need to apply on draggables
    ...draggableStyle
  });

  render() {
    const { id, type, load, index, handleRestartGame } = this.props;

    return (
      <>
        <Draggable draggableId={`${id}`} index={index}>
          {(provided, snapshot) => (
            <Box
              onClick={handleRestartGame}
              className={clsx('gameElement', `${type}`)}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={this.getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              { load }
            </Box>
          )}
        </Draggable>
      </>
    );
  };
};

export default ListGameItems;
