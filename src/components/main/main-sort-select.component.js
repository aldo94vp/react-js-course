import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { sortBy } from '../../actions';

const FilterBy = styled.div`
  width: 20%;
  align-self: center;
  text-align: right;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  align-items: center;
  justify-content: flex-end;
  display: flex;
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
  // width: 30%;
  margin-right: 15px;
  cursor: pointer;
`
const OrderButton = styled.button`
  content: " ";
  width: 1.1rem;
  height: 0.9rem;
  background-color: ${props => props.theme.red};
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  margin-left: -15px;
  transition: transform ease 0.15s;
  cursor: pointer;
  &.asc {
    transform: rotate(180deg);
  }
`

const SortBySelect = () => {
  const [ field, setField ] = useState('release_date');
  const [ order, setOrder ] = useState(0);

  const dispatch = useDispatch();

  const handleSelectChange = e => {
    setField(e.target.value);
  }
  const handleOrderChange = () => {
    setOrder(!order)
  }

  useEffect(() => {
    dispatch(sortBy({field, order}));
  }, [field, order, dispatch])

  return (
    <FilterBy>
      <Label htmlFor="filter-by">sort by</Label>
      <Select type="select" name="filter-by" onChange={handleSelectChange} value={field}>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </Select>
      <OrderButton className={order && 'asc'} onClick={handleOrderChange}></OrderButton>
    </FilterBy>
  )
}

export default SortBySelect;
