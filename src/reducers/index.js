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
  points: 0
};

const DRAGGING_ITEMS = 'DRAGGING_ITEMS';
const RECORDING_MIX_ITEMS = 'RECORDING_MIX_ITEMS';

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

export {
  draggingItems,
  recordingMixItems
};
  