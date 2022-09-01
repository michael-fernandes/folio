import './App.scss';
import './containers/Container.scss';
import Landing from './containers/Landing';
import Projects from './containers/projects/Projects';

function App() {
  return (
    <div className="App">
      <div className="main-container">

        <Landing />
        <Projects />
      </div>
      {/* fun? */}
    </div>
  );
}

export default App;
