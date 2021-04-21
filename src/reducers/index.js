import MoviesListReducer from './movies-list.reducer';
import { combineReducers } from 'redux';
import MovieReducer from './movie.reducer';
import AppOptions from './app-options.reducer';

const reducers = combineReducers({
  movies: MoviesListReducer,
  movie: MovieReducer,
  options: AppOptions
});

export default reducers;
