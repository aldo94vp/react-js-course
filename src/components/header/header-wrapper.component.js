import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './header-searchbar.component';
import MovieCard from '../main/movies/movie-card.component';
import { clearMovie, openModalAdd } from '../../actions';
const bgHeader = 'https://images2.alphacoders.com/103/1039991.jpg';

const Header = styled.header`
  width: 100%;
  height: 400px;
  display: flex;
  background-image: url(${bgHeader});
  background-position: center;
  background-size: cover;
  color: ${props => props.theme.white};
`
const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  backdrop-filter: blur(5px) brightness(0.5);

  &.showing-movie {
    backdrop-filter: blur(5px) brightness(0.15);
  }
`
const HeaderTop = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;

`
const SpanLogo = styled.span`
  color: ${props => props.theme.red};
`
const ButtonAdd = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
  color: ${props => props.theme.red};
  text-transform: uppercase;
  padding: 5px 15px;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '+ ';
  }
`
const ClearMovieSelected = styled.button`
  background: transparent url(assets/search-icon.svg) center no-repeat;
  border: none;
  height: 40px;
  width: 40px;
  cursor: pointer;
`
const HeaderMain = styled.div`
  width: 80%;
  display: flex;
  align-self: center;
  margin: auto;
  &.showing-movie {
    width: 100%;
    padding: 0 15px;
    justify-content: space-between
  }
`

const HeaderWrapper = () => {
  const dispatch = useDispatch();

  const movieSelected = useSelector(state => state.movie);
  
  const [ isShowingMovie, setIsShowingMovie ] = useState(false);

  useEffect(() => {
    setIsShowingMovie(Object.keys(movieSelected).length > 0);
  }, [movieSelected]);

  return (
    <Header>
      <HeaderContainer className={isShowingMovie && 'showing-movie'}>
        <HeaderTop>
          <SpanLogo><strong>netflix</strong>roulette</SpanLogo>
          {
            isShowingMovie ?
              <ClearMovieSelected 
                onClick={() => dispatch(clearMovie())}>
              </ClearMovieSelected>
              :
              <ButtonAdd onClick={() => dispatch(openModalAdd())}>
                add movie
              </ButtonAdd>
          }
        </HeaderTop>
        <HeaderMain className={isShowingMovie && 'showing-movie'}>
          {
            isShowingMovie ?
              <MovieCard movie={movieSelected}></MovieCard> :
              <SearchBar></SearchBar>
          }
        </HeaderMain>
      </HeaderContainer>
    </Header>
  )
}

export default HeaderWrapper;
