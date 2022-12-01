import ActionLink from "../../components/link/ActionLink";
import ContentWrapper from "../../containers/layout/ContentWrapper";
import WriteupWrapper from "../../containers/layout/WriteupWrapper";
import honorable from '../honorable.png';

import BusInContext from './imgs/bus_in_context.png';
import Dot20 from './imgs/viz/dot20.png';

export default function Bus() {
  return (
    <ContentWrapper>
      {/* 
      is this requested by other peeps?
      <div>
        <Link to="/">{`<- `}Back</Link>
      </div> */}
      <div className="overview container">
        <div className="overview-title">
          <h1>Uncertainty displays for on the go decision making</h1>
          <div className="overview-button-container">
            <p>
              <ActionLink href="https://vizhub.healthdata.org/child-mortality">Visit interactive experience</ActionLink>
            </p>
          </div>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Research assistant</span><br />

          <h4 className="overview-name">Awards</h4>
          <span className="overview-item"><img src={honorable} />ACM  Human Factors in Computing Systems (CHI) 2018 | BEST PAPER HONORABLE MENTION (Top %5)</span><br />

          <h4 className="overview-name">Team</h4>
          <span className="overview-item">Two Research Assistants and Three Directing Professors</span><br />
          <span className="overview-summary">
            <i>Mixed methods research examining how people can better use computer generated predictions to
              make on the go decesions.</i>
          </span>
        </div>
      </div>
      <div className="section">
        <div className="video-wrapper" style={{
          width: "100%",
          height: '400'
        }}>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/imD4P8xqCEI" frameBorder="0"
            allowFullScreen={true} className="mb4" />
        </div>
      </div>
      <WriteupWrapper links={["nada"]}>
        <div className="content">
          <h2>The challenge</h2>
          <p>
            Typically, displays lay-user displays present computer generated quantitative predictions in point form (weather forecasts, duration of your commute each day),
            compltely ignoring any uncertainty in them. Presenting a display with uncertainty integrated into the UI comes with, well, uncertainty.
            Figuring a way to communicate uncertainty in predictions, especially to lay audiences, comes with the problem that its unclear which encoding to use,
            and even if an uncertainty encoding will lead to better decesion making. The research and prototyping done here attempts to clearly establish
            how to present uncertainty in glancable interfaces to lead to the most optimal decesions possible.
          </p>
        </div>
        <div className="content">
          <h2>Strategy</h2>
          <p>
            The primary task in this proejct, was to design an integrated display that shows users bus arrival times with uncertainty i
            Before the start of this phase of the project, mixed-methods research had been carried out (and published to CHI 2016) to research the design space for persenting uncertainty in the
            context of bus arrival times. Using the previous work to inform the design we used an iterative design process that included rapid prototyping and progressive usability tests until
            a successful design was found.
          </p>
          <p>
            Borrowing from Economics literature, I conducted a Variable Reward experimental design to measure the effectiveness of decesions made on a range of different
            representations. The experiment ran at an n=1200 level with 180-200 individuals in each experimental group.
          </p>
        </div>
        <div className='content'>
          <div>
            <h2>Results</h2>
            <div className="flex-wrapper">
              <div className="flex-padding half-width">
                <img src={Dot20} className="half-width" data-action="zoom" />
              </div>
              <div className="flex-padding half-width">
                <p className='content-exp'>
                  In the end, showing more information (beyond a point estimate), led to better decesions. Textual representations performed worse than visual encodings, while
                  probability density curves and dot plots led to the most optimal decesions. Perhaps most importantly, this increase in decesion quality held true for opeople no
                  matter their general Education level and specific statstical with quantitative reasoning. Lending evidence that representing uncertainty might benefit
                  even common predictions tools like trip planners, weather forecasts etc.
                </p>
                <p>
                  Although this work shows better decesions are possible, this might not hold true in the real world. After this research I have been left curious
                  about how the relation between predictive tools and humans might exsist. Will the introduction of uncertainty push the onus of blame for missing
                  a bus from the app back on to the individual? Will people become more risk taking or conservative over time? These are all questions that
                  need to be investigated, espeically as predicative tools become more wide spread.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WriteupWrapper>
      <div className="mini-section animate" id="section2">
        <img src={BusInContext} className="cover-1-img" data-action="zoom" />
      </div>
    </ContentWrapper >
  );
}
