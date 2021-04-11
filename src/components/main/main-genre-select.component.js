import React from 'react';
import styled from "styled-components";

const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`
const Genre = styled.button`
  border: none;
  background-color: transparent;
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
  const genres = props.genres;
  return (
    <GenresContainer>
      <Genre className="active">All</Genre>
      {genres.map((genre, idx) => (
        <Genre key={`genre-${idx}`}>{ genre }</Genre>
      ))}
    </GenresContainer>
  )
}

export default GenreSelect;
