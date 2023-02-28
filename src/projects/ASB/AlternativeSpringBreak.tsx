// import ActionLink from "../../components/link/ActionLink";
import ContentWrapper from "../../containers/layout/ContentWrapper";
import CoverImg from "./imgs/class.png";
import ZoomedImg from "./imgs/zoomed.png";
import Teaching from './imgs/teaching.png'
import Peeps from './imgs/peeps.png'
import Present from './imgs/present.gif'

export default function AlternativeSpringBreak() {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>Design thinking workshops for K12 student innovation</h1>
          <div className="overview-button-container">
            <p>
              {/* <ActionLink href="http://www.radify.info">Visit App</ActionLink> */}
            </p>
          </div>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Workshop co-leader and program cofounder</span><br /><br />

          <span className="overview-summary">
            <i>K-12 outreach to expose 80+ middle school students of the Makah tribe to design thinking.</i>
          </span>
        </div>
      </div>
      <div className="content writeup">
        <h2>About the program</h2>
        <p>
          During the Winter and Spring of 2017, together with a group of fellow students form the UW HCDE department we planned a series of week long design thinking workshops as a college pipeline project. The larger goal of the design workshops was
          to introduce students to the concept of design thinking with the hopes of bringing them into the design field later in life. We partnered with the Makah Tribe who's ancestral land resides in the North East most region of Washington state.
        </p>
      </div>
      <div className="content">
        <div className="flex content-center">
          <img className="cover-2-img" src={CoverImg} />
          <img className="cover-2-img" src={ZoomedImg} />
        </div>
      </div>

      <div className="content writeup">
        <h2>Program goals</h2>
        <p>
          As an outreach program, we hoped to work with youth members of the Makah Tribe to introduce them to Design Thinking. With the hope, they might have opportunities to apply the skills they learned to projects in their community. In retrospective, this was an ideal situation. In reality, we arrived and faced all the normal challenges with facing middle school students. What's more it appeared, to me at least, that our tech influenced view of design thinking did not align with the values of the community. Instead of thinking about commodification lots of our students were thinking from viewpoints of the environment or their collective community
        </p>
      </div>
      <div>
        <div className="flex content-center">
          <img className="cover-2-img" src={Teaching} />
          <img className="cover-2-img" src={Peeps} />
          {/* <video src={Vid} /> */}
        </div>
      </div>
      <div className="content writeup">
        <h2>Outcome</h2>
        <p>
          My group of student leaders and I adapted our lesson plan for 80+ 6-8 grade students attending school on the Makah Reservation. It was a dynamic experience where I found myself learning from our students I'm sure as much as they were learning from us. In the end, I'm pretty confident that most students won't complete a whole UCD process until their next exposure. I think more important was the one on one mentoring where design thinking could be modeled and influenced.
        </p>
      </div>
      <div className="writeup content">
        <div className="center-content flex">
          <img className="cover-2-img" src={Present} />
        </div>
      </div>
    </ContentWrapper >
  );
}
