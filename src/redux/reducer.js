const initialState = {
  sound: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_SOUND':
      return {
        ...state,
        sound: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
