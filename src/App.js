import "./App.css";
import Background from "./Background";
import Float from "./Float";
import LinkBio from "./LinkBio";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <Float />
        <LinkBio />
      </header>
    </div>
  );
}

export default App;
