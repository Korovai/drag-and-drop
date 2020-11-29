// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React
import { connect } from 'react-redux';
import { draggingItems, recordingGameResults } from '../../reducers/index';

// Material-UI
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";

// Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";

// Components
import HeaderGame from '../header/header-game';
import BodyGame from '../body-game/body-game';
import FooterGame from '../footer/footer-game';

// Styles
const styles = (theme) => ({
  wrApp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  playWindow: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '650px',
    margin: '0 30px'
  },
  wrBodyGame: {
    border: '1px solid #fff',
    margin: '5px 0',
    background: '#fff'
  },
  playingField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px'
  }
});

class App extends Component {

  static propTypes = {
    settings: PropTypes.array,
    message: PropTypes.string,
    list: PropTypes.array,
    startIndex: PropTypes.number,
    endIndex: PropTypes.number,
    arrMixItems: PropTypes.array,
    draggingItems: PropTypes.func,
    recordingGameResults: PropTypes.func
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.handleEndGameCheck();
    };
  };

  reorder = (list, startIndex, endIndex) => {   
    const result = Array.from(list);
    // Remove one element this startIndex
    const [removed] = result.splice(startIndex, 1);
    // Inserts the deleted element after endIndex
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = (result) => {
    const { arrMixItems, draggingItems } = this.props;
    const { source, destination } = result;
    let reorderList = null;

    // Dropped outside the list
    if (!destination) return;

    // Sorting folders
    if (source.droppableId === 'droppableElements' && destination.droppableId === 'droppableElements') {
      reorderList = this.reorder(arrMixItems, source.index, destination.index);
      draggingItems(reorderList);
    }
  };

  handleEndGameCheck = () => {
    const { arrMixItems, recordingGameResults } = this.props;
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

  render() {
    const { classes, settings, message } = this.props;

    return (
      <Box className={classes.wrApp}>
        <Box className={classes.playWindow}>
          <HeaderGame />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <BodyGame classes={classes} settings={settings} />
          </DragDropContext>
          <FooterGame message={message} />
        </Box>
      </Box>   
    );
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
