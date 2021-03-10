import React from 'react';
import styled from 'styled-components';
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
const InputContainer = styled.div`
  position: relative;
  width: 79%;
`
const MovieName = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 3px;
  padding: 15px;
  position: relative;
  height: 3rem;
  &:focus + label {
    opacity: 0;
  }
`
const Label = styled.label`
  position: absolute;
  width: 100%;
  padding: 15px;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
  transition: opacity 0.2s;
`
const SearchButton = styled.input`
  flex: 0 0 19%;
  height: 3rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 3px;
`

export const SearchBar = () => {
  return (
    <>
      <Form name="search-movie">
        <h1 className="uppercase">
          find your movie
        </h1>
        <InputContainer>
          <MovieName type="text" name="movie-name" />
          <Label htmlFor="movie-name">What do you want to watch?</Label>
        </InputContainer>
        <SearchButton className={styled.SearchButton} type="submit" value="search" />
      </Form>
    </>
  )
}
