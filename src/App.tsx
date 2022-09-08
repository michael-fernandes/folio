import Landing from "./containers/Landing/Landing";
import Projects from "./containers/projects/Projects";
import { Routes, Route } from "react-router-dom";

import Bus from "./projects/Bus/Bus";
import Radify from "./projects/Radify/Radify";

import "./App.scss";
import "./containers/Container.scss";
import "./projects/ProjectWriteUps.scss";
import Tongle from "./projects/Tongle/Tongle";

function App() {
  return (
    <main className="App">
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Projects />
              </>
            }
          />
          <Route path="bus" element={<Bus />}></Route>
          <Route path="radify" element={<Radify />}></Route>
          <Route path="tongle" element={<Tongle />}></Route>
        </Routes>
      </div>
      {/* fun? */}
    </main>
  );
}

export default App;
