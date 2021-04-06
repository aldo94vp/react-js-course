import React from 'react';
import styled from 'styled-components';
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

export const SearchBar = () => {
  return (
    <>
      <Form name="search-movie">
        <h1 className="uppercase">
          find your movie
        </h1>
        <Input
          type="text"
          name="movie-name" 
          label="What do you want to watch?"
          width="88%"
        />
        <ButtonPrimary>search</ButtonPrimary>
      </Form>
    </>
  )
}
