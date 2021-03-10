import React from 'react';
import { Movie } from './movie.component';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MoviesCount = styled.span`
  color: ${props => props.theme.white};
  padding: 20px 0;
`
const MoviesGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const MoviesWrapper = (props) => {
  const movies = props.movies;
  return (
    <>
      <MoviesCount>{ movies.length } movies found</MoviesCount>
      <MoviesGrid>
        {movies.map((movie, idx) => (
          <Movie key={`movie-${idx}`} movie={movie}></Movie>
        ))}
      </MoviesGrid>
    </>
  )
}

MoviesWrapper.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}
