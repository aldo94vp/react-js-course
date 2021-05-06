import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import Input from '../../common/input.component';
import ButtonPrimary from '../../common/button-primary.component';
import ButtonSecondary from '../../common/button-secondary.component';
import DeleteMovie from './movie-delete.component';
import SubmittedMovie from './movie-submitted.component';

import { submitMovie } from 'services/movieService';
import { openModalSubmitted } from 'actions';

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: flex-end;
  button {
    margin-left: 2rem;
  }
`

const validateFields = values => {
  const errors = {};
  const commonError = 'is required.';

  if (!values.title || values.title.length < 2) errors.title = `Title ${commonError}`;
  if (!values.movieUrl || values.movieUrl.length < 2) errors.movieUrl = `Movie URL ${commonError}`;
  if (!values.releaseDate || values.releaseDate.length < 2) errors.releaseDate = `Release Date ${commonError}`;
  if (!values.overview || values.overview.length < 2) errors.overview = `Overview ${commonError}`;
  if (!values.genre || values.genre.length < 1) errors.genre = `Genre ${commonError}`;
  if (!values.runtime || values.runtime.length < 2) errors.runtime = `Runtime ${commonError}`;
  return errors;
};

const initialValues = {
  movieId: '',
  title: '',
  movieUrl: '',
  releaseDate: '',
  overview: '',
  genre: '',
  runtime: ''
};


const MovieModal = props => {
  const { type, movie } = props;
  const isMovieDefined = Object.keys(movie).length > 0;
  
  const dispatch = useDispatch();
  const submit = values => {
    submitMovie(values).then(() => {
      dispatch(openModalSubmitted())
    })
  }
  
  return (
    <>
      {
        {
          'delete' : <DeleteMovie />,
          'submitted': <SubmittedMovie />
        }[type] ||
        <>
          <h1>
            { type === 'add' ? 'Add' : 'Edit' }  Movie
          </h1>
          <Formik
            initialValues={initialValues}
            validate={validateFields}
            onSubmit={submit}
          >
            {
              ({setFieldValue, resetForm}) => 
              <Form>
                {
                  isMovieDefined &&
                  <Input
                    type="text"
                    name="movieId"
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
                  value={movie?.title && movie.title !== '' ? movie.title : ''}
                />
                <Input 
                  type="text"
                  name="movieUrl"
                  label="Movie URL"
                  placeholder="Movie URL here"
                  className="red-label"
                  value={movie?.poster_path && movie?.poster_path !== '' ? movie.poster_path : ''}
                />
                <Input 
                  type="date"
                  name="releaseDate"
                  label="Release Date"
                  placeholder="Select Date"
                  className="red-label"
                  value={movie?.release_date && movie?.release_date !== '' ? movie.release_date : ''}
                />
                <Input 
                  type="textarea"
                  name="overview"
                  label="Overview"
                  placeholder="Overview here"
                  className="red-label"
                  value={movie?.overview && movie?.overview !== '' ? movie.overview : ''}
                />
                
                <Input 
                  type="select" 
                  name="genre"
                  label="Genre"
                  placeholder="Select Genre"
                  className="red-label"
                  onChange={evt =>
                    setFieldValue(
                      "genre",
                      [].slice
                        .call(evt.target.selectedOptions)
                        .map(option => option.value)
                    )
                  }
                  value={movie?.genres && movie?.genres.length > 0 ? movie.genres : ['']}
                />
                <Input 
                  type="number"
                  name="runtime"
                  label="Runtime"
                  placeholder="Runtime here"
                  className="red-label"
                  value={movie?.runtime && movie?.runtime !== '' ? movie.runtime : ''}
                />
                <ButtonContainer>
                  <ButtonSecondary onClick={() => isMovieDefined && resetForm({ values: {...initialValues, movieId: movie.id}})}>reset</ButtonSecondary>
                  <ButtonPrimary type="submit">submit</ButtonPrimary>
                </ButtonContainer>
              </Form>
            }
          </Formik>
        </>
      }
    </>
  )
}

export default MovieModal;
