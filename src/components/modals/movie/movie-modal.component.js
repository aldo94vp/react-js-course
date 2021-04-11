import React, { useCallback } from 'react';
import styled from 'styled-components';
import Input from '../../common/input.component';
import ButtonPrimary from '../../common/button-primary.component';
import ButtonSecondary from '../../common/button-secondary.component';
import DeleteMovie from './movie-delete.component';

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: flex-end;
  button {
    margin-left: 2rem;
  }
`


const MovieModal = props => {
  const { type, movie } = props;
  
  const parseDate = useCallback(() => {
    const now = new Date(new Date().setFullYear(movie.year));
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
  
    return now.getFullYear()+"-"+(month)+"-"+(day) ;
  }, [movie.year]);
  
  return (
    <>
      {
        type === 'delete' ?
          <DeleteMovie></DeleteMovie>
        :
          <>
            <h1>
              { type === 'add' ? 'Add' : 'Edit' }  Movie
            </h1>
            <form>
              <Input 
                type="text"
                name="title"
                label="Title"
                placeholder="Title"
                className="red-label"
                value={movie && movie.title}
              />
              <Input 
                type="text"
                name="movie-url"
                label="Movie URL"
                placeholder="Movie URL here"
                className="red-label"
              />
              <Input 
                type="date"
                name="release-date"
                label="Release Date"
                placeholder="Select Date"
                className="red-label"
                value={movie && parseDate(movie.year)}
              />
              <Input 
                type="text"
                name="overview"
                label="Overview"
                placeholder="Overview here"
                className="red-label"
              />
              <Input 
                type="select" 
                name="genre"
                label="Genre"
                placeholder="Select Genre"
                className="red-label"
              />
              <Input 
                type="text"
                name="runtime"
                label="Runtime"
                placeholder="Runtime here"
                className="red-label"
              />
              <ButtonContainer>
                <ButtonSecondary>reset</ButtonSecondary>
                <ButtonPrimary type="submit">submit</ButtonPrimary>
              </ButtonContainer>
            </form>
          </>
      }
    </>
  )
}

export default MovieModal;
