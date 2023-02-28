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
          <h1>Uncertainty displays for on-the-go decision making</h1>
          <div className="overview-button-container">
            <p>
              <ActionLink href="https://dl.acm.org/doi/10.1145/3173574.3173718">Read paper</ActionLink>
            </p>
          </div>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Research assistant</span><br />

          <h4 className="overview-name">Awards</h4>
          <span className="overview-item"><img src={honorable} />ACM  Human Factors in Computing Systems (CHI) 2018 | HONORABLE MENTION BEST PAPER (Top 5%)</span><br />

          <h4 className="overview-name">Team</h4>
          <span className="overview-item">Two Research Assistants and Three Directing Professors</span><br />
          <span className="overview-summary">
            <i>Mixed methods research examining how people can make better use of computer-generated predictions using uncertainty visualization.</i>
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
      <WriteupWrapper>
        <div className="content">
          <h2>The challenge</h2>
          <p>
            Every day people encounter computer-generated predictions which impact realtime decision-making. Decisions like when to leave to catch a bus, what outdoor gear to wear, and how long a commute can all be made with quantitative predictions. Typically, interfaces present predictions as singular point estimate that ignore any uncertainty within the estimate. Representing uncertainty hidden within point estimates offers a chance to support on-the-go decision-makers. However, how to reprent uncertainty and the effect uncertainty encodings might have on decision-making remains unclear. This research attempts to begin to establish how uncertainty might be presented on glanceable interfaces to support more optimal decisions made by on-the-go decision-makers.
          </p>
        </div>
        <div className="content">
          <h2>Overall Approach</h2>
          <p>
            Using real-time decision-making around bus arrival data as a use case, my team and I set off on this project with the plan to design UI to display uncertainty to users deciding on when to leave to catch a bus and then measure those UIs for design usability through a large scale quantitative usability test. This project was phase two in a three-part series. During phase 1, published in CHI 2016, the research group used mixed-methods user research to research the design space for presenting uncertainty in the context of bus arrival times. Using the previous user research to inform the design designed 10 different UIs and tuned the designs for usability through a series of usability tests.
          </p>
          <h3>Thinking in atoms</h3>
          <p>
            Strategically I choose to do the initial design phase using an atomic design approach to design small pieces of the UI before stitching them together to form the larger UI composition. Since there were over 10 experimental conditions (for visual, text and control conditions) designing in atoms allowed me to optimize my time designing for each experimental condition. Eventually, implementing high-fidelity mockups into usable web interfaces resulted in a highly componentized prototype that was easy to rapidly change and iteratively test over time.
          </p>
          <h3>Applying previous research</h3>
          <p>
            Previously, research done by my lead investigators established the possibility of uncertainty representation being used for decisions around realtime bus arrival data. Key to that research was a finding that users tended to think about the arrival time as the latest
          </p>
          <h3>How did we "value" decision quality?</h3>
          {/* https://ideas.repec.org/a/eee/jeborg/v30y1996i3p411-416.html */}
          <p>
            Borrowing from Economics literature, our team conducted a Variable Incentive experiment designed to measure the effectiveness of decisions made with uncertain information. The basic jist of the experiment asked decision makers to make decisions using randomly assigned uncertainty representation. Using the same arrival distribution (the probability of the bus arriving over time) a simulated bus arrival happened in the form of a random draw from the distribution. Based on the decision maker's original decision, the user was rewarded with a lump sum amount of points based on their arrival time allowed them to catch a bus. Further, a variable amount of points were rewarded based on fictional scenarios rewarding things like waiting at home in the warmth and subtracting points for things like waiting at a bus stop in the rain. All of these points added up to real money value which the user-tester was paid at the end of the experiment incentivizing users to make better decisions.
          </p>
        </div>
        <div className='content'>
          <div>
            <h2>Results</h2>
            <div className="flex-wrapper">

              <div className="flex-padding half-width">
                <p className='content-exp'>
                  In the end, showing more information (beyond a point estimate), led to better decisions. Textual representations performed worse than visual encodings, while
                  probability density curves and dot plots led to the most optimal decisions. Perhaps most importantly, this increase in decision quality held for people no
                  matter their general education level and familiarity with statistical reasoning. Lending evidence that represents uncertainty might benefit
                  even common prediction tools like trip planners, weather forecasts etc.
                </p>
                <p>
                  Although this work shows uncertainty displays can lead to better decisions for our experiment, this still needs to be proven in the real world.
                  After this research, I remain curious
                  about how the relationship between predictive tools and humans might exist. Will the introduction of uncertainty push the onus of blame for missing
                  a bus from the app back on to the individual? Will people become more risk-taking or conservative over time? These are all questions that
                  need to be investigated, especially as predictive tools become more widespread.
                </p>
                <div className="flex-padding half-width">
                  <img src={Dot20} className="half-width" data-action="zoom" />
                </div>
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
