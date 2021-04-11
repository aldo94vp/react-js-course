import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { MoviesContext } from '../../contexts';
import GenreSelect from './main-genre-select.component';
import SortBySelect from './main-sort-select.component';
import MoviesWrapper from './movies/movies-wrapper.component';

const genres = [
  'documentary',
  'comedy',
  'horror',
  'crime'
];

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
  height: 40px;
  width: 100%;
  border-bottom: 3px ridge ${props => props.theme.grayLight};
`

const MainWrapper = () => {
  const moviesContext = useContext(MoviesContext);
  
  const { movies, setMovies } = moviesContext;

  useEffect(() => {
    fetch('/assets/movies.json').then(body => body.json())
      .then(data => setMovies(data.movies));
  }, [setMovies]);

  return (
    <Main>
      <TopBar>
        <GenreSelect genres={genres}></GenreSelect>
        <SortBySelect></SortBySelect>
      </TopBar>
      <MoviesWrapper movies={movies}></MoviesWrapper>
    </Main>
  )
}

export default MainWrapper;
