import ActionLink from "../../components/link/ActionLink";
import ContentWrapper from "../../containers/ContentWrapper";
import CoverImg from "./Radify.png";
import Anim from "./bananas.gif";


export default function Radify() {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>Radify: A spiraling line chart</h1>
          <div className="overview-button-container">
            <p>
              <ActionLink href="http://www.radify.info">Visit App</ActionLink>
            </p>
          </div>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Development</span><br /><br />

          <span className="overview-summary">
            <i>A circular representation of a continuous timeseries that represents a spiral out of control.</i>
          </span>
        </div>
      </div>
      <div className="flex center-content">
        <img src={Anim} className="cover-2-img" />
      </div>

      <div className="content writeup">
        <p>
          Radify visualizes data in a continuous radial chart to highlight the
          seasonality in a time series. It uses animation and a color gradient to
          communicate the fact that it is a continuous time series.
        </p>
        <p>
          Sometimes a linechart is boring. When you are trying
          to draw attention to a a dataset, sometimes something a little
          flashier can be less effective at encoding the data, but more
          effective at communicating the right data.
        </p>
        <p>
          This project began out of curiosity to whether or not a radial
          line chart using a continuous time series could be communicated with
          the public.
        </p>
        <p>
          The website was built with multiple sources of feedback including in person,
          crowd sourced feedback and usage monitoring. Individual feedback included interpreability
          tests. Crowd sourced feedback including posting the visualization as an animation
          to the subreddit /r/dataisbeautiful. Usage metrics using Google Analytics showed simplifications of
          the charts including the removal of toggles which previously switched the chart, from a gradient line to an animated line.
          Admitedly, even with multiple rounds and sources of feedback, this
          chart is less then straightforward than a linear line chart to read, but still shows promise
          from the sucess on the /r/dataisbeautiful subreddit (~7k upvotes in 48 hours).
        </p>
        <p>
          Nonetheless the success of the chart seems to lead to some questions:
        </p>
        <ol>
          <li>Can people effectiveley make times</li>
          <li>
            what are the key takeaways that this chart has vs normal line
            charts
          </li>
        </ol>
      </div>
      <div>
        <img className="fullsize-img" src={CoverImg} />
        {/* <video src={Vid} /> */}
      </div>
    </ContentWrapper >
  );
}
