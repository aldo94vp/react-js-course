import React from 'react';
import styled from 'styled-components';

const FilterBy = styled.div`
  width: 30%;
  align-self: center;
  text-align: right;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  &::after {
    content: " ";
    width: 0.8rem;
    height: 0.5rem;
    background-color: ${props => props.theme.red};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    margin-left: 10px;
  }
`
const Label = styled.label`
  color: ${props => props.theme.white};
  margin-right: 10px;
  opacity: 0.5;
  font-size: 75%;
`
const Select = styled.select`
  background-color: transparent;
  height: 2rem;
  border: none;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  appearance: none;
`

const SortBySelect = () => {
  return (
    <FilterBy>
      <Label htmlFor="filter-by">sort by</Label>
      <Select type="select" name="filter-by">
        <option>Release Date</option>
        <option>Title</option>
        <option>Genre</option>
      </Select>
    </FilterBy>
  )
}

export default SortBySelect;
