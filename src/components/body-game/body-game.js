// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { recordingMixItems, onRestartGame } from '../../reducers/index';

// Material-UI
import Box from '@material-ui/core/Box';

// Beautiful DND
import { Droppable } from "react-beautiful-dnd";

// Components
import ListGameItems from '../list-game-items/list-game-items';

class BodyGame extends Component {

  static propTypes = {
    arrMixItems: PropTypes.array,
    settings: PropTypes.array,
    recordingMixItems: PropTypes.func,
    onRestartGame: PropTypes.func
  };

  componentDidMount() {
    this.mixItems();
  };

  mixItems() {
    const { settings, recordingMixItems } = this.props;
    const arrIndex = this.getUnique(0, 6, 7);
    const newArr = [];

    for (let i=0; i<arrIndex.length; i++) {
      const item = settings.find((item, index) => index === arrIndex[i]);
      newArr[i] = item;
    }
 
    recordingMixItems(newArr);
  };
  
  getUnique(min, max, n) {
    if (n > max-min+1 || n < 0) return [];
    const buf = [];
    
    for (let i=0; i<n;) {
      const value = Math.round(Math.random() * (max-min)) + min;
      
      if (buf.length === 0) {
        buf[0] = value;
        i++;
      }
  
      if (buf.indexOf(value) === -1) {
        buf.push(value);
        i++;
      }
    }
    
    const res = [];
    for (let i in buf) res[res.length] = buf[i];
    return res;
  };

  handleRestartGame = () => {
    const { onRestartGame } = this.props;

    onRestartGame();
    this.mixItems();
  };

  render() {
    const { classes, arrMixItems } = this.props;

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
                arrMixItems.map((item, index) => {
                  return (
                    <ListGameItems
                      key={item.id}
                      id={item.id}
                      type={item.type}
                      load={item.load}
                      index={index}
                      handleRestartGame={this.handleRestartGame}
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

const mapStateToProps = ({ arrMixItems }) => {
  return {
    arrMixItems
  };
};

const mapDispatchToProps = {
  recordingMixItems,
  onRestartGame
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyGame);
