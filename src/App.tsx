import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./containers/landing/Landing";
import Projects from "./containers/projects/Projects";


import Spotlight from "./containers/spotlight/Spotlight";
import Header from "./containers/header/Header";
import About from "./containers/about/About";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

import Bus from "./projects/Bus/Bus";
import Radify from "./projects/Radify/Radify";
import Tongle from "./projects/Tongle/Tongle";
import Covid from "./projects/covid/Covid";
import ChildMortality from "./projects/childMortality/ChildMortality";

import "./App.scss";
import "./Constants.scss";
import "./containers/Container.scss";
import "./projects/ProjectWriteUps.scss";
import AlternativeSpringBreak from "./projects/ASB/AlternativeSpringBreak";
import ReactGA from 'react-ga';
import { useEffect } from "react";
import CovidScroller from "./projects/covid/CovidScroller";

if (process.env.NODE_ENV !== "development") {
  // Add to app engine, right now more useful to have
  ReactGA.initialize("UA-73790222-1" || '');
}

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  })

  return (
    <ScrollToTop>
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
          <Route path="test" element={<CovidScroller />} />
          <Route path="radify" element={<Radify />} />
          <Route path="tongle" element={<Tongle />} />
          <Route path="covid" element={<Covid />} />
          <Route path="child-mortality" element={<ChildMortality />} />
          <Route path="design-thinking-workshops" element={<AlternativeSpringBreak />} />
          <Route path="about" element={<About />} />
        </Routes>
        {pathname !== '/' && <Footer />}
        <div className="footer flex">
          <div className="m-auto">
            Michael Fernandes 2022
          </div>
        </div>
      </main>
    </ScrollToTop>
  );
}

export default App;
