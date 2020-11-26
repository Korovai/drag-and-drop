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
  points: 0
};

const REORDER_ELEMENTS = 'REORDER_ELEMENTS';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REORDER_ELEMENTS:
      return {
        ...state,
        settings: action.list
      };
    default:
      return state;
  };
};

export default reducer;

const onReorderElements = (list) => {
  return {
    type: 'REORDER_ELEMENTS',
    list
  };
};

export {
  onReorderElements
};
  