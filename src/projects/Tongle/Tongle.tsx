import ContentWrapper from '../../containers/layout/ContentWrapper'

// import GasTax from './imgs/gas_tax.jpg'

import honorable from '../honorable.png';
import Flow2 from './imgs/key-flow2.png';
import Flow1 from './imgs/key-flow1.png';
import Tensions from './Tensions';
import PDSetup from './imgs/pd.png';
import Table from '../../components/table/Table';
// import InContext from './imgs/in_context.jpg';


export type WorkshopRow = {
  activity: String,
  rationale: String,
  outcome: string,
}
type WorkshopKeys = "Workshop #1" | "Workshop #2" | "Workshop #3";

type Workshops = {
  [key in WorkshopKeys]: WorkshopRow[]
};

const WORKSHOPS: Workshops = {
  "Workshop #1": [{
    activity: "Likes, dislikes and ideas",
    rationale: "After a quick introduction, we used this quick brainstorm as a way to get people discussing and engaging with the design",
    outcome: "Data points in the form of discussion notes and the post-its used for brainstorming"
  }, {
    activity: "Negative Design Ideas",
    rationale: "Start brainstorming ",
    outcome: "Data points in the form of discussion notes and the post-its used for brainstorming"
  },
  ],
  "Workshop #2": [{
    activity: "Pre-workshop survey",
    rationale: "Validate the \"Core Values\" we identified in Design Sprint #1",
    outcome: "3 storyboards of key situations representing crux problems for a RUC"
  }, {
    activity: "Group storyboarding",
    rationale: "Expand on assumptions made from Design sprint #1 by codesigning storboards",
    outcome: "Using dot voting we were able to validate what our codesign partners thought were the top 3-4 core issues to a RUC",
  }, {
    activity: "Design charette in groups of 3-4",
    rationale: "With the problems identified, we wanted to come up with concrete ideas.",
    outcome: "Rough sketches of digital RUC systems",
  }],
  "Workshop #3": [{
    activity: "Design \"Court\" for initial prototypes",
    rationale: "A/B test competing ideas through group council",
    outcome: "A clear direction of how our participants wanted to navigate the tensions between values"
  }, {
    activity: "Hopes and dreams",
    rationale: "Give partipants a chance to reflect on their experience and package it into a final ideas.",
    outcome: "Gave participants closure about solving the design problem, gave us final parameters to shape our design.",
  }]
};

export default function Tongle() {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>Tongle: Civil Tech for a Road Usage Charge</h1>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Design Researcher</span><br />
          <h4 className="overview-name">Awards</h4>
          <span className="overview-item"><img src={honorable} />Mobile Innovation Challenge | Grand Winner</span><br />
          <span className="overview-item"><img src={honorable} />Department of Human Centered Design 2017 Capstone Showcase | Best in show</span>
          <br />
          <span className="overview-summary">
            <i>A co-creative project to align a data collecting Civil Technology to the human values of the tax payers that use the technology.</i>
          </span>
        </div>
      </div>
      <div className="content">
        <div className="video-wrapper">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OKMhZurVVe4" frameBorder="0" allowFullScreen={true}></iframe>
        </div>
      </div>

      <div className="content">
        <h2>The Challenge</h2>
        <p>
          As the move to a more sustainable technology and systems comes, a need arises to adjust laws to match the innovation in technology. A Road Usage Charge(RUC) is one such proposed solution to pay for public infrastructure as gasoline powered taxes become obsolete. RUCs, proposes that citizens should pay a permile charge in proportion to the amount driven on the road. Hopefully more equitable way to pay for public road infrustructure.
        </p>
        <p>
          Tongle was a project to explore and idaete ways to create a tech system to track road usage on public roads by citizens who opted into the system. I led the design research portion of the project which used a participatory design philosophy to solve difficult ethical, political and social problems around the technology.
        </p>
        <h2>The Strategy</h2>
        <p>
          A RUC is by no means an easy idea to agree with. Yes, on the surface a more equitable way to pay for road infrastructure makes sense, however, how mileage is recoreded presents a dilema. Without a correctly formulated solution there exists the possibility of either disgruntled citizens or an unequitable system arrising. The motivation to use pariticpatory design as a framework to navigate this problem, arose from the fustration of designing for a ethically complex system. The democratic nature of the of the philosophy seemed to align with the context of creating a civil technology. I was lucky enoug to have been exposed to particpatory design philosophy both in a theoretical class and later as a participant in a series of design workshops. I think I was even more lucky I had a team that was willing to stake their capstone on an unown technique and a great advisor to help us along the path.
        </p>
        <p>
          Our strategy centerd around a series of 3 co-design workshops. We spent multiple weeks activeley a group of 10 participants all with a diverse set of identities ranging across urban/rural polictical spectrums as well as sex and gender identifications. With this group we planned to progressively move an ideation process using co-design acitivities to start from idea exploration and eventually lead to solidified design ideas for a possible RUC.
        </p>
        {/* triangle workshops */}
        <div className="flex center-content margin-20">
          <img src={PDSetup} alt="A diagram showing a designer and and end-users contributing to design ideas." className="cover-2-img" />
        </div>
      </div>
      <div className="content">
        <h2>Co-creation Workshops</h2>
        {/* <div className="half-img content">
          <img src={ProcessChart} className="cover-2-img" />
        </div> */}
        <p>
          Leading the design research, before each workshop I designed a workshop protocol based on where codesign participants were in the design process. In some workshops I used co-design acitivities to expaned ideas and in other situations refine, validated and tried to break ideas. Coming up with the correct activities became a design challenge in itself. Before  each workshop my team and I selected or at times imagined activities that gained us the data points we needed to inform the next stage of design development. While we did not know how each workshop would look until the week before, the general strategy of a workshop followed by a design sprint (and advising from our advisor) drove our project forward.
        </p>
      </div>
      <div className="content">
        <div>
          <Table name={"Workshop #1"} rows={WORKSHOPS["Workshop #1"]} />
          <Table name={"Workshop #2"} rows={WORKSHOPS["Workshop #2"]} />
          <Table name={"Workshop #3"} rows={WORKSHOPS["Workshop #3"]} />
        </div>
        <h2>The tension</h2>
        <p className="content-exp">
          In the end the driving factor in this project became the uncovering of "(human) value tensions" which began to emerge after workshp one, were validated, and used as discussion tools for the rest of workshops and final design phase. We found that not only were they helpful for the core design team to understand the problem, perhaps more importantly, the pariticpants were able to grasp on to them and use them for discussion amongst themselves in ways that allowed for clear conversations about the relative strength of
          different ideas or solutions.
        </p>
        <p>
          "You can't have both privacy and accuracy. You can only have one or the other. But not privacy and accuracy, Okay?"
        </p>
        <p>
          "For me, my most important value is accuracy, I can't imagine.... however for [names another participant] there most imporatant value is privacy, and finding something that works for both of us seems hard."
        </p>
      </div>
      <Tensions />
      <div className="content">
        <h2>Final Solution</h2>
        <p>
          After the participatory part of the project was done, I took on more of a support roll, assisting the two designers on our team make decesions and arrive at a final suggestion. The research generated through our particiaptory process, really spoke for itself. A design didn't just emerge, but, when we found arrived at the final one, it fit right into the value tensions.
        </p>
        <p>
          In the end, we ended up doing research through design. While I'm prepared to offer defense on why our design works for the broadest range of citizens, I think more interstingly it lent evidence (and a framework) that a smart-phone only solution would not work in isolation. Our pairing of a physical device that tracked miles when privacy is needed and a smart phone when accuracy is needed allowed for flexible use of the system. Letting users get accuracy (in case they leave the state), privacy, a precesion (two-systems recording) when necessary.
        </p>
      </div>
      <div>
        <img src={Flow1} className="cover-1-img" />
        <img src={Flow2} className="cover-1-img scale-75" />
      </div>
      <div className="content">
        <h2>Reflection</h2>
        <p>
          By focusing on human-values(via a value sensitive design framework), we were able to increase end-user acceptance of the final proposed solution. Using co-creation helped uncover what types of values were embded in the design challenge, and then bringing these values to the forefront of the co-creation was vital for the sucess of the project. Further the slow unwinding of the design challenge that happened during the sequential workshops allowed for both the participants and design leaders to slowly digest the nuisances of the problem and avoid gut reactions.
        </p>
      </div>
    </ContentWrapper >
  )
}