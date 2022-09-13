import Landing from "./containers/landing/Landing";
import Projects from "./containers/projects/Projects";
import { Routes, Route } from "react-router-dom";

import Bus from "./projects/Bus/Bus";
import Radify from "./projects/Radify/Radify";

import "./App.scss";
import "./containers/Container.scss";
import "./projects/ProjectWriteUps.scss";
import Tongle from "./projects/Tongle/Tongle";
import Covid from "./projects/covid/Covid";
import ChildMortality from "./projects/childMortality/ChildMortality";
import Spotlight from "./containers/spotlight/Spotlight";
import Header from "./containers/header/Header";
import About from "./containers/about/About";

function App() {
  return (
    <main className="main-container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Spotlight />
              <Projects />
            </>
          }
        />
        <Route path="bus" element={<Bus />} />
        <Route path="radify" element={<Radify />} />
        <Route path="tongle" element={<Tongle />} />
        <Route path="forecast" element={<Covid />} />
        <Route path="child-mortality" element={<ChildMortality />} />

        <Route path="about" element={<About />} />
      </Routes>
      <Header isBottom />
      {/* fun? */}
    </main>
  );
}

export default App;
