import ActionLink from "../../components/link/ActionLink";
import ContentWrapper from "../../containers/ContentWrapper";
// import CoverImg from "./Radify.png";
// import Cover2 from './Cover2-2.png';
import PictoAnim from './pictoanim.gif';
import Line from './Line.png';
import MapImg from './Map.png';


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

          <span className="overview-summary">
            <i>Am interactive experience telling the story of how premature child mortality in lower-middle income countries has decreased over the last 30 years.</i>
          </span>
        </div>
      </div>
      <img src={PictoAnim} className="cover1-img" />
      {/* <img className="cover1-img" src={PictoGram} /> */}
      <div className="writeup">
        <p>
          The annual global number of deaths of children under 5 years of age has decrease from 19.6 million a year in 1950 to
          5.4 million 2017 a decline of nearly 72%. Working with
          colleagues at the insitute I helped design an interactive expefrience for illustrating and communicating this change to
          lay audienes across the globe. Using wireframes and later interactive prototypes, I collaborated with Quantitative Researchers for the project to
          devise a story that best communicated their research.
        </p>
      </div>
      <div className="cover2">
        <img src={Line} />
        <img src={MapImg} />
      </div>

    </ContentWrapper>
  );
}
