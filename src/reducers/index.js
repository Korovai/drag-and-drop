const initialState = {
  settings: [
    {
      id: 1,
      load: 1,
      type: 'cellOne'
    },
    {
      id: 2,
      load: 2,
      type: 'cellTwo'
    },
    {
      id: 3,
      load: 3,
      type: 'cellThree'
    },
    {
      id: 4,
      load: 4,
      type: 'cellFoure'
    },
    {
      id: 5,
      load: 5,
      type: 'cellFive'
    },
    {
      id: 6,
      load: 6,
      type: 'cellSix'
    },
    {
      id: 7,
      load: 7,
      type: 'cellSeven'
    }
  ],
  arrMixItems: [],
  message: 'Drag items from small to large...'
};

const DRAGGING_ITEMS = 'DRAGGING_ITEMS';
const RECORDING_MIX_ITEMS = 'RECORDING_MIX_ITEMS';
const RECORDING_GAME_RESULTS = 'RECORDING_GAME_RESULTS';
const RESTART_GAME = 'RESTART_GAME';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case DRAGGING_ITEMS:
      return {
        ...state,
        arrMixItems: action.list
      };
    case RECORDING_MIX_ITEMS:
      return {
        ...state,
        arrMixItems: action.list
      };
    case RECORDING_GAME_RESULTS:
      return {
        ...state,
        message: action.message
      };
    case RESTART_GAME:
      return {
        ...state,
        arrMixItems: [],
        message: 'Drag items from small to large...'
      };
    default:
      return state;
  };
};

export default reducer;

const draggingItems = (list) => {
  return {
    type: 'DRAGGING_ITEMS',
    list
  };
};

const recordingMixItems = (list) => {
  return {
    type: 'RECORDING_MIX_ITEMS',
    list
  };
};

const recordingGameResults = (message) => {
  return {
    type: 'RECORDING_GAME_RESULTS',
    message
  };
};

const onRestartGame = () => {
  return {
    type: 'RESTART_GAME'
  };
};

export {
  draggingItems,
  recordingMixItems,
  recordingGameResults,
  onRestartGame
};
  