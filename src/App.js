import "./App.css";
import Background from "./Background";
import Float from "./Float";
import LinkBio from "./LinkBio";
import Bio from "./Bio";
import Works from "./Works";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <Float />
        <br />
        <Works />
        <br />
        <Bio />
        <br />
        <LinkBio />
      </header>
    </div>
  );
}

export default App;
