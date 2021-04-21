import React from 'react';
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
  const isMovieDefined = Object.keys(movie).length > 0;
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
              {
                isMovieDefined &&
                <Input 
                  type="text"
                  name="id"
                  label="MOVIE ID"
                  placeholder="Movie ID"
                  className="red-label"
                  disabled={true}
                  value={movie.id}
                />
              }
              <Input 
                type="text"
                name="title"
                label="Title"
                placeholder="Title"
                className="red-label"
                value={movie?.title}
              />
              <Input 
                type="text"
                name="movie-url"
                label="Movie URL"
                placeholder="Movie URL here"
                className="red-label"
                value={movie?.poster_path}
              />
              <Input 
                type="date"
                name="release-date"
                label="Release Date"
                placeholder="Select Date"
                className="red-label"
                value={movie?.release_date}
              />
              <Input 
                type="textarea"
                name="overview"
                label="Overview"
                placeholder="Overview here"
                className="red-label"
                value={movie?.overview}
              />
              <Input 
                type="select" 
                name="genre"
                label="Genre"
                placeholder="Select Genre"
                className="red-label"
                value={movie?.genres}
              />
              <Input 
                type="text"
                name="runtime"
                label="Runtime"
                placeholder="Runtime here"
                className="red-label"
                value={movie?.runtime}
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
