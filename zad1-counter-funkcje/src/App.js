import logo from './logo.svg';
import './App.css';
import CounterCont from './CounterCont';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Aplikacja licznika w ReactJS</h1>
      </header>
      <CounterCont initStep={15} />
    </div>
  );
}

export default App;
