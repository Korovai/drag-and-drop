// Base
import React from 'react';

// React
import { connect } from 'react-redux';
import { onReorderElements } from '../../reducers/index';

// Material-UI
import Box from '@material-ui/core/Box';

// Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";

// Components
import HeaderGame from '../header/header-game';
import BodyGame from '../body-game/body-game';
import FooterGame from '../footer/footer-game';

// Styles
import useStyles from './app-styles';

function App(props) {
  const classes = useStyles();
  const { settings } = props;

  const reorder = (list, startIndex, endIndex) => {   
    const result = Array.from(list);
    // Remove one element this startIndex
    const [removed] = result.splice(startIndex, 1);
    // Inserts the deleted element after endIndex
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { onReorderElements } = props;
    const { source, destination } = result;
    let reorderList = null;

    // Dropped outside the list
    if (!destination) return;

    // Sorting folders
    if (source.droppableId === 'droppableElements' && destination.droppableId === 'droppableElements') {
      reorderList = reorder(settings, source.index, destination.index);
      onReorderElements(reorderList);
    }
  };
  
  return (
    <Box className={classes.wrApp}>
      <Box className={classes.playWindow}>
        <HeaderGame />
        <DragDropContext onDragEnd={onDragEnd}>
          <BodyGame classes={classes} settings={settings} />
        </DragDropContext>
        <FooterGame />
      </Box>
    </Box>   
  );
};

const mapStateToProps = ({ settings }) => {
  return {
    settings
  };
};

const mapDispatchToProps = {
  onReorderElements
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
