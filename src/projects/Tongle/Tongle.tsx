import ContentWrapper from '../../containers/ContentWrapper'

// import GasTax from './imgs/gas_tax.jpg'

import honorable from '../honorable.png';
import Flow2 from './imgs/key-flow2.png';
import Flow1 from './imgs/key-flow1.png';
import Tensions from './Tensions';
import PDSetup from './imgs/pd.png';
// import InContext from './imgs/in_context.jpg';

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
          Across <a className="text-link" href="https://www.ibtta.org/road-usage-charge-ruc">the United States</a>, governments are proposing a fee porportional to the amount of
          miles driven on the road by each citizen to pay for road and highway infrastructure.  This fee has been called a Road Usage Charge (RUC) and is a future looking tax paradigm that
          aims to create an equitable system as gasoline cars become less common. Tasked by the Washington State Transportation Commission, I led the design research and visioning
          on a team of 3 others to design a tech-based solution to collect the miles driven by citizens for a road usage charge.
        </p>
        <h2>The Strategy</h2>
        <p>
          Monitoring citizen's road usage presents a problem, to get an accurate guage there is an obvious immediate invasion of privacy.
          Travel between statelines, on private roads, etc present problems. It's easy to imagine that the end users (citizens of WA state in this case),
          would have nuisanced opinions and feelings that would complicate user acceptance of an ill-proposed technology. The idea to use Participatory
          design emerged because the democratic nature of the design philosophy seemed to align with the context of creating a civil technology.
          As a team we choose a process that used 3 co-creation workshops, and luckily so because the cocreation workshops revealed more
          problems with potential designs than was intially apparent.
        </p>
        <div className="flex center-content margin-20">
          <img src={PDSetup} alt="A diagram showing a designer and and end-users contributing to design ideas." className="cover-2-img" />
        </div>
      </div>
      <div className="content">
        <h2>Design Workshops</h2>
        {/* <div className="half-img content">
          <img src={ProcessChart} className="cover-2-img" />
        </div> */}
        <p>
          As the design researcher on the project before each workshop I would design  a workshop protocol based on where we were in the design process. In some workshops we expaned
          ideas and in others we refined, validated and tried to break ideas. Coming up with the correct activities became a design challenge in itself. Coming into each workshop my team and I
          (with the aid ofan awesome advisor, Jon Porter) selected or imagined activities that gained us the data points we needed to inform the next stage of design development.
          While we did not know how each workshop would look until the week before the general strategy i devised moved the project down the ideaetion funnel from a broad
          exploration of ideas to a refined idea.
        </p>
      </div>
      <div className="content">
        <table>
          <tr>
            <th></th>
            <th>Design Activities</th>
            <th>Result / Findings</th>
            {/* <th>After workshop acitivies</th> */}
          </tr>
          <tr>
            <td>Workshop #1</td>
            <td>
              <ul>
                <li>Negative idea brainstorming</li>
                <li>Likes, dislikes and wishes</li>
              </ul>
            </td>
            <td>Affinity diagraming of "data" from workshop 1, survey for participants to evaluate affinity groupings</td>
          </tr>
          <tr>
            <td>Workshop #2</td>
            <td><ul>
              <li>Validate values</li>
              <li>Silent dot voting on promising ideas (in the form of storyboards) from Workshop #1</li>
              <li>Design charette in small groups</li>
            </ul> </td>
            <td>Supporting evidence of what values exsist in what ideas</td>
          </tr>
          <tr>
            <td>Workshop #3</td>
            <td><ul>
              <li>Design Court for 3 medium fidelity prototypes</li>
              <li>Hopes and dreams</li>
            </ul></td>
            <td>In depth review of design ideas</td>
          </tr>
        </table>

        <h2>The tension</h2>
        <p className="content-exp">
          In the end the driving factor in this project became the uncovering of "(human) value tensions" which began to emerge after workshp one, were validated, and used as discussion
          tools for the rest of workshops and final design phase. We found that not only were they helpful for the core design team to understand the problem, perhaps more importantly,
          the pariticpants were able to grasp on to them and use them for discussion amongst themselves in ways that allowed for clear conversations about the relative strength of
          different ideas or solutions.
        </p>
        <p>
          "You can't have both privacy and accuracy. You can only have one or the other. But not
          privacy and accuracy–Okay?"
        </p>
        <p>
          "For me, my most important value is accuracy, I can't imagine.... however for [names another participant] there
          most imporatant value is privacy, and finding something that works for both of us seems hard."
        </p>
      </div>
      <Tensions />
      <div className="content">
        <h2>Final Solution</h2>
        <p>
          After the participatory part of the project was done, I took on more of a support roll, assisting the two designers
          on our team make decesions and arrive at a final suggestion. The research generated through our particiaptory process, really
          spoke for itself. A design didn't just emerge, but, when we found arrived at the final one, it fit right into the value tensions.
        </p>
        <p>
          In the end, we ended up doing research through design. While I'm prepared to offer defense on why our design works for the broadest
          range of citizens, I think more interstingly it lent evidence (and a framework) that a smart-phone only solution would not work in isolation.
          Our pairing of a physical device that tracked miles when privacy is needed and a smart phone when accuracy is needed allowed for flexible
          use of the system. Letting users get accuracy (in case they leave the state), privacy, a precesion (two-systems recording) when necessary.
        </p>
      </div>
      <div>
        <img src={Flow1} className="cover-1-img" />
        <img src={Flow2} className="cover-1-img scale-75" />
      </div>
      <div className="content">
        <h2>Reflection</h2>
        <p>
          By focusing on human-values(via a value sensitive design framework), we were able to increase end-user acceptance
          of the final proposed solution. Using co-creation helped uncover what types of values were embded in the design challenge, and then bringing
          these values to the forefront of the co-creation was vital for the sucess of the project. Further the slow unwinding of the design challenge
          that happened during the sequential workshops allowed for both the participants and design leaders to slowly digest the nuisances of the problem and
          avoid gut reactions.
        </p>
      </div>
    </ContentWrapper >
  )
}