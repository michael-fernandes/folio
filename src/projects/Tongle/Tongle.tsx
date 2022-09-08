import GasTax from './imgs/gas_tax.jpg'
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
    <>
      <div className="writeup-wrapper">
        <p className="margin-20">
          <a href="https://www.reddit.com/r/dataisbeautiful/comments/wxpx50/price_per_a_pound_of_bananas_oc/">
            {" "}
            <b><i>
              This is a port from my post grad portfolio... needs rewriting and focusing and a proper audience.
            </i></b>
          </a>
        </p>
        <div className="content">
          <div className="video-wrapper">
            <iframe width="100%" height="320" src="https://www.youtube.com/embed/OKMhZurVVe4" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
        </div>

        <div className="content">
          <h2>The problem</h2>
          <div className="flex-wrapper flex-align-center">
            <div className="flex-left">
              <p className="content-exp">
                As automotive technology advances, so does the way we need to think about supporting our transportation infrastructure in general. Specifically, funding for road infrasturcutre is in jeaprody.
              </p>
              <ul className="process-points">
                <li>Funding for road infrasturcutre is decreasing</li>
                <li>The current method, a "tax at the pump" is increasingly inefficent</li>
                <li>Some cars(like fully electric) don't contribute any money to "tax at a pump funding"</li>
                <li>Fuel inefficent cars are forced to contribute an unfair amount</li>
              </ul>

            </div>
            <div className="flex-right half-width">
              <img src={GasTax} className="half-width" />
            </div>
          </div>

          <h3>Why change?</h3>
          <p className="content-exp">
            <ul className="process-points">
              <li>Charge all road users in porportion to how much they use the roads</li>
              <li>Future proof the way we pay for road infrastructure</li>
            </ul>
          </p>

          <h3>The Proposed Solution</h3>
          <p className="content-exp">
            A Road Usage Charge(RUC) seeks to fund road infrastructure by charging tax paying citizens in proportion to how much they use Washington state roads. As a capstone team in the Human Centered Design and Engineering department, my team and I were approached by the Washingotn Transportation Comission to come up with a mobile phone application that can be used in a RUC.
          </p>
          <div className="content">
            <img src={InContext} className="half-width" />
          </div>

          <div className="content">
            <h2>Quick Information</h2>
            <div className="flex-wrapper">
              <div className="flex-left">
                <h3>Project Goals</h3>
                <p className="content-exp">
                  <ul className="process-points">
                    <li>Design a mobile app experience which citizens of Washington State can use to monitor how many miles they drive on public roads</li>
                    <li>Design a Road Usage Charge system that affects driver's lifes as minimally and harmlessly as possible</li>
                  </ul>

                </p>
              </div>
              <div className="flex-right  half-width">
                <div className="summary-item">
                  <h3 className="summary-title">The Team</h3>
                  <span className="summary-person">Project Manager: <i>Alex Gilbert</i></span>
                  <span className="summary-person">UX Designer: <i>Shin Young Lucia</i>, <i>Molly Fallen</i></span>
                  <span className="summary-person">Design Researcher: <i>Michael Fernandes</i></span>
                </div>
                <div className="summary-item">
                  <h3 className="summary-title">Length</h3>
                  <span className="summary-description">15 Weeks: 5 planning, 10 execution</span>
                </div>

                <div className="summary-item">
                  <h3 className="summary-title">Sponsor</h3>
                  <span className="summary-description">Washington Transportation Commission, D'artagnan Consulting</span>
                </div>
              </div>
            </div>
            <div className="content-short">
              <h2>Outcome Highlights</h2>
              <h3 className="summary-title">The app</h3>
              <span className="summary-description">Tongle is a fully branded mobile application. It was submitted to the Washington State Transportation Commission for review</span>

              <h3 className="summary-title">The Process</h3>
              <span className="summary-description">One of the first examples of participatory design used to create a High Tech Civil Technology.</span>

              <h3 className="summary-title">Recognition</h3>
              <span className="summary-person">Washington State Transportation Comission:<br /><i>Mobile Innovation Challenge Grand Winner</i></span>
              <span className="summary-person">University of Washington Department of Human Centered Design and Engineering:<br /><i> Best in Show</i></span>
              <span className="summary-person">University of Washington College of Engineering:<br /><i>Capstone Funding Grant Recipient</i></span>
            </div>
          </div>
        </div >

        <div className="content">
          <h2>Why Inclusive Design?</h2>
          <div className='flex-wrapper'>
            <div className="flex-left">
              <img className="img-md" src={PdDiagram} />
            </div>
            <div className="flex-right">
              <p className="content-exp">
                Upon getting our assignment for capstone, my team and I were a little bit lost, for a lack of better words. The app suggested clearly was going to run into some problems. It is obvious how this system might help our roads but, most of our classNamemates had this sense too. A solution for a road usage charge would invade people’s privacy, sense of agency and be highly resisted in a state where transportation is a bonding factor. Creating a mobile app solution for the RUC would require including a diverse range of factors and values that people placed on the application.
              </p>
            </div>
          </div>

          <h2>Focusing on Inclusiveness</h2>
          <p className="quote"><b>Users, no matter who they are, are not one dimensional. By designing for inclusivity, designs also account for the multiplicity of all states users might take on.</b></p>
          <p className="content-exp">
            Designing for inclusivity means you design for everybody. For example if you design an Xbox controller for a disabled person with one hand, you also design for a the Mother that is holding her baby while trying to game another, the snowboarder who broke their arm, and a person trying to talk to their mom with one hand and game with another.
          </p>
        </div>
        <div className="content">
          <h2>Choosing Participatory Design</h2>
          <div className="half-img content">
            <img src={ProcessChart} className="half-width" />
          </div>
          <h3> What is pariticpatory Design?</h3>
          <ul>
            <li>Participatory design puts participants at the center of the design process.</li>
            <li>For a design result to be participatory, the project has to some how increase the agency of the end users of the design</li>
            <li>Design decisions are directed as much as possible by participants</li>
          </ul>

          <h3>How we used participatory design</h3>
          <p className="content-exp">
            <ul>
              <li>Series of 3 co-design workshops with 10 participants</li>
              <li><b>Agile method using a series of design and rearch sprints</b></li>
              <li>Each research and design sprint was a week long</li>
            </ul>
          </p>
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
      </div ><h3>Insights from workshop #1</h3><ul>
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

            <h3>The Results</h3>
            <p className="content-exp">
              After holding court, the results were in. People preffered prototype #3 and #4. It wasn't unanimous the voting was 0 votes for prototype #1,  2 votes for prototype #2, 4 votes for prototype #3 and 4 votes for prototype #4. The split decision in votes
            </p>
          </div>
          <h3>Design insights from workshop #3</h3>
          <ul>
            <li>Participants are more open to a RUC that promotes the ideal of "equity" in society</li>
          </ul>

          <h3>Insights from workshop #3</h3>
          <ul>
            <li>Ending with a hands on a friction activity helps wrap up pd process</li>
          </ul>

          <div className="content">
            <h2>Saying Goodbye to Participants</h2>
            <p className="content-exp">
              At the end of Workshop #3 we were sad to say goodbye to our participants but, the next part of our journey was just around the corner. During the next two weeks my team and I went through a series of iterations to create Tongle.
            </p>
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
            <p>
              To show how inclusive design uniquely benefitted Tongle, take the following example.
            </p>

            <p className="quote">
              By creating a design that allowed those who wanted complete privacy in their location data, Tongle also benefits a range of people. It allows employees to charge their employers on trips taken for company work, it allows a teenager to sneak off to their first concert, or a husband to surprise his wife with a birthday present. By creating an app that allows for flexible use, the user acceptance of the app was increased and thereby a better experience was created overall.
            </p>
          </div>

          <hr />
          <a href="../">
            <div className="portfolio-back">
              <i className="arrow left fa fa-angle-left"></i><i className="arrow left fa fa-angle-left"></i> Back to portfolio
            </div>
          </a>
          <a href="cooking-aid.html">
            <div className="portfolio-forward">
              Lookbook <i className="arrow fa fa-angle-right"></i><i className="arrow fa fa-angle-right"></i>
            </div>
          </a>
        </div>
      </div></>
  )
}