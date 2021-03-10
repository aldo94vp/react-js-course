import { ErrorBoundary } from './components/error-boundary.component';
import { Footer } from './components/footer/footer.component';
import { HeaderWrapper } from './components/header/header-wrapper.component';
import { MainWrapper } from './components/main/main-wrapper.component';
import { ThemeProvider } from 'styled-components';
import { theme } from './variables';
import './app.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <HeaderWrapper></HeaderWrapper>
        <MainWrapper></MainWrapper>
        <Footer></Footer>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
