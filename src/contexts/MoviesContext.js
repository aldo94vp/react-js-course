import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {
  const {
    movies: initialMovies,
    movieSelected: initialMovieSelected,
    modalOptions: initialModalOptions,
    children 
  } = props;

  const [ movies, setMovies ] = useState(initialMovies);
  const [ movieSelected, setMovieSelected ] = useState(initialMovieSelected);
  const [ modalOptions, setModalOptions ] = useState(initialModalOptions);

  useEffect(() => {
    if (!modalOptions.isModalOpen | modalOptions.type === 'add') {
      setMovieSelected({})
    }
  }, [modalOptions]);

  
  const moviesContext = {
    movies, 
    setMovies,
    movieSelected, 
    setMovieSelected,
    modalOptions, 
    setModalOptions
  }
  
  return <Context.Provider value={moviesContext}>{children}</Context.Provider>
}

export const { Consumer } = Context;

Provider.propTypes = {
movies: PropTypes.array,
  movieSelected: PropTypes.object,
  modalOptions: PropTypes.object
}

Provider.defaultProps = {
  movies: [],
  movieSelected: {},
  modalOptions: {}
}

