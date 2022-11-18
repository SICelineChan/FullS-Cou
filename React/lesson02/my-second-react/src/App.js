// import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import BoxWithColors from "./BoxWithColors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings name="Celine" location="Hamburg">
          <h3>from the Greetings Component!!</h3>
        </Greetings>

        <BoxWithColors text="Hello! ">
          <br />
          <h2>A box with some colors! </h2>
          <br />
          <p> Also a child from a Component</p>
          <div id="box2"></div>
        </BoxWithColors>
      </header>
    </div>
  );
}

export default App;
