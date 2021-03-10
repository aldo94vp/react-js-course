import React from 'react';
import { SearchBar } from './header-searchbar.component';
import styled from 'styled-components';
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

  &::before {
    content: '+ ';
  }
`
const HeaderMain = styled.div`
  width: 80%;
  display: flex;
  align-self: center;
  margin: auto;
`

export const HeaderWrapper = () => {
  return (
    <Header>
      <HeaderContainer>
        <HeaderTop>
          <SpanLogo><strong>netflix</strong>roulette</SpanLogo>
          <ButtonAdd>
            add movie
          </ButtonAdd>
        </HeaderTop>
        <HeaderMain>
          <SearchBar></SearchBar>
        </HeaderMain>
      </HeaderContainer>
    </Header>
  )
}
