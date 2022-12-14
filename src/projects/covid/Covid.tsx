import ActionLink from '../../components/link/ActionLink';
import ContentWrapper from '../../containers/layout/ContentWrapper';
import WhiteHouse from './WhiteHouse.png';

type Props = {}

export default function Covid({ }: Props) {
  return (
    <ContentWrapper>
      <div className="overview container">
        <div className="overview-title">
          <h1>COVID-19 forecasting modeling public facing tool</h1>
        </div>
        <div className="overview-description">
          <h4 className="overview-name">Role</h4>
          <span className="overview-item">Development</span><br /><br />

          <span className="overview-summary">
            <i>Covid visualization that started in the first week of march 2020.</i>
          </span>
        </div>
      </div>
      <div className="flex center-content content">
        <p>
          <ActionLink href="https://covid19.healthdata.org/global?view=cumulative-deaths&tab=trend">Visit App</ActionLink>
        </p>
      </div>
      <div className="content">
        <p>
          When the pandemic first started, I was working at IHME creating web tools and other software for their disease modeling research. In the early days of the pandemic, one of the first outbreaks happened in Washington state, putting IHME in an excellent place to create COVID forecasts. What unfolded next was perhaps the United State’s (and later globe’s) first collective encounter with a predictive model.  You can see the web tool that I contributed to professionally in the above link. Below I will discuss
        </p>
        <h1>The Challenge</h1>
        <p>

          How can a predicative technology that has a large population of indirect stakeholders more flexibly align with the competing views and values of those stakeholders?
        </p>
        <h1>Covid Modeling in a time without design, super-rough rough draft</h1>
        <p>

          Nearly as soon as the models were published to the web, critiques and questions of their accuracy began. Even with error bonds, early modeling was never intended to be a perfect prediction. The few models acted as a stimulus to spur leadership into action.  Take for example two of the more famous early models,  IHME and the imperial college of London model.  The ICL alerted of us of the scale of the problem(millions of lives lost in United States), while IHME told forecasted an exponential growth much early then resources were being deployed (early April 2020 in the United States). Later in the pandemic models still maintained their usefulness at alerting the public alongside decision makers to cases where hospital faced eminent collapse or the trend of infection over time.
        </p>
        <img src={WhiteHouse} className="cover-1-img" />

        <br />
        <br />
        <p>

          There’s plenty of research on what Public Health might do better next time(hopefully not anytime soon) around for modeling and how to make it more accurate[1,2…]. Beyond accuracy, there seems to be a some what inevitable problem; that within democracies, these models face  politicalization by opposing sides. In a way the globe's first encounter with a large scale predictive model came in the form of COVID forecast models and their digital access points. The stakes around decisions made by the model were high and created a situation where nearly everyone became indirect stakeholders of the technology output. In the United States, especially politically. With so many indirect stakeholders, broadcasting a predictive outputs in a way that aligns with the values of all of them sounds hard maybe impossible. Nonetheless more widespread buy-in (and user acceptance) from the larger population could lead to better achievement of the Public Health goals that were initially behind covid modeling.
        </p>
        <br />
        <h1>Groups of people and what they valued</h1>
        -some of the media like point estimates <br />
        --Easy to broad cast <br />
        --people saw it as too certain <br />
        -Uncertainty <br />
        --people had problems looking far out <br />
        --link paper that talks about uncertainty bounds in public health viz <br />
        <br />
        <br />
        <br />
        <br />

        <h1> How design, especially of uncertainty, could of helped (with mockups) </h1>
        …
        <br />
        <br />
        <br />
        <br />

        {/* <h1>How process might of helped </h1>
        (Shorter, I need to track down a paper that came out of the lancet and outlines how to make a more participatory process(using a global health POV)). */}

        <br /><br />
        Citations
        <br />
        [1] https://www.thelancet.com/journals/lanmic/article/PIIS2666-5247(21)00029-X/fulltext#bib5
        <br /><br />
        [2]
        https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250935
        <br /><br />
        [3]
        Lancet article on user research in global health
        <br /><br />
      </div >
    </ContentWrapper >
  )
}