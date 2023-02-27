import { useRef, useState } from 'react'
import { Scrollama, Step } from 'react-scrollama';
import Graph from './Graph';
import graph from './imgs/graph.mp4';
import uncertainty from './imgs/uncertainty.gif';

export default function CovidScroller() {
  const videoRef = useRef<any>();
  const scrollerRef = useRef<any>();
  const [step, setStepIndex] = useState(0);

  const onStepEnter = (e: any) => {
    const { data, } = e;
    console.log(data);
    setStepIndex(data);
    // console.log(data);
    // if (data === 1 && scrollerRef.current) {
    //   console.log('click');
    //   scrollerRef.current.click();
    // }

    // if (data === 2 && videoRef.current) {
    //   videoRef.current.play();
    //   console.log('played')
    // }
  };

  // accuracy
  // accessibility
  // usability
  return (
    <div className="scrollama-container">
      <div className="graphic-container">
        <div className="scroller" ref={scrollerRef}>
          <Scrollama progress onStepEnter={onStepEnter}>
            <Step data={1}>
              <div className="step">
                As soon as "COVID" models became a thing, critiques and questions of their accuracy came from every which direction. Although these critiques were valid, and often useful, the earliest modeling was never intended to be a perfect predictions. The few early models (London, IHME) primarily acted as a stimulus to spur leadership into action to respond to the scale and timing of COVID upticks.
              </div>
            </Step>
            <Step data={2}>
              <div className="step">
                Overtime, models took on larger role in day to day decesion making for Public Health decesion makers along with members of the public themself. Soon attention to the accuracy of model predictions, particularly in America, caused division. The shift of the model's purpose to inform few Public Health Decision makers, to informing the public on risk came with a shift of strategy. Serving both populations introduced problems that could of been solved with different design choices.
              </div>
            </Step>
            <Step data={3}>
              <div className="step">
                Accuracy presented the most obvious problem to mass adoption of COVID models. Presentations of forecasting presented a challenge. The constant remodeling of data yielded new results and just like a weather forecast will fluctuate as the prediction comes closer and closer, a good COVID Forecast would respond to changes in disease variants, seasonality and immunity. Showing that predictions were uncertain, and subject to error was key. Showing uncertainty should of been the default and not an add on.
              </div>
            </Step>
            <Step data={4}>
              <div className="step">
                Anecdotaly, IHME received much feedback (a lot unsolicited from the web) about public persons not understanding uncertainty bands. Retrospectively putting emphasis on the changing nature of the visualization could of disconnected these models from being absolute predictions of the future to mere forecasts.
              </div>
            </Step>
            <Step data={5}>
              <div className="step">
                Providing alternatives to traditional uncertainty encodings might have provided a more interpretable communication of COVID. Take for example the dot plot. Providing tools that both a general audience and informed public Health Decision-Makers could use meant consolidations in affordances for both sides. Providing functionality for flexible use might have led to easier understanding for less skilled health decision makers and professional ones.
              </div>
            </Step>
            <Step data={6}>
              <div className="step">
                Even then any new representation would come with nuances in the way the representations would need to be presented. Finding these nuances, in the correct way would be hard, and maybe that's why they weren't done on a massive scale.
              </div>
            </Step>
            <Step data={7}>
              <div className="step">
                { }
              </div>
            </Step>
            <Step data={8}>
              <div className="step">
                Exploring the problem space and testing representations and communication before putting out there, is a key to product development and likely something that would have benefited COVID visualizations early on. Deploying practices like co-design to explore the representation problems, interprobability of public health messaging could lead to better user adoption and a higher belief in COVID representations by larger populations
              </div>
            </Step>
            <Step data={9}>
              <div className="step">
                Exploring the problem space and testing representaitons and communication before putting out there, is a key to product development and likely somehting that would of benefited COVID visualizations early on.
              </div>
            </Step>
            <Step data={10}>
              <div className="step">
                Deploying practices like co-design to explore the representation problems, interprobility of public health messaging could lead to better user adoption and a higher belief in covid representaitons by larger populations.
              </div>
            </Step>
          </Scrollama>
        </div>
        <div className="graphic">
          <Graph color={step === 1 || step === 2} />
        </div>
      </div>
    </div>
  )
}