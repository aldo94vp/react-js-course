import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from './components/error-boundary.component';
import Footer from './components/footer/footer.component';
import HeaderWrapper from './components/header/header-wrapper.component';
import MainWrapper from './components/main/main-wrapper.component';
import { theme } from './variables';
import './app.scss';
import Modal from './components/modals/modal.component';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <HeaderWrapper></HeaderWrapper>
          <MainWrapper></MainWrapper>
          <Footer></Footer>
          <Modal></Modal>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
