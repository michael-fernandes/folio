import ContentWrapper from '../../containers/layout/ContentWrapper'

// import GasTax from './imgs/gas_tax.jpg'

import honorable from '../honorable.png';
import flow2 from './imgs/key-flow2.png';
import flow1 from './imgs/key-flow1.png';
import StateFlow from './imgs/state-flow.png';
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
  }],
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
          Tongle was a project to explore and ideate ways to create a tech system to track road usage on public roads by citizens who opted into the system. I led the design research portion of the project which used a participatory design philosophy to solve difficult ethical, political and social problems around the technology.
        </p>
        <h2>The Strategy</h2>
        <p>
          A RUC is by no means an easy idea to agree with. Yes, on the surface a more equitable way to pay for road infrastructure makes sense, however, how mileage is recorded presents a dilemma. Without a correctly formulated solution there exists the possibility of either disgruntled citizens or an inequitable system arising. The motivation to use participatory design as a framework to navigate this problem, arose from the frustration of designing for a ethically complex system. The democratic nature of the of the philosophy seemed to align with the context of creating a civil technology. I was lucky enough to have been exposed to participatory design philosophy both in a theoretical class and later as a participant in a series of design workshops. I think I was even more lucky I had a team that was willing to stake their capstone on an unknown technique and a great advisor to help us along the path.
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
          <p>
            Workshop #1 set out to introduce participants to a Road Usage Charge and begin to uncover and communicate across teh design and participant teams why creating a technology for a RUC was both technically and socially hard. To do activities like Negative Idea brainstorm were used to specifically uncover versions of a technology based RUC that paritcipants believed would be a poor implementation in some way. Comparing eachothers bad ideas allowed particiapnts to get an idea of not just how they felt about the RUC, but also the participants around them.
          </p>
          <Table name={"Workshop #2"} rows={WORKSHOPS["Workshop #2"]} />
          <p>
            Workshop #2 sought to validate and further assumptions workshop leaders made after workshop #1. By using a survey admistered before the workshop particpants were given a chance to shape the unfolding of what the design process focused on from that point further. Using the validated data, Particpants took key themes and applied them to their first prototypes of what a RUC might look like.
          </p>
          <Table name={"Workshop #3"} rows={WORKSHOPS["Workshop #3"]} />
          <p className="content-exp">
            Workshop #3  used the concept of "(human) value tensions" to help participaints think about how to navigate the competing interests in a RUC. These tensions emerged after workshp #1, and were first validated before being used as discussion tools for the rest of workshops and final design phase. We found that not only were they helpful for the core design team to understand the problem, perhaps more importantly, the pariticpants were able to grasp on to them and use them for discussion amongst themselves in ways that allowed for clear conversations about the relative strength of
            different ideas or solutions.
          </p>
        </div>
      </div>
      <Tensions />
      <div className="content">
        <h2>Final Solution</h2>
        <p>
          After the participatory workshops were done, I took on more of a support roll assisting the two designers on our team to make decesions and arrive at a final design proposal. The research generated through our particiaptory process spoke for itself. A design didn't easily emerge from our data, but, when we arrived on our final design, we marveled at how it fit right into the value tensions.
        </p>
        <p>
          In the end, the crucial insight we arrived can be summarized by the following quotes from workshoppers during the closing reflection activity of the workshop.
        </p>
        <p>
          "You can't have both privacy and accuracy. You can only have one or the other. But not privacy and accuracy, Okay?"
        </p>
        <p>
          "For me, my most important value is accuracy, I can't imagine a solution that isn't highly accurate. However for [names other participant] the most imporatant value is privacy, and finding something that works for both of us seems hard."
        </p>
        <p>
          From this we realized we had to create a flexible solution, one that allowed privacy during moments where citizens needed it while also supporting accuracy (for example, allowing locaiton data to be collected when participants travel out of state or on private roads). Our product idea Tongle emerged to allow users to flexibly toggle between different methods of tracking RUC mileage.  Using a bluetooth device connected to a car's OBDII port users can track mileage driven by a registered car in general. By using a an app to connect to the device a user can further log and audit particular trips that require location services such as driving out of state or on private roads.
        </p>
      </div>
      <div>
        <img src={flow1} alt="A key flow for paying" className="cover-1-img" />
        <img src={flow2} alt="A key flow for disputing payment" className="cover-1-img scale-75" />
        <img src={StateFlow} alt="state flow of data" className="cover-1-img scale-75" />
      </div>
      <div className="content">
        <h2>Reflection</h2>
        <p>
          Ultimately, the participatory process offered a way to do research through design. While the sponsors of the project, like our idea because it provided a solution that worked for a broad group of citizens, I think more importantly the project lent key evidence that a smart-phone only solution would not work in isolation. Our pairing of a physical device that tracked miles when privacy is needed and a smart phone when accuracy is needed allowed for flexible use of the system. Letting users get accuracy (in case they leave the state), privacy, a precesion (two-systems recording) when necessary.
        </p>
        <p>
          By focusing on human-values(via a value sensitive design framework), we were able to increase end-user acceptance of the final proposed solution. Using co-creation helped uncover what types of values were embded in the design challenge, and then bringing these values to the forefront of the co-creation was vital for the sucess of the project. Further the slow unwinding of the design challenge that happened during the sequential workshops allowed for both the participants and design leaders to slowly digest the nuisances of the problem and avoid gut reactions.
        </p>
      </div>
    </ContentWrapper >
  )
}