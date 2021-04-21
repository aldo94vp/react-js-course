import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useParseYear } from '../../../hooks';
import { openModalDelete, openModalEdit, setMovie } from '../../../actions';


const MovieContainer = styled.div`
  width: 30%;
  height: auto;
  margin-bottom: 30px;
  color: ${props => props.theme.white};
`
const MovieImage = styled.div`
  height: 0px;
  padding-bottom: 144%;
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  &:hover {
    > span {
      display: block;
    }
  }
`
const MovieOptionsButton = styled.span`
  position: relative;
  display: none;
  background-color: ${props => props.theme.grayDark};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  right: 10px;
  top: 10px;
  cursor: pointer;
  span::after {
    content: '';
    background-color: ${props => props.theme.white};
    height: 4px;
    width: 4px;
    display: block;
    position: relative;
    top: 22%;
    left: 44%;
    border-radius: 50%;
    margin-bottom: 2px;
  }
  &:hover + div{
    display: flex;
  }
`
const MovieOptions = styled.div`
  display: none;
  flex-direction: column;
  width: 100px;
  top: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s;
  &:hover {
    display: flex;
    opacity: 1;
  }
  button {
    border: none;
    padding: 5px;
    background-color: ${props => props.theme.grayDark};
    color: ${props => props.theme.white};
    cursor: pointer;
    &:last-child {
      background-color: ${props => props.theme.red};
    }
    &:hover {
      text-decoration: underline;
    }
  }
`
const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  opacity: 0.6;
  font-size: 80%;
`
const MovieTitle = styled.span``
const MovieYear = styled.span`
  border: 1px solid ${props => props.theme.white};
  border-radius: 3px;
  padding: 3px 12px;
  font-size: 80%;
  opacity: 0.7;
`
const MovieGenres = styled.div`
  flex: 1 0 100%;
`
const Genre = styled.span`
  font-size: 90%;
  opacity: 0.7;
  &:not(:last-of-type)::after {
    content: ', ';
  }
`

const Movie = props => {
  const dispatch = useDispatch();
  
  const { title, release_date, poster_path, genres } = props.movie;
  
  const parsedYear = useParseYear(release_date)();

  return (
    <>
      <MovieContainer>
        <MovieImage imgSrc={poster_path} onClick={() => dispatch(setMovie(props.movie))}>
          <MovieOptionsButton>
            <span></span>
            <span></span>
            <span></span>
          </MovieOptionsButton>
          <MovieOptions>
            <button onClick={() => dispatch(openModalEdit())}>Edit</button>
            <button onClick={() => dispatch(openModalDelete())}>Delete</button>
          </MovieOptions>
        </MovieImage>
        <MovieDetails>
          <MovieTitle>{title}</MovieTitle>
          <MovieYear>{parsedYear}</MovieYear>
          <MovieGenres>
            {
              genres.map((genre, idx) => (
                <Genre key={`movie-genre-${idx}`}>{ genre }</Genre>
              ))
            }
          </MovieGenres>
        </MovieDetails>
      </MovieContainer>
    </>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;
