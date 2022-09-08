export default function Bus() {
  return (
    <div className="writeup-wrapper">
      <p className="margin-20">
        <a href="https://www.reddit.com/r/dataisbeautiful/comments/wxpx50/price_per_a_pound_of_bananas_oc/">
          {" "}
          <b><i>
            This is a port from my post grad portfolio... needs rewriting and focusing and a proper audience.
          </i></b>
        </a>
      </p>
      <div className="section">
        <h1 className="spaced"> Uncertain Bus</h1>
        <div className="video-wrapper" style={{
          width: "100%",
          height: 'auto'
        }}>
          <iframe width="100%" height="1000%" src="https://www.youtube.com/embed/imD4P8xqCEI" frameBorder="0"
            allowFullScreen={true} className="mb4" />
        </div>
      </div>
      <div className="section">
        <h2> Introduction</h2>
        <p className="content-exp">
          Humans aren't always predictable. Just because we are given correct information doesn't always mean we know
          what to do with it. However, guiding people to better decisions can of course be aided by User-Centered
          Design. Artificial intelligence in particular presents a way to aid human cognition. A simplified way to think
          about AI is as computer generated predictions. This project aims to better aid humans understanding of
          computer generated predictions so that humans can take better action from those computer generated
          predictions.
        </p><br />
      </div>

      <div className="mini-section animate" id="section2">
        <img src="img/ubus/bus_in_context.png" className="cover-img" data-action="zoom" />
      </div>
      <div className="content">
        <h2>Quick Information</h2>
        <div className="flex-wrapper">
          <div className="flex-left">
            <h3>High Level Goal</h3>
            <p className="content-exp-ragged">
              Design an interface that allows bus riders to make better decisions based off the computer generated
              prediction of when a bus will arrive.
            </p>
            <ul className="content-exp">
              <li>Visualizations must be usable by people with a wide range of experience with data</li>
              <li>Find the design that best fits the question trying to be answered by user.</li>
            </ul>
          </div>
          <div className="flex-right  half-width">
            <div className="summary-item">
              <h3 className="summary-title">My role</h3>
              <span className="summary-person">Research Assistant</span>
            </div>
            <div className="summary-item">
              <h3 className="summary-title">Length</h3>
              <span className="summary-description">6 months design, 1 year testing and result reporting</span>
            </div>
          </div>
        </div>
        <div className="content-short">
          <h2>Outcome Highlights</h2>
          <h3 className="summary-title">Result</h3>
          <span className="summary-description">The ultimate result of this project was a set of designs I called
            Uncertainty Displays. They allow users to successfully make decisions using Uncertainty information. I led
            the the team to publish a <a href="img/ubus/ubus.pdf" className="text-link">paper</a> at the 2018 ACM conference
            on Computer-Human Interaction</span>
          <h3 className="summary-title">Recognition</h3>
          <span className="summary-person">
            Published in the 2018 ACM conference on Computer-Human Interaction with Honorable
            Mention Award (top 5% of papers at conference).
          </span>
        </div>

        <h3 className="summary-title">Process</h3>
        <span className="summary-description">User-Centered Design process using Surveys, Iterative Usability Tests and a
          Quantiative Experiment to refine and iterate.</span>
        <div className="mini-section animate">
          <img src="img/ubus/process.png" className="img-hgt half-width" />
        </div>
      </div><div id="section4" className="section">
        <div>
          <h2>
            Why buses?
          </h2>
          <p className="content-exp">
            To illustrate the how the concept of uncertainty comes into play with bus predictions take the following
            scenario.
          </p>

          <div className="content-exp scenario">
            <h3>Scenario</h3>
            <p className="content-exp">
              Checking her phone, Sara leaves her house to catch a bus to a dinner with friends. An app on her phone
              tells her that the bus will come within the next 10 minutes.
            </p>

            <p className="content-exp">
              In one scenario, the bus comes late. The bus could be forced to stop at multiple red-lights, encounter
              abnormally high volume of riders or a frazzled passenger who struggles to find a quarter in their back
              pocket.
            </p>

            <p className="content-exp">
              In another scenario, the bus comes early. It catches multiple green lights, there were few riders on the
              route or the bus driver drank an extra cup of coffee that morning.
            </p>

            <p className="content-exp">
              In both scenarios, events outside of Sara's control affected her decision. Sara either spends extra time
              at a bus stop or misses the bus altogether.
            </p>
          </div>
        </div>
        <div className="flex-wrapper flex-align-end content">
          <div className="flex-left">
            <h2><em>Too early...</em></h2>
            <img src='img/ubus/fustrated_early.svg' className="half-img" />
          </div>

          <div className='flx-right'>
            <h2>Too late...</h2>
            <img src='img/ubus/fustrated_late.svg' className="half-img" />
          </div>
        </div>
      </div>
      <div className="section">
        <div>
          <h2>
            Starting with a Question
          </h2>
          <p className="quote">
            If I arrive at the bus stop at a certain time, how much of a chance do I still have of catching the bus? If I
            delay, how does that affect my chances of catching the bus?
          </p>
          <p className="content-exp">
            To drive our design process, we used previously conducted ehtnographic reearch. We found that the most helpful
            finding that emerged from the research was the following question which Mass Transit Riders ask themselves
            when viewing realtime bus arrival data.
          </p>
        </div>
        <div>

          <h2>Early design decisions</h2>
          <p className="content-exp">
            As experts in data visualization, the three faculty members whom I collaborated with on this project made a
            few decisions early on what the UI should include. Below includes the visualizations that we wanted to test
            and rationale for why.
          </p><br />

          <table style={{ width: "100%" }}>
            <tr>
              <th>Representation Type</th>
              <th>Design</th>
              <th>Rationale for including represenation in design process.</th>
            </tr>
            <tr>
              <td><i>No Uncertainty (Control)</i></td>
              <td><img src="img/ubus/viz/none.png" /></td>
              <td>The current form of communicating a prediction.</td>
            </tr>
            <tr>
              <td><i>Text Interval (Natural Language Represenation)</i></td>
              <td><img src="img/ubus/viz/text.png" /></td>
              <td>A glanceable representation of uncertainty, takes minimal effort to interpret</td>
            </tr>
            <tr>
              <td>Interval Plots (Box and Whisker)</td>
              <td><img src="img/ubus/viz/interval.png" /></td>
              <td>A common uncertainty visualization</td>
            </tr>
            <tr>
              <td>Probability Density Plots (PDF)</td>
              <td><img src="img/ubus/viz/pdf.png" /></td>
              <td>A common representation that show details of the precise chances a prediction thinks a bus has at
                arriving at each moment</td>
            </tr>
            <tr>
              <td>Dot Plots</td>
              <td><img src="img/ubus/viz/dot20.png" /></td>
              <td>Allows users to conceptualize a dot as a bus </td>
            </tr>
            <tr>
              <td>Cumulative Distribution Function Plots (CDF)</td>
              <td><img src="img/ubus/viz/cdf.png" /></td>
              <td>Tells a user the chances of a bus being at the bus stop at any moment aligning with the question: "If I
                leave now, what are the chances of me catching my bus?"</td>
            </tr>
            <tr>
              <td>Probability Density Plots with Interval Shading</td>
              <td><img src="img/ubus/viz/pdf_interval.png" /></td>
              <td>Allows for two different types of views of the prediction. A quick view similar to box and whiskers but
                also a the informationally rich view in the probability curve.</td>
            </tr>
          </table>
        </div>
        <div className="section">
          <h2>The first (of many) mistakes...</h2>
          <p className="content-exp">
            I began my design process by making full mockups. Although I still intended do many rounds of iterations, my
            mistake here was thinking too big too fast.
          </p>

          <img className='cover-height' src="img/ubus/mistakes.png" />
          <figcaption>A few wrong turns in my design process</figcaption>
        </div>

        <div className="section">
          <h2>Thinking Modularly</h2>
          <div className="flex-wrapper flex-align-center spaced">
            <div className="flex-left half-width">
              <p className='content-exp'>
                Reapproaching the problem I began by identifying the independent pieces that each bus arrival would need.
              </p>

            </div>
            <div className="flex-right half-width">
              <img className="half-width" src="img/ubus/bus_atoms.png" data-action="zoom" />
            </div>
          </div>
          <div className="flex-wrapper flex-align-center">
            <div className="flex-left half-width">
              <p className='content-exp'>
                From the smaller components, I rapidly itterated complete layouts. In this case, I choose to use stand in
                information (instead of a blank wireframe boxes) because, the layout of information might impact the
                understanding made by bus riders.
              </p>
            </div>
            <div className="flex-right half-width">
              <img className="half-width animate" src="img/ubus/row_iterration.png" data-action="zoom" />
            </div>
          </div>
          <div>
            <div className="flex-wrapper">
              <div className="flex-left half-width">
                <p className='content-exp'>
                  To mimic the same look, feel and the information displayed on on current Realtime Transit Apps, I
                  embeded all the same infomration dispayed on the popular trip planning app OneBusAway into the
                  visualizations I was designing.
                </p>
              </div>
              <div className="flex-right">
                <img className="half-width animate" src="img/ubus/new_label.png" data-action="zoom" />
              </div>
            </div>

            <div>
              <h2>Piecing It Together</h2>
              <div className="flex-wrapper">
                <div className="flex-right half-width">
                  <p className="content-exp">
                    Together the group decided what we thought would be the best layout for each bus'arrival(a single row
                    in the interface). I next pieced together the rows to create high fidelity mockups of the User
                    Interface. Putting the pieces together we wanted to see how the UI looked as a cohesive whole and did
                    additional changes to accomadate for how the UI came together as a system.
                  </p>
                </div>
                <div className="flex-left half-width animate">
                  <img src="img/ubus/dot_layout.png" className="img-hgt" />
                </div>

              </div>
              <div>
                <h2>How did we make design decisions?</h2>
                <div className="flex-wrapper">
                  <div className="flex-left">
                    <p className="content-exp">
                      Frequently, we would refer back to the question produced from the previous ethnographic research:
                      <b>If I arrive at the bus stop at a certain time, how much of a chance do I still have of catching
                        the bus?</b>
                    </p>
                    <p className="content-exp">
                      For example, in one case we were deciding whether to use a converse cumulative distribution plot or
                      regular cumulative distribution plot. Based on the question we choose to use cumulative distribution
                      plots as they provide the chances of a bus arriving at a certain time. Choosing to use the converse
                      cumulative distribution plot would unideally give the chances a bus has left at a certain time.
                    </p>
                  </div>
                  <div className="flex-right">
                    <img src="img/ubus/cdf_converse.png" className="half-hgt" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="section" id="usability">
            <h2>Refining Through Iterative Testing</h2>
            <p className="content-exp">
              I tested my designs with bus riders early and often.
            </p>
            <h3>Usability Tests</h3>
            <p className='content-exp'>
              Over the entire project, I conducted over 16 usability tests. These were done in batches of 3-4 to identify
              usability problems. The usability testing began at early stages with a simple show and tell styles. Next, I
              proceeded to conduct moderated before eventually facilitating over unmoderated usability studies. Some major
              findings included large findings like:
            </p>
            <ul>
              <li>To facilitate users with low data literacy, an informational tutorial is necessary to walk users through
                data visualizations</li>
              <li>Annotations should be integrated directly into each visualization</li>
            </ul>
            <p>But also smaller findings like:</p>
            <ul>
              <li>The colored annotations were to bright in the context of the data visualization</li>
              <li>The dot size in dot plots needed a non zero vertical spacing</li>
            </ul>

            <div className="flex-wrapper mini-section">
              <div className="flex-left half-width">
                <h3>Surveys</h3>
                <p className='content-exp'>
                  Even with frequent usability tests, there were times where I wanted to find more definite answers to
                  design choices I made. To do this I improvised A/B tests using surveys (like the one to the right or
                  below) to test how people interpreted specific parts of the UI. Some findings from these tests included:
                </p>
                <ul>
                  <li>People found the word "bar" made more sense than "line" when refering to annotations in the UI.</li>
                  <li>For textual represenations, one sided statistical representations should be right sided.</li>
                </ul>
              </div>
              <div className="flex-right">
                <img src="img/ubus/survey.png" className="half-width animate" />
                <figcaption>An example of a survey used to A/B test design decisions</figcaption>
              </div>
            </div>

            <div id="section12" className='section'>
              <div>
                <h2>Putting Things Into Motion</h2>
                <p className="content-exp">
                  I used motion to make the interface come alive by applying previous findings. Our previous user research
                  found bus riders make comparisons between multiple routes at once. To facilitate this, I implemented a
                  motion design which centers each visualization to the middle of a screen as a user scrolls.</p>
                <img className="process-gif animate" src="img/ubus/giphy.gif" />
                <figcaption>Motion design included in UI</figcaption>
              </div>
            </div>

            <div id="section14" className='section'>

              <h2> Quantitative Experiment</h2>
              <p className="content-exp">
                The goal of the quantiative experiment was to see how peoples' behavior changed with continual use of a
                uncertainity display. To test this my faculty members designed a crowd sourced lab experiment to
                repetivley ask users the question: <i>When would they leave to catch a bus based on the uncertainty
                  display?</i> After users choose when to leave the bus' arrival would be mimicked(with a random draw
                on a distribution) and the results would be recorded.
              </p>
              <div className="ul-wrapper spaced">
                <b>People:</b>
                <li>Pilot Experiment: ~160 Poeple</li>
                <li>Experiment: 420+ people</li>
              </div>

              <div className="ul-wrapper">
                <b>Key Metrics:</b>
                <li>Time spent making a decision</li>
                <li>"Accuracy" of decision</li>
              </div>
              <div className="ul-wrapper">
                <b>Data Collected:</b>
                <li>Time Choosen by person to leave for bus </li>
                <li>Time spent making decision</li>
                <li>When the bus would</li>
              </div>

            </div>
          </div>
          <div>
            <h1>Analysis and Final Design Recommendation</h1>
            <p className='content-exp'> The results from the experiment showed that not only did uncertainty display produce
              better decisions than displays with no-uncertainty, uncertainty displays increased the decision quality of
              even the bottom performers. We found that Dot Plots and CDF plots produced the highest quality decisions
              overall(see blue rectangle).</p>

            <img className="cover-img" src="img/ubus/plots.png" data-action="zoom" />
            <figcaption>Model and Visualization done by Matt Kaye of the University Michigan.</figcaption>
          </div>
        </div>

        <div id="section17" className='section'>
          <div>
            <h1 className="process-title spaced">Final Design and Future Work</h1>
            <div className="flex-wrapper">
              <div className="flex-padding half-width">
                <img src="img/ubus/dot20.png" className="half-width" data-action="zoom" />
              </div>
              <div className="flex-padding half-width">
                <p className='content-exp'>
                  Our experiment shows that uncertainty displays can promote rational decision making however, my
                  collaborators and I remain curious as to how people will adapt to uncertainty information in real
                  world situations.Personally, <b>I am interested in how humans can form more effective relationships
                    in terms of trust and efficency with computer generated predictions.</b> In the future, fields such
                  as Medicine and Finance will transform completely from computer generated predictions and
                  understanding the relationship that exisits between predictions and humans is key to desiging more
                  effective products and achieving more effective decisions.
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className="mini-section" id="section2">
          <img src="img/ubus/bus-spread-full.png" className="cover-img" data-action="zoom" />
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
    </div>

  );
}
