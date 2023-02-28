import ActionLink from "../../components/link/ActionLink";
import ContentWrapper from "../../containers/layout/ContentWrapper";
// import CoverImg from "./Radify.png";
// import Cover2 from './Cover2-2.png';
import PictoAnim from './pictoanim.gif';
import Line from './Line.png';
import MapImg from './Map.png';
import honorable from '../honorable.png';


export default function ChildMortality() {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>Under-five child mortality data story</h1>
          <div className="overview-button-container">
            <p>
              <ActionLink href="https://vizhub.healthdata.org/child-mortality">Visit interactive experience</ActionLink>
            </p>
          </div>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Development + Design</span><br /><br />
          <span className="overview-item"><img src={honorable} /><span>Shortlist for 2022 Information is Beautiful Awards: Scient Technology & Health</span></span><br />

          <span className="overview-summary">
            <i>Am interactive experience telling the story of how premature child mortality in lower-middle income countries has decreased over the last 30 years.</i>
          </span>
        </div>
      </div>
      <img src={PictoAnim} className="fullsize-img " />
      {/* <img className="cover-1-img-img" src={PictoGram} /> */}
      <div className="content">
        <div className="writing">
          <h2>About the project</h2>
          <p>
            The annual global number of deaths of children under 5 years of age  decreased from 19.6 million a year in 1950 to
            5.4 million in 2017. A decline of nearly 72%, a number that should not go without celebrating given what it represents. Still there exists much progress to make to lower under-5 mortality across the globe to equitable rates. Some regions are progressing much faster than others, evening the spread of change could lower the number, saving
            millions more lives.
          </p>
          <p>
            Collaborating together with colleagues from the Insitute for Health Metrics and Evaluation,  I helped create an interactive experience communicating the drastic fall in under-5 mortality and the how we might continute to decrease this trend to
            lay audiences across the globe. I helped drive the design process by using wireframes and later interactive prototypes to collaborate with Quantitative Researchers for the project to craft an interactive story that they felt accurately communicated their research.
          </p>
        </div>
      </div>
      <div className="cover2">
        <img src={Line} />
        <img src={MapImg} />
      </div>

    </ContentWrapper>
  );
}
