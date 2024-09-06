import Manrole from './Manrole.jpg';
import './App.css';
import Lower from './Lower';
function Bio(){
  return <h1 style={{backgroundColor:'#282c34', color:'#2765e2', margin:'0px'}}>Manaye's Bio...</h1>
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Manrole} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Bio/>
      <Lower />
    </div>
  );
}

export default App;
