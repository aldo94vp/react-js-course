import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { filterGenre } from '../../actions';

const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  overflow: hidden;
  &:hover {
    overflow-x: auto;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.grayDark};
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.grayLight};
  }
`
const Genre = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  padding: 5px 0;
  margin-right: 15px;
  color: ${props => props.theme.white};
  &.active {
    border-bottom: 3px solid ${props => props.theme.red};
    padding-bottom: 5px;
    top: 2px;
    position: relative;
  }
`

const GenreSelect = (props) => {
  const dispatch = useDispatch();

  const [ selectedGenre, setSelectedGenre ] = useState('all');

  useEffect(() => {
    dispatch(filterGenre(selectedGenre))
  }, [selectedGenre, dispatch]);

  const genres = [ 'all', ...props.genres ];
  return (
    <GenresContainer>
      {genres.map((genre, idx) => (
        <Genre key={`genre-${idx}`} className={selectedGenre === genre && 'active'} onClick={() => setSelectedGenre(genre)}>{ genre }</Genre>
      ))}
    </GenresContainer>
  )
}

export default GenreSelect;
