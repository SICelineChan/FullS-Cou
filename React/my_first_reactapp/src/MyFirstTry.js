import logo from "./logo.svg";
import "./App.css";

function MyFirstTry() {
  return (
    <div className="MyFirstTry">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>My First try at React</h1>
        </a>
      </header>
    </div>
  );
}

export default MyFirstTry;