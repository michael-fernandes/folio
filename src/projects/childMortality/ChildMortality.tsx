import ActionLink from "../../components/link/ActionLink";
import ContentWrapper from "../../containers/ContentWrapper";
// import CoverImg from "./Radify.png";
import PictoGram from './PictoGram.png';
// import Cover2 from './Cover2-2.png';

export default function ChildMortality() {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>Child mortality</h1>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Development + Design</span><br /><br />

          <span className="overview-summary">
            <i>A story about how child mortality in lower-middle income countries has decreased over the last 30 years.</i>
          </span>
        </div>
      </div>
      <img className="cover1-img" src={PictoGram} />
      <div className="flex center-content">
        <p>
          <ActionLink href="https://vizhub.healthdata.org/child-mortality">Visit App</ActionLink>
        </p>
      </div>
      <p>
        Radify visualizes data in a continuous radial graphics to highlight the
        seasonality in a timeseries. Inflation data in the form of CPI MoM %
        change from previous year and commodity indexes is shown as a demo for
        the charts.
      </p>
      <p>
        Sometimes a line chart can be a little bit vanilla. When you are trying
        to draw attention to a a dataset, sometimes something a little
        flashier can be less effective at encoding the data, but more
        effective at communicating the right data.
      </p>
      <p>
        This project began out of pure curiosity of whether or not a radial
        line chart using a continuous time series could be communicated with
        the public.
      </p>
      <p>
        Undoubtedly even with multiple rounds of iteration from feedback, this
        chart is hard to read. Describe some of the usage metrics from google
        analytics.
      </p>
      <p>
        Nonetheless the success of the chart seems to lead to some questions:
      </p>
      <ol>
        <li>Can people effectively make times</li>
        <li>
          what are the key takeaways that this chart has vs normal line
          charts
        </li>
      </ol>
    </ContentWrapper>
  );
}
