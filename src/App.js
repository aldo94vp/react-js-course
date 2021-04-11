import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { MoviesContextProvider } from './contexts';

import { ErrorBoundary } from './components/error-boundary.component';
import Footer from './components/footer/footer.component';
import HeaderWrapper from './components/header/header-wrapper.component';
import MainWrapper from './components/main/main-wrapper.component';
import { theme } from './variables';
import './app.scss';
import Modal from './components/modals/modal.component';

const App = () => {
  const [ modalOptions ] = useState({isModalOpen: false});

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <MoviesContextProvider modalOptions={modalOptions}>
          <HeaderWrapper></HeaderWrapper>
          <MainWrapper></MainWrapper>
          <Footer></Footer>
          <Modal></Modal>
        </MoviesContextProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
