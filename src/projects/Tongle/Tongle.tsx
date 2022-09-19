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
          A road usage charge (RUC) has been suggested across <a className="text-link" href="https://www.ibtta.org/road-usage-charge-ruc">the united states</a>, which proposes
          a proportional fee to the amount driven on the road as a direct replacement for taxing gasoline. A needed change as cars continue to electrify. A team of 4 and I were
          tasked with designing a technologic solution that collected a road usage charge.
        </p>
        <h2>Strategy</h2>
        <p>
          Collecting a Road Usage Charge comes with many complications involving, accuracy, fairness, confidentiality and other human values that made this problem sticky.
          Together with a team of 4 we embarked with the help of two stellar advisors to design road usage charge technology that was developed through a participatory design process. We thought by using cocreative practices we could drive the design
          to its most fair form possible.
        </p>
        <div className="flex-wrapper flex-align-center">
          <div className="flex-right half-width">
            {/* <img src={GasTax} className="half-width" /> */}
          </div>
        </div>

        <div className="content">
          <img src={InContext} className="half-width" />
        </div>
      </div>
      <div className="content">
        <h2>How might a RUC need inclusive design?</h2>
        <div className='flex-wrapper'>
          <div className="flex-left">
            <img className="img-md" src={PdDiagram} />
          </div>
          <div className="flex-right">
            <p className="content-exp">
              At first galance, a Road Usage Charge may seem problematic as it potentially puts an excess amount of data in uncertain hands. Examining it deeper
              uncovers a more equitable system. People who have older cars with higher MPG, to those who drive an electric car can now pay in porportion to how much
              they use the roads.
            </p>
            <p>
              However, in the pursuit of a more perfect tax system, there arises problems in collecting the precise amount of data to have a honest tax system, while
              not impinging on people's autonomy became our challenge.
            </p>
          </div>
        </div>

        <h2>A democratic approach</h2>
        <p>
          Finding a way to position the design in a place that provided a just way to account for tax while also not violating anyone's need for autonomy was tricky.
          We decied to use a particpatory process that levereged 3 workshops to orient the design to the values of a panel of 10 residents from a range of backgrounds
          across Washington State. In each workshop my codesigners and I would walk through a series of activities ranging from card sorting to protptype review aimed at continously reorienting the emerging design of
          the RUC towards the values of the citzens using it.
        </p>
      </div>
      <div className="content">
        <h2>Design Workshops</h2>
        <div className="half-img content">
          <img src={ProcessChart} className="half-width" />
        </div>
        During the spring of 2017, we conducted three sequential workshops culminating with a design sprint using the findings from the workshops
        to suggest our final form of the Road Usage Charge. Each workshop followed a general pattern of generating ideas and exploring the problem space, before
        narrowing it through a series of activities. Importantly, we made sure to continually validate assumptions about the problem, design decesions and findings
        by presenting each in turn to our participants either through in person discussion or voting through surveys.

        {/* Picture of workshop flow */}
        {/* <li>For a design result to be participatory, the project has to some how increase the agency of the end users of the design</li> */}
      </div>

      <div className="content">
        <h2>Workshop #1</h2>
        <div className="flex-wrapper">
          <img src="img/tongle/people1.jpg" className="third" />
          <img src="img/tongle/people2.jpg" className="third" />
          <img src="img/tongle/people3.jpg" className="third" />
        </div>
        <div className="content-exp">
          During Workshop #1 number we did mostly exploratory activities.
          <ul>
            <li>Introduction to Participatory Design, RUC</li>
            <li><a className="text-link" href="https://books.google.com/books?id=UDwlDwAAQBAJ&pg=PA117&lpg=PA117&dq=likes+dislikes+and+design+ideas+pd&source=bl&ots=NEWQ1GwrOe&sig=UI1K1qVPEmAe_pj8-G7oqiZQKgY&hl=en&sa=X&ved=0ahUKEwjGoKOT__bYAhUS5GMKHV05BvMQ6AEIRjAI#v=onepage&q=likes%20dislikes%20and%20design%20ideas%20pd&f=false">Likes, Dislikes and Design Ideas</a></li>
            <li><a className="text-link" href="https://www.google.com/search?ei=4gBtWobpOKni0gLMtIHwCA&q=identifying+bad+design+ideas+stanford+d+school&oq=identifying+bad+design+ideas+stanford+d+school&gs_l=psy-ab.3...8923.11675.0.11786.20.9.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..20.0.0....0.hV5krkkVcb4">How might we design the worst possible RUC? (Bad Design Brainstorming)</a></li>
          </ul>
        </div>
        <p className="content-exp">
          During these activities we collected sticky notes and wrote down notes on conversations we had and overhead between are participants. Afterwards we coded our notes into sticky note like ideas and user our participant generated sticky notes and our own to affinity board.
        </p>
      </div>
      <div className="content">
        <img src="img/tongle/affinity.jpg" className="half-width" />
      </div>
      <div className="content">
        <h3>A Survey to Validate Our Assumption</h3>
        <div className="flex-wrapper">
          <div className="flex-left">
            <div className="container">
              <a className="text-link" href="https://goo.gl/forms/KRRbCLVDkIRVG4kY2" target="blank">
                <img src={Survey} className="img-md" />
              </a>
              <p className="img-text">Take Survey</p>
            </div>
          </div>
          <div className="flex-right">
            <p className="content-exp">
              After affinity diagramming we noticed that our groups formed themes or articulated values. Upon reflection we decided that the best thing to do here would be to use our groups to create values that were selected.
            </p>

          </div>
          The survey allows users to rate each value on a 7 point Likert scale and optinaly provide an explanation to their rating.
        </div>

        <a className="text-link" href="https://goo.gl/forms/KRRbCLVDkIRVG4kY2" target="blank">
          <div className="sq-button lookbook-button">View Survey</div>
        </a>
      </div>
      <h3>Insights from workshop #1</h3><ul>
        <li>There is a divide between what urban and rural drivers need in a RUC</li>
        <li>There is a preference for keeping the tech in a RUC as low as possible</li>
      </ul><h3>Insights from workshop #1</h3><ul>
        <li>PD is a great process for identifying edge cases in a design (where a design "breaks")</li>
        <li>Participants are great at ideating but need leadership from designers to do it in a focused manner</li>
      </ul><div className="content">
        <h2>Workshop #2</h2>
        <div className="flex-wrapper">
          <img src={storyboard1} className="third" />
          <img src={storyboard2} className="third" />
          <img src={storyboard3} className="third" />
          <div className="content-exp">
            #2 consisted of presenting our values and seeing where users might go with the idea.
            <ul>
              <li>Presentation of Participants Value Evaluation.</li>
              <li>Storyboard Evaluations ~ We presented several storyboards illustrating the possible RUC solutions.</li>
              <li><a className="text-link" href="https://www.youtube.com/watch?v=QFiETj2Wkl8">User-Centered Design Sprint</a></li>
            </ul>
          </div>

          <h3>Presenting Participants Response's to Survey</h3>
          <p className="content-exp">
            In order to add a level of
            we evaluated the results by averaging likert scores. We didn’t have a base metric for inclusion but noticed that there were 6 values that were clearly important to all participants. We choose to move forward with these
          </p>
          <div className="flex-wrapper-lg">
            <div className="flex-left">
              <img src="img/tongle/bars1.png" className="half-width" />

            </div>
            <div className="flex-right">
              <img src="img/tongle/bars2.png" className="half-width" />

            </div>
          </div>

          <div className="flex-wrapper content">
            <div className="flex-right half-width">
              <h3>Something Unexpected</h3>
              <p className="content-exp">
                After presenting the values to participants an interesting thing happens people started putting values at opposite ends and using them as tensions. Something even more interesting happened when a participant said the following.
              </p>
            </div>
            <div className="flex-left">
              <img src="img/tongle/tension.png" className="half-width-padding" />
            </div>
          </div>
        </div>
        <div className="content">
          <p className="quote">
            "There is no way you can have both Privacy and Accuracy. You can have one or the other but you can't have both! Ok??"
          </p>
          <h3>Wait, really?</h3>
          <p className="content-exp">
            I was actually the one to overhear the conversation. At the time, I was mostly just happy that our participants were enjoying the workshop. Later I realized, maybe this was the key. Maybe the solution is not to give one or the other values but to provide ways for different values to come out at different times.
          </p>
        </div>
        <h3>Design insights from workshop #2</h3>
        <ul>
          <li>Participants think of the values in a RUC as opposing traits that can be balanced back and forth</li>
          <li>A mobile phone app carry a stigma of monitoring and security risks</li>
        </ul>

        <h3>PD insights from workshop #2</h3>
        <ul>
          <li>Transperency in the PD process gives participants a feeling of comfort</li>

        </ul>

        <div className="content">
          <h2>Workshop #3</h2>
          <div className="content-exp">
            Coming into #3 we needed to make massive action.
            <ul>
              <li>Attitudinal A/B tests ~ We had participants circle around the room and compare an A and a B design.</li>
              <li>RUC Court ~ We presented 4 medium fidelity prototypes and asked participants to evaluate them and then vote.</li>
              <li>Three Wishes</li>
            </ul>
            <h3>RUC Court prototypes</h3>
            The major part of #3 was the RUC court. In it we presented 4 different prototypes for a RUC charge.
            <div className="flex-wrapper">
              <div className="flex-padding half-width">
                <img src={P1} className="half-width-height" />
                <span className="summary-personxr">
                  Prototype #1: <a className="text-link" href="https://invis.io/B4BIRWVSW#/233161979_IPhone_67_Plus_-_2">Mileage Locker</a>
                </span>
              </div>
              <div className="flex-padding half-width">
                <img src={P2} className="half-width-height" />
                <span className="summary-person">Prototype #2: <a className="text-link" href="https://www.terapeak.com/worth/wii-rock-band-wireless-receiver-controller-usb-dongle-toggle-vfrwgtselea1b-white/162118848724/">Toggle Dongle</a>
                </span>
              </div>
            </div>

            <div className="flex-wrapper">
              <div className="flex-padding half-width">
                <img src={P3} className="half-width-height" />
                <span className="summary-person">Prototype #3: <a className="text-link" href="https://xd.adobe.com/view/3aa38542-86c5-463f-9a0b-fef8e4a6c42f/">External Mileage Recorder</a>
                </span>
              </div>
              <div className="flex-padding half-width">
                <span className="summary-person">
                  <img src={P4} className="half-width-height" />
                  Prototype #4: <a className="text-link" href="https://invis.io/B4BIRWVSW#/233161979_IPhone_67_Plus_-_2">Toggle Dongle + Mobile App</a>
                </span>
              </div>
            </div>
          </div>

          <div className="content">
            <h2>The Final Product</h2>
            <p className="content-exp">
              Tongle is combined solution made up of the ideas first suggested in the RUC court. It gives participants the option of whether they want to track all their mileage on their phone or to buy an external device. It further implements suggestions provided throughout the 3 workshops. This is how each value came to play in the solution
            </p>
            <h3>State Flow</h3>
            <img src={stateFlow} className="half-width-strong" />
            <div className="content">
              <div className="flex-wrapper">
                <div className="flex-left">
                  <h3>Sitemap</h3>
                  <img src={sitemap} className="img-md" />
                </div>
                <div className="flex-right">
                  <h3>Medium Fidelity</h3>
                  <img src={mediumFidelity} className="img-md" />
                </div>
              </div>
            </div>
            <div className="content">
              <h3>High Fidelity User Flows</h3>
              <img src={keyFlow1} className="half-width" />
              <img src={keyFlow2} className="half-width" />
            </div>
            <div className="content">
              <img src={poster} className="half-width-strong" />
            </div>
          </div>

          <div className="content">
            <h2>Reflection</h2>
            <p className="content-exp">
              After finishing this project and while I presented it during capstone, I always highlighted how powerful a process participatory design can be. After some time has passed I have reflected on what the takeaways for me are. A PD process can be time-consuming and hard to get buy-in from stakeholders. However, I think PD's commitment to the user can and should be emulated. In particular, I think adapting an inclusive design perspective can benefit most design projects by allowing for many different forms or types of the user to benefit from an inclusive perspective.
            </p>

            <p className="quote">
              By creating a design that allowed those who wanted complete privacy in their location data, Tongle also benefits a range of people.
              It allows employees to charge their employers on trips taken for company work, it allows a teenager to sneak off to their first concert,
              or a husband to surprise his wife with a birthday present. By creating an app that allows for flexible use, the user acceptance of the app
              was increased and thereby a better experience was created overall.
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}