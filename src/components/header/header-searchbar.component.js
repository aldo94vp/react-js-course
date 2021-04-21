import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setMoviesList } from '../../actions';
import ButtonPrimary from '../common/button-primary.component';
import Input from '../common/input.component';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  h1 {
    flex: 1 0 100%;
    font-weight: 300;
  }
`

const SearchBar = () => {
  const [ value, setValue ] = useState('');

  const options = useSelector(state => state.options.sort)

  const dispatch = useDispatch();

  const handleValue = value => {
    setValue(value)
  };

  const handleClick = e => {
    e.preventDefault();
    fetch(`http://localhost:4000/movies?search=${value}&searchBy=title&limit=9&sortBy=${options.field}&sortOrder=${options.order}`).then(body => body.json())
      .then(json => dispatch(setMoviesList(json)));
  }
  
  return (
    <>
      <Form  name="search-movie" onSubmit={handleClick}>
        <h1 className="uppercase">
          find your movie
        </h1>
        <Input
          type="text"
          name="movie-name" 
          label="What do you want to watch?"
          width="88%"
          value={value}
          onChange={handleValue}
        />
        <ButtonPrimary onClick={handleClick}>search</ButtonPrimary>
      </Form>
    </>
  )
}

export default SearchBar;
