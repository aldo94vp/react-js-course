import React, { useContext } from 'react';
import styled from 'styled-components';

import { MoviesContext } from '../../contexts';

import MovieModal from './movie/movie-modal.component';

const BlurContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 100;
`
const Container = styled.div`
  padding: 50px;
  margin: 50px auto;
  width: 50%;
  background-color: ${props => props.theme.grayDark};
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
`
const CloseButton = styled.span`
  position: absolute;
  right: 26%;
  top: 65px;
  width: 32px;
  height: 32px;
  opacity: 0.4;
  transition: opacity ease 0.2s;
  
  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  ::before, ::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: ${props => props.theme.white};
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`

const Modal = () => {
  const moviesContext = useContext(MoviesContext);

  const {
    modalOptions,
    setModalOptions,
    movieSelected
  } = moviesContext;
  
  return (
    <>
      {
        modalOptions.isModalOpen &&
        <BlurContainer>
          <CloseButton onClick={() => setModalOptions({isModalOpen: false})}></CloseButton>
          <Container>
            <MovieModal type={modalOptions.type} movie={movieSelected}></MovieModal>
          </Container>
        </BlurContainer>
      }
    </>
  )
}

export default Modal;
