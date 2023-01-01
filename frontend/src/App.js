// import logo from './logo.svg';
// import './App.css';
// import HomepageContainer from "./components/HomepageContainer";
import MyRouter from "./routes/MyRouter";

const App = () => {
  return (
    <div className="App" >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <MyRouter />
      </header>
    </div >
  );
}

export default App;
