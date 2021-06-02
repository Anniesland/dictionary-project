import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
     <h1> Dictionary 🔍 </h1>
      <br />
      <main>
        <Dictionary defaultKeyword="search"/>
      </main>
    </div>
    <footer> <a href="https://github.com/Anniesland/dictionary-project"> Open source code</a> by Anniesland</footer>
    </div>
  );
}

export default App;
