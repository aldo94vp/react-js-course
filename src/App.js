import './App.css';
import FunctionHelloWorld from './components/function.component';
import CreateElementHelloWorld from './components/create.component';
import ClassHelloWorld from './components/class.component';
import PureHelloWorld from './components/pure.component';

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <FunctionHelloWorld />
      <CreateElementHelloWorld />
      <ClassHelloWorld />
      <PureHelloWorld />
    </div>
  );
}

export default App;
