const MoviesListReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_MOVIES_LIST':
      state = {
        list: action.payload.data,
        count: action.payload.totalAmount
      }
      return state;
    default:
      return state;
  }
}

export default MoviesListReducer;
