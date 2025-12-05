import Gallery from './components/Gallery';
import { componentsData } from './data/componentsData';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Component Gallery</h1>
        <p>Interactive examples of React fundamentals</p>
      </header>

      <main className="app-main">
        <Gallery components={componentsData} />
      </main>

      <footer className="app-footer">
        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;