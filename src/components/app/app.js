// Base
import React from 'react';

// React
import { connect } from 'react-redux';
import { draggingItems, recordingGameResults } from '../../reducers/index';

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
  const { settings, arrMixItems, recordingGameResults, message } = props;

  const reorder = (list, startIndex, endIndex) => {   
    const result = Array.from(list);
    // Remove one element this startIndex
    const [removed] = result.splice(startIndex, 1);
    // Inserts the deleted element after endIndex
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { draggingItems } = props;
    const { source, destination } = result;
    let reorderList = null;

    // Dropped outside the list
    if (!destination) return;

    // Sorting folders
    if (source.droppableId === 'droppableElements' && destination.droppableId === 'droppableElements') {
      reorderList = reorder(arrMixItems, source.index, destination.index);
      draggingItems(reorderList);
      handleEndGameCheck();
    }
  };

  const handleEndGameCheck = () => {
    let p = 0;

    for (let i=0; i<arrMixItems.length - 1; i++) {
      if (arrMixItems[i].load < arrMixItems[i+1].load) {
        p++;
      }
    }

    if (p === arrMixItems.length - 1) {
      const message = 'Game over! To restart the game, click on the chips.';

      recordingGameResults(message);
    }
  };
  
  return (
    <Box className={classes.wrApp}>
      <Box className={classes.playWindow}>
        <HeaderGame />
        <DragDropContext onDragEnd={onDragEnd}>
          <BodyGame classes={classes} settings={settings} />
        </DragDropContext>
        <FooterGame message={message} />
      </Box>
    </Box>   
  );
};

const mapStateToProps = ({ settings, arrMixItems, message }) => {
  return {
    settings,
    arrMixItems,
    message
  };
};

const mapDispatchToProps = {
  draggingItems,
  recordingGameResults
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
