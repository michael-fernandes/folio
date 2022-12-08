// import ActionLink from "../../components/link/ActionLink";
import ContentWrapper from "../../containers/layout/ContentWrapper";
import CoverImg from "./imgs/class.png";
import CoolImg from "./imgs/too_cool.png";
import ZoomedImg from "./imgs/zoomed.png";
import PeepsImg from "./imgs/peeps.png";

export default function AlternativeSpringBreak() {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>K-12 Outreach</h1>
          <h1>Design Thinking Workshops for Middle School students of the Makah Tribe</h1>
          <div className="overview-button-container">
            <p>
              {/* <ActionLink href="http://www.radify.info">Visit App</ActionLink> */}
            </p>
          </div>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Co-founder</span><br /><br />

          <span className="overview-summary">
            <i>K-12 outreact to expose 80+ middle school students of the Makah tribe to design thinking.</i>
          </span>
        </div>
      </div>
      <div className="flex center-content">
        <img src={CoverImg} className="cover-2-img" />
      </div>

      <div className="content writeup">
        <p>
          in the Winter and Spring of 2017 a team of students and advisors from the depart of HCDE and I put together
          a week long Design Thinking Workshop as a college pipeline project. The larger goal of the design workshpps was
          to get students excited about the prospect of a high education. Specifically we hoped to exposed
          Makah Tribe and other members of the Makah Tribe Reservation in remote Northwest Washington to design thinking.
        </p>
        <p>
          To put together the design workshops the other student leaders and I designed a workshops to teach students
          design thinking through a project based curriculum that asked them to prototype a design idea for their community.
        </p>
        <div>
          <div className="flex content-center">
            <img className="cover-2-img" src={CoverImg} />
            <img className="cover-2-img" src={CoolImg} />
          </div>
          <div className="flex content-center">
            <img className="cover-2-img" src={ZoomedImg} />
            <img className="cover-2-img" src={PeepsImg} />
            {/* <video src={Vid} /> */}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
