import { ErrorBoundary } from './components/error-boundary.component';
import { Footer } from './components/footer/footer.component';
import { HeaderWrapper } from './components/header/header-wrapper.component';
import { MainWrapper } from './components/main/main-wrapper.component';
import { ThemeProvider } from 'styled-components';
import { theme } from './variables';
import './app.scss';
import React from 'react';
import { Modal } from './components/modals/modal.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      isModalOpen: false
    }
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  } 

  render() {
    const { isModalOpen } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <HeaderWrapper handleClick={this.openModal}></HeaderWrapper>
          <MainWrapper></MainWrapper>
          <Footer></Footer>
          {
            isModalOpen && <Modal 
              handleClick={this.closeModal}
              type="add"
            ></Modal>
          }
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

export default App;
