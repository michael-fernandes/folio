import ActionLink from '../../components/link/ActionLink';
import ContentWrapper from '../../containers/ContentWrapper';
import WhiteHouse from './WhiteHouse.png';

type Props = {}

export default function Covid({ }: Props) {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>COVID-19 forecasting modeling public facing tool</h1>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Development</span><br /><br />

          <span className="overview-summary">
            <i>Covid visualization that started in the first week of march 2020.</i>
          </span>
        </div>
      </div>
      <div className="flex center-content">
        <p>
          <ActionLink href="https://covid19.healthdata.org/global?view=cumulative-deaths&tab=trend">Visit App</ActionLink>
        </p>
      </div>
      <span>This one I'm planning on doing last...</span>
      <ul>
        <li>Explain some background/problem</li>
        <li>Explain it might be a presentation problem via weather forecasting analogy</li>
        <li>Present presentations that might be more useful</li>
        <li>Talk about uncertainty aand reference global health paper (2020) about CI intervals</li>
        <li>A visual or a analogy to climate change forecasts...</li>
      </ul>
      <img src={WhiteHouse} />
    </ContentWrapper>
  )
}