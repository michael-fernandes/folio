import ActionLink from "../../components/link/ActionLink";
import CoverImg from "./Radify.png";
// import Cover1 from './Cover2-1.png';
// import Cover2 from './Cover2-2.png';

export default function Radify() {
  return (
    <div>
      <h2 className="title">Radify</h2>
      <div className="margin-20">
        <img className="cover1-img margin-20" src={CoverImg} />
      </div>
      <div className="flex center-content">
        <p>
          <ActionLink href="http://www.radify.info">Visit App</ActionLink>
        </p>
      </div>
      <div className="content">
        <p>
          <a href="https://www.reddit.com/r/dataisbeautiful/comments/wxpx50/price_per_a_pound_of_bananas_oc/">
            {" "}
            <b><i>
              v3 coming soon, for now take joy at the "wonderful comments" on reddit
              from posting v2.
            </i></b>
          </a>
        </p>
        <p>
          Radify visualizes data in a continous radial graphics to highlight the
          seasonality in a timeseries. Inflation data in the form of CPI MoM %
          change from previous year and comodity indexes is shown as a demo for
          the charts.
        </p>
        <p>
          Sometimes a linechart can be a little bit vanilla. When you are trying
          to draw attention to a a dataset, sometimes something a little
          flashier can be less effective at encoding the data, but more
          effective at communicating the right data.
        </p>
        <p>
          This project began out of pure curiosity of whether or not a radial
          line chart using a continous time series could be communicated with
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
          <li>Can people effectiveley make times</li>
          <li>
            what are the key takeaways that this chart has vs normal line
            charts
          </li>
        </ol>
      </div>
    </div>
  );
}
