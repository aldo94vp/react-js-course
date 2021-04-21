const MovieReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_MOVIE':
      state = action.payload;
      return state;
    case 'CLEAR_MOVIE':
      state = {}
      return state;
    default:
      return state;
  }
}

export default MovieReducer;
