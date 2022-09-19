import ContentWrapper from '../ContentWrapper'
import './About.scss';

{/* <p>
  Looking at the world through the lense of data is hard not to do.
  Either you do it, or it is done for you.
</p>
<p>
  I believe in helping the world move to a place where the decision we make, and decisions that are made for us around data
  are more democratically or autonomously chosen.
</p> */}

export default function About() {
  return (
    <ContentWrapper>
      <div className="about">
        <div className="overview">
          <div>
            Picture of me, or something
          </div>
          <div>
            <h1>Me</h1>
            <p>
              (rough draft, will shift away from data). I began my career seeking to understand how humans can better use computer predictions, in ways that lead to increasingly higher qualties of research.
              Begining to understand the power computers incrasingly have on human decsions, from small such as when should i leave for the bus to large such as should i wear a
              surgical mass to me has led me to the belief that: a world with out inclsuive thinking about data, is one that is leads to less quality of life (placeholder).
            </p>
            <h2>
              <i>A world with out inclsuive thinking about data, is one that is leads to less quality of life.</i>
            </h2>
            <p>
              So far in my career I have worked in Cloud Computing, Public Health and Sustainability and am eager to make a bigger impact.
              I'm inspired by finding the win-win designs that simutaneously serve the most disadvantaged
              persons while also making thing better for the rest as the population as well.
            </p>
          </div>
        </div>
      </div>

    </ContentWrapper>
  )
}