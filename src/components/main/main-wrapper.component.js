import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setMoviesList } from '../../actions';

import GenreSelect from './main-genre-select.component';
import SortBySelect from './main-sort-select.component';
import MoviesWrapper from './movies/movies-wrapper.component';

import Genres from '../common/genres';

const Main = styled.main`
  width: 100%;
  background-color: ${props => props.theme.grayDark};
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`
const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 58px;
  width: 100%;
  border-bottom: 3px ridge ${props => props.theme.grayLight};
`

const MainWrapper = () => {
  const movies = useSelector(state => state.movies);
  const sort = useSelector(state => state.options.sort);
  const dispatch = useDispatch();

  useEffect(() => {
    const { field, order, genre } = sort;
    const filterGenre = genre !== 'all' ? `&searchBy=genres&filter=${genre}` : '';
    const url = `http://localhost:4000/movies?limit=9&sortBy=${field}&sortOrder=${order}${filterGenre}`;
    fetch(url).then(body => body.json())
      .then(json => dispatch(setMoviesList(json)));
  }, [sort, dispatch]);

  return (
    <Main>
      <TopBar>
        <GenreSelect genres={Genres}></GenreSelect>
        <SortBySelect></SortBySelect>
      </TopBar>
      <MoviesWrapper movies={movies}></MoviesWrapper>
    </Main>
  )
}

export default MainWrapper;
