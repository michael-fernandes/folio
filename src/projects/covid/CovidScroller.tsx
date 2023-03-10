import { useRef, useState } from 'react'
import { Scrollama, Step } from 'react-scrollama';
import AltUncertainty from './AltUncertainty';
import Graph from './Graph';
import Pd from './imgs/pd.png';

export default function CovidScroller() {
  const scrollerRef = useRef<any>();
  const [step, setStepIndex] = useState(0);

  const onStepEnter = (e: any) => {
    const { data, } = e;
    setStepIndex(data);
  };

  return (
    <div className="scrollama-container">
      <div className="graphic-container">
        <div className="scroller" ref={scrollerRef}>
          <Scrollama progress onStepEnter={onStepEnter}>
            <Step data={1}>
              <div className="step">
                As soon as "COVID" models became a thing, critiques and questions of their accuracy came from every which direction. Although these critiques were valid, and often useful, the earliest modeling was never intended to be a <a href="https://www.thelancet.com/journals/lanmic/article/PIIS2666-5247(21)00029-X/fulltext#bib5" className="text-link">perfect prediction</a>. The few early models (London, IHME) primarily acted as a stimulus to spur leadership into action to respond to the scale and timing of COVID upticks.
              </div>
            </Step>
            <Step data={2}>
              <div className="step">
                Over time, models took on larger roles in day-to-day decision-making for Public Health decision makers along with members of the public themself. Soon attention to the accuracy of model predictions, particularly in America, caused division. The shift of the model's purpose to informing Public Health Decision makers, to informing the public on risk came with a shift of strategy. Serving both populations introduced problems that could have been solved with different design choices.
              </div>
            </Step>
            <Step data={3}>
              <div className="step">
                Accuracy presented the most obvious problem to the mass adoption of COVID models. Presentations of forecasting presented a challenge. The constant remodeling of data yielded new results and just like a weather forecast will fluctuate as the prediction comes closer and closer, a good COVID Forecast would respond to changes in disease variants, seasonality and immunity. Showing that predictions were uncertain and subject to error was key. Showing uncertainty should have been the default and not an add-on.
              </div>
            </Step>
            <Step data={4}>
              <div className="step">
                Anecdotally, IHME received much feedback (a lot unsolicited from the web) about public persons not understanding uncertainty bands. Retrospectively emphasizing the changing nature of the visualization could have disconnected these models from being absolute predictions of the future to mere forecasts.
              </div>
            </Step>
            <Step data={5}>
              <div className="step">
                Providing alternatives to traditional uncertainty encodings might have provided a more interpretable communication of COVID. Take for example the dot plot. Providing tools that both a general audience and informed public Health Decision-Makers could use meant consolidations in affordances for both sides. Providing functionality for flexible use might have led to easier understanding for less skilled health decision-makers and professional ones.
              </div>
            </Step>
            <Step data={6}>
              <div className="step">
                Even then any new representation would come with nuances in the way the representations would need to be presented. Finding these nuances correctly would be hard, and maybe that's why they weren't done on a massive scale.
              </div>
            </Step>
            <Step data={7}>
              <div className="step">
                { }
              </div>
            </Step>
            <Step data={8}>
              <div className="step">
                Exploring the problem space and testing representations and communication before putting it out there, is key to product development and likely something that would have benefited COVID visualizations early on. Deploying practices like co-design to explore the representation problems, interprobability of public health messaging could lead to better user adoption and a higher belief in COVID representations by larger populations
              </div>
            </Step>
            <Step data={9}>
              <div className="step">
                Exploring the problem space and testing representations and communication before putting it out there, is key to product development and likely something that might have benefited COVID visualizations early on.
              </div>
            </Step>
            <Step data={10}>
              <div className="step">
                Deploying practices like co-design to explore the interoperability of public health messaging could lead to better user adoption and a higher belief in covid representatives by larger populations.
              </div>
            </Step>
          </Scrollama>
        </div>
        <div className="graphic">
          {
            step < 5 ?
              <Graph color={step === 1 || step === 2} /> : step < 8
                ? <AltUncertainty />
                : <img className="cover-2-img" src={Pd} />
          }
        </div>
      </div>
    </div>
  )
}