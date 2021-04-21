import React from 'react';
import Movie from './movie.component';
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
  ::after {
    content: ''; 
    flex: auto;
  }
  
`

const MoviesWrapper = (props) => {
  const { movies } = props;

  return (
    <>
      <MoviesCount>{ movies.count } movies found</MoviesCount>
      <MoviesGrid>
        {
          movies.list?.map(movie => (
            <Movie key={movie.id} movie={movie}></Movie>
          ))
        }
      </MoviesGrid>
    </>
  )
}

MoviesWrapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number
}

export default MoviesWrapper;
