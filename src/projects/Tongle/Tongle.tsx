import ContentWrapper from '../../containers/ContentWrapper'

// import GasTax from './imgs/gas_tax.jpg'
import InContext from './imgs/in_context.jpg'
import PdDiagram from './imgs/pd.png'
import ProcessChart from './imgs/process_horizontal.jpg'
import Survey from './imgs/survey.png'

import storyboard1 from './imgs/storyboard1.png'
import storyboard2 from './imgs/storyboard2.png'
import storyboard3 from './imgs/storyboard3.png';

import P1 from './imgs/p1.png'
import P2 from './imgs/p2.png'
import P3 from './imgs/p3.png'
import P4 from './imgs/p4.png'
import Tension from './imgs/tension.png';

import stateFlow from './imgs/state-flow.png'
import sitemap from './imgs/sitemap.png'
import mediumFidelity from './imgs/medium-fidelity.png'
import keyFlow1 from './imgs/key-flow1.png'
import keyFlow2 from './imgs/key-flow2.png'
import poster from './imgs/poster.png'



export default function Tongle() {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>Tongle: Civil Tech for a Road Usage Charge</h1>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Design Researcher</span><br /><br />
          <h4 className="overview-name">Awards</h4>
          <span className="overview-item">Mobile Innovation Challenge: Grand Winner</span><br />
          <span className="overview-item">Department of Human Centered Design 2017 Capstone Night: Best In Show</span><br />
          <span className="overview-item">University of Washington (UW) Engineering Capstone Grant Winner</span><br />
          <br />
          <span className="overview-summary">
            <i>Cocreative process to design a data collecting Civil Technology that impinges on human values across the political spectrum.</i>
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
          Across <a className="text-link" href="https://www.ibtta.org/road-usage-charge-ruc">the United States</a>, a proposition has been made to use a fee porportional to the amount of miles driven on the road by each citizen to
          pay for road and highway infrastructure.  This fee has been called a Road Usage Charge (RUC) and is a future looking tax paradigm that
          aims to create an equitable system as gasoline cars become less common. Tasked by the Washington State Transportation Comission, I led the design research and visioning
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
      </div>
      <div className="content">
        <h2>Design Workshops</h2>
        {/* <div className="half-img content">
          <img src={ProcessChart} className="cover-2-img" />
        </div> */}
        <p>
          During the spring of 2017, I acted a a workshop designer and co-led each work shop with the product manager on the project. Each workshop followed a general pattern of generating ideas
          and exploring the problem space, before narrowing it through a series of activities. Importantly, we made sure to continually validate assumptions about the problem, design decesions
          and findings by presenting key findings and decesions to our participants either through some type of vote-based validation (dot-voting, survey polling).
        </p>
      </div>
      <div className="content">
        <table>
          <tr>
            <th></th>
            <th>Activities</th>
            <th>Result</th>
            <th>Key Findings</th>
          </tr>
          <tr>
            <td>Workshop #1</td>
            <td>Card Brainstorming, etc.</td>
            <td>A wide range of data</td>
            <td>This is going to be harder than we think</td>
          </tr>
          <tr>
            <td>Workshop #2</td>
            <td>This won't scale</td>
            <td>for mobile</td>
            <td>so i will make in Adobe</td>
          </tr>
          <tr>
            <td>Workshop #3</td>
            <td>This won't scale</td>
            <td>for mobile</td>
            <td>so i will make in Adobe</td>
          </tr>
        </table>

        <h2>The tension</h2>
        <p className="content-exp">
          After presenting the values to participants an interesting thing happens people started putting values at
          opposite ends and using them as tensions. Something even more interesting happened when a participant said the
          following.
        </p>
      </div>
      <div className="cover2-img">
        <img src={Tension} className="cover-2-img" />
      </div>


      <div className="content">
        <h2>Reflection</h2>
        <p className="quote">
          By creating a design that allowed those who wanted complete privacy in their location data, Tongle also benefits a range of people.
          It allows employees to charge their employers on trips taken for company work, it allows a teenager to sneak off to their first concert,
          or a husband to surprise his wife with an unexpected birthday present. By creating an app that allows for flexible use, the user acceptance of the app
          was increased and thereby a better experience was created overall.
        </p>
      </div>
    </ContentWrapper >
  )
}